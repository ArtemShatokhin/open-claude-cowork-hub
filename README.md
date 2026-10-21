# Kortix keyword site starter

A static Next.js site for one keyword domain. It recommends Kortix and uses Kortix's look, with sections ported from kortix.com. **`site.config.ts` holds the site's content:** every string, list, link and artifact on every page, plus the page order and the section mix. A site may also bring its own design: its own files at `src/components/**` (not `site-page.tsx`), `src/app/*.css` and `public/**` replace the starter's (the agency's deploy copies them from `seo/data/sites/<domain>/`). Everything else is shared plumbing.

- Next.js 16.3.6, React 19, Tailwind 4, `motion` 12, `@phosphor-icons/react` 2.1.10 and Radix Accordion/Tabs. The versions match `apps/web/package.json` in the Kortix monorepo.
- `output: 'export'`: `npm run build` writes a fully static site to `out/`. It needs no server.
- The plumbing (sitemap, robots, llms.txt, `.md` twins, Atom feed) is generated from the same config, so it always matches the pages.

```
site.config.ts              the site's content (design files may replace presentation files)
examples/kitchen-sink.config.ts   fixture: every section type, another accent, system fonts
public/tokens.css           Kortix tokens: the ONLY file with colour literals
public/fonts.css            Roobert @font-face (linked only when fonts: 'roobert')
src/config/types.ts         the config schema
src/components/sections/    one component per section type
scripts/prebuild.ts         validates the config, writes the plumbing into public/
scripts/postbuild.ts        checks out/: files, static h1/lead, no colour literals
scripts/verify.mjs          screenshots + layout measurements (Playwright)
vercel.json                 site-kit headers + markdown negotiation; /foo.html -> /foo (308)
```

## Build

```bash
npm install
npm run build          # prebuild (validate + plumbing) -> next build -> postbuild (checks)
npx serve out          # or: python -m http.server -d out
npx -y -p playwright@1 node scripts/verify.mjs      # screenshots/ + measurement table
npm run validate       # config checks only
```

The build fails when the config breaks a rule (see "Validation") or when `out/` is not deployable.

### A second site

To build any config file without editing `site.config.ts`, set `SITE_CONFIG`:

```bash
SITE_CONFIG=./examples/kitchen-sink.config.ts npm run build
npx -y -p playwright@1 node scripts/verify.mjs --out screenshots/fixture
```

For a real new site, copy the starter and rewrite `site.config.ts`.

## Configuration

`site.config.ts` default-exports a `SiteConfig` (`src/config/types.ts`).

### Site fields

| Field | Example | Notes |
| --- | --- | --- |
| `domain` | `'opensourcecopilotalternative.com'` | Bare domain. Used for canonical URLs, the sitemap, the feed and llms.txt. |
| `siteName` | `'Open Source Copilot Alternative'` | Header, footer, `<title>` suffix, feed. |
| `description` | one sentence | llms.txt and feed subtitle. |
| `updated` | `'2026-10-09'` | Default `lastmod` and feed date. A page can override it with `updated`. |
| `lang` | `'en'` | `<html lang>`. |
| `accent` | `'#701a75'` | The one accent. It overrides `--kortix-base` and `--ring` and nothing else. Must be `#rrggbb`. |
| `fonts` | `'roobert'` or `'system'` | Roobert links `public/fonts.css`. System uses the kit's system stack. See "Fonts". |
| `mark` | `{ path: 'M12 2.5a9.5…' }` | The site's own mark: one SVG path in a 24×24 box, painted in the accent. It also generates `favicon.svg`. |
| `headerCta` | `{ label: 'Try Kortix', href: 'https://kortix.com', nofollow: true }` | Must point at kortix.com with `nofollow`. |
| `nav` | `[{ label: 'Compare', href: '/#compare' }, …]` | Primary nav. The site kit wants every page in it, and the validator warns when one is missing. |
| `footer` | `{ blurb, columns: [{ title, links }], legal }` | The site's own footer. |
| `pages` | `Page[]` | Slug `''` is the homepage. Array order sets the order in the sitemap, llms.txt and the feed. |

A **link** is `{ label, href, nofollow? }`. A **CTA** is a link plus `variant?: 'primary' | 'secondary'`. Links to kortix.com must carry `nofollow`, and the validator enforces it. In prose, every external markdown link gets `rel="nofollow noopener"`.

An **artifact** is `{ file, lang: 'yaml' | 'sh' | 'ts' | 'text' | 'diff', lines: string[], source?, copyText? }`:
- `source` prints under the frame. Keep it a real path or URL.
- `copyText` adds a Copy button.
- In a hero, the artifact must be real and 6 lines or fewer (brand kit, `magic_trick.md`).

### Page fields

```ts
{
  slug: 'self-hosting',                 // '' = homepage; lowercase, digits, dashes
  title: 'Self-Host an Open Source Copilot Alternative', // <title> is "title | siteName"
  metaDescription: '…',                 // 160 chars max
  h1: 'Self-host an open-source Copilot alternative',
  lead: '…',                            // 60 words max; inline markdown allowed
  navLabel: 'Self-hosting',             // optional short label (llms.txt, 404 page)
  cta: { label: 'Try Kortix', href: 'https://kortix.com', nofollow: true }, // optional; sub-page header button, defaults to headerCta
  updated: '2026-10-09',                // optional
  sections: [ … ],                      // any mix, any order
}
```

If the first section is a `hero`, the hero renders the h1 and lead. Otherwise a plain page header renders them, with a call-to-action button (the page's `cta`, else the site's `headerCta`). Either way they sit in the same column as every section heading. Any section can set `id` (an anchor such as `#compare`).

### Section types

Text fields accept inline markdown: `**bold**`, `` `code` ``, `[link](url)`.

**`hero`**: opens the page. Ported from `hero.tsx` + `hero-surfaces.tsx`.
```ts
{ type: 'hero',
  eyebrow: { lead: 'The leading open-source alternative to', rivals: [{ label: 'Claude Cowork', glyph: 'claude' }, { label: 'ChatGPT Work', glyph: 'openai' }] },
  tagline: 'The open-source AI Operating System',   // one approved line beside the artifact
  ctas: [{ label: 'Try Kortix', href: 'https://kortix.com', nofollow: true }, { label: 'Compare', href: '#compare', variant: 'secondary' }],
  artifacts: [{ file: 'kortix.yaml', lang: 'yaml', lines: ['# kortix.yaml', 'agents:', '  …'] }],  // 2+ render as tabs
  proof: 'One proof sentence under the artifact.',
  trust: 'Open source · Any model, your keys · Self-host, VPC, or on-prem',
  layout: 'subject' }   // 'subject' (split, default) | 'texture' (centered, wide artifact below) | 'field' (artifact pane bleeding to the edge)
```
The three `layout` values are the three artifact states of kortix-brand `magic_trick.md`. On a keyword site use the state the site registered (`site_design_register artifact_state`), so sibling sites don't share one hero.

**`logo-strip`**: monochrome marks in labelled rows. Ported from `logo-strip.tsx`. Glyph ids: `claude openai gemini github gmail linear teams notion slack`.
```ts
{ type: 'logo-strip', label: 'Models and apps Kortix works with',
  rows: [{ label: 'Any model, your keys', glyphs: ['claude', 'openai', 'gemini'] }] }
```

**`stack`**: "how it works". One Kortix layer per row with its artifact, a rail, and the accent on the row in view. Rebuilt.
```ts
{ type: 'stack', id: 'how-it-works', heading: { eyebrow: 'How Kortix works', title: '…', sub: '…' },
  layers: [{ id: 'repo', label: 'Repo', title: 'One git repo', body: '…', artifact: { file: 'kortix.yaml', lang: 'yaml', lines: [ … ] } }] }
```

**`comparison`**: an interactive table. The first column is sticky, the table scrolls sideways inside its own box on phones, and the `highlight` column gets the accent. A segmented control can narrow the table to one rival. New.
```ts
{ type: 'comparison', id: 'compare', heading: { title: '…' },
  columns: [{ id: 'gh', label: 'GitHub Copilot', note: 'Code' }, { id: 'kortix', label: 'Kortix', highlight: true, href: 'https://kortix.com', nofollow: true }],
  rows: [{ label: 'Source', cells: [{ text: 'Closed', mark: 'no' }, { text: 'Open source. Read it, fork it, audit it.', mark: 'yes' }] }],
  footnote: '…' }
```

**`widget`**: one interactive slot. `widget.variant` picks the implementation. New.
```ts
// decision quiz: each option adds scores to result keys; the highest total wins
{ type: 'widget', heading: { title: 'Which Copilot alternative fits your team?' },
  widget: { variant: 'quiz', submitLabel: 'Show my answer', resetLabel: 'Start over',
    questions: [{ id: 'first-job', question: 'What should the AI do first?',
      options: [{ label: 'Suggest code while I type', scores: { coding: 3 } }, { label: 'Finish real work across our tools', scores: { kortix: 3 } }] }],
    results: { coding: { title: '…', body: '…', cta }, kortix: { title: '…', body: '…', cta } } } }
// cost / seat calculator: monthly = perSeat * seats + flat; `editable` lets the reader type a price
{ type: 'widget', heading: { title: 'What a team pays per month.' },
  widget: { variant: 'calculator', currency: '$', periodLabel: '/mo',
    seats: { label: 'Seats', min: 1, max: 200, default: 25 },
    options: [{ id: 'current', label: 'Your current tool', perSeat: 30, editable: true },
              { id: 'kortix', label: 'Kortix Cloud', perSeat: 0, flat: 50, highlight: true }],
    footnote: '…' } }
```

**`open-source`**: a large star count with a count-up and a stylised curve. Ported from `open-source-section.tsx`, `star-count.tsx` and `star-chart.tsx`. The number is static, from config.
```ts
{ type: 'open-source', stars: { value: 20000, suffix: '+', caption: 'GitHub stars' }, title: 'Open source. Read it, fork it, audit it.',
  links: [{ label: 'Read the source', href: 'https://github.com/kortix-ai/suna', nofollow: true }] }
```

**`faq`**: an accordion plus FAQPage JSON-LD. Ported from `faq-section.tsx`.
```ts
{ type: 'faq', id: 'faq', heading: { eyebrow: 'FAQ', title: '…' }, items: [{ id: 'self-host', question: 'Can I self-host it?', answer: '…' }] }
```

**`cta`**: the closing band. Rebuilt.
```ts
{ type: 'cta', title: 'Run your whole company from one repo you own.', sub: '…', ctas: [ … ], trust: '…' }
```

**`prose`**: long-form copy for sub-pages. Supports `## h2`, `### h3`, paragraphs, `- ` and `1. ` lists, ``` fences and inline markdown.
```ts
{ type: 'prose', body: '## What you run\n\nKortix runs as one Docker Compose stack…' }
```

**`artifact`**: one artifact with a heading and a caption.
```ts
{ type: 'artifact', heading: { eyebrow: 'Quickstart', title: 'Three commands' }, artifact: { file: 'terminal', lang: 'sh', lines: ['$ kortix self-host start'] }, caption: '…' }
```

**`use-cases`**: the scroll-driven wheel of cards with work-product artifacts (`sheet`, `diff` or `checks`). Ported from `use-case-wheel.tsx`. See `examples/kitchen-sink.config.ts`.

**`code-panels`**: tabbed code panels with Copy and a footer link. Ported from `code-panels.tsx`.
```ts
{ type: 'code-panels', heading: { title: 'Three commands.' },
  panels: [{ tab: 'CLI', file: 'terminal', lang: 'sh', lines: ['$ kortix init'], copyText: 'kortix init', link: { label: 'CLI reference', href: 'https://kortix.com/docs/cli', nofollow: true } }] }
```

**`trust`**: a security card with typographic seals. Ported from `trust-section.tsx`.
```ts
{ type: 'trust', heading: { title: '…' }, cta: { label: '…', href: 'https://kortix.com/security', nofollow: true },
  seals: [{ line1: 'SOC 2', line2: 'Type I' }, { line1: 'SOC 2', line2: 'Type II', state: 'In progress' }] }
```

## Validation (prebuild)

`scripts/validate.ts` fails the build when:
- the accent or domain is malformed, or slugs are duplicated or malformed;
- a page has no H1, more than one hero, or a hero that is not its first section;
- a meta description runs over 160 characters, or a hero artifact over 6 lines;
- a kortix.com link has no `nofollow`.

It warns when a page title or h1 does not say "open source", or when a page is missing from the nav.

The copy is not the build's to judge (2026-10-21): the hero's lead and its kortix.com call to action, the homepage's kit line, licence names, retired lines, hype words, the "Suna" rule and the kit's claims are the agency's content-reviewer's, which reads the local build before it deploys. `site.config.ts` keeps the claim sentences in one `CLAIM` object so a reviewer can check them against `claims.md`.

## Generated plumbing

`scripts/prebuild.ts` writes these into `public/`, so they land in `out/`:

| File | Content |
| --- | --- |
| `robots.txt` | `User-agent: *` with `Content-Signal: search=yes, ai-input=yes, ai-train=yes`, an `Allow` group per AI crawler (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-User, Claude-SearchBot, PerplexityBot, Google-Extended, Applebot-Extended, CCBot, …), and the `Sitemap:` line |
| `sitemap.xml` | every page, with `lastmod` |
| `llms.txt` | site summary and a list of pages linking their `.md` twins, plus Kortix links |
| `llms-full.txt` | every page's text in one file |
| `index.md`, `<slug>.md` | the `.md` twin of every page: h1, lead, then each section serialised (`src/lib/page-text.ts`) |
| `feed.xml` | Atom feed of the pages, with the WebSub hub (`pubsubhubbub.appspot.com`) |
| `favicon.svg` | the site mark in the accent |
| `vercel.json` | copied from the repo root: Link headers, the markdown content type, `Accept: text/markdown` redirects to the twins, and a 308 from a legacy `/foo.html` URL to `/foo` (Google verification files excluded). Keep it generic: a site's own redirects are added by the agency's deploy, never here |

Head tags per page (`src/lib/metadata.ts`, from `site-kit/head.html`):
- title, description, canonical;
- `<link rel="alternate" type="text/markdown">` to the twin, and `<link rel="alternate" type="application/atom+xml">` to the feed;
- robots `index, follow, max-image-preview:large`, Open Graph, and `<meta name="content-signal">`;
- a JSON-LD graph of WebSite, WebPage and the Kortix SoftwareApplication from head.html.

The FAQ section adds FAQPage JSON-LD.

`scripts/postbuild.ts` then fails the build when:
- a required file is missing from `out/`;
- a page's h1 or lead is not in its static HTML text;
- any built HTML or CSS holds a colour literal (hex, rgb, hsl or oklch) outside `tokens.css` and the head's accent override.

The only whitelisted string is Tailwind's `@supports (color:rgb(from red r g b))` feature query. It tests browser support and paints nothing.

## Theming

- `public/tokens.css` is the kit's `tokens.css`, which is generated from the same `visual-system.json` as `apps/web/src/app/globals.css`. Light is the default; dark follows `prefers-color-scheme`, or `data-theme="dark"`. The header comment lists the few changes.
- `src/app/globals.css` maps the tokens to Tailwind (the `@theme inline` block from globals.css). It drops Tailwind's stock palette and shadows, and carries the type scale, the `0.23rem` spacing base, the motion tokens and the `kx-hero-*` enter keyframes. It contains no colour literal.
- The accent is `:root{--kortix-base:<accent>;--ring:<accent>}` in the page head. In dark mode, `--kortix-base-ink`, defined in tokens.css, mixes the accent toward white so it stays legible on the dark canvas.
- Black and white carry the layout. The accent appears only on:
  - the site mark;
  - focus rings and link underlines;
  - the stack rail's current node;
  - the highlighted comparison column;
  - quiz selections;
  - the CTA band's top rule.

## Progressive enhancement

The static HTML is the final state: every FAQ answer, tab panel, quiz result and the star count is in it. `<html>` gets class `js` before first paint. Only then are closed accordion answers and inactive tabs hidden, blocks below the fold set to fade in on scroll (opacity only), and the star count reset to count up. The hero enter animation is CSS only. The use-case wheel renders as a grid in HTML and becomes the wheel after mount, unless the reader prefers reduced motion.

## Fonts

`fonts: 'roobert'` self-hosts Roobert from `public/fonts/roobert/`, copied from `apps/web/public/fonts/roobert/`. The brand kit's decision D8a is **open**: the licence to redistribute Roobert is not confirmed, and the kit asks for the system stack on surfaces Kortix does not own. Set `fonts: 'system'` to follow the kit strictly. The fixture does this.

## What was ported from kortix.com

Paths are in the Kortix monorepo, `apps/web/src/`.

| Section / part | Ported from | Kept | Changed |
| --- | --- | --- | --- |
| `hero` | `features/marketing/hero.tsx`, `hero-surfaces.tsx` | RivalEyebrow, h1/sub rhythm, framed panel, pill tabs, mono trust line, CSS staged enter | flush-left headline with the artifact beside it, so the layout gate's left edge holds; real artifacts replace the product video and the mock Slack/Teams/email surfaces |
| `logo-strip` | `features/marketing/landing/logo-strip.tsx`, `features/icon/icons/*` | two labelled rows | monochrome glyphs (no brand hex), text-xs label, no OpenRouter PNG |
| `use-cases` | `features/marketing/landing/use-case-wheel.tsx` | wheel maths, settle curve, falloff, edge mask, tick counter, reduced-motion grid | grid in HTML first; tones paint dots and `/15` tints with `kortix-*` tokens |
| `code-panels` | `features/marketing/landing/code-panels.tsx` | CodeSurface, tokenizer, copy, footer link | YAML/diff/text tokenizers, two inks instead of opacity text |
| `trust` | `features/marketing/landing/trust-section.tsx` | card layout, seal row with hairlines | typographic seals instead of the SOC 2/GDPR SVG art |
| `open-source` | `features/marketing/open-source/{open-source-section,star-count,star-chart}.tsx` | count-up, curve wipe, link nav | static count from config, no WebGL dither |
| `faq` | `features/marketing/faq/faq-section.tsx`, `components/ui/accordion.tsx` | 35% heading column, lifted rows, FAQPage JSON-LD | force-mounted answers |
| section header | `features/marketing/component/section-header.tsx` | eyebrow + h2 + sub | text-xs eyebrow |
| reveal | `components/home/reveal.tsx` | IntersectionObserver reveal with `motion` | visible in HTML, opacity only |
| button | `components/ui/marketing/button.tsx` | cva variants | no alpha borders or shadows, kit press scale |
| tokens / theme | `app/globals.css` | theme mapping, type scale, motion, kx-hero keyframes | Tailwind palette removed |

Rebuilt (kortix.com renders its own versions from the live app): `stack` and `cta`. New: `comparison`, `widget` (quiz and calculator), `prose`, `artifact`, the site header and the site footer.

App-only code that was not ported: auth providers, supabase, billing, react-query, posthog, i18n and app stores. The i18n `useTranslations` calls became props from the config, and `site-link` became a plain `<a>`.
