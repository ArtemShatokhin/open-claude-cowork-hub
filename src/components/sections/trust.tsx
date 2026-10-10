/**
 * Ported from apps/web/src/features/marketing/landing/trust-section.tsx: one bordered card, the
 * heading and a secondary action on the left, a row of seals on the right separated by hairlines.
 * Changes: the SOC 2 / GDPR seal artwork (large SVGs with their own colours) is replaced by
 * typographic seals (line1, line2, optional state) so any site can configure them; the copy and the
 * action come from the config. State it the way claims.md does ("SOC 2 Type II is in progress").
 */
import { ArrowRightIcon, SealCheckIcon } from '@phosphor-icons/react/dist/ssr';
import type { TrustSection as TrustConfig } from '@/config/types';
import { ButtonLink } from '@/components/ui/button';
import { Inline } from '@/components/ui/rich-text';
import { Reveal } from '@/components/ui/reveal';
import { Eyebrow } from '@/components/ui/section-header';
import { COLUMN, SECTION_Y } from '@/lib/layout';
import { cn } from '@/lib/utils';

export function TrustSection({ section }: { section: TrustConfig }) {
  const headingId = `${section.id ?? 'trust'}-title`;
  return (
    <section id={section.id} aria-labelledby={headingId} className={cn(COLUMN, SECTION_Y)}>
      <Reveal>
        <div className="border-border grid gap-10 rounded-xl border px-5 py-10 sm:px-8 sm:py-12 lg:grid-cols-12 lg:gap-14 lg:px-10">
          <div className="flex min-w-0 flex-col gap-8 lg:col-span-7">
            <div className="flex flex-col gap-4">
              {section.heading.eyebrow ? <Eyebrow>{section.heading.eyebrow}</Eyebrow> : null}
              <h2 id={headingId} className="text-foreground max-w-xl text-2xl font-medium tracking-tight text-balance sm:text-3xl md:text-4xl">
                {section.heading.title}
              </h2>
              {section.heading.sub ? (
                <p className="text-muted-foreground max-w-xl text-base leading-relaxed text-pretty">
                  <Inline text={section.heading.sub} />
                </p>
              ) : null}
            </div>
            {section.cta ? (
              <ButtonLink cta={{ variant: 'secondary', ...section.cta }} size="lg" className="w-fit">
                {section.cta.label}
                <ArrowRightIcon />
              </ButtonLink>
            ) : null}
          </div>
          <ul className="grid w-full grid-cols-1 items-start sm:grid-cols-3 lg:col-span-5">
            {section.seals.map((s) => (
              <li
                key={`${s.line1}-${s.line2}`}
                className="border-border flex flex-col items-center gap-2 border-b px-2 py-5 text-center last:border-b-0 sm:border-b-0 sm:border-l sm:py-0 sm:first:border-l-0"
              >
                <SealCheckIcon aria-hidden className={cn('size-9', s.state ? 'text-muted-foreground' : 'text-foreground')} />
                <span className="text-foreground text-lg font-medium tracking-tight">{s.line1}</span>
                {s.line2 ? <span className="text-muted-foreground font-mono text-xs uppercase">{s.line2}</span> : null}
                {s.state ? (
                  <span className="bg-kortix-yellow/15 text-foreground rounded-sm px-2 py-0.5 font-mono text-xs">{s.state}</span>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
