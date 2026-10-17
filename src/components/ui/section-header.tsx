/**
 * The handbook's section head: a filled thumb-tab square in the accent, the title in the heading
 * face, and a hairline rule running under both, with the optional sub on the reading measure.
 * No section numbering, no mono stack: one optional eyebrow line at most.
 */
import type { ReactNode } from 'react';
import type { SectionHeading } from '@/config/types';
import { Inline } from '@/components/ui/rich-text';
import { cn } from '@/lib/utils';

export function Tab({ className }: { className?: string }) {
  return <span aria-hidden className={cn('bg-tab-bg inline-block size-2.5 shrink-0 rounded-[2px]', className)} />;
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn('text-muted-foreground font-mono text-xs leading-none uppercase', className)}>{children}</span>;
}

export function SectionHeader({
  heading,
  id,
  aside,
  className,
}: {
  heading: SectionHeading;
  /** id of the h2, for aria-labelledby. */
  id?: string;
  aside?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('w-full', className)}>
      {heading.eyebrow ? <Eyebrow className="mb-3 block">{heading.eyebrow}</Eyebrow> : null}
      <div className="border-border flex flex-col gap-2 border-b pb-3 sm:flex-row sm:items-end sm:justify-between">
        <h2 id={id} className="text-foreground-strong flex items-center gap-3 text-2xl tracking-tight text-balance sm:text-3xl">
          <Tab />
          {heading.title}
        </h2>
        {aside}
      </div>
      {heading.sub ? (
        <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed text-pretty">
          <Inline text={heading.sub} />
        </p>
      ) : null}
    </div>
  );
}
