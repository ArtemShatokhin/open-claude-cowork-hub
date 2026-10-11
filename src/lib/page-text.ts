/**
 * The text of a page as markdown: the `.md` twin (/index.md, /<slug>.md) and the body of
 * llms-full.txt. One serializer per section type, so every string the HTML renders is also in the
 * twin. Decorative-only content (glyph strips) is written as its accessible label.
 */
import type { Artifact, ComparisonCell, Page, Section, SectionHeading, SiteConfig, UseCaseArtifact } from '../config/types';
import { GLYPHS } from './glyphs';
import { inlineToPlain } from './markdown';
import { pageUrl } from './site';

const fence = (a: Artifact) => {
  const lang = a.lang === 'text' ? '' : a.lang;
  const src = a.source ? `\n\nSource: ${a.source}` : '';
  return `\`${a.file}\`\n\n\`\`\`${lang}\n${a.lines.join('\n')}\n\`\`\`${src}`;
};

const heading = (h: SectionHeading) =>
  [h.eyebrow ? `_${h.eyebrow}_` : null, `## ${h.title}`, h.sub ?? null].filter(Boolean).join('\n\n');

const cellText = (c: ComparisonCell) => (typeof c === 'string' ? c : c.text).replace(/\|/g, '\\|');

const link = (l: { label: string; href: string }, site: SiteConfig) =>
  `[${l.label}](${l.href.startsWith('/') ? `https://${site.domain}${l.href}` : l.href.startsWith('#') ? `https://${site.domain}/${l.href}` : l.href})`;

/** A use-case card's work-product plate as markdown: the sheet rows, the diff
 *  or the checks the HTML renders, so the twin carries every string. */
const useCaseArtifact = (a: UseCaseArtifact): string => {
  if (a.kind === 'sheet') {
    const head = `| ${a.columns.join(' | ')} |`;
    const rule = `| ${a.columns.map(() => '---').join(' | ')} |`;
    const rows = a.rows.map(
      (r) => `| ${r.cells.map((c) => c.replace(/\|/g, '\\|')).join(' | ')} |`,
    );
    return [head, rule, ...rows].join('\n');
  }
  if (a.kind === 'diff') {
    return `\`\`\`diff\n${a.lines.join('\n')}\n\`\`\`\n\n${a.stat}`;
  }
  return a.items.map((i) => `- ${i.label}: ${i.value}`).join('\n');
};

function section(s: Section, site: SiteConfig): string {
  switch (s.type) {
    case 'hero':
      return [
        s.eyebrow ? [s.eyebrow.lead, ...(s.eyebrow.rivals ?? []).map((r) => r.label)].join(' ') : null,
        s.tagline ? `**${s.tagline}**` : null,
        ...s.artifacts.map(fence),
        s.proof ?? null,
        s.ctas.map((c) => link(c, site)).join(' · '),
        s.trust ?? null,
      ]
        .filter(Boolean)
        .join('\n\n');
    case 'logo-strip':
      // A site's own logo-strip may render `label` as a visible <h2> (the kit's
      // "key strip"); the starter renders it as the section's accessible name.
      // Emit it either way so the twin carries every string the HTML renders.
      return [`## ${s.label}`, s.rows.map((r) => `- ${r.label}: ${r.glyphs.join(', ')}`).join('\n')].join('\n\n');
    case 'stack':
      return [
        heading(s.heading),
        ...s.layers.map((l, i) => `### ${i + 1}. ${l.title}\n\n${l.body}\n\n${fence(l.artifact)}`),
      ].join('\n\n');
    case 'comparison': {
      const head = `| | ${s.columns.map((c) => c.label + (c.highlight ? ' (recommended)' : '')).join(' | ')} |`;
      const rule = `| --- | ${s.columns.map(() => '---').join(' | ')} |`;
      const rows = s.rows.map((r) => `| ${r.label} | ${r.cells.map(cellText).join(' | ')} |`);
      return [heading(s.heading), [head, rule, ...rows].join('\n'), s.footnote ?? null].filter(Boolean).join('\n\n');
    }
    case 'widget': {
      const w = s.widget;
      if (w.variant === 'quiz') {
        const qs = w.questions.map((q, i) => `${i + 1}. ${q.question} (${q.options.map((o) => o.label).join(' / ')})`);
        const rs = Object.values(w.results).map((r) => `- **${r.title}**: ${r.body}`);
        return [heading(s.heading), qs.join('\n'), 'Possible answers:', rs.join('\n')].join('\n\n');
      }
      const rows = w.options.map(
        (o) => `- ${o.label}: ${w.currency}${o.perSeat} per seat${o.flat ? ` + ${w.currency}${o.flat}` : ''}${o.note ? ` (${o.note})` : ''}`,
      );
      return [heading(s.heading), `${w.seats.label}: ${w.seats.default} by default.`, rows.join('\n'), w.footnote ?? null]
        .filter(Boolean)
        .join('\n\n');
    }
    case 'open-source':
      return [
        `**${s.stars.value.toLocaleString('en-US')}${s.stars.suffix ?? ''}** ${s.stars.caption}`,
        `## ${s.title}`,
        s.links.map((l) => link(l, site)).join(' · '),
      ].join('\n\n');
    case 'faq':
      return [heading(s.heading), ...s.items.map((i) => `### ${i.question}\n\n${i.answer}`)].join('\n\n');
    case 'cta':
      return [`## ${s.title}`, s.sub ?? null, s.ctas.map((c) => link(c, site)).join(' · '), s.trust ?? null]
        .filter(Boolean)
        .join('\n\n');
    case 'prose':
      return s.body.trim();
    case 'artifact':
      return [heading(s.heading), fence(s.artifact), s.caption ?? null].filter(Boolean).join('\n\n');
    case 'use-cases':
      return [
        heading(s.heading),
        ...s.cards.map(
          (c) =>
            `### ${c.tag}: ${c.headline}\n\n${c.body}\n\n${s.artifactLabel}: \`${c.artifact.file}\`\n\n${useCaseArtifact(c.artifact)}\n\n${c.artifact.footer}`,
        ),
      ].join('\n\n');
    case 'code-panels':
      return [heading(s.heading), ...s.panels.map((p) => `### ${p.tab}\n\n${fence(p)}`)].join('\n\n');
    case 'trust':
      return [
        heading(s.heading),
        s.seals.map((b) => `- ${[b.line1, b.line2].filter(Boolean).join(' ')}${b.state ? ` (${b.state})` : ''}`).join('\n'),
        s.cta ? link(s.cta, site) : null,
      ]
        .filter(Boolean)
        .join('\n\n');
  }
}

export function pageMarkdown(site: SiteConfig, page: Page): string {
  const body = page.sections.map((s) => section(s, site)).filter((t) => t.trim() !== '');
  return [
    `# ${page.h1}`,
    `> ${inlineToPlain(page.lead)}`,
    `URL: ${pageUrl(site, page)}`,
    ...body,
  ].join('\n\n') + '\n';
}

/** Every visible string of a page, flattened. The validator measures and greps this. */
export function pagePlainText(site: SiteConfig, page: Page): string {
  return pageMarkdown(site, page);
}
