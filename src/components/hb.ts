/**
 * The one content container of this site's own design. Every section, the header and the footer
 * put their content in it, so the H1, the lead and every section heading share one left edge (the
 * layout gate measures this). Sub-pages keep the same container, and long-form copy keeps its
 * reading measure flush on that same left edge, never inset by a centered measure.
 */
export const HB = 'mx-auto w-full max-w-6xl px-6';
/** Sub-page reading measure: flush with HB's left edge, so chapter headings and the H1 align. */
export const HB_MEASURE = 'w-full max-w-2xl';
/** Section rhythm (the kit's marketing section, on this site's scale). */
export const HB_Y = 'py-16 md:py-24';
