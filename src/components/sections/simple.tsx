/**
 * Three small sections:
 *  - CtaBand: the closing colophon band — a full-bleed horizontally-ruled band on the page ground
 *    (not a rounded card), an accent top rule, the actions right, the colophon trust line under a rule.
 *  - ProseSection: long-form copy.
 *  - ArtifactSection: one real artifact with a chapter heading and a caption.
 */
import type { ArtifactSection as ArtifactConfig, CtaSection, ProseSection as ProseConfig } from '@/config/types';
import { ButtonLink } from '@/components/ui/button';
import { ChapterHeader, HX, RHYTHM } from '@/components/ui/handbook';
import { Plate } from '@/components/ui/plate';
import { Reveal } from '@/components/ui/reveal';
import { Inline, Prose } from '@/components/ui/rich-text';
import { cn } from '@/lib/utils';

export function CtaBand({ section }: { section: CtaSection }) {
  return (
    <section id={section.id ?? 'get-started'} className="border-border mt-4 border-t">
      <div className={cn(HX, 'py-14 md:py-20')}>
        <Reveal>
          <span aria-hidden className="bg-kortix-base block h-0.5 w-24 rounded-[1px]" />
          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <h2 className="text-foreground max-w-2xl text-3xl font-medium tracking-tight text-balance sm:text-4xl">
                {section.title}
              </h2>
              {section.sub ? (
                <p className="text-muted-foreground mt-4 max-w-xl text-base leading-relaxed text-pretty sm:text-lg">
                  <Inline text={section.sub} />
                </p>
              ) : null}
            </div>
            <div className="flex flex-wrap gap-2.5 lg:col-span-4 lg:justify-end">
              {section.ctas.map((cta) => (
                <ButtonLink key={cta.href} cta={cta} size="lg" />
              ))}
            </div>
          </div>
          {section.trust ? (
            <p className="text-muted-foreground border-border mt-10 border-t pt-5 font-mono text-xs">{section.trust}</p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}

export function ProseSection({ section }: { section: ProseConfig }) {
  return (
    <section id={section.id} className={cn(HX, 'py-12 md:py-16')}>
      <Prose body={section.body} />
    </section>
  );
}

export function ArtifactSection({ section, folio }: { section: ArtifactConfig; folio?: string }) {
  const headingId = `${section.id ?? 'artifact'}-title`;
  return (
    <section id={section.id} aria-labelledby={headingId} className={cn(HX, RHYTHM)}>
      <ChapterHeader heading={section.heading} id={headingId} folio={folio} />
      <Reveal className="mt-8">
        <div className="max-w-3xl">
          <Plate artifact={section.artifact} size="hero" fig="FIG 1" />
        </div>
        {section.caption ? (
          <p className="text-muted-foreground mt-4 max-w-2xl text-sm leading-relaxed text-pretty">
            <Inline text={section.caption} />
          </p>
        ) : null}
      </Reveal>
    </section>
  );
}
