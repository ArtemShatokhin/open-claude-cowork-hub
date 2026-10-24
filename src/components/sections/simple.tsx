/**
 * Three handbook sections: the exhibit plate (artifact), the long-form chapter (prose) and the
 * closing sign-off slip (cta).
 *  - ArtifactSection: heading with the thumb-tab, the exhibit plate, the caption muted.
 *  - ProseSection: the chapter copy on the centered reading measure inside HB.
 *  - CtaBand: a framed card with a mono strip from the config (domain), the
 *    accent top rule, copy left and CTAs stacked full-width right, the mono trust line under a
 *    hairline.
 */
import type { ArtifactSection as ArtifactConfig, CtaSection, ProseSection as ProseConfig } from '@/config/types';
import { ButtonLink } from '@/components/ui/button';
import { CodeBlock } from '@/components/ui/code-block';
import { Inline, Prose } from '@/components/ui/rich-text';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeader, Tab } from '@/components/ui/section-header';
import { cn } from '@/lib/utils';
import { HB, HB_MEASURE } from '@/components/hb';
import { site } from '@/lib/config';

export function ArtifactSection({ section }: { section: ArtifactConfig }) {
  const headingId = `${section.id ?? 'artifact'}-title`;
  return (
    <section id={section.id} aria-labelledby={headingId} className="border-border border-b py-10 md:py-14">
      <div className={HB}>
        <Reveal>
          <SectionHeader heading={section.heading} id={headingId} />
        </Reveal>
        <Reveal className="mt-6 w-full max-w-3xl">
          <CodeBlock artifact={section.artifact} className="kx-shadow-card" />
          {section.caption ? (
            <p className="text-muted-foreground mt-4 max-w-2xl text-sm leading-relaxed text-pretty">
              <Inline text={section.caption} />
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}

export function ProseSection({ section }: { section: ProseConfig }) {
  return (
    <section id={section.id} className="py-10 md:py-14">
      <div className={HB}>
        <Reveal className={HB_MEASURE}>
          <Prose body={section.body} />
        </Reveal>
      </div>
    </section>
  );
}

export function CtaBand({ section }: { section: CtaSection }) {
  const year = site.updated.slice(0, 4);
  return (
    <section id={section.id ?? 'get-started'} className="py-10 md:py-16">
      <div className={HB}>
        <Reveal>
          <div className="border-border relative overflow-hidden rounded-lg border">
            <span aria-hidden className="bg-rule-accent absolute inset-x-0 top-0 h-0.5" />
            <div className="border-border bg-surface flex flex-wrap items-center justify-between gap-2 border-b px-4 py-3 sm:px-6">
              <p className="text-caption font-mono text-xs">{site.domain}</p>
              <p className="text-caption hb-date font-mono text-xs">© {year}</p>
            </div>
            <div className="grid gap-6 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-12 lg:items-end lg:gap-8">
              <div className="min-w-0 lg:col-span-7">
                <h2 className="text-foreground-strong flex items-start gap-3 text-2xl tracking-tight text-balance sm:text-3xl">
                  <Tab />
                  {section.title}
                </h2>
                {section.sub ? (
                  <p className="text-muted-foreground mt-3 max-w-xl text-base leading-relaxed text-pretty sm:text-lg">
                    <Inline text={section.sub} />
                  </p>
                ) : null}
              </div>
              <div className="flex flex-col gap-2 lg:col-span-5 lg:items-stretch">
                {section.ctas.map((cta) => (
                  <ButtonLink key={cta.href} cta={cta} size="lg" className="w-full" />
                ))}
              </div>
            </div>
            {section.trust ? (
              <p className="border-border text-muted-foreground hb-date border-t px-4 py-3 font-mono text-xs sm:px-6">
                {section.trust}
              </p>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
