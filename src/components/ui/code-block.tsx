'use client';

/**
 * The handbook's exhibit plate: a hairline-framed figure with a mono caption bar (the artifact's
 * `file` at left, its `source` linked at right), a Kode Mono body, and the copy control when the
 * artifact carries `copyText`. My own element structure — no title-bar card from the starter.
 * Shell lines keep the normal ink (no `$` prompt games), comments and flags read at the caption
 * ink, diff rows take the two earned status hues.
 */
import { CheckIcon, CopyIcon } from '@phosphor-icons/react/dist/ssr';
import { useCallback, useState, type ReactNode } from 'react';
import type { Artifact } from '@/config/types';
import { cn, linkProps } from '@/lib/utils';

type Tok = { t: string; c?: TokClass };
type TokClass = 'comment' | 'string' | 'key' | 'punct' | 'flag' | 'ok' | 'ink' | 'cap';

function tokenizeYaml(line: string): Tok[] {
  if (/^\s*#/.test(line)) return [{ t: line, c: 'comment' }];
  const m = /^(\s*(?:-\s+)?)([\w.-]+)(:)(.*)$/.exec(line);
  if (!m) return [{ t: line, c: 'ink' }];
  const [, indent, key, colon, rest] = m;
  const out: Tok[] = [{ t: indent ?? '', c: 'cap' }, { t: key ?? '', c: 'key' }, { t: colon ?? '', c: 'cap' }];
  const hash = rest!.search(/\s#/);
  const value = hash >= 0 ? rest!.slice(0, hash) : rest!;
  if (value) out.push({ t: value, c: 'ink' });
  if (hash >= 0) out.push({ t: rest!.slice(hash), c: 'comment' });
  return out;
}

function tokenizeSh(line: string): Tok[] {
  if (/^\s*#/.test(line)) return [{ t: line, c: 'comment' }];
  if (/^\s*[✓]/.test(line)) return [{ t: line, c: 'ok' }];
  const out: Tok[] = [];
  const re = /("[^"]*"|'[^']*')|(\s+)|(--?[\w-]+)|(#.*$)|([^\s]+)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(line))) {
    const [raw, str, space, flag, comment] = m;
    if (str) out.push({ t: raw, c: 'ink' });
    else if (space) out.push({ t: raw });
    else if (flag) out.push({ t: raw, c: 'flag' });
    else if (comment) out.push({ t: raw, c: 'comment' });
    else out.push({ t: raw, c: 'ink' });
  }
  return out;
}

const TOKENIZERS = { yaml: tokenizeYaml, sh: tokenizeSh } as const;

const TOKEN_CLASS: Record<TokClass, string> = {
  comment: 'text-cap',
  string: 'text-ink',
  key: 'text-strong font-medium',
  punct: 'text-cap',
  flag: 'text-flag',
  ok: 'text-kortix-green',
  ink: 'text-ink',
  cap: 'text-cap',
};

const INK = { ink: 'text-ink', cap: 'text-cap' } as const;
void INK;

function CodeLine({ line, lang }: { line: string; lang: Artifact['lang'] }): ReactNode {
  if (line === '') return ' ';
  if (lang === 'diff') {
    const sign = line[0] === '+' ? '+' : line[0] === '-' ? '-' : ' ';
    return (
      <span className={cn('-mx-4 flex gap-2 px-4 sm:-mx-5 sm:px-5', sign === '+' && 'bg-ok-row', sign === '-' && 'bg-no-row')}>
        <span aria-hidden className={cn('w-2 shrink-0 select-none', sign === '+' ? 'text-kortix-green' : sign === '-' ? 'text-kortix-red' : 'text-terminal-cap')}>
          {sign}
        </span>
        <span className="text-ink">{line.slice(1)}</span>
      </span>
    );
  }
  const toks = lang === 'yaml' ? TOKENIZERS.yaml(line) : lang === 'sh' ? TOKENIZERS.sh(line) : [{ t: line, c: 'ink' as const }];
  return toks.map((tok, j) => (
    <span key={j} className={tok.c ? TOKEN_CLASS[tok.c] : undefined}>
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
      className="text-terminal-cap hover:text-ink border-terminal-row ml-auto flex min-h-11 items-center gap-1.5 rounded-md border px-2.5 text-xs transition-colors duration-fast"
    >
      {copied ? <CheckIcon className="size-3.5" /> : <CopyIcon className="size-3.5" />}
      <span className="w-12 text-left">{copied ? 'Copied' : label}</span>
    </button>
  );
}

/**
 * The exhibit plate. `caption` names the artifact (mono); `source` links where it was taken from.
 * Dark plates for code: the handbook's figures sit on the terminal ink.
 */
export function CodeBlock({
  artifact,
  size = 'default',
  className,
  footer,
}: {
  artifact: Artifact;
  size?: 'default' | 'hero';
  className?: string;
  footer?: ReactNode;
}) {
  return (
    <figure className={cn('border-terminal-row bg-terminal-surface flex min-w-0 flex-col overflow-hidden rounded-lg border', className)}>
      <figcaption className="border-terminal-row bg-terminal-caption flex min-h-11 items-center gap-3 border-b px-4 py-1">
        <span className="text-cap min-w-0 truncate text-xs">{artifact.file}</span>
        {artifact.copyText ? <CopyButton text={artifact.copyText} /> : null}
      </figcaption>
      <div className={cn('min-h-0 flex-1 overflow-x-auto px-4 py-3.5 sm:px-5 sm:py-4', size === 'hero' && 'sm:py-5')}>
        <pre className={cn('font-mono leading-relaxed', size === 'hero' ? 'text-xs sm:text-sm' : 'text-xs')}>
          <code>
            {artifact.lines.map((line, i) => (
              <span key={i} className="block whitespace-pre">
                <CodeLine line={line} lang={artifact.lang} />
              </span>
            ))}
          </code>
        </pre>
      </div>
      {footer ??
        (artifact.source ? (
          <div className="border-terminal-row border-t px-4 text-xs">
            <a {...linkProps({ href: artifact.source })} className="text-cap hover:text-ink flex min-h-11 min-w-0 flex-wrap items-center gap-1.5">
              <span>Source:</span>{' '}
              <span className="min-w-0 font-mono break-all">{artifact.source}</span>
            </a>
          </div>
        ) : null)}
    </figure>
  );
}

/** Text-only excerpt card: the handbook's quoted lines, no caption bar. */
export function ExcerptCard({ artifact, className }: { artifact: Artifact; className?: string }) {
  return (
    <figure className={cn('border-terminal-row bg-terminal-surface flex min-w-0 flex-col overflow-hidden rounded-lg border px-4 py-3.5 sm:px-5 sm:py-4', className)}>
      <pre className="text-cap font-mono text-xs leading-relaxed">
        <code>
          {artifact.lines.map((line, i) => (
            <span key={i} className="block whitespace-pre-wrap">
              {line}
            </span>
          ))}
        </code>
      </pre>
    </figure>
  );
}
