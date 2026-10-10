/**
 * Ported from apps/web/src/features/marketing/landing/code-panels.tsx (CliSurface / SdkSurface and
 * SurfaceLink): titled code panels with a copy control and a footer link, here as tabs. Panels,
 * commands and links come from the config.
 */
import type { CodePanelsSection as CodePanelsConfig } from '@/config/types';
import { ArtifactTabs } from '@/components/ui/artifact-tabs';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeader } from '@/components/ui/section-header';
import { COLUMN, SECTION_Y } from '@/lib/layout';

export function CodePanelsSection({ section }: { section: CodePanelsConfig }) {
  const headingId = `${section.id ?? 'code'}-title`;
  return (
    <section id={section.id} aria-labelledby={headingId} className={SECTION_Y}>
      <div className={COLUMN}>
        <SectionHeader heading={section.heading} id={headingId} />
        <Reveal className="mt-10 max-w-4xl">
          <ArtifactTabs artifacts={section.panels} label={section.heading.title} placement="top" frameClassName="kx-shadow-card" />
        </Reveal>
      </div>
    </section>
  );
}
