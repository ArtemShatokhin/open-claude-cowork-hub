/**
 * The handbook's buttons: primary is the accent-filled cell, secondary the hairline-outlined one.
 * Every size keeps a 40px hit area (min-h-11 ≈ 40.5px on this site's 0.23rem spacing), so header
 * buttons, More folds and footer links all clear the mobile target gate.
 */
import { cva, type VariantProps } from 'class-variance-authority';
import type * as React from 'react';
import type { Cta } from '@/config/types';
import { cn, linkProps } from '@/lib/utils';

export const buttonVariants = cva(
  "group/btn inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md font-medium whitespace-nowrap text-center transition-[background-color,color,border-color,transform] duration-fast ease-out active:scale-[0.96] motion-reduce:active:scale-100 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        primary: 'text-cta-ink bg-cta-bg hover:bg-cta-bg/90',
        secondary: 'border border-border bg-background text-foreground hover:bg-hover',
        outline: 'border border-border text-foreground hover:bg-hover',
        ghost: 'text-muted-foreground hover:bg-hover hover:text-foreground',
      },
      size: {
        sm: 'min-h-11 px-3.5 text-sm',
        default: 'min-h-11 px-4 text-sm',
        lg: 'min-h-11 px-5 text-sm',
      },
    },
    defaultVariants: { variant: 'primary', size: 'default' },
  },
);

export type ButtonProps = React.ComponentProps<'button'> & VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button data-slot="button" className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

/** A config CTA as a link styled like a button. */
export function ButtonLink({
  cta,
  size,
  className,
  children,
}: {
  cta: Cta;
  size?: VariantProps<typeof buttonVariants>['size'];
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <a data-cta {...linkProps(cta)} className={cn(buttonVariants({ variant: cta.variant ?? 'primary', size }), className)}>
      {children ?? cta.label}
    </a>
  );
}
