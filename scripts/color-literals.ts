/**
 * Colour literals outside tokens.css (the kit's section 6 grep: hex, rgb(a), hsl(a), oklch). Only CSS
 * counts: a stylesheet whole; in HTML the <style> blocks, style="" attributes and SVG paint
 * attributes. Page text is copy, so "#142" in an artifact line is not a colour, and the RSC payload
 * in <script> is data.
 */
const COLOR = /#[0-9a-fA-F]{3,8}\b|rgba?\(|hsla?\(|oklch\(/g;
// Tailwind's @property fallback guard is a feature query, not a colour: `@supports (... (not
// (color:rgb(from red r g b))))` asks whether the browser parses relative colour syntax.
const TAILWIND_FEATURE_QUERY = '(color:rgb(from red r g b))';
const HTML_CSS = [
  /<style[^>]*>([\s\S]*?)<\/style>/gi,
  /\sstyle\s*=\s*"([^"]*)"/gi,
  /\sstyle\s*=\s*'([^']*)'/gi,
  /\s(?:fill|stroke|stop-color|flood-color|lighting-color|color)\s*=\s*"([^"]*)"/gi,
];

function cssOf(body: string, kind: 'html' | 'css'): string[] {
  if (kind === 'css') return [body];
  return HTML_CSS.flatMap((re) => [...body.matchAll(re)].map((m) => m[1]));
}

/** Every colour literal in `body`, with a little context; the site's own accent override is allowed. */
export function colorLiteralsIn(body: string, kind: 'html' | 'css', accent: string): string[] {
  const accentCss = `:root{--kortix-base:${accent};--ring:${accent}}`;
  const hits: string[] = [];
  for (const raw of cssOf(body, kind)) {
    const css = raw.split(accentCss).join('').split(TAILWIND_FEATURE_QUERY).join('');
    for (const m of css.matchAll(COLOR)) {
      const at = m.index ?? 0;
      hits.push(css.slice(Math.max(0, at - 40), at + 30).replace(/\s+/g, ' '));
    }
  }
  return hits;
}
