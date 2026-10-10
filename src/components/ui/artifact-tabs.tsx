'use client';

/**
 * Tabs between artifacts. The pill row is ported from hero-surfaces.tsx (HeroSurfaces: ghost pills,
 * the active one on `secondary`); the panels are Radix Tabs, force-mounted so every artifact is in
 * the static HTML. Without JavaScript all panels show, stacked; with it, one at a time.
 * One artifact renders bare, with no tab row.
 */
import * as Tabs from '@radix-ui/react-tabs';
import type { ReactNode } from 'react';
import type { Artifact, Link } from '@/config/types';
import { CodeBlock } from '@/components/ui/code-block';
import { cn, linkProps } from '@/lib/utils';

export type TabbedArtifact = Artifact & { tab?: string; link?: Link };

export function ArtifactTabs({
  artifacts,
  label,
  placement = 'bottom',
  size = 'default',
  frameClassName,
}: {
  artifacts: TabbedArtifact[];
  label: string;
  placement?: 'top' | 'bottom';
  size?: 'default' | 'hero';
  frameClassName?: string;
}) {
  const footerFor = (a: TabbedArtifact): ReactNode =>
    a.link ? (
      <div className="border-border bg-card border-t px-4 py-2.5">
        <a
          {...linkProps(a.link)}
          className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 font-mono text-xs transition-colors duration-fast"
        >
          {a.link.label}
          <span aria-hidden>↗</span>
        </a>
      </div>
    ) : undefined;

  if (artifacts.length === 1) {
    const a = artifacts[0]!;
    return <CodeBlock artifact={a} size={size} className={frameClassName} footer={footerFor(a)} />;
  }

  const list = (
    <Tabs.List
      aria-label={label}
      data-js-only
      className={cn('flex flex-wrap items-center gap-1', placement === 'bottom' ? 'mt-4 justify-center' : 'mb-4')}
    >
      {artifacts.map((a, i) => (
        <Tabs.Trigger
          key={i}
          value={String(i)}
          className="text-muted-foreground hover:bg-hover hover:text-foreground data-[state=active]:bg-secondary data-[state=active]:text-foreground inline-flex h-8 items-center rounded-full px-3 font-mono text-xs transition-colors duration-fast"
        >
          {a.tab ?? a.file}
        </Tabs.Trigger>
      ))}
    </Tabs.List>
  );

  return (
    <Tabs.Root defaultValue="0" className="w-full">
      {placement === 'top' ? list : null}
      {artifacts.map((a, i) => (
        <Tabs.Content key={i} value={String(i)} forceMount data-kx-panel className="mb-4 outline-none last:mb-0 [.js_&]:mb-0">
          <CodeBlock artifact={a} size={size} className={frameClassName} footer={footerFor(a)} />
        </Tabs.Content>
      ))}
      {placement === 'bottom' ? list : null}
    </Tabs.Root>
  );
}
