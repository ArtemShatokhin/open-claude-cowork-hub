/**
 * The FAQ as an open chapter list: single column, each item a filled thumb-tab square, the
 * question in the heading face, the answer on the reading measure, a hairline between items.
 * Always open — no accordion, no numbering, no two columns — so every answer is in the static
 * HTML for answer engines. FAQPage JSON-LD is emitted as the starter did.
 */
import type { FaqSection as FaqConfig } from '@/config/types';
import { Inline } from '@/components/ui/rich-text';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeader } from '@/components/ui/section-header';
import { inlineToPlain } from '@/lib/markdown';
import { cn } from '@/lib/utils';
import { HB, HB_Y } from '@/components/hb';

export function FaqSection({ section }: { section: FaqConfig }) {
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
    <section id={section.id} aria-labelledby={headingId} className={cn(HB, HB_Y)}>
      <Reveal>
        <SectionHeader heading={section.heading} id={headingId} />
      </Reveal>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <ul className="divide-border mt-6 divide-y">
        {section.items.map((item, i) => (
          <li key={item.id} id={item.id} className="py-6">
            <Reveal delay={Math.min(i * 0.04, 0.24)}>
              <h3 className="text-foreground-strong flex items-start gap-3 text-base leading-snug text-balance sm:text-lg">
                <span aria-hidden className="bg-tab-bg mt-[0.45rem] inline-block size-2.5 shrink-0 rounded-[2px]" />
                {item.question}
              </h3>
              <p className="text-muted-foreground mt-3 ml-[1.375rem] max-w-2xl text-base leading-relaxed text-pretty break-words">
                <Inline text={item.answer} />
              </p>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
