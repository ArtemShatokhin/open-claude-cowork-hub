/**
 * "Procedures": the handbook's command panels. A vertical procedure list on the left (Kode Mono
 * labels, the active one carrying the filled thumb-tab and an accent tick), the force-mounted
 * figures on the right — Radix Tabs with forceMount, so every command is in the static HTML.
 */
import * as Tabs from '@radix-ui/react-tabs';
import type { CodePanelsSection as CodePanelsConfig } from '@/config/types';
import { CodeBlock } from '@/components/ui/code-block';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeader } from '@/components/ui/section-header';
import { cn } from '@/lib/utils';
import { HB, HB_Y } from '@/components/hb';

export function CodePanelsSection({ section }: { section: CodePanelsConfig }) {
  const headingId = `${section.id ?? 'code'}-title`;
  const single = section.panels.length === 1;
  return (
    <section id={section.id} aria-labelledby={headingId} className={HB_Y}>
      <div className={HB}>
        <Reveal>
          <SectionHeader heading={section.heading} id={headingId} />
        </Reveal>
        <Reveal className="mt-8">
          <Tabs.Root defaultValue="0" className="w-full">
            <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
              {!single ? (
                <Tabs.List aria-label={section.heading.title} className="border-border divide-border flex flex-col divide-y border-y lg:col-span-4">
                  {section.panels.map((p, i) => (
                    <Reveal key={i} delay={Math.min(i * 0.04, 0.24)}>
                      <Tabs.Trigger
                        value={String(i)}
                        className="group text-muted-foreground hover:bg-hover hover:text-foreground data-[state=active]:text-foreground flex min-h-11 w-full items-center gap-3 px-1 text-left text-sm"
                      >
                        <span aria-hidden className="bg-border group-data-[state=active]:bg-tab-bg inline-block size-2.5 shrink-0 rounded-[2px]" />
                        <span className="font-mono text-xs">{p.tab}</span>
                      </Tabs.Trigger>
                    </Reveal>
                  ))}
                </Tabs.List>
              ) : null}
              <div className={cn('min-w-0', single ? 'w-full max-w-3xl' : 'lg:col-span-8')}>
                {section.panels.map((p, i) => (
                  <Tabs.Content key={i} value={String(i)} forceMount data-kx-panel className="outline-none [.js_&]:mb-0">
                    <CodeBlock artifact={p} className="kx-shadow-card" />
                  </Tabs.Content>
                ))}
              </div>
            </div>
          </Tabs.Root>
        </Reveal>
      </div>
    </section>
  );
}
