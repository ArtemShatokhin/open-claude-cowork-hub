import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SitePage } from '@/components/site-page';
import { getPage, site } from '@/lib/config';
import { pageMetadata } from '@/lib/metadata';

export const dynamicParams = false;

export function generateStaticParams() {
  return site.pages.filter((p) => p.slug !== '').map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const page = getPage((await params).slug);
  return page ? pageMetadata(site, page) : {};
}

export default async function SubPage({ params }: { params: Promise<{ slug: string }> }) {
  const page = getPage((await params).slug);
  if (!page) notFound();
  return <SitePage page={page} />;
}
