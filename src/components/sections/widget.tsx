'use client';

/**
 * The plan ladder. A ruled top bar carries the seat slider and its output; the options are cards
 * in a two-column grid — label, mono note, a scaleX bar and the total in tabular numerals; the
 * highlighted option carries the accent top rule. The server HTML renders the ladder at the
 * default seat count, so the numbers read without JavaScript. Form controls keep a 40px target.
 */
import { ArrowCounterClockwiseIcon } from '@phosphor-icons/react/dist/ssr';
import { useId, useMemo, useState } from 'react';
import type { CalculatorWidget, QuizWidget, WidgetSection as WidgetConfig } from '@/config/types';
import { Button, ButtonLink } from '@/components/ui/button';
import { Inline } from '@/components/ui/rich-text';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeader, Tab } from '@/components/ui/section-header';
import { cn } from '@/lib/utils';
import { HB, HB_Y } from '@/components/hb';

function Quiz({ quiz }: { quiz: QuizWidget }) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [shown, setShown] = useState(false);
  const [nudged, setNudged] = useState(false);
  const uid = useId();
  const open = quiz.questions.filter((q) => answers[q.id] === undefined);
  const complete = open.length === 0;

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
      <ol className="space-y-7 lg:col-span-7">
        {quiz.questions.map((q, qi) => (
          <li key={q.id}>
            <fieldset>
              <legend className="text-foreground-strong flex items-center gap-3 text-base font-medium">
                <Tab />
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
                        'border-border hover:bg-hover flex min-h-11 cursor-pointer items-center gap-3 rounded-md border px-3 py-2 text-sm transition-colors duration-fast',
                        checked && 'border-rule-accent bg-card',
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
                        className="accent-kortix-base size-4 shrink-0"
                      />
                      <span className="text-foreground">{o.label}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>
            <span className="sr-only">{`question ${qi + 1}`}</span>
          </li>
        ))}
      </ol>
      <div className="lg:col-span-5">
        <div className="border-border bg-surface rounded-lg border p-5 lg:sticky lg:top-24" aria-live="polite">
          <div data-js-only>
            {shown ? (
              <div>
                <p className="text-kortix-base-ink font-mono text-xs uppercase">Your answer</p>
                <h3 className="text-foreground-strong mt-3 text-xl tracking-tight text-balance">{result.title}</h3>
                <p className="text-muted-foreground mt-3 text-base leading-relaxed text-pretty">
                  <Inline text={result.body} />
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
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
                  {nudged && !complete ? `${open.length} still to answer` : `${Object.keys(answers).length} of ${quiz.questions.length} answered`}
                </p>
                <Button
                  className="mt-4 w-full"
                  size="lg"
                  onClick={() => {
                    if (complete) return setShown(true);
                    setNudged(true);
                    document.getElementById(`${uid}-${open[0]!.id}-0`)?.focus();
                  }}
                >
                  {quiz.submitLabel}
                </Button>
              </div>
            )}
          </div>
          <noscript>
            <ul className="space-y-4">
              {Object.entries(quiz.results).map(([k, r]) => (
                <li key={k}>
                  <p className="text-foreground-strong font-medium">{r.title}</p>
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

function Calculator({ calc }: { calc: CalculatorWidget }) {
  const [seats, setSeats] = useState(calc.seats.default);
  const [prices, setPrices] = useState<Record<string, number>>(() => Object.fromEntries(calc.options.map((o) => [o.id, o.perSeat])));
  const uid = useId();
  const money = (n: number) => `${calc.currency}${Math.round(n).toLocaleString('en-US')}`;
  const costs = calc.options.map((o) => ({ ...o, total: (prices[o.id] ?? o.perSeat) * seats + (o.flat ?? 0) }));
  const max = Math.max(1, ...costs.map((c) => c.total));

  return (
    <div className="border-border rounded-lg border">
      <div className="border-border flex flex-col gap-3 border-b px-4 py-3 sm:flex-row sm:items-center sm:gap-6 sm:px-5">
        <label htmlFor={`${uid}-seats`} className="text-foreground-strong min-h-11 flex items-center text-sm font-medium">
          {calc.seats.label}
        </label>
        <input
          id={`${uid}-seats`}
          type="range"
          min={calc.seats.min}
          max={calc.seats.max}
          value={seats}
          onChange={(e) => setSeats(Number(e.target.value))}
          className="accent-kortix-base h-11 w-full sm:max-w-sm"
        />
        <output htmlFor={`${uid}-seats`} className="text-foreground-strong min-h-11 flex items-center font-mono text-base tabular-nums">
          {seats}
        </output>
      </div>
      <ul className="grid gap-3 p-3 sm:grid-cols-2 sm:p-4">
        {costs.map((c) => (
          <li key={c.id} className={cn('border-border relative overflow-hidden rounded-md border p-4', c.highlight && 'bg-card')}>
            {c.highlight ? <span aria-hidden className="bg-rule-accent absolute inset-x-0 top-0 h-0.5" /> : null}
            <h3 className="text-foreground-strong text-sm font-medium">{c.label}</h3>
            {c.note ? <p className="text-muted-foreground mt-1 text-xs leading-relaxed">{c.note}</p> : null}
            <div className="mt-3 flex items-center gap-3">
              <span className="bg-muted h-2 min-w-0 flex-1 overflow-hidden rounded-full">
                <span
                  className={cn('block h-full origin-left rounded-full transition-transform duration-moderate ease-out', c.highlight ? 'bg-tab-bg' : 'bg-muted-foreground')}
                  style={{ transform: `scaleX(${c.total / max})` }}
                />
              </span>
              <span className="text-foreground-strong w-24 shrink-0 text-right font-mono text-sm tabular-nums">
                {money(c.total)}
                <span className="text-muted-foreground text-xs">{calc.periodLabel}</span>
              </span>
            </div>
          </li>
        ))}
      </ul>
      {calc.footnote ? <p className="border-border text-muted-foreground border-t px-4 py-4 text-xs leading-relaxed sm:px-5">{calc.footnote}</p> : null}
    </div>
  );
}

export function WidgetSection({ section }: { section: WidgetConfig }) {
  const headingId = `${section.id ?? 'widget'}-title`;
  return (
    <section id={section.id} aria-labelledby={headingId} className={cn(HB_Y, 'border-border border-b')}>
      <div className={HB}>
        <Reveal>
          <SectionHeader heading={section.heading} id={headingId} />
        </Reveal>
        <Reveal className="mt-8">
          {section.widget.variant === 'quiz' ? <Quiz quiz={section.widget} /> : <Calculator calc={section.widget} />}
        </Reveal>
      </div>
    </section>
  );
}
