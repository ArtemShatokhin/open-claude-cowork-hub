'use client';

/**
 * Ported from apps/web/src/features/marketing/landing/code-panels.tsx (CodeSurface and its tiny
 * highlighter). Changes: a YAML and a diff tokenizer, the copy button only when the artifact has
 * `copyText`, and token colours mapped to the kit's two inks plus weight (the original used opacity
 * on text and an emerald palette class; the kit allows neither). Success output keeps the one earned
 * hue, kortix-green, as in the original.
 */
import { CheckIcon, CopyIcon } from '@phosphor-icons/react/dist/ssr';
import { useCallback, useState, type ReactNode } from 'react';
import type { Artifact } from '@/config/types';
import { cn } from '@/lib/utils';

type Tok = { t: string; c?: TokClass };
type TokClass = 'comment' | 'string' | 'keyword' | 'fn' | 'key' | 'punct' | 'prompt' | 'cmd' | 'flag' | 'ok' | 'muted';

const TS_KEYWORDS = /^(import|from|const|await|new|return|type|export|async|function)$/;

function tokenizeTs(line: string): Tok[] {
  if (/^\s*\/\//.test(line)) return [{ t: line, c: 'comment' }];
  const out: Tok[] = [];
  const re = /('[^']*'|"[^"]*"|`[^`]*`)|(\b[A-Za-z_$][\w$]*\b)|(\s+)|([^\sA-Za-z_$]+)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(line))) {
    const [raw, str, word, space, punct] = m;
    if (str) out.push({ t: raw, c: 'string' });
    else if (space) out.push({ t: raw });
    else if (punct) out.push({ t: raw, c: 'punct' });
    else if (word) {
      const after = line.slice(m.index + raw.length);
      if (TS_KEYWORDS.test(word)) out.push({ t: raw, c: 'keyword' });
      else if (/^\s*\(/.test(after)) out.push({ t: raw, c: 'fn' });
      else out.push({ t: raw });
    }
  }
  return out;
}

function tokenizeShell(line: string): Tok[] {
  if (/^\s*#/.test(line)) return [{ t: line, c: 'comment' }];
  if (/^\s*[✓→]/.test(line)) return [{ t: line, c: 'ok' }];
  if (!line.startsWith('$')) return [{ t: line, c: 'muted' }];
  const out: Tok[] = [{ t: '$', c: 'prompt' }];
  const rest = line.slice(1);
  const re = /("[^"]*"|'[^']*')|(\s+)|(--?[\w-]+)|(#.*$)|([^\s]+)/g;
  let m: RegExpExecArray | null;
  let first = true;
  while ((m = re.exec(rest))) {
    const [raw, str, space, flag, comment, word] = m;
    if (str) out.push({ t: raw, c: 'string' });
    else if (space) out.push({ t: raw });
    else if (flag) out.push({ t: raw, c: 'flag' });
    else if (comment) out.push({ t: raw, c: 'comment' });
    else if (word) {
      out.push({ t: raw, c: first ? 'cmd' : undefined });
      first = false;
    }
  }
  return out;
}

function tokenizeYaml(line: string): Tok[] {
  if (/^\s*#/.test(line)) return [{ t: line, c: 'comment' }];
  const m = /^(\s*(?:-\s+)?)([\w.-]+)(:)(.*)$/.exec(line);
  if (!m) return [{ t: line, c: 'string' }];
  const [, indent, key, colon, rest] = m;
  const out: Tok[] = [{ t: indent!, c: 'punct' }, { t: key!, c: 'key' }, { t: colon!, c: 'punct' }];
  const hash = rest!.search(/\s#/);
  const value = hash >= 0 ? rest!.slice(0, hash) : rest!;
  if (value) out.push({ t: value, c: 'string' });
  if (hash >= 0) out.push({ t: rest!.slice(hash), c: 'comment' });
  return out;
}

/** Text artifacts (diagrams, state machines) keep one ink; arrows are structure, so they mute. */
function tokenizeText(line: string): Tok[] {
  return line.split(/([─│└┌┐┘├┤▶◀→←↳]+|\([^)]*\))/).map((t, i) => ({ t, c: i % 2 ? 'muted' : undefined }));
}

const TOKEN_CLASS: Record<TokClass, string> = {
  comment: 'text-muted-foreground',
  string: 'text-foreground',
  keyword: 'text-muted-foreground',
  fn: 'text-foreground font-medium',
  key: 'text-foreground font-medium',
  punct: 'text-muted-foreground',
  prompt: 'text-muted-foreground select-none',
  cmd: 'text-foreground font-medium',
  flag: 'text-muted-foreground',
  ok: 'text-kortix-green',
  muted: 'text-muted-foreground',
};

const TOKENIZERS = { ts: tokenizeTs, sh: tokenizeShell, yaml: tokenizeYaml, text: tokenizeText } as const;

function Line({ line, lang }: { line: string; lang: Artifact['lang'] }): ReactNode {
  if (line === '') return ' ';
  if (lang === 'diff') {
    const sign = line[0] === '+' ? '+' : line[0] === '-' ? '-' : ' ';
    return (
      <span className={cn('-mx-4 flex gap-2 px-4 sm:-mx-5 sm:px-5', sign === '+' && 'bg-kortix-green/15', sign === '-' && 'bg-kortix-red/15')}>
        <span aria-hidden className={cn('w-2 shrink-0 select-none', sign === '+' ? 'text-kortix-green' : sign === '-' ? 'text-kortix-red' : 'text-muted-foreground')}>
          {sign}
        </span>
        <span className="text-foreground">{line.slice(1)}</span>
      </span>
    );
  }
  return TOKENIZERS[lang](line).map((tok, j) => (
    <span key={j} className={tok.c ? TOKEN_CLASS[tok.c] : 'text-foreground'}>
      {tok.t}
    </span>
  ));
}

export function CopyButton({ text, label = 'Copy' }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  const copy = useCallback(() => {
    void navigator.clipboard?.writeText(text).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    });
  }, [text]);
  return (
    <button
      type="button"
      onClick={copy}
      data-js-only
      className="text-muted-foreground hover:text-foreground hover:bg-hover border-border ml-auto flex items-center gap-1.5 rounded-md border px-2.5 py-1 font-mono text-xs transition-colors duration-fast"
    >
      {copied ? <CheckIcon className="size-3.5" /> : <CopyIcon className="size-3.5" />}
      <span className="w-12 text-left">{copied ? 'Copied' : label}</span>
    </button>
  );
}

/**
 * The framed artifact: file name bar, copy control, mono body. `size="hero"` sets it a step larger.
 * `clip` adds the phone-width edge fade from the original for panels with a fixed height.
 */
export function CodeBlock({
  artifact,
  size = 'default',
  clip = false,
  className,
  footer,
}: {
  artifact: Artifact;
  size?: 'default' | 'hero';
  clip?: boolean;
  className?: string;
  footer?: ReactNode;
}) {
  return (
    <figure className={cn('border-border bg-background flex min-w-0 flex-col overflow-hidden rounded-lg border', className)}>
      <figcaption className="border-border bg-card flex min-h-10 items-center gap-3 border-b px-4 py-1.5">
        <span className="text-muted-foreground min-w-0 truncate font-mono text-xs">{artifact.file}</span>
        {artifact.copyText ? <CopyButton text={artifact.copyText} /> : null}
      </figcaption>
      <div className={cn('min-h-0 flex-1 overflow-x-auto px-4 py-3.5 sm:px-5 sm:py-4', clip && 'kx-fade-edges')}>
        <pre className={cn('font-mono leading-relaxed', size === 'hero' ? 'text-xs sm:text-sm' : 'text-xs')}>
          <code>
            {artifact.lines.map((line, i) => (
              <span key={i} className="block whitespace-pre">
                <Line line={line} lang={artifact.lang} />
              </span>
            ))}
          </code>
        </pre>
      </div>
      {footer ?? (artifact.source ? (
        <div className="border-border text-muted-foreground border-t px-4 py-2 text-xs">
          Source: <span className="font-mono">{artifact.source}</span>
        </div>
      ) : null)}
    </figure>
  );
}
