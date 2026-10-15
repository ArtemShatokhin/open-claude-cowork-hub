/**
 * The handbook bar, with a phone menu that never grows past the viewport.
 *
 * Row 1: the site mark in a filled ink tab beside the wordmark (whole, never truncated) and the
 * boxed "Try Kortix" cell. Row 2 (wide screens): the numbered mono contents index, bounded to the
 * primary entries plus a "More" entry that opens the rest — a masthead is drawn for a fixed number
 * of items, so it never wraps into a wall as the site grows.
 *
 * Below `lg` the bar folds the nav into one scrollable sheet: every page comes from `site.pages`
 * (not the shorter `site.nav`), the panel is `max-height: calc(100dvh - header)` with its own
 * scroll, and the kortix.com CTA sits at the end of it. Both panels are <details>, so they work
 * without JavaScript. Every control keeps a ≥40px hit area.
 */
import { ListIcon, XIcon } from '@phosphor-icons/react/dist/ssr';
import type { SiteConfig } from '@/config/types';
import { ButtonLink } from '@/components/ui/button';
import { SiteMark } from '@/components/ui/glyph';
import { cn, linkProps } from '@/lib/utils';

/** The handbook bar is full-bleed, so the wordmark and the contents index share one left edge. */
const BAR = 'w-full px-5 sm:px-8';
/** Primary entries shown inline on wide screens; the rest go under "More". */
export const INLINE_ITEMS = 6;

/** The content column of the phone sheet: never wider than the viewport, so it cannot overflow. */
const SHEET = 'absolute top-full right-0 z-50 mt-2 flex max-h-[calc(100dvh-4.75rem)] w-[min(20rem,calc(100vw-2.5rem))] flex-col overflow-y-auto';
/** Every entry keeps a 40px hit area and clears the fold. */
const SHEET_LINK = 'text-foreground hover:bg-hover aria-[current=page]:text-kortix-base-ink flex min-h-11 shrink-0 items-center gap-2.5 rounded-sm px-3 text-sm';
/** The mono folio number, so the panel keeps the contents-index voice. */
const FOLIO = 'text-muted-foreground/60 w-6 shrink-0 font-mono text-xs tabular-nums';

function pageHref(slug: string) {
  return slug === '' ? '/' : `/${slug}`;
}

export function SiteHeader({ site, currentPath }: { site: SiteConfig; currentPath: string }) {
  const isCurrent = (href: string) => href === currentPath;
  const inline = site.nav.slice(0, INLINE_ITEMS);
  const more = site.nav.slice(INLINE_ITEMS);
  /** The phone panel lists every page, not just the primary nav. */
  const everyPage = site.pages.map((page) => ({ label: page.navLabel ?? page.title, href: pageHref(page.slug) }));

  return (
    <header className="border-border bg-background/95 sticky top-0 z-40 border-b backdrop-blur">
      <div className={cn(BAR, 'flex h-16 items-center gap-3')}>
        <a href="/" className="text-foreground flex min-h-11 min-w-0 items-center gap-2.5" aria-label={`${site.siteName}, home`}>
          <span className="bg-foreground flex size-8 shrink-0 items-center justify-center rounded-sm">
            <SiteMark path={site.mark.path} className="text-kortix-base-ink size-5" />
          </span>
          <span className="text-base font-semibold tracking-tight whitespace-nowrap">{site.siteName}</span>
        </a>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <ButtonLink cta={site.headerCta} size="sm" className="hidden sm:inline-flex" />

          {/* Below `lg`: every page in one scrollable sheet, with the CTA at the end. */}
          <details className="group relative lg:hidden">
            <summary
              aria-label="Menu"
              className="text-foreground hover:bg-hover flex size-11 list-none items-center justify-center rounded-sm [&::-webkit-details-marker]:hidden"
            >
              <ListIcon className="size-5 group-open:hidden" />
              <XIcon className="hidden size-5 group-open:block" />
            </summary>
            <nav aria-label="Contents" className={cn(SHEET, 'border-border bg-popover kx-shadow-card rounded-sm border p-1.5')}>
              <p className="text-muted-foreground px-3 py-2 font-mono text-xs uppercase tracking-[0.16em]">Contents</p>
              {everyPage.map((item, i) => (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isCurrent(item.href) ? 'page' : undefined}
                  className={SHEET_LINK}
                >
                  <span aria-hidden className={FOLIO}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="min-w-0">{item.label}</span>
                </a>
              ))}
              <div className="border-border mt-1 border-t p-1.5">
                <ButtonLink cta={site.headerCta} size="sm" className="w-full" />
              </div>
            </nav>
          </details>
        </div>
      </div>

      {/* Wide screens: the numbered contents index, bounded to the primary entries plus "More". */}
      <nav aria-label="Contents" className="border-border hidden border-t lg:block">
        <div className={cn(BAR, 'flex flex-wrap items-stretch')}>
          {inline.map((item, i) => (
            <a
              key={item.href}
              {...linkProps(item)}
              aria-current={isCurrent(item.href) ? 'page' : undefined}
              className="text-muted-foreground hover:text-foreground aria-[current=page]:text-foreground border-border flex min-h-11 shrink-0 items-center gap-2 border-r px-3 font-mono text-xs uppercase tracking-[0.1em] transition-colors duration-fast"
            >
              <span aria-hidden className="text-muted-foreground/60 tabular-nums">
                {String(i + 1).padStart(2, '0')}
              </span>
              {item.label}
            </a>
          ))}
          {more.length > 0 && (
            <details className="group relative">
              <summary className="text-muted-foreground hover:text-foreground border-border flex min-h-11 shrink-0 cursor-pointer list-none items-center gap-2 border-r px-3 font-mono text-xs uppercase tracking-[0.1em] transition-colors duration-fast [&::-webkit-details-marker]:hidden">
                <span aria-hidden className="text-muted-foreground/60 tabular-nums">
                  {String(INLINE_ITEMS + 1).padStart(2, '0')}
                </span>
                More
              </summary>
              <div className="border-border bg-popover kx-shadow-card absolute right-0 z-50 mt-px flex max-h-[70vh] w-72 flex-col overflow-y-auto rounded-sm border p-1.5">
                {more.map((item, i) => (
                  <a
                    key={item.href}
                    {...linkProps(item)}
                    aria-current={isCurrent(item.href) ? 'page' : undefined}
                    className={SHEET_LINK}
                  >
                    <span aria-hidden className={FOLIO}>
                      {String(INLINE_ITEMS + i + 1).padStart(2, '0')}
                    </span>
                    <span className="min-w-0">{item.label}</span>
                  </a>
                ))}
              </div>
            </details>
          )}
        </div>
      </nav>
    </header>
  );
}
