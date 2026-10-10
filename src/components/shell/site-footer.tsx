/**
 * The colophon footer: a large closing statement (site.description) over the link columns, then a
 * ruled bottom line with the legal note and the year from site.updated. Every link is ≥40px.
 */
import type { SiteConfig } from '@/config/types';
import { SiteMark } from '@/components/ui/glyph';
import { HX } from '@/components/ui/handbook';
import { cn, linkProps } from '@/lib/utils';

export function SiteFooter({ site }: { site: SiteConfig }) {
  const year = site.updated.slice(0, 4);
  return (
    <footer className="border-border border-t">
      <div className={cn(HX, 'py-14 md:py-16')}>
        <p className="text-foreground font-heading max-w-3xl text-xl font-medium tracking-tight text-balance sm:text-2xl">
          {site.description}
        </p>

        <div className="mt-10 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <a href="/" className="text-foreground inline-flex min-h-11 items-center gap-2.5">
              <SiteMark path={site.mark.path} className="text-kortix-base-ink size-5" />
              <span className="text-sm font-semibold">{site.siteName}</span>
            </a>
            <p className="text-muted-foreground mt-4 max-w-sm text-sm leading-relaxed text-pretty">{site.footer.blurb}</p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:col-span-8">
            {site.footer.columns.map((col) => (
              <div key={col.title}>
                <p className="text-foreground font-mono text-xs uppercase tracking-[0.16em]">{col.title}</p>
                <ul className="mt-3 flex flex-col">
                  {col.links.map((l) => (
                    <li key={`${col.title}-${l.href}`}>
                      <a
                        {...linkProps(l)}
                        className="text-muted-foreground hover:text-foreground flex min-h-11 items-center text-sm transition-colors duration-fast"
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

        <div className="border-border text-muted-foreground mt-10 flex flex-col gap-2 border-t pt-6 text-xs sm:flex-row sm:items-start sm:justify-between">
          <p className="max-w-2xl leading-relaxed">{site.footer.legal}</p>
          <p className="font-mono whitespace-nowrap">
            © {year} {site.domain}
          </p>
        </div>
      </div>
    </footer>
  );
}
