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

    document.querySelectorAll('.button_component').forEach((btn) => {
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

    document.querySelectorAll('.nav_links').forEach((link) => {
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
