/**
 * Runs before `next build` (npm "prebuild"). Validates the config, then writes the agency plumbing
 * into public/ so it lands in out/ next to the pages:
 *   robots.txt      AI crawler rules, Content-Signal, Sitemap line
 *   sitemap.xml     every page, with lastmod
 *   llms.txt        the site map for agents (llmstxt.org shape), links to the .md twins
 *   llms-full.txt   every page's text in one file
 *   <slug>.md       the .md twin of every page (/index.md for the homepage)
 *   feed.xml        Atom feed of the pages, with the WebSub hub
 *   favicon.svg     the site mark in the accent
 *   vercel.json     copied from the repo root (site kit), so out/ deploys as is
 * `--check` validates only.
 */
import { copyFileSync, mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import type { Page, SiteConfig } from '../src/config/types';
import { inlineToPlain } from '../src/lib/markdown';
import { pageLastmod } from '../src/lib/page-dates';
import { pageMarkdown } from '../src/lib/page-text';
import { markdownPath, originOf, pageLabel, pageUrl } from '../src/lib/site';
import { loadSite, ROOT } from './load-config';
import { validate } from './validate';

const PUBLIC = path.join(ROOT, 'public');

const lastmod = pageLastmod;

/** Crawlers named in robots.txt. All are allowed; the Content-Signal line states the AI uses. */
const AI_CRAWLERS = [
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User',
  'ClaudeBot', 'Claude-User', 'Claude-SearchBot', 'anthropic-ai',
  'PerplexityBot', 'Perplexity-User',
  'Google-Extended', 'Googlebot', 'Bingbot', 'Applebot', 'Applebot-Extended',
  'CCBot', 'Amazonbot', 'meta-externalagent', 'DuckAssistBot', 'MistralAI-User', 'cohere-ai',
];
const CONTENT_SIGNAL = 'search=yes, ai-input=yes, ai-train=yes';
const WEBSUB_HUB = 'https://pubsubhubbub.appspot.com/';

const xml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function robots(site: SiteConfig): string {
  const groups = AI_CRAWLERS.map((ua) => `User-agent: ${ua}\nAllow: /`).join('\n\n');
  return `# robots.txt for ${site.domain}
# Search, AI answers and AI training are all welcome. Content-Signal states it
# (contentsignals.org); every crawler below is allowed by name.

User-agent: *
Content-Signal: ${CONTENT_SIGNAL}
Allow: /

${groups}

Sitemap: ${originOf(site)}/sitemap.xml
`;
}

function sitemap(site: SiteConfig): string {
  const urls = site.pages
    .map(
      (p) => `  <url>
    <loc>${xml(pageUrl(site, p))}</loc>
    <lastmod>${lastmod(site, p)}</lastmod>
    <priority>${p.slug === '' ? '1.0' : '0.8'}</priority>
  </url>`,
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function llms(site: SiteConfig): string {
  const pages = site.pages
    .map((p) => `- [${pageLabel(p)}](${originOf(site)}${markdownPath(p)}): ${p.metaDescription}`)
    .join('\n');
  return `# ${site.siteName}

> ${site.description}

Every page has a markdown twin (linked below) and the whole site is in [llms-full.txt](${originOf(site)}/llms-full.txt).

## Pages

${pages}

## Kortix

- [Kortix](https://kortix.com): The open-source AI Operating System.
- [Kortix docs](https://kortix.com/docs): installing, self-hosting and configuring Kortix.
- [Source](https://github.com/kortix-ai/suna): the open-source repository.
`;
}

function llmsFull(site: SiteConfig): string {
  const head = `# ${site.siteName}\n\n> ${site.description}\n\nSource: ${originOf(site)}/ · Updated ${site.updated}\n`;
  return [head, ...site.pages.map((p) => pageMarkdown(site, p))].join('\n---\n\n');
}

function feed(site: SiteConfig): string {
  const latest = site.pages.map((p) => lastmod(site, p)).sort().at(-1) ?? site.updated;
  const entries = site.pages
    .map(
      (p: Page) => `  <entry>
    <title>${xml(p.title)}</title>
    <link rel="alternate" type="text/html" href="${xml(pageUrl(site, p))}"/>
    <link rel="alternate" type="text/markdown" href="${xml(originOf(site) + markdownPath(p))}"/>
    <id>${xml(pageUrl(site, p))}</id>
    <updated>${lastmod(site, p)}T00:00:00Z</updated>
    <summary>${xml(p.metaDescription)}</summary>
    <content type="text">${xml(inlineToPlain(p.lead))}</content>
  </entry>`,
    )
    .join('\n');
  return `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${xml(site.siteName)}</title>
  <subtitle>${xml(site.description)}</subtitle>
  <link rel="self" type="application/atom+xml" href="${originOf(site)}/feed.xml"/>
  <link rel="alternate" type="text/html" href="${originOf(site)}/"/>
  <link rel="hub" href="${WEBSUB_HUB}"/>
  <id>${originOf(site)}/</id>
  <updated>${latest}T00:00:00Z</updated>
  <author><name>${xml(site.siteName)}</name></author>
${entries}
</feed>
`;
}

function favicon(site: SiteConfig): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="${site.accent}" fill-rule="evenodd" d="${site.mark.path}"/></svg>\n`;
}

async function main() {
  const { site, file } = await loadSite();
  const { errors, warnings } = validate(site);
  for (const w of warnings) console.warn(`  warn  ${w}`);
  for (const e of errors) console.error(`  error ${e}`);
  if (errors.length) {
    console.error(`\n${file}: ${errors.length} error(s). Fix the config and build again.`);
    process.exit(1);
  }
  console.log(`${file}: valid (${site.pages.length} pages, ${warnings.length} warnings)`);
  if (process.argv.includes('--check')) return;

  // Remove stale twins from a previous config, then write everything fresh.
  for (const f of readdirSync(PUBLIC)) if (f.endsWith('.md')) rmSync(path.join(PUBLIC, f));
  mkdirSync(PUBLIC, { recursive: true });
  const write = (name: string, body: string) => writeFileSync(path.join(PUBLIC, name), body, 'utf8');

  write('robots.txt', robots(site));
  write('sitemap.xml', sitemap(site));
  write('llms.txt', llms(site));
  write('llms-full.txt', llmsFull(site));
  write('feed.xml', feed(site));
  write('favicon.svg', favicon(site));
  for (const p of site.pages) write(markdownPath(p).slice(1), pageMarkdown(site, p));
  copyFileSync(path.join(ROOT, 'vercel.json'), path.join(PUBLIC, 'vercel.json'));
  console.log(`wrote robots.txt, sitemap.xml, llms.txt, llms-full.txt, feed.xml, favicon.svg, vercel.json and ${site.pages.length} .md twins`);
}

await main();
