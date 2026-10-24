/**
 * The trust section drawn as a checklist strip: heading and sub left; the seals as ruled
 * checklist rows at the right — a filled accent check square, the first line in the heading
 * face, the second in mono. Hairlines between rows. No icons, no seal artwork.
 */
import { CheckIcon } from '@phosphor-icons/react/dist/ssr';
import type { TrustSection as TrustConfig } from '@/config/types';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeader } from '@/components/ui/section-header';
import { cn } from '@/lib/utils';
import { HB, HB_Y } from '@/components/hb';

export function TrustSection({ section }: { section: TrustConfig }) {
  const headingId = `${section.id ?? 'trust'}-title`;
  return (
    <section id={section.id} aria-labelledby={headingId} className={HB_Y}>
      <div className={cn(HB, 'grid gap-8 lg:grid-cols-12 lg:gap-12')}>
        <div className="min-w-0 lg:col-span-6">
          <Reveal>
            <SectionHeader heading={section.heading} id={headingId} />
          </Reveal>
        </div>
        <div className="lg:col-span-6">
          <ul className="divide-border border-border divide-y border-t">
            {section.seals.map((s, i) => (
              <li key={`${s.line1}-${s.line2}`}>
                <Reveal delay={Math.min(i * 0.04, 0.24)} className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-3.5">
                <span className="text-foreground-strong flex items-center gap-3 text-base">
                  <span
                    aria-hidden
                    className={cn(
                      'inline-flex size-3.5 shrink-0 items-center justify-center rounded-[2px]',
                      s.state ? 'border-border border text-muted-foreground' : 'bg-tab-bg text-tab-ink',
                    )}
                  >
                    {s.state ? null : <CheckIcon weight="bold" className="size-2.5" />}
                  </span>
                  {s.line1}
                  <span className="sr-only">{s.state ? `, ${s.state}` : ''}</span>
                </span>
                {s.line2 ? <span className="text-caption font-mono text-xs">{s.line2}</span> : null}
                  {s.state ? <span className="text-muted-foreground font-mono text-xs">{s.state}</span> : null}
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
