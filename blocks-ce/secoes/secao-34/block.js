(function(){
  var __root = document.querySelector('[data-blk="secoes-secao-34"]');
  if(!__root) return;
  var __q = function(s){ return __root.querySelector(s) || document.querySelector(s); };
  var __qa = function(s){ var r = __root.querySelectorAll(s); return r.length ? r : document.querySelectorAll(s); };

/* scroll-reveal.js */
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
    __qa(selector).forEach((el) => io.observe(el));
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


/* button-hover.js */
// Button hover -- per-letter slide + button press (Phase 5B).
//
// Source effect (driven by the GSAP-attribute custom code that wasn't exported;
// reconstructed to the remembered spec): the label is split into letters; on hover
// each letter slides up 1.5rem (staggered) while the button scales down to 0.95.
// `.button_text` carries `text-shadow: 0 1.5rem 0 <text colour>` (webflow.css) -- a
// clone of each letter 1.5rem below, clipped by `.button_mask` (overflow:hidden) --
// so as a letter slides up, its shadow lands exactly where it was: a per-letter
// self-swap. Letters move UP (negative) so the +1.5rem shadow takes their place.
//
// GSAP-only (no CSS :hover) -- a CSS transform-transition would fight the per-frame
// writes (same class of bug as the navbar intro). prefers-reduced-motion -> static.
(function () {
  gsap.registerPlugin(SplitText);

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const MOVE = '-1.5rem';
  // Nav links use em (not rem): the clone offset is `1.5em` in CSS (relative to the
  // link's own font-size), so the GSAP travel must match in the same unit.
  const NAV_MOVE = '-1.5em';
  const TEXT = { duration: 0.635, ease: 'power4.inOut', stagger: { amount: 0.1 } };
  const SCALE = { duration: 0.5, ease: 'sine.inOut' };

  function initButtonHovers() {
    if (reduce) return;

    __qa('.button_component').forEach((btn) => {
      const textEl = btn.querySelector('.button_text');
      if (!textEl) return;

      const chars = new SplitText(textEl, { type: 'chars' }).chars;

      btn.addEventListener('mouseenter', () => {
        gsap.to(chars, { y: MOVE, ...TEXT, overwrite: 'auto' });
        gsap.to(btn, { scale: 0.95, ...SCALE, overwrite: 'auto' });
      });
      btn.addEventListener('mouseleave', () => {
        gsap.to(chars, { y: 0, ...TEXT, overwrite: 'auto' });
        gsap.to(btn, { scale: 1, ...SCALE, overwrite: 'auto' });
      });
    });
  }

  // Nav links -- same per-letter swap as the buttons (no button scale). The clone is
  // `.nav_link-text`'s `text-shadow: ...currentColor` (components.css), masked by its
  // overflow:hidden. Hover is bound on the whole `<a>` so the full link is the target.
  function initNavLinkHovers() {
    if (reduce) return;

    __qa('.nav_links').forEach((link) => {
      const textEl = link.querySelector('.nav_link-text');
      if (!textEl) return;

      const chars = new SplitText(textEl, { type: 'chars' }).chars;

      link.addEventListener('mouseenter', () => {
        gsap.to(chars, { y: NAV_MOVE, ...TEXT, overwrite: 'auto' });
      });
      link.addEventListener('mouseleave', () => {
        gsap.to(chars, { y: 0, ...TEXT, overwrite: 'auto' });
      });
    });
  }

  function init() {
    initButtonHovers();
    initNavLinkHovers();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();


/* script.js */
// upmind-join-section — no component-specific boot needed.
//
// All behavior is supplied by the shared classic scripts loaded in index.html:
//   /upmind/scripts/scroll-reveal.js  — reveals the .scroll-into-view blocks,
//     the [data-reveal-rotate] join card, and the [animation="join-user-list"]
//     social-proof avatars + count (self-initializes on DOM ready).
//   /upmind/scripts/button-hover.js   — per-letter slide + press on the
//     "Book a Call" .button_component (self-initializes on DOM ready).
//
// Hidden start-states live in /upmind/styles.css, gated on `html.reveal-on`,
// so if JS fails the content stays fully visible.

})();