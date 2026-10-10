/**
 * Config validation, run before every build (prebuild). Errors stop the build; warnings print.
 * Checks the schema basics, the layout gate's copy limits (hero lead and paragraphs), the approved
 * homepage line, and the kit's verbal rules that a script can check (licence names, retired and
 * banned words, the "Suna" rule).
 */
import type { Page, SiteConfig } from '../src/config/types';
import { inlineToPlain } from '../src/lib/markdown';
import { pageMarkdown } from '../src/lib/page-text';

export const APPROVED_HOME_LINES = [
  'The open-source AI Operating System',
  'The leading open-source alternative to Claude Cowork and ChatGPT Work',
];

const words = (s: string) => inlineToPlain(s).split(/\s+/).filter(Boolean).length;

/** Each rule: a pattern that must not appear in any visible copy, and why. */
const BANNED: { re: RegExp; why: string }[] = [
  { re: /\b(MIT|Apache|AGPL|LGPL|GPL|BSD|Elastic License|MPL)\b|\blicen[cs]e[sd]?\b/i, why: 'never name a licence; say "open source" (positioning.md)' },
  { re: /AI Management System/i, why: 'not a Kortix category (positioning.md section 1)' },
  { re: /Autonomous Company Operating System|open AGI platform|self-driving|Super AI Worker|\bAI Worker\b|genius colleague|command center/i, why: 'retired line (positioning.md)' },
  { re: /air-gapped|microVM|\bcontainers?\b/i, why: 'claims.md "Isolation and network"' },
  { re: /\b(seamless(ly)?|revolutionary|next-gen|transformative|unlock productivity|the go-to|#1|the best|more powerful|fully extensible)\b/i, why: 'banned hype (claims.md "Words that overclaim")' },
  { re: /fully autonomous|digital coworkers?|pushes to main|the agent deploys/i, why: 'claims.md "Merge, approval, autonomy"' },
  { re: /hundreds of thousands|unlimited|scale without limits/i, why: 'claims.md "Scale, speed, metrics"' },
  { re: /\bOIDC\b|SAML\/OIDC/i, why: 'write "SAML 2.0" (claims.md "Identity and SSO")' },
  { re: /\bAIOS\b|Ai OS|AI-OS/, why: 'spell "AI OS" or the full name (positioning.md)' },
];

const SUNA_URL = 'https://github.com/kortix-ai/suna';

export function validate(site: SiteConfig): { errors: string[]; warnings: string[] } {
  const errors: string[] = [];
  const warnings: string[] = [];
  const err = (where: string, msg: string) => errors.push(`${where}: ${msg}`);
  const warn = (where: string, msg: string) => warnings.push(`${where}: ${msg}`);

  if (!/^#[0-9a-fA-F]{6}$/.test(site.accent)) err('accent', 'must be #rrggbb');
  if (/^https?:|\//.test(site.domain)) err('domain', 'bare domain only, no protocol or path');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(site.updated)) err('updated', 'ISO date YYYY-MM-DD');
  if (!site.headerCta.href.startsWith('https://kortix.com')) err('headerCta', 'must link to https://kortix.com');
  if (!site.headerCta.nofollow) err('headerCta', 'links to kortix.com carry rel="nofollow"');

  const slugs = new Set<string>();
  const home = site.pages.find((p) => p.slug === '');
  if (!home) err('pages', "no homepage (slug '')");

  for (const page of site.pages) {
    const where = `page "${page.slug || '/'}"`;
    if (slugs.has(page.slug)) err(where, 'duplicate slug');
    slugs.add(page.slug);
    if (page.slug !== '' && !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(page.slug)) err(where, 'slug: lowercase letters, digits, dashes');
    if (!page.h1.trim()) err(where, 'h1 is empty');
    if (page.metaDescription.length > 160) err(where, `metaDescription is ${page.metaDescription.length} chars (max 160)`);
    if (words(page.lead) > 60) err(where, `lead is ${words(page.lead)} words (max 60)`);
    if (!/open source/i.test(page.title) && !/open-source/i.test(page.title)) warn(where, 'title should say "Open Source" (site kit)');
    if (!/open[- ]source/i.test(page.h1)) warn(where, 'h1 should say "open source" (site kit)');
    if (page.sections.filter((s) => s.type === 'hero').length > 1) err(where, 'more than one hero');
    if (page.sections.findIndex((s) => s.type === 'hero') > 0) err(where, 'a hero must be the first section');
    const linked = site.nav.some((n) => n.href === (page.slug ? `/${page.slug}` : '/')) || page.slug === '';
    if (!linked) warn(where, 'not in the primary nav (site kit: every page appears in the nav)');

    const hero = page.sections.find((s) => s.type === 'hero');
    if (hero && hero.type === 'hero') {
      const paras = [page.lead, hero.proof, hero.trust, hero.tagline, hero.eyebrow?.lead].filter(Boolean) as string[];
      for (const p of paras) if (words(p) > 90) err(where, `hero paragraph over 90 words: "${p.slice(0, 40)}…"`);
      if (!hero.ctas.some((c) => c.href.startsWith('https://kortix.com'))) err(where, 'hero needs a kortix.com call to action');
      for (const a of hero.artifacts) if (a.lines.length > 6) err(where, `hero artifact ${a.file} has ${a.lines.length} lines (max 6)`);
      if (page.slug === '') {
        const heroText = [page.h1, ...paras].join(' ');
        if (!APPROVED_HOME_LINES.some((l) => heroText.includes(l)))
          err(where, `homepage hero must contain "${APPROVED_HOME_LINES[0]}" or "${APPROVED_HOME_LINES[1]}"`);
      }
    }

    checkCopy(site, page, where, err);
  }

  for (const link of [...site.nav, ...site.footer.columns.flatMap((c) => c.links)]) {
    if (/^https:\/\/kortix\.com/.test(link.href) && !link.nofollow) err(`link "${link.label}"`, 'kortix.com links carry nofollow');
  }
  return { errors, warnings };
}

function checkCopy(site: SiteConfig, page: Page, where: string, err: (w: string, m: string) => void) {
  // Visible copy only: artifact lines are quoted files, not copy.
  const text = pageMarkdown(site, page)
    .replace(/```[\s\S]*?```/g, '')
    .split(SUNA_URL)
    .join('');
  for (const { re, why } of BANNED) {
    const m = re.exec(text);
    if (m) err(where, `"${m[0]}" — ${why}`);
  }
  const suna = /suna/i.exec(text);
  if (suna) err(where, `"${suna[0]}" outside ${SUNA_URL} — never write it in copy`);
  if (/Claude Work\b|ChatGPT Cowork/.test(text)) err(where, 'product names: "Claude Cowork", "ChatGPT Work"');
}
