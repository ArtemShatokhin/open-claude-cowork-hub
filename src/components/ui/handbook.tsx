/**
 * The handbook's shared furniture: the content column, the section rhythm, the mono eyebrow and the
 * numbered chapter header ("§ 03 — label", a dotted rule, then the h2 and its sub). Every section
 * puts its heading here, so the h1, the lead and the first h2 share one left edge.
 */
import type { SectionHeading } from '@/config/types';
import { Inline } from '@/components/ui/rich-text';
import { Reveal } from '@/components/ui/reveal';
import { cn } from '@/lib/utils';

/** The one content column: narrower than the starter's, so the handbook measure stays readable. */
export const HX = 'mx-auto w-full max-w-6xl px-5 sm:px-8';
/** The chapter rhythm: a tighter, ruled cadence than the starter's `py-20 md:py-30`. */
export const RHYTHM = 'py-14 md:py-20';

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn('text-muted-foreground font-mono text-xs uppercase tracking-[0.16em]', className)}>{children}</span>
  );
}

/** A dotted hairline that runs across the column. */
export function Rule({ className }: { className?: string }) {
  return <span aria-hidden className={cn('hx-dotted block h-px w-full', className)} />;
}

export function ChapterHeader({
  heading,
  id,
  folio,
  className,
}: {
  heading: SectionHeading;
  id?: string;
  folio?: string;
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <div className="border-border flex items-center gap-3 border-t pt-3">
        {folio ? <span className="text-kortix-base-ink font-mono text-xs tabular-nums">§ {folio}</span> : null}
        <Rule className="min-w-4 flex-1" />
        {heading.eyebrow ? <Eyebrow>{heading.eyebrow}</Eyebrow> : null}
      </div>
      <h2 id={id} className="text-foreground mt-5 max-w-3xl text-2xl font-medium tracking-tight text-balance sm:text-3xl">
        {heading.title}
      </h2>
      {heading.sub ? (
        <p className="text-muted-foreground mt-3 max-w-2xl text-base leading-relaxed text-pretty">
          <Inline text={heading.sub} />
        </p>
      ) : null}
    </Reveal>
  );
}
