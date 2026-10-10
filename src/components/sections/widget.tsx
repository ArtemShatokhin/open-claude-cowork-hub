'use client';

/**
 * The interactive widget slot. New (no kortix.com original). A site picks one implementation with
 * `widget.variant`; both are configured entirely from data:
 *  - `quiz`: questions whose options add scores to result keys; the top score wins.
 *  - `calculator`: monthly cost per option for a seat count, optionally with a price the reader types.
 * Without JavaScript the quiz lists every question and every possible answer, and the calculator
 * shows its table at the default seat count, so the HTML carries all the text.
 */
import { ArrowCounterClockwiseIcon } from '@phosphor-icons/react/dist/ssr';
import { useId, useMemo, useState } from 'react';
import type { CalculatorWidget, QuizWidget, WidgetSection as WidgetConfig } from '@/config/types';
import { Button, ButtonLink } from '@/components/ui/button';
import { Inline } from '@/components/ui/rich-text';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeader } from '@/components/ui/section-header';
import { COLUMN, SECTION_Y } from '@/lib/layout';
import { cn } from '@/lib/utils';

/* ── quiz ────────────────────────────────────────────────────────────────── */

function Quiz({ quiz }: { quiz: QuizWidget }) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [shown, setShown] = useState(false);
  const uid = useId();
  const complete = quiz.questions.every((q) => answers[q.id] !== undefined);

  const resultKey = useMemo(() => {
    const totals: Record<string, number> = {};
    for (const q of quiz.questions) {
      const opt = q.options[answers[q.id] ?? -1];
      for (const [k, v] of Object.entries(opt?.scores ?? {})) totals[k] = (totals[k] ?? 0) + v;
    }
    const keys = Object.keys(quiz.results);
    return keys.reduce((best, k) => ((totals[k] ?? 0) > (totals[best] ?? 0) ? k : best), keys[keys.length - 1]!);
  }, [answers, quiz]);
  const result = quiz.results[resultKey]!;

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
      <ol className="space-y-8 lg:col-span-7">
        {quiz.questions.map((q, qi) => (
          <li key={q.id}>
            <fieldset>
              <legend className="text-foreground text-base font-medium">
                <span className="text-muted-foreground mr-2 font-mono text-xs">{String(qi + 1).padStart(2, '0')}</span>
                {q.question}
              </legend>
              <div className="mt-3 grid gap-2 sm:grid-cols-[repeat(auto-fit,minmax(12rem,1fr))]">
                {q.options.map((o, oi) => {
                  const id = `${uid}-${q.id}-${oi}`;
                  const checked = answers[q.id] === oi;
                  return (
                    <label
                      key={id}
                      htmlFor={id}
                      className={cn(
                        'border-border hover:bg-hover flex cursor-pointer items-start gap-3 rounded-lg border px-4 py-3 text-sm transition-colors duration-fast active:scale-[0.998]',
                        checked && 'border-kortix-base-ink bg-card',
                      )}
                    >
                      <input
                        id={id}
                        type="radio"
                        name={`${uid}-${q.id}`}
                        checked={checked}
                        onChange={() => {
                          setAnswers((a) => ({ ...a, [q.id]: oi }));
                          setShown(false);
                        }}
                        className="accent-kortix-base mt-0.5 size-4 shrink-0"
                      />
                      <span className="text-foreground">{o.label}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>
          </li>
        ))}
      </ol>

      <div className="lg:col-span-5">
        <div className="border-border bg-card rounded-lg border p-6 lg:sticky lg:top-24" aria-live="polite">
          <div data-js-only>
            {shown ? (
              <div>
                <p className="text-kortix-base-ink font-mono text-xs uppercase">Your answer</p>
                <h3 className="text-foreground mt-3 text-xl font-medium tracking-tight text-balance">{result.title}</h3>
                <p className="text-muted-foreground mt-3 text-base leading-relaxed text-pretty">
                  <Inline text={result.body} />
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {result.cta ? <ButtonLink cta={result.cta} /> : null}
                  <Button
                    variant="ghost"
                    onClick={() => {
                      setAnswers({});
                      setShown(false);
                    }}
                  >
                    <ArrowCounterClockwiseIcon />
                    {quiz.resetLabel}
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <p className="text-muted-foreground text-sm">
                  {Object.keys(answers).length} of {quiz.questions.length} answered
                </p>
                <Button className="mt-4 w-full" size="lg" disabled={!complete} onClick={() => setShown(true)}>
                  {quiz.submitLabel}
                </Button>
              </div>
            )}
          </div>
          {/* No JavaScript: every possible answer, so the HTML carries the text. */}
          <noscript>
            <ul className="space-y-4">
              {Object.entries(quiz.results).map(([k, r]) => (
                <li key={k}>
                  <p className="text-foreground font-medium">{r.title}</p>
                  <p className="text-muted-foreground mt-1 text-sm">{r.body}</p>
                </li>
              ))}
            </ul>
          </noscript>
        </div>
      </div>
    </div>
  );
}

/* ── calculator ──────────────────────────────────────────────────────────── */

function Calculator({ calc }: { calc: CalculatorWidget }) {
  const [seats, setSeats] = useState(calc.seats.default);
  const [prices, setPrices] = useState<Record<string, number>>(() =>
    Object.fromEntries(calc.options.map((o) => [o.id, o.perSeat])),
  );
  const uid = useId();
  const money = (n: number) => `${calc.currency}${Math.round(n).toLocaleString('en-US')}`;
  const costs = calc.options.map((o) => ({ ...o, total: (prices[o.id] ?? o.perSeat) * seats + (o.flat ?? 0) }));
  const max = Math.max(1, ...costs.map((c) => c.total));

  return (
    <div className="border-border rounded-lg border">
      <div className="border-border flex flex-col gap-3 border-b p-5 sm:flex-row sm:items-center sm:gap-6 sm:p-6">
        <label htmlFor={`${uid}-seats`} className="text-foreground text-sm font-medium">
          {calc.seats.label}
        </label>
        <input
          id={`${uid}-seats`}
          type="range"
          min={calc.seats.min}
          max={calc.seats.max}
          value={seats}
          onChange={(e) => setSeats(Number(e.target.value))}
          className="accent-kortix-base w-full sm:max-w-sm"
        />
        <output htmlFor={`${uid}-seats`} className="text-foreground font-mono text-base tabular-nums">
          {seats}
        </output>
      </div>
      <ul className="divide-border divide-y">
        {costs.map((c) => (
          <li key={c.id} className={cn('grid gap-3 p-5 sm:grid-cols-12 sm:items-center sm:p-6', c.highlight && 'bg-card')}>
            <div className="sm:col-span-4">
              <p className="text-foreground text-sm font-medium">{c.label}</p>
              {c.note ? <p className="text-muted-foreground mt-1 text-xs">{c.note}</p> : null}
            </div>
            <div className="sm:col-span-3">
              {c.editable ? (
                <label className="text-muted-foreground flex items-center gap-2 text-xs">
                  {calc.currency}
                  <input
                    type="number"
                    min={0}
                    value={prices[c.id]}
                    onChange={(e) => setPrices((p) => ({ ...p, [c.id]: Math.max(0, Number(e.target.value)) }))}
                    className="border-border bg-popover text-foreground w-20 rounded-md border px-2 py-1 font-mono text-base tabular-nums"
                    aria-label={`${c.label}, price per seat`}
                  />
                  per seat
                </label>
              ) : (
                <p className="text-muted-foreground font-mono text-xs">
                  {money(c.perSeat)} per seat{c.flat ? ` + ${money(c.flat)}` : ''}
                </p>
              )}
            </div>
            <div className="flex items-center gap-3 sm:col-span-5">
              <span className="bg-muted h-2 min-w-0 flex-1 overflow-hidden rounded-full">
                <span
                  className={cn('block h-full origin-left rounded-full transition-transform duration-moderate ease-out', c.highlight ? 'bg-kortix-base' : 'bg-muted-foreground')}
                  style={{ transform: `scaleX(${c.total / max})` }}
                />
              </span>
              <span className="text-foreground w-24 shrink-0 text-right font-mono text-sm tabular-nums">
                {money(c.total)}
                <span className="text-muted-foreground text-xs">{calc.periodLabel}</span>
              </span>
            </div>
          </li>
        ))}
      </ul>
      {calc.footnote ? <p className="text-muted-foreground border-border border-t p-5 text-xs sm:p-6">{calc.footnote}</p> : null}
    </div>
  );
}

export function WidgetSection({ section }: { section: WidgetConfig }) {
  const headingId = `${section.id ?? 'widget'}-title`;
  return (
    <section id={section.id} aria-labelledby={headingId} className={cn(SECTION_Y, 'border-border border-y')}>
      <div className={COLUMN}>
        <SectionHeader heading={section.heading} id={headingId} />
        <Reveal className="mt-10 sm:mt-12">
          {section.widget.variant === 'quiz' ? <Quiz quiz={section.widget} /> : <Calculator calc={section.widget} />}
        </Reveal>
      </div>
    </section>
  );
}
