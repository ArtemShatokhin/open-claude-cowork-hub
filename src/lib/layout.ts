/**
 * The one content column. Every section, the header and the footer put their content in it, so
 * the H1, the lead and every section heading share one left edge (the layout gate measures this).
 * The measure and the gutter sit on the same element, as hero.tsx explains: splitting them puts
 * the padding outside the centred box once the viewport is wider than max-w-7xl.
 * Marketing section rhythm from the kit (layout.md "Marketing section"): py-24 md:py-30.
 */
export const COLUMN = 'mx-auto w-full max-w-7xl px-6';
export const SECTION_Y = 'py-20 md:py-30';
