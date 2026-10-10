/** Loads the site config the same way next.config.ts does: SITE_CONFIG, else ./site.config.ts. */
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import type { SiteConfig } from '../src/config/types';

export const ROOT = path.resolve(import.meta.dirname, '..');

export async function loadSite(): Promise<{ site: SiteConfig; file: string }> {
  const file = path.resolve(ROOT, process.env.SITE_CONFIG ?? 'site.config.ts');
  const mod = (await import(pathToFileURL(file).href)) as { default: SiteConfig };
  return { site: mod.default, file: path.relative(ROOT, file) };
}
