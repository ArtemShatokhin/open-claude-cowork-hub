'use client';

/**
 * Open source as a ruled ledger line: a large tabular mono count that counts up once on reveal,
 * the caption beside it, the title and the links. A plain ledger band, no curve — distinct from
 * the starter's star chart.
 */
import { GithubLogoIcon } from '@phosphor-icons/react/dist/ssr';
import { useEffect, useRef, useState } from 'react';
import type { OpenSourceSection as OpenSourceConfig } from '@/config/types';
import { HX, RHYTHM, Rule } from '@/components/ui/handbook';
import { Reveal } from '@/components/ui/reveal';
import { cn, linkProps } from '@/lib/utils';

const DURATION_MS = 1400;
const FORMAT = new Intl.NumberFormat('en-US');

function useCountUp(target: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(target);
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    setArmed(true);
    setValue(0);
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        obs.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / DURATION_MS);
          setValue(Math.round(target * (1 - (1 - p) ** 4)));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return { ref, value, armed };
}

export function OpenSourceSection({ section, folio }: { section: OpenSourceConfig; folio?: string }) {
  const { ref, value, armed } = useCountUp(section.stars.value);
  const settled = !armed || value === section.stars.value;
  const label = `${FORMAT.format(section.stars.value)}${section.stars.suffix ?? ''} ${section.stars.caption}`;

  return (
    <section id={section.id ?? 'open-source'} className={cn(HX, RHYTHM)}>
      <Reveal>
        <div className="border-border flex items-center gap-3 border-t pt-3">
          {folio ? <span className="text-kortix-base-ink font-mono text-xs tabular-nums">§ {folio}</span> : null}
          <Rule className="min-w-4 flex-1" />
          <span className="text-muted-foreground font-mono text-xs uppercase tracking-[0.16em]">Open source</span>
        </div>
        <div className="border-border mt-8 grid gap-8 border-y py-10 sm:grid-cols-[minmax(0,auto)_minmax(0,1fr)] sm:items-end sm:gap-14">
          <div ref={ref}>
            <div
              role="img"
              aria-label={label}
              className="text-foreground text-5xl font-medium tracking-tight tabular-nums sm:text-6xl"
            >
              {FORMAT.format(value)}
              {settled ? section.stars.suffix : null}
            </div>
            <p className="text-muted-foreground mt-3 font-mono text-xs uppercase tracking-[0.16em]">{section.stars.caption}</p>
          </div>
          <div className="min-w-0">
            <h2 className="text-foreground max-w-xl text-2xl font-medium tracking-tight text-balance sm:text-3xl">{section.title}</h2>
            <nav aria-label="Source" className="mt-5 flex flex-col items-start gap-1">
              {section.links.map((l, i) => (
                <a
                  key={l.href}
                  {...linkProps(l)}
                  className={cn(
                    'inline-flex min-h-11 items-center gap-2 font-mono text-sm transition-colors duration-fast',
                    i === 0
                      ? 'text-foreground decoration-kortix-base-ink hover:decoration-foreground underline decoration-1 underline-offset-4'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {l.href.includes('github.com') ? <GithubLogoIcon className="size-4" /> : null}
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
