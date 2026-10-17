'use client';

/**
 * Progressive reveal: the server HTML is the final, visible state. After mount, a block still
 * below the fold is hidden and then faded in once it scrolls in; anything already on screen is
 * left alone. Opacity only, 500ms, ease-out, no transform — so a block's measured box never
 * moves (the layout gate measures edges before it scrolls) and reduced motion needs no variant.
 */
import { motion } from 'motion/react';
import { useEffect, useRef, useState, type ReactNode } from 'react';

type State = 'shown' | 'pending' | 'in';

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<State>('shown');

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    setState('pending');
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setState('in');
          obs.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const hidden = state === 'pending';
  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={{ opacity: hidden ? 0 : 1 }}
      transition={hidden ? { duration: 0 } : { duration: 0.5, delay, ease: [0, 0, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
