/**
 * Runs after `next build` (npm "postbuild"). Fails the build when out/ is not deployable:
 *  1. every required file exists (pages, .md twins, plumbing, vercel.json);
 *  2. every page's HTML carries its h1 and lead as text (no script needed to read it);
 *  3. no colour literal in the built CSS (stylesheets, <style>, style="", SVG paint) outside tokens.css and the one accent
 *     override in the head (the kit's section 6 grep: hex, rgb(a), hsl(a), oklch).
 */
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { inlineToPlain } from '../src/lib/markdown';
import { colorLiteralsIn } from './color-literals';
import { markdownPath } from '../src/lib/site';
import { loadSite, ROOT } from './load-config';

const OUT = path.join(ROOT, 'out');

function walk(dir: string): string[] {
  return readdirSync(dir).flatMap((f) => {
    const p = path.join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

const decode = (s: string) =>
  s.replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');

/** Visible text of an HTML file: scripts, styles and tags removed. */
const textOf = (html: string) =>
  decode(html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ');

export function colorLiterals(site: { accent: string }): string[] {
  const hits: string[] = [];
  for (const file of walk(OUT)) {
    if (!/.(html|css)$/.test(file) || path.basename(file) === 'tokens.css') continue;
    const kind = file.endsWith('.html') ? 'html' : 'css';
    for (const hit of colorLiteralsIn(readFileSync(file, 'utf8'), kind, site.accent)) {
      hits.push(`${path.relative(ROOT, file)}: ${hit}`);
    }
  }
  return hits;
}

async function main() {
  const { site } = await loadSite();
  const problems: string[] = [];

  const required = ['index.html', 'robots.txt', 'sitemap.xml', 'llms.txt', 'llms-full.txt', 'feed.xml', 'vercel.json', 'tokens.css', 'favicon.svg'];
  for (const p of site.pages) {
    required.push(p.slug === '' ? 'index.html' : `${p.slug}.html`, markdownPath(p).slice(1));
  }
  for (const f of new Set(required)) if (!existsSync(path.join(OUT, f))) problems.push(`missing out/${f}`);

  for (const p of site.pages) {
    const file = path.join(OUT, p.slug === '' ? 'index.html' : `${p.slug}.html`);
    if (!existsSync(file)) continue;
    const text = textOf(readFileSync(file, 'utf8'));
    if (!text.includes(p.h1)) problems.push(`${p.slug || 'index'}.html: h1 "${p.h1}" not in the static text`);
    const lead = inlineToPlain(p.lead).replace(/\s+/g, ' ');
    if (!text.includes(lead)) problems.push(`${p.slug || 'index'}.html: lead not in the static text`);
  }

  const colors = colorLiterals(site);
  problems.push(...colors.map((c) => `colour literal: ${c}`));

  if (problems.length) {
    for (const p of problems) console.error(`  ${p}`);
    console.error(`\npostbuild: ${problems.length} problem(s)`);
    process.exit(1);
  }
  console.log(`postbuild: out/ has ${site.pages.length} pages, their .md twins and the plumbing; no colour literal outside tokens.css and the accent override`);
}

await main();
