import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Link attributes for a config link. External links open in place; `nofollow` adds rel="nofollow". */
export function linkProps(link: { href: string; nofollow?: boolean }) {
  const external = /^https?:\/\//.test(link.href);
  const rel = [link.nofollow ? 'nofollow' : null, external ? 'noopener' : null].filter(Boolean).join(' ');
  return { href: link.href, rel: rel || undefined };
}
