/**
 * Per-page dates the agency's deploy keeps in page-dates.json: a page's date moves only when its
 * copy changed (Bing uses an accurate lastmod to keep its AI answers fresh and discounts
 * build-time stamps). Read at build time by the sitemap, the feed and the JSON-LD; without the
 * file every page uses its `updated` (or the site's).
 */
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import type { Page, SiteConfig } from '../config/types';
import { pageUpdated } from './site';

let dates: Record<string, { updated?: string }> = {};
try {
  const file = path.join(process.cwd(), 'page-dates.json');
  if (existsSync(file)) dates = JSON.parse(readFileSync(file, 'utf8'));
} catch {
  dates = {};
}

export function pageLastmod(site: SiteConfig, page: Page): string {
  return dates[page.slug]?.updated ?? pageUpdated(site, page);
}
