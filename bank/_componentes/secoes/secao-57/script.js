// stayli-destinations — no local logic. The properties carousel (Swiper path A,
// data-swiper) is initialized by the shared /stayli/scripts/swiper-init.js, which
// reads the data-* config and wires the custom prev/next arrows inside
// [data-swiper-scope]. Scroll reveals ([data-reveal] -> .is-in) are handled by
// /stayli/scripts/scroll-reveal.js. Stub kept for the 4-file convention.
//
// NO top-level `export` here: this file loads as a classic <script src>, and an
// export would be a silent SyntaxError that would also break the reveals.
