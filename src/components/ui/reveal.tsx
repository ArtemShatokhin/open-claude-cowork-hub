'use client';

/**
 * Progressive reveal, wired site-wide (design review 2026-10-24).
 *
 * The server HTML is the visible, final state: a reader without JavaScript, a crawler and an
 * answer engine all get every section. Once the client mounts, a block still below the fold is
 * held back and then rises once as it scrolls in — opacity 0 → 1 with a 10px lift, 460ms
 * ease-out, an optional 40ms item delay for a stagger. Blocks already on screen are left alone,
 * so nothing above the fold flashes.
 *
 * Every wrapper carries `data-reveal` (`shown` | `pending` | `in`) at all times, so the motion is
 * measurable after mount, not only while it runs. Under `prefers-reduced-motion: reduce` the
 * component never arms: the page simply renders its final state.
 */
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type State = 'shown' | 'pending' | 'in';

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  /** Seconds of item stagger, e.g. `index * 0.04`. */
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<State>('shown');

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;
    setState('pending');
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setState('in');
          obs.disconnect();
        }
      },
      { threshold: 0, rootMargin: '0px 0px -60px 0px' },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal={state}
      className={cn('hb-reveal', className)}
      style={delay ? { animationDelay: `${delay.toFixed(3)}s` } : undefined}
    >
      {children}
    </div>
  );
}
