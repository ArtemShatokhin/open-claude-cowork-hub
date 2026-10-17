/**
 * The handbook's header bar: an accent spine rule on the far left, a hairline-bordered mark tile
 * with the accent mark, the wordmark in the heading face, the first five nav items inline with
 * the rest under a no-JS "More" fold on wide screens, and one fold-away phone menu below `lg`
 * that lists the Try-Kortix action (below `sm` the header drops its own button) and every page
 * from site.nav. Both folds are <details>, so they work without JavaScript. The site name never
 * truncates.
 */
import { ListIcon, XIcon } from '@phosphor-icons/react/dist/ssr';
import type { SiteConfig } from '@/config/types';
import { ButtonLink } from '@/components/ui/button';
import { SiteMark } from '@/components/ui/glyph';
import { cn, linkProps } from '@/lib/utils';
import { HB } from '@/components/hb';

export const INLINE_ITEMS = 5;

export function SiteHeader({ site, currentPath }: { site: SiteConfig; currentPath: string }) {
  const isCurrent = (href: string) => href === currentPath;
  const inline = site.nav.slice(0, INLINE_ITEMS);
  const more = site.nav.slice(INLINE_ITEMS);
  return (
    <header className="border-border bg-background/95 sticky top-0 z-40 border-b backdrop-blur">
      <span aria-hidden className="bg-rule-accent absolute inset-y-0 left-0 w-[3px]" />
      <div className={cn(HB, 'relative flex h-16 items-center gap-5')}>
        <a href="/" className="inline-flex min-h-11 items-center gap-3" aria-label={`${site.siteName}, home`}>
          <span className="border-border inline-flex size-9 shrink-0 items-center justify-center rounded-[3px] border">
            <SiteMark path={site.mark.path} className="text-kortix-base-ink size-5" />
          </span>
          <span className="hb-heading text-foreground-strong whitespace-nowrap text-sm font-medium">{site.siteName}</span>
        </a>

        <nav aria-label="Primary" className="ml-auto hidden shrink-0 items-center gap-0.5 lg:flex">
          {inline.map((item) => (
            <a
              key={item.href}
              {...linkProps(item)}
              aria-current={isCurrent(item.href) ? 'page' : undefined}
              className="text-muted-foreground hover:text-foreground aria-[current=page]:text-foreground-strong inline-flex min-h-11 items-center rounded-md px-2.5 text-sm transition-colors duration-fast"
            >
              {item.label}
            </a>
          ))}
          {more.length > 0 && (
            <details className="group relative">
              <summary className="text-muted-foreground hover:text-foreground flex min-h-11 cursor-pointer list-none items-center rounded-md px-2.5 text-sm transition-colors duration-fast [&::-webkit-details-marker]:hidden">
                More
              </summary>
              <div className="border-border bg-popover kx-shadow-card absolute top-11 right-0 z-50 hidden max-h-[70vh] w-64 flex-col overflow-y-auto rounded-md border p-1.5 group-open:flex">
                {more.map((item) => (
                  <a
                    key={item.href}
                    {...linkProps(item)}
                    aria-current={isCurrent(item.href) ? 'page' : undefined}
                    className="text-foreground hover:bg-hover inline-flex min-h-11 items-center rounded-md px-3 text-sm"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </details>
          )}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 lg:ml-2">
          <ButtonLink cta={site.headerCta} size="sm" className="hidden sm:inline-flex" />

          <details className="group relative lg:hidden">
            <summary
              aria-label="Menu"
              className="text-foreground hover:bg-hover inline-flex size-11 list-none items-center justify-center rounded-md [&::-webkit-details-marker]:hidden"
            >
              <ListIcon className="size-5 group-open:hidden" />
              <XIcon className="hidden size-5 group-open:block" />
            </summary>
            <nav
              aria-label="Primary"
              className="border-border bg-popover kx-shadow-card absolute right-0 top-16 z-50 hidden max-h-[76vh] w-72 flex-col overflow-y-auto rounded-md border p-2 group-open:flex"
            >
              <ButtonLink cta={site.headerCta} size="sm" className="mb-1 w-full sm:hidden" />
              {site.nav.map((item) => (
                <a
                  key={item.href}
                  {...linkProps(item)}
                  aria-current={isCurrent(item.href) ? 'page' : undefined}
                  className="text-foreground hover:bg-hover inline-flex min-h-11 flex-wrap items-center gap-2 rounded-md px-3 text-sm"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
