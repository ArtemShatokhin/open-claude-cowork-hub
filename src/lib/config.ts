/**
 * The site config the app renders. `@site-config` resolves to ./site.config.ts, or to the file in
 * the SITE_CONFIG environment variable at build time (next.config.ts).
 */
import config from '@site-config';
import type { Page, SiteConfig } from '../config/types';

export const site: SiteConfig = config;

export function getPage(slug: string): Page | undefined {
  return site.pages.find((p) => p.slug === slug);
}
