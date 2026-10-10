/**
 * The homepage hero, `field` state (kortix-brand magic_trick.md): copy in a narrow left column over
 * a ruled specification strip, the artifact a dark plate with a title block that bleeds off the right
 * edge under a dotted fold line. The copy keeps the h1 / lead / trust rhythm; eyebrow, tagline and
 * proof are label rows (divs), so the hero window stays short. CSS-only staged enter.
 */
import type { HeroSection, Page } from '@/config/types';
import { ButtonLink } from '@/components/ui/button';
import { Glyph } from '@/components/ui/glyph';
import { HX } from '@/components/ui/handbook';
import { Plate } from '@/components/ui/plate';
import { Inline } from '@/components/ui/rich-text';
import { cn } from '@/lib/utils';

const BLEED = 'lg:-mr-[max(2rem,calc((100vw-72rem)/2+2rem))]';

export function Hero({ section, page }: { section: HeroSection; page: Page }) {
  const id = section.id ?? 'hero';
  const eyebrow = section.eyebrow;
  const rivals = eyebrow?.rivals ?? [];
  const artifact = section.artifacts[0];

  return (
    <section id={id} className="relative overflow-hidden pt-10 pb-12 sm:pt-14 lg:pt-16 lg:pb-16">
      <div className={cn(HX, 'grid items-center gap-10 lg:grid-cols-12 lg:gap-12')}>
        <div className="min-w-0 lg:col-span-5">
          {eyebrow ? (
            <div className="hx-hero-line border-border flex flex-wrap items-center gap-x-2 gap-y-1.5 border-b pb-3 text-sm [--hx-enter:0ms]">
              <span className="text-muted-foreground">{eyebrow.lead}</span>
              {rivals.map((r, i) => (
                <span key={r.label} className="inline-flex items-center gap-1.5">
                  {i > 0 ? <span className="text-muted-foreground">and</span> : null}
                  {r.glyph ? <Glyph id={r.glyph} className="size-4" /> : null}
                  <span className="text-foreground font-medium">{r.label}</span>
                </span>
              ))}
            </div>
          ) : null}

          <h1 className="hx-hero-line text-foreground mt-6 text-4xl font-medium tracking-tight text-balance [--hx-enter:60ms] sm:text-5xl">
            {page.h1}
          </h1>

          <p
            data-lead
            className="hx-hero-line text-muted-foreground mt-6 max-w-xl text-base leading-relaxed text-pretty [--hx-enter:130ms] sm:text-lg"
          >
            <Inline text={page.lead} />
          </p>

          <div className="hx-hero-line mt-7 flex flex-wrap items-center gap-2.5 [--hx-enter:200ms]">
            {section.ctas.map((cta) => (
              <ButtonLink key={cta.href} cta={cta} size="lg" />
            ))}
          </div>

          {section.trust ? (
            <p className="hx-hero-line text-muted-foreground mt-7 font-mono text-xs [--hx-enter:420ms]">{section.trust}</p>
          ) : null}
        </div>

        <div className={cn('hx-hero-plate min-w-0 lg:col-span-7 [--hx-enter:260ms]')}>
          <div className={cn('relative', BLEED)}>
            {section.tagline ? (
              <div className="text-foreground mb-3 flex items-center gap-2 text-sm font-medium">
                <span aria-hidden className="bg-kortix-base-ink size-1.5 rounded-[1px]" />
                {section.tagline}
              </div>
            ) : null}
            {artifact ? <Plate artifact={artifact} size="hero" fig="FIG 1" /> : null}
            {section.proof ? (
              <p className="text-muted-foreground mt-4 max-w-lg text-sm leading-relaxed text-pretty">
                <Inline text={section.proof} />
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
