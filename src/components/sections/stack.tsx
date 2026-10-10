'use client';

/**
 * The stack as a numbered procedure manifest: one ruled row per layer, a mono index in the left
 * column, the title and body right, the layer's artifact a plate. A scroll-spy tints the row in
 * view with the accent. All rows and plates are in the static HTML.
 */
import { useEffect, useRef, useState } from 'react';
import type { StackSection as StackSectionConfig } from '@/config/types';
import { ChapterHeader, HX, RHYTHM, Eyebrow } from '@/components/ui/handbook';
import { Plate } from '@/components/ui/plate';
import { Reveal } from '@/components/ui/reveal';
import { Inline } from '@/components/ui/rich-text';
import { cn } from '@/lib/utils';

export function StackSection({ section, folio }: { section: StackSectionConfig; folio?: string }) {
  const rowRefs = useRef<Array<HTMLElement | null>>([]);
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
    <section id={section.id} aria-labelledby={headingId} className={cn(HX, RHYTHM)}>
      <ChapterHeader heading={section.heading} id={headingId} folio={folio} />

      <div className="mt-10">
        {section.layers.map((layer, i) => {
          const on = i === active;
          return (
            <article
              key={layer.id}
              ref={(el) => {
                rowRefs.current[i] = el;
              }}
              data-index={i}
              className="border-border grid gap-6 border-t py-8 last:pb-0 lg:grid-cols-12 lg:gap-10"
            >
              <Reveal className="min-w-0 lg:col-span-5">
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      'font-mono text-xs tabular-nums transition-colors duration-moderate',
                      on ? 'text-kortix-base-ink' : 'text-muted-foreground',
                    )}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span aria-hidden className={cn('h-px w-6 transition-colors duration-moderate', on ? 'bg-kortix-base-ink' : 'bg-border')} />
                  <Eyebrow>{layer.label}</Eyebrow>
                </div>
                <h3 className="text-foreground mt-3 text-xl font-semibold tracking-tight text-balance">{layer.title}</h3>
                <p className="text-muted-foreground mt-3 max-w-md text-base leading-relaxed text-pretty">
                  <Inline text={layer.body} />
                </p>
              </Reveal>
              <Reveal delay={0.05} className="min-w-0 lg:col-span-7">
                <Plate
                  artifact={layer.artifact}
                  fig={`FIG ${i + 1}`}
                  className={cn('transition-colors duration-moderate', on && 'border-kortix-base-ink')}
                />
              </Reveal>
            </article>
          );
        })}
      </div>
    </section>
  );
}
