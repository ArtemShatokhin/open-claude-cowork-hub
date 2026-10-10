/** Renders the markdown subset in src/lib/markdown.ts with the handbook's type roles. */
import type { ReactNode } from 'react';
import { Plate } from '@/components/ui/plate';
import { parseBlocks, parseInline } from '@/lib/markdown';
import { cn } from '@/lib/utils';

const EXTERNAL = /^https?:\/\//;

export function Inline({ text }: { text: string }): ReactNode {
  return parseInline(text).map((t, i) => {
    switch (t.kind) {
      case 'text':
        return t.text;
      case 'strong':
        return (
          <strong key={i} className="text-foreground font-semibold">
            {t.text}
          </strong>
        );
      case 'code':
        return (
          <code key={i} className="bg-card text-foreground rounded-[2px] px-1 py-0.5 font-mono text-[0.85em]">
            {t.text}
          </code>
        );
      case 'link':
        return (
          <a
            key={i}
            href={t.href}
            rel={EXTERNAL.test(t.href) ? 'nofollow noopener' : undefined}
            className="text-foreground decoration-kortix-base-ink hover:decoration-foreground underline decoration-1 underline-offset-4 transition-colors duration-fast"
          >
            {t.text}
          </a>
        );
    }
  });
}

/** Long-form prose. Headings are h2/h3 so the page keeps one h1; fences render as a plate. */
export function Prose({ body, className }: { body: string; className?: string }) {
  const blocks = parseBlocks(body);
  return (
    <div className={cn('max-w-[46rem]', className)}>
      {blocks.map((b, i) => {
        const first = i === 0;
        switch (b.kind) {
          case 'h2':
            return (
              <h2
                key={i}
                className={cn(
                  'text-foreground flex items-baseline gap-3 text-2xl font-medium tracking-tight text-balance',
                  first ? '' : 'mt-12',
                )}
              >
                <span aria-hidden className="bg-kortix-base-ink inline-block size-1.5 shrink-0 translate-y-[-2px]" />
                <span><Inline text={b.text} /></span>
              </h2>
            );
          case 'h3':
            return (
              <h3 key={i} className={cn('text-foreground text-lg font-semibold tracking-tight text-balance', first ? '' : 'mt-8')}>
                <Inline text={b.text} />
              </h3>
            );
          case 'p':
            return (
              <p key={i} className={cn('text-muted-foreground text-base leading-relaxed text-pretty', first ? '' : 'mt-4')}>
                <Inline text={b.text} />
              </p>
            );
          case 'ul':
          case 'ol': {
            const List = b.kind === 'ul' ? 'ul' : 'ol';
            return (
              <List
                key={i}
                className={cn(
                  'text-muted-foreground mt-4 space-y-2 pl-5 text-base leading-relaxed',
                  b.kind === 'ul' ? 'marker:text-kortix-base-ink list-disc' : 'marker:text-muted-foreground list-decimal',
                )}
              >
                {b.items.map((item, j) => (
                  <li key={j} className="pl-1 text-pretty">
                    <Inline text={item} />
                  </li>
                ))}
              </List>
            );
          }
          case 'code':
            return (
              <div key={i} className="mt-6">
                <Plate
                  artifact={{
                    file: b.lang,
                    lang: b.lang === 'yaml' || b.lang === 'sh' || b.lang === 'ts' ? b.lang : 'text',
                    lines: b.lines,
                  }}
                />
              </div>
            );
        }
      })}
    </div>
  );
}
