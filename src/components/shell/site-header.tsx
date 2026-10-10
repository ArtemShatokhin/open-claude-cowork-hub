/**
 * The handbook bar: a slim top bar with the site mark in a filled ink tab beside the wordmark
 * (never truncated) and the boxed "Try Kortix" cell; below it, on wide screens, a full-width
 * numbered contents index of every page. On phones the nav and the CTA fold into a real <details>
 * menu, so the site name shows whole.
 */
import { ListIcon, XIcon } from '@phosphor-icons/react/dist/ssr';
import type { SiteConfig } from '@/config/types';
import { ButtonLink } from '@/components/ui/button';
import { SiteMark } from '@/components/ui/glyph';
import { HX } from '@/components/ui/handbook';
import { cn, linkProps } from '@/lib/utils';

export function SiteHeader({ site, currentPath }: { site: SiteConfig; currentPath: string }) {
  const isCurrent = (href: string) => href === currentPath;
  return (
    <header className="border-border bg-background/95 sticky top-0 z-40 border-b backdrop-blur">
      <div className={cn(HX, 'flex h-16 items-center gap-3')}>
        <a href="/" className="text-foreground flex min-h-11 min-w-0 items-center gap-2.5" aria-label={`${site.siteName}, home`}>
          <span className="bg-foreground flex size-8 shrink-0 items-center justify-center rounded-sm">
            <SiteMark path={site.mark.path} className="text-kortix-base-ink size-5" />
          </span>
          <span className="text-base font-semibold tracking-tight whitespace-nowrap">{site.siteName}</span>
        </a>

        <ButtonLink cta={site.headerCta} size="sm" className="ml-auto hidden sm:inline-flex" />

        <details className="group relative ml-auto sm:ml-2 md:hidden">
          <summary
            aria-label="Menu"
            className="text-foreground hover:bg-hover flex size-11 list-none items-center justify-center rounded-sm [&::-webkit-details-marker]:hidden"
          >
            <ListIcon className="size-5 group-open:hidden" />
            <XIcon className="hidden size-5 group-open:block" />
          </summary>
          <nav
            aria-label="Primary"
            className="border-border bg-popover kx-shadow-card absolute top-12 right-0 z-50 flex w-64 flex-col rounded-sm border p-1.5"
          >
            {site.nav.map((item) => (
              <a
                key={item.href}
                {...linkProps(item)}
                aria-current={isCurrent(item.href) ? 'page' : undefined}
                className="text-foreground hover:bg-hover aria-[current=page]:text-kortix-base-ink flex min-h-11 items-center rounded-sm px-3 text-sm"
              >
                {item.label}
              </a>
            ))}
            <div className="border-border mt-1 border-t p-1.5">
              <ButtonLink cta={site.headerCta} size="sm" className="w-full" />
            </div>
          </nav>
        </details>
      </div>

      <nav aria-label="Primary" className="border-border hidden border-t md:block">
        <div className={cn(HX, 'flex items-stretch overflow-x-auto')}>
          {site.nav.map((item, i) => (
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
        </div>
      </nav>
    </header>
  );
}
