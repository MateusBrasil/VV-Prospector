/* Aurae — Product Hero (Shop listing hero).
   This is a classic <script> — no imports/exports. All behavior lives in the
   shared classic scripts loaded before this file:
     /aurae/scripts/product-gallery.js → click/keyboard a thumbnail to crossfade the
                                         large image (toggles .is-active opacity).
     /aurae/scripts/accordion.js       → Shipping / Return Policy panels: measure the
                                         real panel height and drive max-height for a
                                         two-way eased open/close.
     /aurae/scripts/shop-hero-intro.js → page-load entrance: clip-path reveal on the
                                         main image, slide-in thumbnail rail, staggered
                                         rise of the info column. fonts.ready gated,
                                         finally{} always reveals, reduced-motion guard.
     /aurae/scripts/navbar.js          → mobile hamburger menu toggle.
   GSAP + ScrollTrigger + SplitText globals are loaded in the head. Nothing to boot here. */
