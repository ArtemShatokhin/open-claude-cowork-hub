import type { NextConfig } from 'next';

/* The site is fully static: `next build` writes every page to `out/`.
   SITE_CONFIG swaps the config module at build time (see README, "A second site"),
   so the same code can build a fixture without editing site.config.ts. */
const siteConfig = process.env.SITE_CONFIG ?? './site.config.ts';

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  poweredByHeader: false,
  reactStrictMode: true,
  turbopack: {
    resolveAlias: { '@site-config': siteConfig },
  },
};

export default nextConfig;
