import type { Metadata } from 'next';
import { SitePage } from '@/components/site-page';
import { getPage, site } from '@/lib/config';
import { pageMetadata } from '@/lib/metadata';

const home = getPage('')!;

export const metadata: Metadata = pageMetadata(site, home);

export default function HomePage() {
  return <SitePage page={home} />;
}
