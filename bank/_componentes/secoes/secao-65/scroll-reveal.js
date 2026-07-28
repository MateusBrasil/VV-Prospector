// Global scroll-reveal engine -- decorative layer (Phase 5B animations pass).
//
// Source: every Webflow IX2 SCROLL_INTO_VIEW action on the surviving pages collapses
// to one preset. The opt-in hook `.scroll-into-view` is preserved verbatim in the
// markup, so the engine consumes it directly (1:1 with source -- no guessing which
// elements reveal). `[data-reveal*]` attributes are manual hooks for the two
// non-class presets whose `data-w-id` was stripped in S3.
//
//   .scroll-into-view / [data-reveal]  -> slideInUp  (opacity 0->1, y 15px->0, 700ms outQuart)
//   [data-reveal-img]                  -> scaleIn    (scale 1.5->1, 1s outQuart)        a-61
//   [data-reveal-rotate]               -> rotateIn   (opacity 0->1, rotate -5deg->0, 600ms) a-35
//
// Trigger = IntersectionObserver (NOT ScrollTrigger). The browser computes
// intersection live, so reveals fire reliably regardless of scroll speed, instant
// jumps (anchor links), or layout shifts from late fonts / the hero SplitText. With
// ScrollTrigger.batch those shifts left cached trigger positions stale, so far-down
// elements (e.g. the FAQ) could stay hidden-but-interactive -- clicking an accordion
// "did nothing" because the whole item was still opacity:0. IO eliminates that.
//
// Initial (hidden) state lives in reveal.css, gated on `html.reveal-on` + the SAME
// media query used here, so JS-off / reduced-motion / mobile users never see a
// hidden element. Mobile (<=991px) is intentionally excluded: there the card grids
// become Swiper sliders (grid-slider) and a hidden initial state would blank the
// off-screen slides.
(function () {
  // Reveal ~10% into the viewport (matches the old ScrollTrigger "top 90%").
  const ROOT_MARGIN = '0px 0px -10% 0px';

  // Observe a set, run `reveal` on each batch of entering elements (once), unobserve.
  function observe(selector, reveal, rootMargin = ROOT_MARGIN) {
    const io = new IntersectionObserver(
      (entries) => {
        const entering = entries
          .filter((e) => e.isIntersecting)
          .map((e) => e.target);
        if (entering.length) {
          reveal(entering);
          entering.forEach((el) => io.unobserve(el));
        }
      },
      { rootMargin, threshold: 0 }
    );
    document.querySelectorAll(selector).forEach((el) => io.observe(el));
    return io;
  }

  function initReveals() {
    const mm = gsap.matchMedia();

    // Desktop + motion allowed -- the only context where reveal.css hides elements.
    mm.add('(min-width: 992px) and (prefers-reduced-motion: no-preference)', () => {
      // slideInUp -- a cluster entering in the same observer callback staggers as a group.
      const ioText = observe('.scroll-into-view, [data-reveal]', (els) =>
        gsap.to(els, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power4.out',
          stagger: 0.08,
          overwrite: 'auto',
        })
      );

      // scaleIn -- image zoom-out (a-61).
      const ioImg = observe('[data-reveal-img]', (els) =>
        els.forEach((el) => gsap.to(el, { scale: 1, duration: 1, ease: 'power4.out' }))
      );

      // rotateIn -- join/CTA card (a-35), fires slightly later (off 20%).
      const ioRot = observe(
        '[data-reveal-rotate]',
        (els) =>
          els.forEach((el) =>
            gsap.to(el, { opacity: 1, rotation: 0, duration: 0.6, ease: 'sine.out' })
          ),
        '0px 0px -20% 0px'
      );

      // join social-proof avatars -- slide in from the right in a staircase (the source
      // `animation="join-user-list"` / `join-user-img` hooks; exact IX2 values weren't in
      // the export, reconstructed per Edgar). Observe the list, stagger its avatars.
      const ioUsers = observe('[animation="join-user-list"]', (els) =>
        els.forEach((el) => {
          // avatars (x3) + the "+20k customers" label, in DOM order -> the label lands
          // last in the staircase.
          const items = el.querySelectorAll('.user-image, .users-count');
          gsap.to(items, {
            x: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power4.out',
            stagger: 0.12,
            overwrite: 'auto',
          });
        })
      );

      // matchMedia cleanup (e.g. resize down to mobile): stop observing.
      return () => {
        ioText.disconnect();
        ioImg.disconnect();
        ioRot.disconnect();
        ioUsers.disconnect();
      };
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReveals);
  } else {
    initReveals();
  }
})();
