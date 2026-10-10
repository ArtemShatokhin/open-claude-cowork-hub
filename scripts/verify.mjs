/**
 * Visual and layout verification of out/ (the layout gate, measured locally).
 *
 *   npm run build
 *   npx -y -p playwright@1 node scripts/verify.mjs [--no-shots] [--out screenshots]
 *
 * Serves out/ on a local port, opens every page at 1440x900 and 390x844 in light and dark, scrolls
 * through it so every reveal has run, saves a full-page screenshot, and measures:
 *   - h1, lead and first h2 share one left edge (within 2px), or the h1 and lead sit centered
 *   - the content column is centred (left and right margins equal within 2px)
 *   - at least 8px of space under the h1
 *   - no horizontal scroll (scrollWidth - clientWidth <= 0)
 *   - a kortix.com link styled as a button inside the first screen
 * Prints a table and writes screenshots/measurements.json. Exits 1 if any check fails.
 */
import { createReadStream, existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { createServer } from 'node:http';
import { createRequire } from 'node:module';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const OUT = path.join(ROOT, 'out');
const args = process.argv.slice(2);
const SHOTS = !args.includes('--no-shots');
const SHOT_DIR = path.join(ROOT, args.includes('--out') ? args[args.indexOf('--out') + 1] : 'screenshots');

/* `npx -p playwright@1 node ...` puts playwright on PATH, not on the module path: find it there. */
function loadPlaywright() {
  const require = createRequire(import.meta.url);
  try {
    return require('playwright');
  } catch {
    for (const dir of (process.env.PATH ?? '').split(path.delimiter)) {
      const nm = path.resolve(dir, '..');
      if (existsSync(path.join(nm, 'playwright'))) return createRequire(path.join(nm, 'x.js'))('playwright');
    }
    throw new Error('playwright not found: run with `npx -y -p playwright@1 node scripts/verify.mjs`');
  }
}
const { chromium } = loadPlaywright();

/* Use the browser this playwright version expects; if it is not downloaded, fall back to the newest
   Chromium already in the local playwright cache rather than downloading one. */
function installedChromium() {
  if (existsSync(chromium.executablePath())) return undefined;
  const cache = process.env.PLAYWRIGHT_BROWSERS_PATH ?? path.join(process.env.LOCALAPPDATA ?? path.join(process.env.HOME ?? '', '.cache'), 'ms-playwright');
  if (!existsSync(cache)) return undefined;
  const dirs = readdirSync(cache).filter((d) => /^chromium-\d+$/.test(d)).sort((a, b) => Number(b.split('-')[1]) - Number(a.split('-')[1]));
  for (const d of dirs) {
    for (const exe of ['chrome-win64/chrome.exe', 'chrome-win/chrome.exe', 'chrome-linux/chrome', 'chrome-linux64/chrome', 'chrome-mac/Chromium.app/Contents/MacOS/Chromium']) {
      const p = path.join(cache, d, exe);
      if (existsSync(p)) return p;
    }
  }
  return undefined;
}

const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2', '.txt': 'text/plain; charset=utf-8', '.md': 'text/markdown; charset=utf-8',
  '.xml': 'application/xml', '.json': 'application/json',
};

function serve() {
  const server = createServer((req, res) => {
    let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    let file = path.join(OUT, p);
    if (p.endsWith('/')) file = path.join(file, 'index.html');
    else if (existsSync(`${file}.html`)) file = `${file}.html`; // /faq -> faq.html (out/faq/ holds RSC data)
    if (!existsSync(file) || statSync(file).isDirectory()) {
      res.writeHead(404, { 'content-type': TYPES['.html'] });
      return createReadStream(path.join(OUT, '404.html')).pipe(res);
    }
    res.writeHead(200, { 'content-type': TYPES[path.extname(file)] ?? 'application/octet-stream' });
    createReadStream(file).pipe(res);
  });
  return new Promise((resolve) => server.listen(0, '127.0.0.1', () => resolve(server)));
}

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
];
const SCHEMES = ['light', 'dark'];

/** Runs in the page. */
function measure() {
  const r = (el) => (el ? el.getBoundingClientRect() : null);
  const h1 = document.querySelector('main h1');
  const lead = document.querySelector('main [data-lead]');
  const h2 = document.querySelector('main h2');
  const column = h1?.closest('.max-w-7xl');
  const doc = document.documentElement;
  const cr = r(column);
  const h1r = r(h1);
  // The next element below the h1 in flow: the lead's top edge.
  const gap = h1r && lead ? r(lead).top - h1r.bottom : null;
  // A kortix.com link styled as a button (ButtonLink sets data-cta), visible, above the fold.
  const cta = [...document.querySelectorAll('a[data-cta][href^="https://kortix.com"]')].find((a) => {
    const b = a.getBoundingClientRect();
    return b.width > 0 && b.height > 0 && b.top + window.scrollY < window.innerHeight;
  });
  const ctaTop = cta ? cta.getBoundingClientRect().top + window.scrollY : null;
  return {
    h1Left: h1r?.left ?? null,
    h1Right: h1r ? doc.clientWidth - h1r.right : null,
    leadLeft: r(lead)?.left ?? null,
    leadRight: lead ? doc.clientWidth - r(lead).right : null,
    h2Left: r(h2)?.left ?? null,
    h2Text: h2?.textContent?.trim().slice(0, 40) ?? null,
    columnLeft: cr?.left ?? null,
    columnRight: cr ? doc.clientWidth - cr.right : null,
    gapUnderH1: gap,
    overflowX: doc.scrollWidth - doc.clientWidth,
    ctaInFirstScreen: ctaTop !== null && ctaTop < window.innerHeight,
  };
}

const near = (a, b) => a !== null && b !== null && Math.abs(a - b) <= 2;

async function main() {
  // The page list is the sitemap the build wrote.
  const sitemap = readFileSync(path.join(OUT, 'sitemap.xml'), 'utf8');
  const pages = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => {
    const p = new URL(m[1]).pathname;
    return { path: p, slug: p.replace(/^\//, '') };
  });
  const server = await serve();
  const base = `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch({ executablePath: installedChromium() });
  if (SHOTS) mkdirSync(SHOT_DIR, { recursive: true });
  const rows = [];

  for (const vp of VIEWPORTS) {
    for (const scheme of SCHEMES) {
      const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, colorScheme: scheme });
      const page = await context.newPage();
      for (const p of pages) {
        await page.goto(base + p.path, { waitUntil: 'networkidle' });
        await page.evaluate(() => document.fonts.ready);
        await page.waitForTimeout(1300); // the hero enter settles at ~1.1s
        const m = await page.evaluate(measure);
        if (SHOTS) {
          // Walk the page so every reveal-on-scroll block has entered, then shoot it whole.
          await page.evaluate(async () => {
            for (let y = 0; y < document.documentElement.scrollHeight; y += window.innerHeight / 2) {
              window.scrollTo({ top: y, behavior: 'instant' });
              await new Promise((r) => setTimeout(r, 120));
            }
            window.scrollTo({ top: 0, behavior: 'instant' });
          });
          await page.waitForTimeout(1800); // count-up and reveals settle
          const name = `${p.slug || 'home'}-${vp.width}-${scheme}.png`;
          await page.screenshot({ path: path.join(SHOT_DIR, name), fullPage: true });
          await page.screenshot({ path: path.join(SHOT_DIR, name.replace('.png', '-fold.png')) });
        }
        const checks = {
          // flush with the body's left edge, or a centered hero (equal margins): the agency gate's rule
          sharedLeftEdge:
            (near(m.h1Left, m.leadLeft) && near(m.h1Left, m.h2Left)) ||
            (near(m.h1Left, m.h1Right) && near(m.leadLeft, m.leadRight)),
          centredColumn: near(m.columnLeft, m.columnRight),
          gapOk: m.gapUnderH1 !== null && m.gapUnderH1 >= 8,
          noHorizontalScroll: m.overflowX <= 0,
          ctaInFirstScreen: m.ctaInFirstScreen,
        };
        rows.push({ page: p.path, viewport: `${vp.width}x${vp.height}`, scheme, ...m, ...checks, pass: Object.values(checks).every(Boolean) });
      }
      await context.close();
    }
  }
  await browser.close();
  server.close();

  const fmt = (n) => (typeof n === 'number' ? n.toFixed(1) : String(n));
  console.log('| page | viewport | scheme | h1 / lead / h2 left | column L / R | gap under h1 | overflow-x | CTA in 1st screen | pass |');
  console.log('| --- | --- | --- | --- | --- | --- | --- | --- | --- |');
  for (const r of rows) {
    console.log(
      `| ${r.page} | ${r.viewport} | ${r.scheme} | ${fmt(r.h1Left)} / ${fmt(r.leadLeft)} / ${fmt(r.h2Left)} | ${fmt(r.columnLeft)} / ${fmt(r.columnRight)} | ${fmt(r.gapUnderH1)} | ${r.overflowX} | ${r.ctaInFirstScreen ? 'yes' : 'no'} | ${r.pass ? 'PASS' : 'FAIL'} |`,
    );
  }
  mkdirSync(SHOT_DIR, { recursive: true });
  writeFileSync(path.join(SHOT_DIR, 'measurements.json'), JSON.stringify(rows, null, 2));
  const failed = rows.filter((r) => !r.pass);
  console.log(failed.length ? `\n${failed.length} failing row(s)` : '\nall checks pass');
  process.exit(failed.length ? 1 : 0);
}

await main();
