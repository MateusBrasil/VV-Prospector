// shop-hero-intro.js — page-load entrance for the Shop hero (ProductGrid inside
// section_product.is-hero). Same patterns as the home/about hero intros (fonts.ready
// gating, finally{} always reveals, prefers-reduced-motion → no motion).
//
// CAREFUL — this hero carries two live interactions we must NOT fight:
//   • product-gallery.js toggles `.is-active` OPACITY on the individual gallery images
//     and thumbnails. So the entrance only animates WRAPPER-level elements with
//     transform/opacity — never the per-image/per-thumb opacity the gallery owns.
//   • accordion.js sets `.accordion_text` max-height on the open "Shipping" accordion.
//     We only animate the accordion CONTAINER's transform/opacity, never its max-height.
(function () {
  function run() {
    const hero = document.querySelector(".section_product.is-hero");
    const list = hero?.querySelector(".w-dyn-list");
    const layout = list?.querySelector(".product_layout");
    if (!hero || !list || !layout) return;

    try {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return; // finally reveals; no motion

      const ease = "power3.out";
      const info = layout.querySelector(".product_info");
      const mainImg = layout.querySelector(".product-image_main");
      const thumbs = layout.querySelector(".product-image_list");
      const infoItems = info ? Array.from(info.children) : [];

      const tl = gsap.timeline({ defaults: { ease, duration: 0.8 } });
      // Gallery main image: clip-path reveal (uncovers bottom→up). clip-path clips the
      // container's rendering — it never sets opacity on the stacked crossfade images.
      if (mainImg) tl.from(mainImg, { clipPath: "inset(100% 0 0 0)", duration: 1.1 }, 0);
      // Thumbnail rail: fade + slide in as one wrapper (not per-thumb).
      if (thumbs) tl.from(thumbs, { opacity: 0, x: -16, duration: 0.7 }, 0.2);
      // Info column: staggered rise of each block via transform + opacity only.
      if (infoItems.length) {
        tl.from(infoItems, { y: 24, opacity: 0, duration: 0.7, stagger: 0.08 }, 0.25);
      }
    } finally {
      layout.style.visibility = "visible";
    }
  }

  // Wait for fonts so the text doesn't reflow after the reveal; fall back if it stalls.
  function start() {
    if (document.fonts?.ready) {
      let done = false;
      const go = () => { if (!done) { done = true; run(); } };
      document.fonts.ready.then(go);
      setTimeout(go, 600);
    } else {
      run();
    }
  }

  function init() {
    start();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
