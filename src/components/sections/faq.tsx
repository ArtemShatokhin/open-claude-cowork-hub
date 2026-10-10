/**
 * The FAQ as a numbered, always-open dialogue: each item a ruled row, a mono Q-id and the question
 * left, the answer right. No accordion, so there are no buttons to mis-target on a phone. Adds the
 * FAQPage JSON-LD for search and answer engines.
 */
import type { FaqSection as FaqConfig } from '@/config/types';
import { ChapterHeader, HX, RHYTHM } from '@/components/ui/handbook';
import { Reveal } from '@/components/ui/reveal';
import { Inline } from '@/components/ui/rich-text';
import { inlineToPlain } from '@/lib/markdown';
import { cn } from '@/lib/utils';

export function FaqSection({ section, folio }: { section: FaqConfig; folio?: string }) {
  const headingId = `${section.id ?? 'faq'}-title`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: section.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: inlineToPlain(item.answer) },
    })),
  };
  return (
    <section id={section.id} aria-labelledby={headingId} className={cn(HX, RHYTHM)}>
      <ChapterHeader heading={section.heading} id={headingId} folio={folio} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <dl className="border-border mt-10 border-t">
        {section.items.map((item, i) => (
          <Reveal key={item.id} delay={i * 0.03}>
            <div className="border-border grid gap-3 border-b py-6 sm:grid-cols-12 sm:gap-8">
              <dt className="min-w-0 sm:col-span-5">
                <span className="text-kortix-base-ink font-mono text-xs tabular-nums">Q{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-foreground mt-2 text-base font-medium tracking-tight text-balance">{item.question}</h3>
              </dt>
              <dd className="text-muted-foreground min-w-0 text-base leading-relaxed text-pretty sm:col-span-7">
                <Inline text={item.answer} />
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
