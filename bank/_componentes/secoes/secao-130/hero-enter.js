/* Hirely — hero LOAD entrance. Port of hero-enter.ts to a plain global (no
   `export`, self-init — Rule 1). Expects window.gsap + window.SplitText from CDN.
   One timeline (all from t=0 on load): the `bounce-enter` ladder (h1 SplitText
   chars, bubble, description, button, svg/img width-grow, stats) + the home hero
   4-bar slide-in + the about hero card cluster. Owns the `html.hero-loading`
   first-paint guard (lifts it the instant start-states commit, + 2.5s failsafe +
   try/catch). No JS / reduced-motion -> guard never added -> hero visible now. */
(function () {
  var ROOT = document.documentElement;
  var REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var EXPO = 'expo.out';
  var CIRC = 'circ.inOut';

  function reveal() { ROOT.classList.remove('hero-loading'); }
  function has(sel) { return document.querySelector(sel) !== null; }

  function init() {
    // No GSAP -> can't animate; just lift the guard so the hero shows.
    if (typeof gsap === 'undefined') { reveal(); return; }
    if (typeof SplitText !== 'undefined') gsap.registerPlugin(SplitText);

    if (REDUCED) { reveal(); return; }

    if (!has('[bounce-enter], .hero-two_bar-top, .hero-two_bar-bottom, .about_img-wrap')) {
      reveal();
      return;
    }

    var failsafe = window.setTimeout(reveal, 2500);

    try {
      var tl = gsap.timeline({ defaults: { duration: 0.7, ease: EXPO } });
      var splits = [];

      // h1 — split every [bounce-enter="h1"], stagger ALL chars as one wave.
      var h1Chars = [];
      var canSplit = typeof SplitText !== 'undefined';
      document.querySelectorAll('[bounce-enter="h1"]').forEach(function (h1) {
        if (canSplit) {
          var split = new SplitText(h1, { type: 'words, chars' });
          splits.push(split);
          h1Chars.push.apply(h1Chars, split.chars);
        }
      });
      if (h1Chars.length) {
        gsap.set(h1Chars, { transformOrigin: '100% 0%' });
        tl.from(h1Chars, { scale: 0, stagger: { amount: 0.4, from: 'start' } }, 0);
      } else if (has('[bounce-enter="h1"]')) {
        // SplitText unavailable — reveal the whole h1 (no per-char), keep the ladder.
        tl.from('[bounce-enter="h1"]', { opacity: 0, scale: 0, transformOrigin: '100% 0%' }, 0);
      }

      if (has('[bounce-enter="bubble"]'))
        tl.from('[bounce-enter="bubble"]', { scale: 0, ease: CIRC, stagger: { amount: 0.4 } }, 0.23);

      if (has('[bounce-enter="description"]'))
        tl.from('[bounce-enter="description"]', { opacity: 0, scale: 0, transformOrigin: '50% 0%', stagger: { amount: 0.2 } }, 0.4);

      if (has('[bounce-enter="custom-button"]'))
        tl.from('[bounce-enter="custom-button"]', { opacity: 0, scale: 0, transformOrigin: '50% 0%' }, 0.48);

      if (has('[bounce-enter="hero-svg"]'))
        tl.from('[bounce-enter="hero-svg"]', { width: 0, transformOrigin: '50% 100%' }, 0.55);

      if (has('[bounce-enter="hero-img"]'))
        tl.from('[bounce-enter="hero-img"]', { width: 0 }, 0.55);

      if (has('[bounce-enter="stats"] > *'))
        tl.from('[bounce-enter="stats"] > *', { opacity: 0, yPercent: 100, stagger: { amount: 0.1 } }, 0.59);

      // Home hero image bars — top bars drop in, bottom bars rise.
      var bar = function (sel, pos, originY, yPct) {
        if (has(sel))
          tl.from(sel, { opacity: 0, scale: 0, yPercent: yPct, transformOrigin: '50% ' + originY }, pos);
      };
      bar('.hero-two_bar-top.is-one', 0, '0%', -100);
      bar('.hero-two_bar-top.is-two', 0.2, '0%', -100);
      bar('.hero-two_bar-bottom.is-three', 0.4, '100%', 100);
      bar('.hero-two_bar-bottom.is-four', 0.6, '100%', 100);

      // About hero card cluster — rise from y:100% + scale 0, staggered.
      if (has('.about_visuals > *'))
        tl.from('.about_visuals > *', { yPercent: 100, scale: 0, stagger: { amount: 0.25 } }, 0);

      reveal();
      window.clearTimeout(failsafe);
      tl.eventCallback('onComplete', function () {
        splits.forEach(function (s) { s.revert(); });
        gsap.set('[bounce-enter], .hero-two_bar-top, .hero-two_bar-bottom, .about_img-wrap', { clearProps: 'all' });
      });
    } catch (e) {
      reveal();
      window.clearTimeout(failsafe);
    }
  }

  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
