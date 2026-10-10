/**
 * The comparison as a specification datasheet: a table with a sticky criteria column, the
 * highlighted Kortix column pinned first and tinted with the accent top rule, criteria rows
 * numbered with mono codes. Horizontal scroll lives in the table's own box on phones.
 */
import { CheckIcon, MinusIcon, XIcon } from '@phosphor-icons/react/dist/ssr';
import type { ComparisonCell, ComparisonSection as ComparisonConfig } from '@/config/types';
import { ChapterHeader, HX, RHYTHM } from '@/components/ui/handbook';
import { Reveal } from '@/components/ui/reveal';
import { Inline } from '@/components/ui/rich-text';
import { cn, linkProps } from '@/lib/utils';

const MARK = {
  yes: { Icon: CheckIcon, label: 'Yes' },
  no: { Icon: XIcon, label: 'No' },
  partial: { Icon: MinusIcon, label: 'Partly' },
} as const;

function Cell({ cell, highlight }: { cell: ComparisonCell; highlight: boolean }) {
  const { text, mark } = typeof cell === 'string' ? { text: cell, mark: undefined } : cell;
  const m = mark ? MARK[mark] : null;
  return (
    <span className="flex items-start gap-2">
      {m ? (
        <m.Icon
          weight="bold"
          aria-hidden
          className={cn('mt-0.5 size-4 shrink-0', highlight && mark === 'yes' ? 'text-kortix-base-ink' : 'text-muted-foreground')}
        />
      ) : null}
      <span className={cn(highlight ? 'text-foreground' : 'text-muted-foreground')}>
        <Inline text={text} />
      </span>
    </span>
  );
}

export function ComparisonSection({ section, folio }: { section: ComparisonConfig; folio?: string }) {
  const headingId = `${section.id ?? 'comparison'}-title`;
  return (
    <section id={section.id} aria-labelledby={headingId} className={cn(HX, RHYTHM)}>
      <ChapterHeader heading={section.heading} id={headingId} folio={folio} />
      <Reveal className="mt-8">
        <div className="border-border overflow-x-auto rounded-sm border" tabIndex={0} role="region" aria-labelledby={headingId}>
          <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
            <thead>
              <tr>
                <th scope="col" className="border-border bg-background sticky left-0 z-10 w-32 border-r border-b p-3 align-bottom sm:w-44 sm:p-4">
                  <span className="text-muted-foreground font-mono text-xs uppercase tracking-[0.16em]">Criteria</span>
                </th>
                {section.columns.map((c) => (
                  <th
                    key={c.id}
                    scope="col"
                    className={cn(
                      'border-border border-b p-3 align-bottom font-medium sm:p-4',
                      c.highlight ? 'bg-card border-t-kortix-base border-t-2' : 'bg-background',
                    )}
                  >
                    {c.note ? (
                      <span className={cn('mb-1 block font-mono text-xs uppercase', c.highlight ? 'text-kortix-base-ink' : 'text-muted-foreground')}>
                        {c.note}
                      </span>
                    ) : null}
                    {c.href ? (
                      <a
                        {...linkProps({ href: c.href, nofollow: c.nofollow })}
                        className="text-foreground decoration-border hover:decoration-foreground inline-flex min-h-11 items-center px-1.5 underline decoration-1 underline-offset-4"
                      >
                        {c.label}
                      </a>
                    ) : (
                      <span className="text-foreground inline-flex min-h-11 items-center">{c.label}</span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row, ri) => (
                <tr key={row.label} className="group">
                  <th
                    scope="row"
                    className="border-border bg-background sticky left-0 z-10 border-r border-b p-3 align-top group-last:border-b-0 sm:p-4"
                  >
                    <span className="text-muted-foreground font-mono text-xs tabular-nums">{String(ri + 1).padStart(2, '0')}</span>
                    <span className="text-foreground mt-1 block font-medium">{row.label}</span>
                  </th>
                  {section.columns.map((c, i) => (
                    <td
                      key={c.id}
                      className={cn(
                        'border-border border-b p-3 align-top leading-relaxed group-last:border-b-0 sm:p-4',
                        c.highlight && 'bg-card',
                      )}
                    >
                      <Cell cell={row.cells[i] ?? ''} highlight={!!c.highlight} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {section.footnote ? (
          <p className="text-muted-foreground mt-4 max-w-2xl text-xs leading-relaxed">{section.footnote}</p>
        ) : null}
      </Reveal>
    </section>
  );
}
