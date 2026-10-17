/**
 * Ported from apps/web/src/features/marketing/landing/logo-strip.tsx: two labelled rows of marks,
 * side by side on large screens. Changes: rows and glyphs come from the config; the marks are
 * monochrome (currentColor) so the strip carries no brand colour literal; the label is the kit's
 * text-xs mono eyebrow instead of a 10px off-scale size; the OpenRouter PNG is dropped.
 */
import type { LogoStripSection } from '@/config/types';
import { Glyph } from '@/components/ui/glyph';
import { Eyebrow } from '@/components/ui/section-header';
import { COLUMN } from '@/lib/layout';
import { cn } from '@/lib/utils';
import { GLYPHS } from '@/lib/glyphs';

export function LogoStrip({ section }: { section: LogoStripSection }) {
  return (
    <section id={section.id} aria-label={section.label} className="border-border border-y py-12 sm:py-14">
      <div className={cn(COLUMN, 'flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between')}>
        {section.rows.map((row) => (
          <div key={row.label} className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <Eyebrow className="shrink-0">{row.label}</Eyebrow>
            <ul className="text-foreground flex flex-wrap items-center gap-x-7 gap-y-4">
              {row.glyphs.map((id) => (
                <li key={id} title={GLYPHS[id].label}>
                  <Glyph id={id} title className="size-6" />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
