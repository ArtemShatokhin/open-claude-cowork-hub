/**
 * URL and title helpers shared by the pages and by the build scripts (sitemap, llms.txt, feed,
 * .md twins), so the HTML and the plumbing can never disagree about a URL. Pure functions: the
 * app passes the config loaded in `src/lib/config.ts`, the scripts pass the one they import.
 */
import type { Page, SiteConfig } from '../config/types';

export const originOf = (site: SiteConfig) => `https://${site.domain}`;

export function pagePath(page: Pick<Page, 'slug'>): string {
  return page.slug === '' ? '/' : `/${page.slug}`;
}

export function pageUrl(site: SiteConfig, page: Pick<Page, 'slug'>): string {
  return `${originOf(site)}${pagePath(page)}`;
}

/** The .md twin of a page: /index.md for the homepage, /<slug>.md otherwise. */
export function markdownPath(page: Pick<Page, 'slug'>): string {
  return page.slug === '' ? '/index.md' : `/${page.slug}.md`;
}

export function pageTitle(site: SiteConfig, page: Page): string {
  return `${page.title} | ${site.siteName}`;
}

export function pageUpdated(site: SiteConfig, page: Page): string {
  return page.updated ?? site.updated;
}

export function pageLabel(page: Page): string {
  return page.navLabel ?? page.title;
}
