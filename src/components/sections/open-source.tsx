'use client';

/**
 * The holdings strip: a hairline-framed band with an accent top rule. The numeral counts up once
 * when seen (easeOutQuart, 1600ms), its mono caption under it; the section title and the two
 * links (underlined, inline) sit at the right. No growth curve, no seal, no signal meter — none
 * of the siblings' star treatments. The server HTML carries the final number.
 */
import { useEffect, useId, useRef, useState } from 'react';
import type { OpenSourceSection as OpenSourceConfig } from '@/config/types';
import { GithubLogoIcon } from '@phosphor-icons/react/dist/ssr';
import { Reveal } from '@/components/ui/reveal';
import { cn, linkProps } from '@/lib/utils';
import { HB } from '@/components/hb';

const DURATION_MS = 1600;
const EASE_OUT_QUART = 'cubic-bezier(0.165, 0.84, 0.44, 1)';
const FORMAT = new Intl.NumberFormat('en-US');

/** 'final' = server and no-JS state; 'armed' = waiting below the fold; 'run' = counting. */
type Phase = 'final' | 'armed' | 'run';

function useCountUp(target: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<Phase>('final');
  const [value, setValue] = useState(target);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    setPhase('armed');
    setValue(0);
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        obs.disconnect();
        setPhase('run');
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

  return { ref, phase, value };
}

export function OpenSourceSection({ section }: { section: OpenSourceConfig }) {
  const { ref, phase, value } = useCountUp(section.stars.value);
  const uid = useId();
  void uid;
  const settled = value === section.stars.value;
  const label = `${FORMAT.format(section.stars.value)}${section.stars.suffix ?? ''} ${section.stars.caption}`;

  return (
    <section id={section.id ?? 'open-source'} className="py-16 sm:py-20">
      <div className={HB}>
        <Reveal>
          <div className="border-border relative overflow-hidden rounded-lg border">
            <span aria-hidden className="bg-rule-accent absolute inset-x-0 top-0 h-0.5" />
            <div className="grid gap-8 px-4 py-8 sm:grid-cols-12 sm:gap-10 sm:px-6 sm:py-10">
              <div ref={ref} className="min-w-0 sm:col-span-5">
                <div
                  aria-label={label}
                  role="img"
                  className="text-foreground-strong text-5xl tracking-tight tabular-nums sm:text-6xl"
                >
                  {FORMAT.format(value)}
                  {settled ? section.stars.suffix : null}
                </div>
                <p className="text-caption mt-3 font-mono text-xs">{section.stars.caption}</p>
              </div>
              <div className="min-w-0 sm:col-span-7">
                <h2 className="text-foreground-strong max-w-lg text-xl tracking-tight text-pretty sm:text-2xl">{section.title}</h2>
                <nav aria-label="Source" className="mt-5 flex flex-col items-start gap-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
                  {section.links.map((l, i) => (
                    <a
                      key={l.href}
                      {...linkProps(l)}
                      className={cn(
                        'inline-flex min-h-11 items-center gap-1.5 text-sm transition-colors duration-fast',
                        i === 0
                          ? 'text-foreground-strong decoration-kortix-base-ink hover:decoration-foreground underline decoration-1 underline-offset-4'
                          : 'text-muted-foreground hover:text-foreground underline decoration-border underline-offset-4',
                      )}
                    >
                      {l.href.includes('github.com') ? <GithubLogoIcon className="size-4" /> : null}
                      {l.label}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
