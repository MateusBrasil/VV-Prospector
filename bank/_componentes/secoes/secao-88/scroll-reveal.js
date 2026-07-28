/* Firmo — shared reveal engine. Port of the template's reveal.ts to a plain global
   (no `export`, self-init — Rule 1). Expects window.gsap + window.ScrollTrigger from CDN.
   Generic reveals only (parallax images, scroll-into-view slide-in, reveal-up, fade,
   logos scrub); page heroes carry their own on-load script. Timings/easings verbatim
   from the source (outQuart = power3.out). Honors prefers-reduced-motion. */
(function () {
  if (typeof gsap === 'undefined') return; // fail-safe: no JS → content stays visible
  if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);

  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

  var EASE = 'power3.out';
  var SLIDE = 0.7;
  var PARALLAX = 1.7;
  var SLIDE_X = 100;
  var SLIDE_Y = 100;

  var PARALLAX_PARENTS = [
    '.business_image',
    '.support_image',
    '.overview_image',
    '.contact_image',
    '.about-three_image',
    '.services-hero_image',
    '.experience_image',
    '.blog_image',
    '.blogs-hero_image',
    '.location_image',
    '.blogs-three_card-image',
    '.team_card-image',
  ].join(',');

  function initReveal() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.classList.remove('anim');
      return;
    }

    // 1) Parallax images — wrapper y -110%→0; img y 110%→0, scale 1.5→1, blur 10→0; 1.7s.
    document.querySelectorAll(PARALLAX_PARENTS).forEach(function (parent) {
      var wrap = parent.querySelector('.img-wrapper');
      var img = wrap && wrap.querySelector('.img');
      if (!wrap || !img) return;
      gsap.set(wrap, { yPercent: -110, opacity: 1 });
      gsap.set(img, { yPercent: 110, scale: 1.5, filter: 'blur(10px)' });
      gsap
        .timeline({
          scrollTrigger: { trigger: parent, start: 'top 85%', once: true },
          onComplete: function () { gsap.set([wrap, img], { clearProps: 'transform,filter' }); },
        })
        .to(wrap, { yPercent: 0, duration: PARALLAX, ease: EASE }, 0)
        .to(img, { yPercent: 0, scale: 1, filter: 'blur(0px)', duration: PARALLAX, ease: EASE }, 0);
    });

    // 2) [reveal-x] .scroll-into-view → horizontal slide-in: x +100 → 0 + opacity, 0.7s.
    gsap.utils.toArray('.scroll-into-view').forEach(function (el) {
      if (el.closest('.section_hero')) return;
      if (el.closest('.section_logos')) return;
      gsap.set(el, { x: SLIDE_X, opacity: 0 });
      gsap.to(el, {
        x: 0, opacity: 1, duration: SLIDE, ease: EASE,
        scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      });
    });

    // 2c) [reveal-y] .reveal-up cards enter from below: y +100 → 0 + opacity.
    gsap.utils.toArray('.reveal-up').forEach(function (el) {
      if (el.closest('.footer')) return;
      gsap.set(el, { y: SLIDE_Y, opacity: 0 });
      gsap.to(el, {
        y: 0, opacity: 1, duration: SLIDE, ease: EASE,
        scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      });
    });

    // 2d) Footer entrance — .reveal-up blocks slide up, staggered, off the .footer container.
    var footer = document.querySelector('.footer');
    if (footer) {
      var items = footer.querySelectorAll('.reveal-up');
      gsap.set(items, { y: SLIDE_Y, opacity: 0 });
      gsap.to(items, {
        y: 0, opacity: 1, duration: SLIDE, ease: EASE, stagger: 0.08,
        scrollTrigger: { trigger: footer, start: 'top 80%', once: true },
      });
    }

    // 2e) [reveal-fade] .reveal-fade — opacity 0 → 1, no transform.
    gsap.utils.toArray('.reveal-fade').forEach(function (el) {
      gsap.set(el, { opacity: 0 });
      gsap.to(el, {
        opacity: 1, duration: SLIDE, ease: EASE,
        scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      });
    });

    // 3) Logos strip — one-shot slide-in ON VIEW (adapted from the source scroll-scrub
    // for the standalone catalog: a scroll-scrub and a clean thumbnail are mutually
    // exclusive — the scrub's settled state IS scroll-0, so to SEE motion the strip must
    // start off-position, which the thumbnail would then capture. Firing the same
    // 30vw→0 slide ONCE when the strip enters view gives both: motion in the opened
    // live preview (injectRevealFix runs it on-view in prod) + settled/clean thumbnail.
    // Lines fade in. ≤991: fade only.
    var logos = document.querySelector('.section_logos');
    if (logos) {
      var lines = logos.querySelectorAll('.horizontal-line');
      var mm = gsap.matchMedia();
      mm.add('(min-width: 992px)', function () {
        gsap.set(logos, { x: function () { return 0.3 * window.innerWidth; } });
        gsap.to(logos, {
          x: 0, duration: PARALLAX, ease: EASE,
          scrollTrigger: { trigger: logos, start: 'top 90%', once: true },
        });
        lines.forEach(function (line) {
          gsap.set(line, { opacity: 0 });
          gsap.to(line, {
            opacity: 1, duration: SLIDE, ease: EASE,
            scrollTrigger: { trigger: logos, start: 'top 85%', once: true },
          });
        });
      });
      mm.add('(max-width: 991px)', function () {
        gsap.set(logos, { x: 0 });
        gsap.set(lines, { opacity: 1 });
        gsap.fromTo(logos, { opacity: 0 }, {
          opacity: 1, duration: SLIDE, ease: EASE,
          scrollTrigger: { trigger: logos, start: 'top 85%', once: true },
        });
      });
    }

    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.refresh();
      window.addEventListener('load', function () { ScrollTrigger.refresh(); });
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initReveal);
  else initReveal();
})();
