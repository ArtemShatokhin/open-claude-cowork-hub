/**
 * The homepage hero, in the registered `subject` state: copy in a left measure, the exhibit
 * column beside it. The exhibit is a real Kortix screenshot — a merged change request with its
 * diff, captured this session at 2x — inside a `<figure>` whose caption bar and source link come
 * from the config artifact (`file` / `source`), with the artifact's own lines kept as a mono
 * excerpt card under it, the approved line as an accent-ruled aside, and the proof line muted.
 * Enter is the site's own staged CSS moment (hb-hero), so the fold renders without JavaScript.
 */
import type { HeroSection, Page } from '@/config/types';
import { ExcerptCard } from '@/components/ui/code-block';
import { ButtonLink } from '@/components/ui/button';
import { Inline } from '@/components/ui/rich-text';
import { Tab } from '@/components/ui/section-header';
import { cn } from '@/lib/utils';
import { HB } from '@/components/hb';

const HERO_SHOT = '/hero/merged-change-request.webp';

function Copy({ section, page }: { section: HeroSection; page: Page }) {
  return (
    <div className="min-w-0">
      {section.eyebrow ? (
        <p className="hb-hero-copy text-muted-foreground flex items-center gap-3 font-mono text-xs uppercase [--hb-enter:0ms]">
          <Tab />
          {section.eyebrow.lead}
        </p>
      ) : null}

      <h1
        className="hb-hero-copy text-foreground-strong mt-4 text-4xl tracking-tight text-balance [--hb-enter:90ms] sm:text-5xl sm:leading-[1.05]"
      >
        {page.h1}
      </h1>

      <p
        data-lead
        className="hb-hero-copy text-muted-foreground mt-5 text-base leading-relaxed text-pretty [--hb-enter:160ms] sm:text-lg"
      >
        <Inline text={page.lead} />
      </p>

      <div className="hb-hero-copy mt-7 flex flex-wrap items-center gap-2 [--hb-enter:230ms]">
        {section.ctas.map((cta) => (
          <ButtonLink key={cta.href} cta={cta} size="lg" />
        ))}
      </div>

      {section.trust ? (
        <p className="hb-hero-copy text-muted-foreground mt-6 font-mono text-xs [--hb-enter:320ms]">{section.trust}</p>
      ) : null}
    </div>
  );
}

function Exhibit({ section }: { section: HeroSection }) {
  const artifact = section.artifacts[0];
  if (!artifact) return null;
  return (
    <div className="hb-hero-exhibit min-w-0 [--hb-enter:320ms]">
      <figure className="border-terminal-row kx-shadow-frame bg-terminal-surface overflow-hidden rounded-lg border">
        <img
          src={HERO_SHOT}
          alt={artifact.file}
          className="text-muted block w-full bg-terminal-surface"
          loading="eager"
          decoding="async"
        />
        <figcaption className="border-terminal-row bg-terminal-caption flex min-h-11 flex-wrap items-center justify-between gap-2 border-t px-4 text-xs">
          <span className="text-cap min-w-0 truncate font-mono">{artifact.file}</span>
          {artifact.source ? (
            <a
              href={artifact.source}
              rel="nofollow noopener"
              className="text-cap hover:text-ink underline decoration-terminal-row underline-offset-4 min-h-11 py-3 font-mono"
            >
              {artifact.source}
            </a>
          ) : null}
        </figcaption>
      </figure>

      {section.tagline ? (
        <p className="text-foreground-strong mt-5 flex items-start gap-3 border-l-2 border-rule-accent py-1 pl-3 text-sm leading-snug">
          {section.tagline}
        </p>
      ) : null}

      <ExcerptCard artifact={artifact} className="mt-4" />

      {section.proof ? (
        <p className="text-muted-foreground mt-4 text-sm leading-relaxed text-pretty">
          <Inline text={section.proof} />
        </p>
      ) : null}
    </div>
  );
}

export function Hero({ section, page }: { section: HeroSection; page: Page }) {
  const id = section.id ?? 'hero';
  return (
    <section id={id} className={cn(HB, 'relative pt-14 pb-16 sm:pt-20 lg:pt-24 lg:pb-24')}>
      <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="min-w-0 lg:col-span-6">
          <Copy section={section} page={page} />
        </div>
        <div className="min-w-0 lg:col-span-6">
          <Exhibit section={section} />
        </div>
      </div>
    </section>
  );
}
