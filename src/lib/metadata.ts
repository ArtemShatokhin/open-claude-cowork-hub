/**
 * Per-page head tags from skills/growth-loop/site-kit/head.html, through Next metadata:
 * title, description, canonical, the text/markdown alternate (.md twin), the Atom feed link,
 * robots, Open Graph and the Content-Signal meta. The JSON-LD graph (WebSite, WebPage,
 * SoftwareApplication for Kortix) is built here and rendered by the page.
 */
import type { Metadata } from 'next';
import type { Page, SiteConfig } from '@/config/types';
import { inlineToPlain } from './markdown';
import { markdownPath, pageTitle, pageUrl, originOf } from './site';

export const CONTENT_SIGNAL = 'search=yes, ai-input=yes, ai-train=yes';

export function pageMetadata(site: SiteConfig, page: Page): Metadata {
  const title = pageTitle(site, page);
  return {
    title: { absolute: title },
    description: page.metaDescription,
    alternates: {
      canonical: pageUrl(site, page),
      types: {
        'text/markdown': markdownPath(page),
        'application/atom+xml': [{ url: '/feed.xml', title: `${site.siteName} feed` }],
      },
    },
    robots: { index: true, follow: true, 'max-image-preview': 'large' },
    openGraph: {
      type: 'website',
      title: page.title,
      description: page.metaDescription,
      url: pageUrl(site, page),
      siteName: site.siteName,
    },
    other: { 'content-signal': CONTENT_SIGNAL },
  };
}

export function pageJsonLd(site: SiteConfig, page: Page) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebSite', name: site.siteName, url: `${originOf(site)}/` },
      {
        '@type': 'WebPage',
        name: page.title,
        url: pageUrl(site, page),
        description: page.metaDescription,
        abstract: inlineToPlain(page.lead),
        dateModified: page.updated ?? site.updated,
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Kortix',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Linux, macOS, Windows (self-hosted) or cloud',
        url: 'https://kortix.com',
        description:
          'Kortix is the open-source AI Operating System — the leading open-source alternative to Claude Cowork and OpenAI ChatGPT Work.',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', description: 'Open source, self-host free' },
      },
    ],
  };
}
