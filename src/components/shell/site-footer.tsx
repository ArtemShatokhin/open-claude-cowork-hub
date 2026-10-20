/** The handbook's colophon: blurb and wordmark left, intent-grouped columns right, a legal bar
 * with the dated `© {year} {domain}` line from the config. */
import type { SiteConfig } from '@/config/types';
import { SiteMark } from '@/components/ui/glyph';
import { HB } from '@/components/hb';
import { linkProps } from '@/lib/utils';

export function SiteFooter({ site }: { site: SiteConfig }) {
  const year = site.updated.slice(0, 4);
  return (
    <footer className="border-border border-t">
      <div className={`${HB} grid gap-10 py-14 md:grid-cols-12`}>
        <div className="md:col-span-4">
          <a href="/" className="inline-flex min-h-11 items-center gap-3">
            <span className="border-border inline-flex size-9 shrink-0 items-center justify-center rounded-[3px] border">
              <SiteMark path={site.mark.path} className="text-kortix-base-ink size-5" />
            </span>
            <span className="hb-heading text-foreground-strong whitespace-nowrap text-sm font-medium">{site.siteName}</span>
          </a>
          <p className="text-muted-foreground mt-4 max-w-sm text-sm leading-relaxed text-pretty">{site.footer.blurb}</p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-8">
          {site.footer.columns.map((col) => (
            <div key={col.title}>
              <p className="text-foreground-strong text-sm font-medium">{col.title}</p>
              <ul className="mt-3 space-y-1">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <a
                      {...linkProps(l)}
                      className="text-muted-foreground hover:text-foreground -mx-1 inline-flex min-h-11 flex-wrap items-center px-1 text-sm transition-colors duration-fast"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-border border-t">
        <div className={`${HB} flex flex-col gap-2 py-5 text-xs sm:flex-row sm:items-center sm:justify-between`}>
          <p className="text-muted-foreground max-w-3xl leading-relaxed">{site.footer.legal}</p>
          <p className="text-caption hb-date font-mono">
            © {year} {site.domain}
          </p>
        </div>
      </div>
    </footer>
  );
}
