/**
 * Renders one config page: the page header (h1 + lead) unless a hero opens the page, then every
 * section in config order, each handed its chapter folio. The section registry is the one place a
 * section type maps to a component.
 */
import type { ReactNode } from 'react';
import type { Page, Section } from '@/config/types';
import { ComparisonSection } from '@/components/sections/comparison';
import { FaqSection } from '@/components/sections/faq';
import { Hero } from '@/components/sections/hero';
import { LogoStrip } from '@/components/sections/logo-strip';
import { OpenSourceSection } from '@/components/sections/open-source';
import { ArtifactSection, CtaBand, ProseSection } from '@/components/sections/simple';
import { StackSection } from '@/components/sections/stack';
import { UseCasesSection } from '@/components/sections/use-cases';
import { ButtonLink } from '@/components/ui/button';
import { HX } from '@/components/ui/handbook';
import { Inline } from '@/components/ui/rich-text';
import { site } from '@/lib/config';
import { cn } from '@/lib/utils';

function renderSection(section: Section, page: Page, folio: string): ReactNode {
  switch (section.type) {
    case 'hero':
      return <Hero section={section} page={page} />;
    case 'logo-strip':
      return <LogoStrip section={section} folio={folio} />;
    case 'stack':
      return <StackSection section={section} folio={folio} />;
    case 'use-cases':
      return <UseCasesSection section={section} folio={folio} />;
    case 'comparison':
      return <ComparisonSection section={section} folio={folio} />;
    case 'open-source':
      return <OpenSourceSection section={section} folio={folio} />;
    case 'faq':
      return <FaqSection section={section} folio={folio} />;
    case 'cta':
      return <CtaBand section={section} />;
    case 'prose':
      return <ProseSection section={section} />;
    case 'artifact':
      return <ArtifactSection section={section} folio={folio} />;
    default:
      return null;
  }
}

/** Sub-page header: the same h1 / lead roles as the hero, without the plate. */
function PageHeader({ page }: { page: Page }) {
  return (
    <header className={cn(HX, 'pt-12 pb-4 sm:pt-16')}>
      <h1 className="hx-hero-line text-foreground max-w-3xl text-4xl font-medium tracking-tight text-balance [--hx-enter:0ms] sm:text-5xl">
        {page.h1}
      </h1>
      <p
        data-lead
        className="hx-hero-line text-muted-foreground mt-6 max-w-2xl text-base leading-relaxed text-pretty [--hx-enter:100ms] sm:text-lg"
      >
        <Inline text={page.lead} />
      </p>
      <div className="hx-hero-line mt-7 flex flex-wrap items-center gap-2.5 [--hx-enter:160ms]">
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
          {renderSection(section, page, String(i + 1).padStart(2, '0'))}
        </div>
      ))}
    </main>
  );
}
