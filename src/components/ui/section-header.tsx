/**
 * Ported from apps/web/src/features/marketing/component/section-header.tsx. Changes: the eyebrow is
 * the kit's mono-uppercase marketing eyebrow at text-xs (the original used an off-scale 0.75rem), the
 * description is optional, and the copy comes from props.
 */
import type { ReactNode } from 'react';
import type { SectionHeading } from '@/config/types';
import { Inline } from '@/components/ui/rich-text';
import { Reveal } from '@/components/ui/reveal';
import { cn } from '@/lib/utils';

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn('text-muted-foreground font-mono text-xs leading-none uppercase', className)}>{children}</span>
  );
}

export function SectionHeader({
  heading,
  id,
  aside,
  titleClassName,
}: {
  heading: SectionHeading;
  /** id of the h2, for aria-labelledby. */
  id?: string;
  /** Rendered on the right of the title row on large screens (the wheel's tick counter). */
  aside?: ReactNode;
  titleClassName?: string;
}) {
  return (
    <Reveal>
      <div className="flex w-full flex-col gap-4">
        {heading.eyebrow ? <Eyebrow>{heading.eyebrow}</Eyebrow> : null}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2
            id={id}
            className={cn('text-foreground max-w-2xl text-2xl font-medium tracking-tight text-balance sm:text-3xl', titleClassName)}
          >
            {heading.title}
          </h2>
          {aside}
        </div>
      </div>
      {heading.sub ? (
        <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed text-pretty">
          <Inline text={heading.sub} />
        </p>
      ) : null}
    </Reveal>
  );
}
