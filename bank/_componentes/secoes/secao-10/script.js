// Case Study cards — direction matches the layout:
//   >=768px (image + content side-by-side, "wide" card) -> slide from the
//          RIGHT with a fade, mirroring the horizontal reading flow.
//   <=767px (stacked, image above content, "narrow" card) -> rise from
//          BELOW with a fade, matching the vertical stacking.
// Each card owns its ScrollTrigger so it reveals individually as the
// page scrolls past it. `gsap.matchMedia` swaps the behaviour on resize
// and cleans up between modes.

// GSAP + ScrollTrigger are loaded as global scripts via <script src="...">.
// They expose `window.gsap` and `window.ScrollTrigger`.

function initCasesReveals() {
  if (typeof gsap === 'undefined') return;
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  function buildReveal(axis, distance) {
    const cards = document.querySelectorAll('.csCard');
    if (!cards.length) return null;

    cards.forEach((card) => {
      gsap.set(card, { autoAlpha: 0, [axis]: distance });
      gsap.to(card, {
        autoAlpha: 1,
        [axis]: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          once: true,
        },
      });
    });

    // Cleanup — strip inline transforms so cards rest at their natural
    // position when the matchMedia query stops matching.
    return () => {
      document.querySelectorAll('.csCard').forEach((card) => {
        gsap.set(card, {
          clearProps: 'opacity,visibility,translate,rotate,scale,transform',
        });
      });
    };
  }

  // Wide card (>=768px) — horizontal slide from the right.
  gsap.matchMedia().add(
    '(min-width: 768px) and (prefers-reduced-motion: no-preference)',
    () => buildReveal('x', 60)
  );

  // Stacked card (<=767px) — vertical rise from below.
  gsap.matchMedia().add(
    '(max-width: 767px) and (prefers-reduced-motion: no-preference)',
    () => buildReveal('y', 40)
  );
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => setTimeout(initCasesReveals, 0));
} else {
  setTimeout(initCasesReveals, 0);
}
