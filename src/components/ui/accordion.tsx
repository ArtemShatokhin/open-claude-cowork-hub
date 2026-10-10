'use client';

/**
 * Ported from apps/web/src/components/ui/accordion.tsx. Changes: content is force-mounted so every
 * answer is in the static HTML (and visible without JavaScript, see globals.css "Progressive
 * enhancement"); closed panels hide only once scripts run. The caret rotates with a named transition.
 */
import { CaretDownIcon } from '@phosphor-icons/react/dist/ssr';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import type * as React from 'react';
import { cn } from '@/lib/utils';

export function Accordion(props: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

export function AccordionItem({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return <AccordionPrimitive.Item data-slot="accordion-item" className={cn('border-b last:border-b-0', className)} {...props} />;
}

export function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          'flex flex-1 items-start justify-between gap-4 py-4 text-left text-sm font-medium outline-none disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180',
          className,
        )}
        {...props}
      >
        {children}
        <CaretDownIcon
          data-js-only
          className="text-muted-foreground pointer-events-none mt-1 size-4 shrink-0 transition-transform duration-moderate ease-out"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

export function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      forceMount
      data-kx-panel
      data-slot="accordion-content"
      className="overflow-hidden text-sm data-[state=open]:animate-accordion-down motion-reduce:animate-none"
      {...props}
    >
      <div className={cn('pt-0 pb-4', className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}
