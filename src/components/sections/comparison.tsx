/**
 * The comparison drawn as criterion bands: a head strip of product labels (the recommended
 * product first, on an accent chip), then one ruled band per criterion. In each band the
 * criterion reads in the heading face at the left; the recommended cell is the prominent ink
 * line with filled/hollow check squares, rivals are smaller muted lines with hairline
 * separators. At 390px each band stacks as rows (criterion, recommended line, rival lines
 * prefixed with their product label) — no sideways scroller, no min-w table. Every line keeps
 * its mono product label at every width (fix-forward 2026-10-19: the labels were hidden from
 * 1024px up, so a stacked rival line read 'No / No / Yes' with nothing naming the product).
 */
import { CheckIcon, XIcon } from '@phosphor-icons/react/dist/ssr';
import type { ComparisonCell, ComparisonSection as ComparisonConfig } from '@/config/types';
import { Inline } from '@/components/ui/rich-text';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeader } from '@/components/ui/section-header';
import { cn, linkProps } from '@/lib/utils';
import { HB, HB_Y } from '@/components/hb';

const MARK = {
  yes: { Icon: CheckIcon, label: 'Yes' },
  no: { Icon: XIcon, label: 'No' },
  partial: { Icon: XIcon, label: 'Partly' },
} as const;

function MarkIcon({ mark }: { mark?: 'yes' | 'no' | 'partial' }) {
  if (!mark) return null;
  const { Icon, label } = MARK[mark];
  return (
    <span className="inline-flex shrink-0 items-center">
      <span
        aria-hidden
        className={cn(
          'inline-flex size-3 items-center justify-center rounded-[2px]',
          mark === 'yes' ? 'bg-tab-bg text-tab-ink' : 'border-border text-muted-foreground border',
        )}
      >
        <Icon weight="bold" className="size-2" />
      </span>
      <span className="sr-only">{label}</span>
    </span>
  );
}

function CellText({ cell, prominent }: { cell: ComparisonCell; prominent?: boolean }) {
  const { text, mark } = typeof cell === 'string' ? { text: cell, mark: undefined } : cell;
  return (
    <span className={cn('flex items-start gap-2', prominent ? 'text-foreground-strong' : 'text-muted-foreground')}>
      <MarkIcon mark={mark} />
      <span className={cn('min-w-0 leading-relaxed', prominent ? 'text-base' : 'text-sm')}>
        <Inline text={text} />
      </span>
    </span>
  );
}

export function ComparisonSection({ section }: { section: ComparisonConfig }) {
  const headingId = `${section.id ?? 'comparison'}-title`;
  const highlight = section.columns.find((c) => c.highlight);
  const rivals = section.columns.filter((c) => !c.highlight);

  return (
    <section id={section.id} aria-labelledby={headingId} className={HB_Y}>
      <div className={HB}>
        <Reveal>
          <SectionHeader heading={section.heading} id={headingId} />
        </Reveal>

        <Reveal className="mt-8">
          <div className="border-border overflow-hidden rounded-lg border">
            {/* product head strip */}
            <div className="border-border bg-surface flex flex-wrap items-center gap-x-5 gap-y-2 border-b px-4 py-3 sm:px-5">
              {highlight ? (
                <span className="bg-tab-bg text-tab-ink inline-flex min-h-11 items-center rounded-[3px] px-3 text-sm font-medium">
                  {highlight.href ? (
                    <a {...linkProps({ href: highlight.href, nofollow: highlight.nofollow })} className="inline-flex min-h-11 min-w-11 items-center justify-center">
                      {highlight.label}
                    </a>
                  ) : (
                    highlight.label
                  )}
                </span>
              ) : null}
              {rivals.map((c) => (
                <span key={c.id} className="inline-flex flex-wrap items-center gap-2">
                  <span className="border-border hidden h-3 w-px sm:block" aria-hidden />
                  {c.href ? (
                    <a
                      {...linkProps({ href: c.href, nofollow: c.nofollow })}
                      className="text-muted-foreground hover:text-foreground inline-flex min-h-11 min-w-11 items-center justify-center text-sm underline decoration-border underline-offset-4"
                    >
                      {c.label}
                    </a>
                  ) : (
                    <span className="text-muted-foreground inline-flex min-h-11 items-center text-sm">{c.label}</span>
                  )}
                  {c.note ? <span className="text-muted-foreground text-xs">{c.note}</span> : null}
                </span>
              ))}
            </div>

            {/* criterion bands */}
            <ol className="divide-border divide-y">
              {section.rows.map((row, i) => {
                const recommended = highlight ? row.cells[section.columns.indexOf(highlight)] ?? '' : '';
                const rivalCells = section.columns
                  .map((c, i) => ({ col: c, cell: row.cells[i] ?? '' }))
                  .filter((x) => !x.col.highlight);
                return (
                  <li key={row.label}>
                    <Reveal
                      delay={Math.min(i * 0.04, 0.24)}
                      className="grid gap-3 px-4 py-5 sm:grid-cols-12 sm:gap-5 sm:px-5"
                    >
                    <p className="hb-heading text-foreground-strong text-base sm:col-span-4 lg:col-span-3">{row.label}</p>
                    <div className="sm:col-span-8 lg:col-span-4">
                      <CellText cell={recommended} prominent />
                      <span className="text-caption mt-1 block font-mono text-xs">{highlight?.label}</span>
                    </div>
                    <ul className="border-border divide-border divide-y border-t pt-1 sm:col-span-12 lg:col-span-5 lg:border-t-0 lg:pt-0">
                      {rivalCells.map((x) => (
                        <li key={x.col.id} className="flex flex-wrap items-baseline gap-x-3 gap-y-1 py-2 lg:py-1.5 lg:first:pt-0 lg:last:pb-0">
                          <span className="text-caption w-full shrink-0 font-mono text-xs">{x.col.label}</span>
                          <span className="min-w-0 flex-1">
                            <CellText cell={x.cell} />
                          </span>
                        </li>
                      ))}
                    </ul>
                    </Reveal>
                  </li>
                );
              })}
            </ol>
          </div>
          {section.footnote ? (
            <p className="text-muted-foreground mt-4 max-w-2xl text-xs leading-relaxed">{section.footnote}</p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
