import { SiteFooter } from '@/components/shell/site-footer';
import { SiteHeader } from '@/components/shell/site-header';
import { ButtonLink } from '@/components/ui/button';
import { site } from '@/lib/config';
import { COLUMN } from '@/lib/layout';
import { cn } from '@/lib/utils';

export default function NotFound() {
  return (
    <>
      <SiteHeader site={site} currentPath="" />
      <main id="main" className={cn(COLUMN, 'py-24 md:py-30')}>
        <h1 className="text-foreground text-4xl font-medium tracking-tight">This page does not exist.</h1>
        <p className="text-muted-foreground mt-4 max-w-xl text-base leading-relaxed">
          The link may be old. The pages of this site are listed below.
        </p>
        <ul className="mt-8 space-y-2">
          {site.pages.map((p) => (
            <li key={p.slug}>
              <a
                href={p.slug ? `/${p.slug}` : '/'}
                className="text-foreground decoration-kortix-base-ink underline decoration-1 underline-offset-4"
              >
                {p.navLabel ?? p.title}
              </a>
            </li>
          ))}
        </ul>
        <ButtonLink cta={{ label: 'Back to the homepage', href: '/', variant: 'secondary' }} className="mt-10" />
      </main>
      <SiteFooter site={site} />
    </>
  );
}
