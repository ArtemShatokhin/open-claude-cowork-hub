/**
 * Renders one config page: the page header (h1 + lead + the page's kortix.com action) unless a
 * hero opens the page, then every section in config order. This registry is the one place a
 * section type maps to this site's own component.
 */
import type { ReactNode } from 'react';
import type { Page, Section } from '@/config/types';
import { CodePanelsSection } from '@/components/sections/code-panels';
import { ComparisonSection } from '@/components/sections/comparison';
import { FaqSection } from '@/components/sections/faq';
import { Hero } from '@/components/sections/hero';
import { OpenSourceSection } from '@/components/sections/open-source';
import { ArtifactSection, CtaBand, ProseSection } from '@/components/sections/simple';
import { TrustSection } from '@/components/sections/trust';
import { UseCasesSection } from '@/components/sections/use-cases';
import { WidgetSection } from '@/components/sections/widget';
import { ButtonLink } from '@/components/ui/button';
import { Inline } from '@/components/ui/rich-text';
import { site } from '@/lib/config';
import { HB } from '@/components/hb';

function renderSection(section: Section, page: Page): ReactNode {
  switch (section.type) {
    case 'hero':
      return <Hero section={section} page={page} />;
    case 'logo-strip':
    case 'stack':
      /* This site's config never carries these; nothing is drawn. */
      return null;
    case 'comparison':
      return <ComparisonSection section={section} />;
    case 'widget':
      return <WidgetSection section={section} />;
    case 'open-source':
      return <OpenSourceSection section={section} />;
    case 'faq':
      return <FaqSection section={section} />;
    case 'cta':
      return <CtaBand section={section} />;
    case 'prose':
      return <ProseSection section={section} />;
    case 'artifact':
      return <ArtifactSection section={section} />;
    case 'use-cases':
      return <UseCasesSection section={section} />;
    case 'code-panels':
      return <CodePanelsSection section={section} />;
    case 'trust':
      return <TrustSection section={section} />;
  }
}

/** Sub-page header: the same h1 / lead roles as the hero, without an exhibit. */
function PageHeader({ page }: { page: Page }) {
  return (
    <header className={`${HB} pt-14 pb-2 sm:pt-20`}>
      <span aria-hidden className="bg-rule-accent mb-6 block h-1 w-12 rounded-[2px]" />
      <h1 className="hb-hero-copy text-foreground-strong max-w-3xl text-4xl tracking-tight text-balance [--hb-enter:0ms] sm:text-5xl sm:leading-[1.05]">
        {page.h1}
      </h1>
      <p
        data-lead
        className="hb-hero-copy text-muted-foreground mt-5 max-w-2xl text-base leading-relaxed text-pretty [--hb-enter:90ms] sm:text-lg"
      >
        <Inline text={page.lead} />
      </p>
      <div className="hb-hero-copy mt-7 flex flex-wrap items-center gap-2 [--hb-enter:160ms]">
        <ButtonLink cta={page.cta ?? site.headerCta} size="lg" />
      </div>
    </header>
  );
}

export function PageView({ page }: { page: Page }) {
  const heroFirst = page.sections[0]?.type === 'hero';
  return (
    <main id="main">
      {heroFirst ? null : <PageHeader page={page} />}
      {page.sections.map((section, i) => (
        <div key={`${section.type}-${i}`} data-section={section.type}>
          {renderSection(section, page)}
        </div>
      ))}
    </main>
  );
}
