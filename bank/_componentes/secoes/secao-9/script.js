// Per-block fade-from-right entrance.
// Each `.case-study-story` block animates independently — we loop over
// every instance on the page rather than relying on the original
// `document.currentScript.previousElementSibling` walk-back (that pattern
// only works when the script is inlined adjacent to each block; here the
// script tag lives once at the bottom of the page).
(() => {
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  if (!gsap) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const blocks = document.querySelectorAll('.case-study-story');
  if (!blocks.length) return;

  // Initial state — hide all blocks before ScrollTrigger wires up.
  blocks.forEach((section) => {
    gsap.set(section, { autoAlpha: 0, x: 60 });
  });

  if (!ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  blocks.forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: 'top 88%',
      once: true,
      onEnter: () => {
        gsap.to(section, {
          autoAlpha: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          onComplete: () =>
            gsap.set(section, { clearProps: 'translate,rotate,scale,transform,x' }),
        });
        const img = section.querySelector('.case-study-story__media img');
        if (img) {
          gsap.fromTo(img, { scale: 1.1 }, { scale: 1, duration: 1, ease: 'power2.out' });
        }
      },
    });
  });
})();
