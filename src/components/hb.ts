/**
 * The one content container of this site's own design. Every section, the header and the footer
 * put their content in it, so the H1, the lead and every section heading share one left edge (the
 * layout gate measures this). Sub-pages keep the same container, and long-form copy sits in a
 * centered measure within it.
 */
export const HB = 'mx-auto w-full max-w-6xl px-6';
/** Sub-page reading measure: centered inside HB. */
export const HB_MEASURE = 'mx-auto w-full max-w-2xl';
/** Section rhythm (the kit's marketing section, on this site's scale). */
export const HB_Y = 'py-16 md:py-24';
