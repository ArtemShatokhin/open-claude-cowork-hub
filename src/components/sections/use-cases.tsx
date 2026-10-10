/**
 * Use cases as a procedure grid: two-column spec cards, each with a title block (mono tag + NN),
 * a headline, the body, and its work-product artifact as a mini plate. Rendered statically (no wheel).
 */
import type { UseCaseArtifact, UseCasesSection as UseCasesConfig, UseCaseTone } from '@/config/types';
import { ChapterHeader, Eyebrow, HX, RHYTHM } from '@/components/ui/handbook';
import { Reveal } from '@/components/ui/reveal';
import { cn } from '@/lib/utils';

const TONE_DOT: Record<UseCaseTone, string> = {
  up: 'bg-kortix-green',
  down: 'bg-kortix-red',
  warn: 'bg-kortix-orange',
  info: 'bg-kortix-blue',
};

function ToneDot({ tone }: { tone?: UseCaseTone }) {
  return tone ? <span aria-hidden className={cn('mr-2 inline-block size-1.5 shrink-0 rounded-[1px] align-middle', TONE_DOT[tone])} /> : null;
}

function MiniArtifact({ artifact }: { artifact: UseCaseArtifact }) {
  return (
    <div className="border-border bg-pane mt-auto w-full min-w-0 overflow-hidden rounded-sm border">
      <div className="border-border bg-card flex items-center gap-2 border-b px-3 py-1.5 font-mono text-xs">
        <span className="text-muted-foreground min-w-0 truncate">{artifact.file}</span>
      </div>
      {artifact.kind === 'sheet' ? (
        <table className="w-full min-w-0 table-fixed border-collapse font-mono text-xs">
          <thead>
            <tr className="border-border text-muted-foreground border-b">
              {artifact.columns.map((c, i) => (
                <th
                  key={c}
                  style={{ width: artifact.widths[i] }}
                  className={cn('truncate px-3 py-1.5 font-normal uppercase', artifact.aligns[i] === 'right' ? 'text-right' : 'text-left')}
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {artifact.rows.map((row) => (
              <tr key={row.cells.join('|')} className={cn('border-border border-b last:border-b-0', row.total && 'bg-card/60')}>
                {row.cells.map((cell, i) => {
                  const toneColumn = artifact.columns.length - 1;
                  return (
                    <td
                      key={`${i}-${cell}`}
                      className={cn(
                        'truncate px-3 py-1.5 tabular-nums',
                        artifact.aligns[i] === 'right' ? 'text-right' : 'text-left',
                        row.total || i === 0 ? 'text-foreground' : 'text-muted-foreground',
                        row.total && 'font-medium',
                      )}
                    >
                      {i === toneColumn && !row.total ? <ToneDot tone={row.tone} /> : null}
                      {cell}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      ) : artifact.kind === 'diff' ? (
        <div className="py-1.5 font-mono text-xs">
          {artifact.lines.map((line) => {
            const sign = line[0] === '+' ? '+' : line[0] === '-' ? '-' : ' ';
            return (
              <div key={line} className={cn('px-3 py-0.5', sign === '+' && 'text-kortix-green', sign === '-' && 'text-kortix-red')}>
                <span aria-hidden className="select-none opacity-70">
                  {sign}
                </span>
                {line.slice(1)}
              </div>
            );
          })}
          <p className="text-muted-foreground px-3 pt-1.5">{artifact.stat}</p>
        </div>
      ) : (
        <div className="py-0.5">
          {artifact.items.map((item) => (
            <div key={item.label} className="border-border flex items-center gap-2 border-b px-3 py-1.5 last:border-b-0">
              <ToneDot tone={item.tone} />
              <span className="text-foreground min-w-0 flex-1 truncate text-xs">{item.label}</span>
              <span className="text-muted-foreground shrink-0 font-mono text-xs tabular-nums">{item.value}</span>
            </div>
          ))}
        </div>
      )}
      <div className="border-border text-muted-foreground border-t px-3 py-1.5 text-xs leading-snug">{artifact.footer}</div>
    </div>
  );
}

export function UseCasesSection({ section, folio }: { section: UseCasesConfig; folio?: string }) {
  const headingId = `${section.id ?? 'use-cases'}-title`;
  return (
    <section id={section.id} aria-labelledby={headingId} className={cn(HX, RHYTHM)}>
      <ChapterHeader heading={section.heading} id={headingId} folio={folio} />
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {section.cards.map((card, i) => (
          <Reveal key={card.id} delay={i * 0.04} className="h-full">
            <article className="border-border bg-pane flex h-full min-w-0 flex-col rounded-sm border p-5">
              <div className="border-border flex items-center justify-between gap-3 border-b pb-3">
                <Eyebrow>{card.tag}</Eyebrow>
                <span className="text-muted-foreground font-mono text-xs tabular-nums">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="text-foreground mt-4 text-lg font-semibold tracking-tight text-balance">{card.headline}</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed text-pretty">{card.body}</p>
              <div className="mt-5 flex flex-1 flex-col">
                <MiniArtifact artifact={card.artifact} />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
