/**
 * Config validation, run before every build (prebuild). Errors stop the build; warnings print.
 * Checks the schema and structure: accent, domain, dates, slugs, one hero first, meta description
 * length, hero artifact length, nofollow on kortix.com links. The copy (the hero lead and its
 * call to action, the homepage's kit line, the kit's verbal rules) is the agency's
 * content-reviewer's, which reads the local build before it deploys (2026-10-21).
 */
import type { SiteConfig } from '../src/config/types';

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
    if (!/open source/i.test(page.title) && !/open-source/i.test(page.title)) warn(where, 'title should say "Open Source" (site kit)');
    if (!/open[- ]source/i.test(page.h1)) warn(where, 'h1 should say "open source" (site kit)');
    if (page.sections.filter((s) => s.type === 'hero').length > 1) err(where, 'more than one hero');
    if (page.sections.findIndex((s) => s.type === 'hero') > 0) err(where, 'a hero must be the first section');
    const linked = site.nav.some((n) => n.href === (page.slug ? `/${page.slug}` : '/')) || page.slug === '';
    if (!linked) warn(where, 'not in the primary nav (site kit: every page appears in the nav)');

    const hero = page.sections.find((s) => s.type === 'hero');
    if (hero && hero.type === 'hero') {
      for (const a of hero.artifacts) if (a.lines.length > 6) err(where, `hero artifact ${a.file} has ${a.lines.length} lines (max 6)`);
    }
  }

  for (const link of [...site.nav, ...site.footer.columns.flatMap((c) => c.links)]) {
    if (/^https:\/\/kortix\.com/.test(link.href) && !link.nofollow) err(`link "${link.label}"`, 'kortix.com links carry nofollow');
  }
  return { errors, warnings };
}

