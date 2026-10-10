/**
 * The key strip: an h2 label and one hairline-divided row per glyph group, mono captions.
 * Monochrome glyphs (currentColor), so the strip carries no brand colour.
 */
import type { LogoStripSection } from '@/config/types';
import { Glyph } from '@/components/ui/glyph';
import { Eyebrow, HX, Rule } from '@/components/ui/handbook';
import { cn } from '@/lib/utils';
import { GLYPHS } from '@/lib/glyphs';

export function LogoStrip({ section, folio }: { section: LogoStripSection; folio?: string }) {
  return (
    <section id={section.id} aria-label={section.label} className="border-border border-t">
      <div className={cn(HX, 'py-10 sm:py-12')}>
        <div className="flex items-center gap-3">
          {folio ? <span className="text-kortix-base-ink font-mono text-xs tabular-nums">§ {folio}</span> : null}
          <Rule className="min-w-4 flex-1" />
        </div>
        <h2 className="text-muted-foreground mt-4 font-mono text-xs font-normal uppercase tracking-[0.16em]">{section.label}</h2>
        <div className="border-border mt-6 grid border-t sm:grid-cols-2">
          {section.rows.map((row) => (
            <div
              key={row.label}
              className="border-border flex flex-col gap-3 border-b py-5 sm:border-r sm:py-6 sm:pr-8 sm:last:border-r-0 sm:odd:pl-0 sm:even:pl-8"
            >
              <Eyebrow>{row.label}</Eyebrow>
              <ul className="text-foreground flex flex-wrap items-center gap-x-6 gap-y-3">
                {row.glyphs.map((id) => (
                  <li key={id} title={GLYPHS[id].label} className="flex items-center gap-1.5">
                    <Glyph id={id} className="size-6" />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
