/**
 * The site config schema. `site.config.ts` is the only file a site changes; everything visible on
 * every page (strings, lists, links, artifacts) comes from it. README.md documents every field with
 * an example. The build validates a config with `scripts/validate.ts` before it renders.
 */

import type { GlyphId } from '../lib/glyphs';

/* ── shared pieces ───────────────────────────────────────────────────────── */

export type Link = {
  label: string;
  href: string;
  /** Adds rel="nofollow". Every link to kortix.com from a keyword site carries it (agency link policy). */
  nofollow?: boolean;
};

export type Cta = Link & {
  /** `primary` is the ink button, `secondary` the quiet one. */
  variant?: 'primary' | 'secondary';
};

/** Mono language hint for the tiny highlighter in code-panels. */
export type CodeLang = 'sh' | 'ts' | 'yaml' | 'text';

/**
 * A real artifact the reader can keep: a kortix.yaml excerpt, a change-request diff, a CLI session.
 * The brand kit (magic_trick.md) requires it to be real and cropped to 6 lines or fewer when it opens
 * a hero. Lines starting with `+` / `-` render as a diff when `lang` is `diff`.
 */
export type Artifact = {
  /** File name or command context shown in the title bar, e.g. `kortix.yaml`. */
  file: string;
  lang: CodeLang | 'diff';
  lines: string[];
  /** Where the excerpt was taken from. Rendered as small print; keep it a real path or URL. */
  source?: string;
  /** Text the copy button puts on the clipboard. Omit to hide the button. */
  copyText?: string;
};

/** Eyebrow + heading + optional sub, shared by most sections (section-header.tsx). */
export type SectionHeading = {
  /** Mono uppercase label. One per section, optional. */
  eyebrow?: string;
  title: string;
  sub?: string;
};

/* ── sections ────────────────────────────────────────────────────────────── */

/** Opens the page. Renders the page's h1 and lead, plus the artifact (hero.tsx + hero-surfaces.tsx). */
export type HeroSection = {
  type: 'hero';
  id?: string;
  /** Optional line above the h1. `rivals` render as glyph + label after `lead` (RivalEyebrow). */
  eyebrow?: { lead: string; rivals?: { label: string; glyph?: GlyphId }[] };
  /** One approved line set beside the artifact (e.g. "The open-source AI Operating System"). */
  tagline?: string;
  ctas: Cta[];
  /** One or more artifacts. Two or more render as tabs under the frame. */
  artifacts: Artifact[];
  /** One proof sentence under the artifact. */
  proof?: string;
  /** Mono small print under everything. */
  trust?: string;
  /**
   * How the hero sets its artifact: the three states of kortix-brand magic_trick.md. Each keyword
   * site registers one (site_design_register artifact_state) and its hero uses that layout, so
   * sibling sites don't share one hero.
   * - `subject` (default): headline and copy on the left, the artifact framed on the right.
   * - `texture`: centered statement over the full column, the artifact wide below it.
   * - `field`: copy on the left, the artifact in a dark pane that bleeds to the right edge.
   */
  layout?: 'subject' | 'texture' | 'field';
};

/** A row of monochrome glyphs (logo-strip.tsx). */
export type LogoStripSection = {
  type: 'logo-strip';
  id?: string;
  /** Accessible name of the strip. */
  label: string;
  rows: { label: string; glyphs: GlyphId[] }[];
};

/** "How it works": Kortix's layers as cards that each carry a static artifact. Rebuilt, not ported. */
export type StackSection = {
  type: 'stack';
  id?: string;
  heading: SectionHeading;
  layers: { id: string; label: string; title: string; body: string; artifact: Artifact }[];
};

export type ComparisonCell = string | { text: string; mark?: 'yes' | 'no' | 'partial' };

/** Interactive comparison table: sticky first column, horizontal scroll on phones. */
export type ComparisonSection = {
  type: 'comparison';
  id?: string;
  heading: SectionHeading;
  columns: { id: string; label: string; note?: string; highlight?: boolean; href?: string; nofollow?: boolean }[];
  rows: { label: string; cells: ComparisonCell[] }[];
  footnote?: string;
};

export type QuizWidget = {
  variant: 'quiz';
  questions: {
    id: string;
    question: string;
    options: { label: string; scores: Record<string, number> }[];
  }[];
  results: Record<string, { title: string; body: string; cta?: Cta }>;
  /** Label of the button that shows the result. */
  submitLabel: string;
  resetLabel: string;
};

export type CalculatorWidget = {
  variant: 'calculator';
  currency: string;
  seats: { label: string; min: number; max: number; default: number };
  /** Each option's monthly cost = perSeat * seats + flat. `editable` lets the reader type the price. */
  options: { id: string; label: string; perSeat: number; flat?: number; note?: string; editable?: boolean; highlight?: boolean }[];
  periodLabel: string;
  footnote?: string;
};

/** One interactive widget slot. Pick an implementation per site with `widget.variant`. */
export type WidgetSection = {
  type: 'widget';
  id?: string;
  heading: SectionHeading;
  widget: QuizWidget | CalculatorWidget;
};

/** Live-looking star count over a stylised curve (open-source-section.tsx). The number is static. */
export type OpenSourceSection = {
  type: 'open-source';
  id?: string;
  stars: { value: number; caption: string; suffix?: string };
  title: string;
  links: Link[];
};

export type FaqSection = {
  type: 'faq';
  id?: string;
  heading: SectionHeading;
  items: { id: string; question: string; answer: string }[];
};

/** Closing band with one invitation and one action. Rebuilt, not ported. */
export type CtaSection = {
  type: 'cta';
  id?: string;
  title: string;
  sub?: string;
  ctas: Cta[];
  trust?: string;
};

/** Long-form copy. A small markdown subset: ## h2, ### h3, paragraphs, - lists, 1. lists,
 *  **bold**, `code`, [links](url) and ``` fences. */
export type ProseSection = {
  type: 'prose';
  id?: string;
  body: string;
};

/** One artifact with a heading and a caption. */
export type ArtifactSection = {
  type: 'artifact';
  id?: string;
  heading: SectionHeading;
  artifact: Artifact;
  caption?: string;
};

/** Scroll-driven wheel of cards, each with a work-product artifact (use-case-wheel.tsx). */
export type UseCaseTone = 'up' | 'down' | 'warn' | 'info';
export type UseCaseArtifact = { file: string; footer: string } & (
  | {
      kind: 'sheet';
      columns: string[];
      widths: string[];
      aligns: ('left' | 'right')[];
      rows: { cells: string[]; tone?: UseCaseTone; total?: boolean }[];
      toneColumn?: number;
    }
  | { kind: 'diff'; lines: string[]; stat: string }
  | { kind: 'checks'; items: { label: string; value: string; tone: UseCaseTone }[] }
);
export type UseCasesSection = {
  type: 'use-cases';
  id?: string;
  heading: SectionHeading;
  artifactLabel: string;
  cards: { id: string; tag: string; headline: string; body: string; href?: string; artifact: UseCaseArtifact }[];
};

/** Tabbed code panels with copy buttons (code-panels.tsx). */
export type CodePanelsSection = {
  type: 'code-panels';
  id?: string;
  heading: SectionHeading;
  panels: (Artifact & { tab: string; link?: Link })[];
};

/** Closing trust card: heading, one action, a row of plain status seals (trust-section.tsx). */
export type TrustSection = {
  type: 'trust';
  id?: string;
  heading: SectionHeading;
  cta?: Cta;
  seals: { line1: string; line2?: string; state?: string }[];
};

/** Every section may set `id`, the anchor the nav and CTAs link to (#compare). */
export type Section =
  | HeroSection
  | LogoStripSection
  | StackSection
  | ComparisonSection
  | WidgetSection
  | OpenSourceSection
  | FaqSection
  | CtaSection
  | ProseSection
  | ArtifactSection
  | UseCasesSection
  | CodePanelsSection
  | TrustSection;

export type SectionType = Section['type'];

/* ── pages and site ──────────────────────────────────────────────────────── */

export type Page = {
  /** '' is the homepage. Lowercase letters, digits and dashes otherwise. */
  slug: string;
  /** <title> before " | siteName". Say "Open Source" in it (site kit). */
  title: string;
  /** One sentence, 160 characters or fewer. */
  metaDescription: string;
  h1: string;
  /** One to three short sentences, 60 words or fewer. */
  lead: string;
  /** Sub-pages only: the button under the page header. Defaults to the site's `headerCta`, so
   *  every page has a kortix.com action in its first screen (the agency's hero_cta check). */
  cta?: Cta;
  /** Short label for nav, sitemap and llms.txt. Defaults to `title`. */
  navLabel?: string;
  /** ISO date for feed.xml and sitemap.xml. Defaults to `site.updated`. */
  updated?: string;
  sections: Section[];
};

export type SiteConfig = {
  /** Bare domain, no protocol: `example.com`. */
  domain: string;
  siteName: string;
  /** One sentence about the site, used in llms.txt and the feed. */
  description: string;
  /** ISO date of the last content change. */
  updated: string;
  /** BCP 47 language tag. */
  lang: string;
  /** The ONE accent colour (#rrggbb). Overrides --kortix-base and --ring only. */
  accent: string;
  /** GA4 measurement id. Normally omitted: the agency's deploy tool writes the fleet's id into
   *  src/config/agency.json. Set it here only to override.
   *  Consent mode: analytics cookies only after the visitor accepts. */
  ga4?: string;
  /** `roobert` links the Kortix fonts; `system` uses the kit's system stack. */
  fonts: 'roobert' | 'system';
  /** The site's own mark: a single SVG path in a 24x24 box, drawn in currentColor. */
  mark: { path: string };
  /** The header button. Always points at kortix.com with rel="nofollow". */
  headerCta: Cta;
  /** Primary nav. The site kit asks for every page to appear here. */
  nav: Link[];
  footer: {
    blurb: string;
    columns: { title: string; links: Link[] }[];
    /** Small print, e.g. an independence note. */
    legal: string;
  };
  /** Page order here is the order in the sitemap, llms.txt and the feed. The first page is the homepage. */
  pages: Page[];
};
