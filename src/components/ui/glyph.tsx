/** A monochrome brand glyph from src/lib/glyphs.ts. Decorative: the label sits beside it or in the title. */
import { GLYPHS, type GlyphId } from '@/lib/glyphs';
import { cn } from '@/lib/utils';

export function Glyph({ id, className, title }: { id: GlyphId; className?: string; title?: boolean }) {
  const g = GLYPHS[id];
  return (
    <svg
      viewBox={g.viewBox}
      xmlns="http://www.w3.org/2000/svg"
      className={cn('size-6 shrink-0', className)}
      role={title ? 'img' : undefined}
      aria-label={title ? g.label : undefined}
      aria-hidden={title ? undefined : true}
      fill="currentColor"
    >
      {title ? <title>{g.label}</title> : null}
      {g.shapes.map((s, i) =>
        'rect' in s ? (
          <rect key={i} x={s.rect.x} y={s.rect.y} width={s.rect.w} height={s.rect.h} rx={s.rect.rx} />
        ) : (
          <path key={i} d={s.d} fillRule="evenodd" className={s.knockout ? 'fill-background' : undefined} />
        ),
      )}
    </svg>
  );
}

/** The site's own mark from the config: one path in a 24x24 box. */
export function SiteMark({ path, className }: { path: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={cn('size-6 shrink-0', className)} fill="currentColor">
      <path d={path} fillRule="evenodd" />
    </svg>
  );
}
