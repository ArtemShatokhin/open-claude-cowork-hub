/**
 * "What a session hands back": session receipts. Three cards in a ruled row, each with an
 * outlined mono tag chip, a heading-face headline, the receipt (a work-product artifact as
 * ruled rows — checks with toned dots, or the contract sheet as a hairline table), and a mono
 * footer line. A left spine rule marks each receipt; not a wheel, not a tabbed grid.
 */
import type { UseCasesSection as UseCasesConfig, UseCaseArtifact } from '@/config/types';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeader } from '@/components/ui/section-header';
import { cn } from '@/lib/utils';
import { HB, HB_Y } from '@/components/hb';

const TONE_DOT: Record<string, string> = {
  up: 'bg-kortix-green',
  down: 'bg-kortix-red',
  warn: 'bg-kortix-yellow',
  info: 'bg-muted-foreground',
};

function ChecksFigure({ artifact }: { artifact: UseCaseArtifact & { kind: 'checks' } }) {
  return (
    <ol className="border-border divide-border divide-y border-t">
      {artifact.items.map((item) => (
        <li key={item.label} className="flex items-baseline justify-between gap-3 py-2">
          <span className="text-muted-foreground flex items-baseline gap-2 text-sm">
            <span aria-hidden className={cn('inline-block size-1.5 shrink-0 translate-y-[-2px] rounded-full', TONE_DOT[item.tone])} />
            {item.label}
          </span>
          <span className="text-foreground-strong text-sm font-medium tabular-nums">{item.value}</span>
        </li>
      ))}
    </ol>
  );
}

function SheetFigure({ artifact }: { artifact: UseCaseArtifact & { kind: 'sheet' } }) {
  return (
    <div className="border-border border-t">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr>
            {artifact.columns.map((c) => (
              <th key={c} scope="col" className="text-muted-foreground border-b py-2 pr-3 text-xs font-medium">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {artifact.rows.map((row) => (
            <tr key={row.cells.join()}>
              {row.cells.map((cell, i) => {
                const toned = artifact.toneColumn === i && row.tone;
                return (
                  <td
                    key={i}
                    className={cn(
                      'border-border border-b py-2 pr-3 leading-relaxed',
                      i === 0 ? 'text-foreground-strong' : 'text-muted-foreground',
                      toned && row.tone === 'up' && 'text-kortix-green',
                      toned && row.tone === 'down' && 'text-kortix-red',
                      toned && row.tone === 'warn' && 'text-kortix-orange',
                      row.total && 'text-foreground-strong font-medium',
                    )}
                  >
                    {cell}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function UseCasesSection({ section }: { section: UseCasesConfig }) {
  const headingId = `${section.id ?? 'use-cases'}-title`;
  return (
    <section id={section.id} aria-labelledby={headingId} className={HB_Y}>
      <div className={HB}>
        <SectionHeader heading={section.heading} id={headingId} aside={<span className="text-cap hidden font-mono text-xs lg:block">{section.artifactLabel}</span>} />
        <Reveal delay={0.05} className="mt-8">
          <ul className="grid gap-8 md:grid-cols-3 md:gap-6">
            {section.cards.map((card) => (
              <li key={card.id} className="border-border flex min-w-0 flex-col gap-3 border-l-2 pl-4 md:pl-5">
                <span className="text-muted-foreground inline-flex w-fit items-center rounded-[3px] border border-border px-2 font-mono text-xs uppercase">
                  {card.tag}
                </span>
                <h3 className="text-foreground-strong text-lg leading-snug text-balance">{card.headline}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-pretty">{card.body}</p>
                <figure className="mt-auto min-w-0">
                  <figcaption className="text-cap truncate font-mono text-xs">{card.artifact.file}</figcaption>
                  {card.artifact.kind === 'checks' ? <ChecksFigure artifact={card.artifact} /> : null}
                  {card.artifact.kind === 'sheet' ? <SheetFigure artifact={card.artifact} /> : null}
                  <p className="border-border text-cap mt-2 border-t pt-2 font-mono text-xs">{card.artifact.footer}</p>
                </figure>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
