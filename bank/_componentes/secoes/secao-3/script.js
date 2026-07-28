// Per-card scroll-triggered entrance: each card animates from below
// (y: 40 → 0, autoAlpha 0 → 1) only as it enters the viewport at 90%.
// Header (label + heading) plays first as a separate fade.
//
// GSAP, ScrollTrigger and SplitText are loaded as globals via CDN in
// index.html, so we read them off `window` rather than importing.
function initCsGridReveals() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  // Register the plugin once GSAP is available on the page.
  if (gsap.registerPlugin) {
    gsap.registerPlugin(ScrollTrigger);
    if (typeof SplitText !== 'undefined') gsap.registerPlugin(SplitText);
  }

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const inner = document.querySelector('.csGrid__inner');
  if (!inner) return;

  const heading = inner.querySelector('.csGrid__heading');
  const cards = Array.from(inner.querySelectorAll('.csGrid__card'));

  if (reduce) {
    if (heading) gsap.set(heading, { autoAlpha: 1 });
    cards.forEach((c) => gsap.set(c, { autoAlpha: 1, y: 0 }));
    return;
  }

  // Heading word-stagger
  if (heading && typeof SplitText !== 'undefined') {
    const split = SplitText.create(heading, { type: 'words' });
    gsap.set(split.words, { yPercent: 50, autoAlpha: 0 });
    gsap.to(split.words, {
      yPercent: 0, autoAlpha: 1,
      duration: 0.8, ease: 'power3.out', stagger: 0.06,
      scrollTrigger: { trigger: inner, start: 'top 80%', once: true },
    });
  }

  // Per-card entrance — card frame rises from below while its image
  // clears a slight blur and zooms back from 1.06 → 1. Mirrors the
  // Team responsive entrance pattern.
  gsap.set(cards, { autoAlpha: 0, y: 40 });
  cards.forEach((card) => {
    const img = card.querySelector('.csGrid__image');
    if (img) gsap.set(img, { scale: 1.06, filter: 'blur(8px)' });

    ScrollTrigger.create({
      trigger: card,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        gsap.to(card, {
          autoAlpha: 1, y: 0,
          duration: 1.0, ease: 'power4.out',
        });
        if (img) {
          gsap.to(img, {
            scale: 1, filter: 'blur(0px)',
            duration: 1.3, ease: 'power4.out',
            // Drop the inline transform once the entrance settles so the
            // CSS `:hover` scale below can take over. Without this, the
            // GSAP-set `transform: matrix(...)` would always win against
            // the stylesheet rule.
            onComplete: () => gsap.set(img, { clearProps: 'transform,filter' }),
          });
        }
      },
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => setTimeout(initCsGridReveals, 0));
} else {
  setTimeout(initCsGridReveals, 0);
}
