'use client';

/**
 * Reveal-on-scroll, the site's own. The server HTML is the visible final state; after mount a block
 * that is still below the fold is hidden (opacity + a small rise) and revealed once it scrolls in.
 * Reduced motion is a plain fade. No horizontal movement, so measured left edges never shift.
 */
import { motion } from 'motion/react';
import { useEffect, useRef, useState, type ReactNode } from 'react';

export function Reveal({
  children,
  className,
  delay = 0,
  rise = 10,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  rise?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    setHidden(true);
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setHidden(false);
          obs.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={{ opacity: hidden ? 0 : 1, y: hidden ? rise : 0 }}
      transition={hidden ? { duration: 0 } : { duration: 0.52, delay, ease: [0, 0, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
