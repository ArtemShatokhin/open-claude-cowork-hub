'use client';

/**
 * "How it works": Kortix's layers, one per row, each with the static artifact that proves it.
 * Rebuilt (kortix.com renders its version from the live app). One idea per row with the artifact
 * beside it, as layout.md asks instead of a 3-up card grid. A rail on the left ties the rows into a
 * stack; the node of the row nearest the middle of the screen takes the accent. Rows reveal once,
 * on scroll, with opacity and a 0.98 scale. All rows and artifacts are in the static HTML.
 */
import { useEffect, useRef, useState } from 'react';
import type { StackSection as StackSectionConfig } from '@/config/types';
import { CodeBlock } from '@/components/ui/code-block';
import { Inline } from '@/components/ui/rich-text';
import { Reveal } from '@/components/ui/reveal';
import { Eyebrow, SectionHeader } from '@/components/ui/section-header';
import { COLUMN, SECTION_Y } from '@/lib/layout';
import { cn } from '@/lib/utils';

export function StackSection({ section }: { section: StackSectionConfig }) {
  const rowRefs = useRef<Array<HTMLLIElement | null>>([]);
  const [active, setActive] = useState(-1);
  const headingId = `${section.id ?? 'stack'}-title`;

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );
    rowRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id={section.id} aria-labelledby={headingId} className={SECTION_Y}>
      <div className={COLUMN}>
        <SectionHeader heading={section.heading} id={headingId} />

        <ol className="relative mt-14 sm:mt-16">
          {/* The rail. It runs through the node column and stops at the last node. */}
          <span aria-hidden className="bg-border absolute top-3 bottom-12 left-[11px] w-px" />
          {section.layers.map((layer, i) => {
            const on = i === active;
            return (
              <li
                key={layer.id}
                ref={(el) => {
                  rowRefs.current[i] = el;
                }}
                data-index={i}
                className="relative grid gap-6 pb-12 pl-12 last:pb-0 lg:grid-cols-12 lg:gap-12"
              >
                <span
                  aria-hidden
                  className={cn(
                    'border-border bg-background absolute top-1 left-0 flex size-6 items-center justify-center rounded-full border font-mono text-xs transition-colors duration-moderate',
                    on ? 'border-kortix-base-ink text-kortix-base-ink' : 'text-muted-foreground',
                  )}
                >
                  {i + 1}
                </span>
                <Reveal className="min-w-0 lg:col-span-5">
                  <Eyebrow>{layer.label}</Eyebrow>
                  <h3 className="text-foreground mt-3 text-xl font-medium tracking-tight text-balance">{layer.title}</h3>
                  <p className="text-muted-foreground mt-3 max-w-md text-base leading-relaxed text-pretty">
                    <Inline text={layer.body} />
                  </p>
                </Reveal>
                <Reveal delay={0.06} className="min-w-0 lg:col-span-7">
                  <CodeBlock
                    artifact={layer.artifact}
                    className={cn('transition-colors duration-moderate', on && 'border-kortix-base-ink')}
                  />
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
