/** One full page: header, the page's sections, footer, and the page's JSON-LD graph. */
import type { Page } from '@/config/types';
import { PageView } from '@/components/page-view';
import { SiteFooter } from '@/components/shell/site-footer';
import { SiteHeader } from '@/components/shell/site-header';
import { site } from '@/lib/config';
import { pageJsonLd } from '@/lib/metadata';
import { pagePath } from '@/lib/site';

export function SitePage({ page }: { page: Page }) {
  const json = JSON.stringify(pageJsonLd(site, page)).replace(/</g, '\\u003c');
  return (
    <>
      <a
        href="#main"
        className="bg-foreground text-background sr-only z-50 rounded-md px-3 py-2 text-sm focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <SiteHeader site={site} currentPath={pagePath(page)} />
      <PageView page={page} />
      <SiteFooter site={site} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
    </>
  );
}
