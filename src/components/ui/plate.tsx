'use client';

/**
 * The handbook's artifact "plate": a real Kortix excerpt set as a dark ink figure with an
 * engineering title block (file · lang · copy) and a printed source line. Every plate is a
 * <figure>, so each page carries a real visual. Lines scroll inside the plate on phones.
 */
import { CheckIcon, CopyIcon } from '@phosphor-icons/react/dist/ssr';
import { useCallback, useState, type ReactNode } from 'react';
import type { Artifact } from '@/config/types';
import { cn } from '@/lib/utils';

function CopyControl({ text }: { text: string }) {
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
      aria-label={copied ? 'Copied' : 'Copy'}
      className="text-terminal-fg/70 hover:text-terminal-fg hover:bg-terminal-fg/10 ml-auto flex min-h-11 min-w-11 items-center justify-center gap-1.5 rounded-sm px-2.5 font-mono text-xs transition-colors duration-fast"
    >
      {copied ? <CheckIcon className="size-3.5" /> : <CopyIcon className="size-3.5" />}
      <span className="hidden w-11 text-left sm:inline">{copied ? 'Copied' : 'Copy'}</span>
    </button>
  );
}

function LineRow({ line, lang }: { line: string; lang: Artifact['lang'] }) {
  if (line === '') return <span className="block whitespace-pre"> </span>;
  if (lang === 'diff') {
    const sign = line[0] === '+' ? '+' : line[0] === '-' ? '-' : ' ';
    return (
      <span className={cn('block whitespace-pre', sign === '+' && 'text-kortix-green', sign === '-' && 'text-kortix-red')}>
        <span aria-hidden className={cn('select-none', sign === '+' ? 'text-kortix-green' : sign === '-' ? 'text-kortix-red' : 'text-terminal-fg/40')}>
          {sign}
        </span>
        {line.slice(1)}
      </span>
    );
  }
  const comment = /^\s*(#|\$)/.test(line);
  return <span className={cn('block whitespace-pre', comment ? 'text-terminal-fg/55' : 'text-terminal-fg')}>{line}</span>;
}

export function Plate({
  artifact,
  size = 'default',
  className,
  footer,
  fig,
}: {
  artifact: Artifact;
  size?: 'default' | 'hero' | 'mini';
  className?: string;
  footer?: ReactNode;
  fig?: string;
}) {
  const lang = artifact.lang.toUpperCase();
  return (
    <figure
      className={cn(
        'border-terminal-border bg-terminal-surface text-terminal-fg flex min-w-0 flex-col overflow-hidden rounded-sm border',
        className,
      )}
    >
      <figcaption className="border-terminal-border flex items-center gap-3 border-b px-3 py-1.5 font-mono text-xs">
        <span aria-hidden className="bg-kortix-base-ink inline-block size-2 shrink-0 rounded-[1px]" />
        {fig ? <span className="text-terminal-fg/45 uppercase tracking-wide">{fig}</span> : null}
        <span className="text-terminal-fg/80 min-w-0 truncate">{artifact.file}</span>
        <span className="text-terminal-fg/45 hidden shrink-0 uppercase sm:inline">{lang}</span>
        {artifact.copyText ? <CopyControl text={artifact.copyText} /> : null}
      </figcaption>
      <div className={cn('min-h-0 flex-1 overflow-x-auto px-3.5 py-3 sm:px-4', size === 'mini' && 'px-3 py-2')}>
        <pre className={cn('font-mono leading-relaxed', size === 'hero' ? 'text-xs sm:text-[0.9rem]' : 'text-xs')}>
          <code>
            {artifact.lines.map((line, i) => (
              <LineRow key={i} line={line} lang={artifact.lang} />
            ))}
          </code>
        </pre>
      </div>
      {footer ??
        (artifact.source ? (
          <div className="border-terminal-border text-terminal-fg/55 flex items-center gap-2 border-t px-3.5 py-2 font-mono text-xs">
            <span className="uppercase tracking-wide">Source</span>
            <span className="text-terminal-fg/75 min-w-0 truncate">{artifact.source}</span>
          </div>
        ) : null)}
    </figure>
  );
}
