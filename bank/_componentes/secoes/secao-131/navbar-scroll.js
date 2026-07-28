/* Hirely — scroll-linked navbar tone. Port of navbar-scroll.ts to a plain global
   (no `export`, self-init — Rule 1). Expects window.gsap + window.ScrollTrigger.

   STANDALONE-CARD DECISION (mirrors firmo-logos): in the source the navbar pill
   (`.navbar_content`) scrubs its fill white-12% -> black-40% as the hero
   (`.main-wrapper > :first-child`) scrolls away, so white links stay legible over
   light sections. In a standalone Taller card there is no long page to scroll, so
   a scrub would have no runway and could strand the pill mid-transition. So:
     • If a real hero trigger exists AND the card actually scrolls (page taller
       than viewport) -> run the real scrub (hero ports behave like the source).
     • Otherwise -> pin the pill to its settled INITIAL light state (white-12%),
       which is exactly the scroll-0 state — same as the live preview's first paint
       and a clean thumbnail. Never leaves it half-scrubbed.
   Only the fill colour is touched; backdrop-blur + white links are untouched. */
(function () {
  function init() {
    if (typeof gsap === 'undefined') return; // fail-safe: CSS default fill stays
    if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);

    var nav = document.querySelector('.navbar_content');
    if (!nav) return;

    var wrapper = document.querySelector('.main-wrapper');
    var hero = wrapper ? wrapper.firstElementChild : null;
    var scrolls = document.documentElement.scrollHeight > window.innerHeight + 50;

    // Standalone card with no real scroll runway -> settle at the initial light state.
    if (!hero || typeof ScrollTrigger === 'undefined' || !scrolls) {
      gsap.set(nav, { backgroundColor: 'rgba(255, 255, 255, 0.12)' });
      return;
    }

    gsap.fromTo(
      nav,
      { backgroundColor: 'rgba(255, 255, 255, 0.12)' },
      {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        ease: 'none',
        scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
      }
    );
  }

  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
