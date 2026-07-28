(function () {
  'use strict';

  var gsap = window.gsap;
  var Swiper = window.Swiper;

  // ── Swiper init ───────────────────────────────────────────────────────
  // Slide engine — Swiper handles the actual transitions (fade with
  // crossfade, loop, keyboard arrows). Each section gets its own Swiper
  // instance so multiple Testimonials components on a page don't share a
  // controller.
  function initSwiper() {
    if (typeof Swiper === 'undefined') return;

    document.querySelectorAll('.testimonials').forEach(function (section) {
      var slider = section.querySelector('.testimonials__slider');
      var prev = section.querySelector('[data-prev]');
      var next = section.querySelector('[data-next]');
      if (!slider || !prev || !next) return;

      new Swiper(slider, {
        effect: 'fade',
        fadeEffect: { crossFade: true },
        speed: 700,
        loop: true,
        autoHeight: true,
        keyboard: { enabled: true, onlyInViewport: true },
        navigation: { prevEl: prev, nextEl: next },
      });
    });
  }

  // ── Nav button micro-interactions ─────────────────────────────────────
  // GSAP nav animations — replaces the CSS hover transition with a richer
  // micro-interaction: scale-up + colour shift on hover, a quick squash on
  // press, and a directional icon nudge whenever Swiper transitions.
  function initTestimonialsNavAnim() {
    if (typeof gsap === 'undefined') return;
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    document.querySelectorAll('.testimonials').forEach(function (section) {
      var prev = section.querySelector('[data-prev]');
      var next = section.querySelector('[data-next]');
      var slider = section.querySelector('.testimonials__slider');
      if (!prev || !next || !slider) return;

      // Touch viewports skip the hover/press bindings entirely. On touch
      // devices a tap fires mouseenter+mouseleave around the tap, leaving
      // the button flashing through the hover state. Keyboard focus/blur
      // and the slide nudge both stay on.
      var allowHover = window.matchMedia(
        '(min-width: 992px) and (hover: hover) and (pointer: fine)'
      ).matches;

      function bindButton(btn, dirSign) {
        if (reduce) return { nudge: function () {} };

        var animTo = function (vars) {
          var merged = Object.assign(
            { duration: 0.35, ease: 'power3.out', overwrite: 'auto' },
            vars
          );
          return gsap.to(btn, merged);
        };

        if (allowHover) {
          btn.addEventListener('mouseenter', function () { animTo({ scale: 1.08 }); });
          btn.addEventListener('mouseleave', function () { animTo({ scale: 1, x: 0 }); });
          btn.addEventListener('pointerdown', function () { animTo({ scale: 0.92, duration: 0.18 }); });
          btn.addEventListener('pointerup', function () { animTo({ scale: 1.08 }); });
        }
        btn.addEventListener('focus', function () { animTo({ scale: 1.08 }); });
        btn.addEventListener('blur', function () { animTo({ scale: 1, x: 0 }); });

        // `nudge()` runs whenever Swiper changes slide — the matching
        // button (prev or next) slides briefly in its own direction then
        // returns.
        return {
          nudge: function () {
            gsap.fromTo(
              btn,
              { x: dirSign * -6 },
              { x: 0, duration: 0.5, ease: 'power3.out', overwrite: 'auto' }
            );
          },
        };
      }

      var prevAnim = bindButton(prev, -1);
      var nextAnim = bindButton(next, +1);

      // Listen for Swiper slide changes. The Swiper instance is attached
      // to the .swiper element as `.swiper` — we wait a tick to grab it.
      var lastIndex = -1;
      var tick = function () {
        var swiperInst = slider.swiper;
        if (!swiperInst) {
          requestAnimationFrame(tick);
          return;
        }
        lastIndex = swiperInst.realIndex;
        swiperInst.on('slideChange', function () {
          var cur = swiperInst.realIndex;
          var dir = cur - lastIndex;
          if (dir > 1) dir = -1;       // wrapped from last → first
          if (dir < -1) dir = 1;       // wrapped from first → last
          if (dir > 0) nextAnim.nudge();
          else if (dir < 0) prevAnim.nudge();
          lastIndex = cur;
        });
      };
      requestAnimationFrame(tick);
    });
  }

  // ── Cascading entrance ────────────────────────────────────────────────
  // Image reveals top-down via a curtain (height 0 → 100% on the inner
  // wrapper, paired with a 1.05 → 1 image zoom), text drops in line-by-
  // line (y: -16 → 0 with stagger), and the nav arrows scale 0.5 → 1 with
  // a fade. Triggered once via IntersectionObserver.
  function initTestimonialsEntrance() {
    if (typeof gsap === 'undefined') return;
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    document.querySelectorAll('.testimonials').forEach(function (section) {
      var firstSlide = section.querySelector('.swiper-slide');
      if (!firstSlide) return;

      var imageReveal = firstSlide.querySelector('.testimonials__imageReveal');
      var image = firstSlide.querySelector('.testimonials__image');
      var quote = firstSlide.querySelector('.testimonials__quote');
      var authorName = firstSlide.querySelector('.testimonials__authorName');
      var authorTitle = firstSlide.querySelector('.testimonials__authorTitle');
      var navBtns = section.querySelectorAll('.testimonials__navBtn');

      if (reduce) return; // respect user preference

      var textBlocks = [quote, authorName, authorTitle].filter(Boolean);

      // Prime initial states.
      if (imageReveal) gsap.set(imageReveal, { height: 0 });
      if (image) gsap.set(image, { scale: 1.05 });
      if (textBlocks.length) gsap.set(textBlocks, { y: -16, autoAlpha: 0 });
      if (navBtns.length) {
        gsap.set(navBtns, { scale: 0.5, autoAlpha: 0, transformOrigin: 'center center' });
      }

      var playEntrance = function () {
        var tl = gsap.timeline();

        // 0.00s — curtain unroll paired with subtle image zoom-out.
        if (imageReveal) {
          tl.to(imageReveal, {
            height: '100%',
            duration: 1.1,
            ease: 'power3.out',
          }, 0);
        }
        if (image) {
          tl.to(image, {
            scale: 1,
            duration: 1.1,
            ease: 'power3.out',
          }, 0);
        }

        // 0.20s — quote + author drop in as whole blocks, staggered.
        if (textBlocks.length) {
          tl.to(textBlocks, {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.15,
          }, 0.2);
        }

        // 0.60s — nav arrows scale-in last.
        if (navBtns.length) {
          tl.to(navBtns, {
            scale: 1,
            autoAlpha: 1,
            duration: 0.55,
            ease: 'power3.out',
            stagger: 0.08,
          }, 0.6);
        }
      };

      var io = new IntersectionObserver(function (entries, obs) {
        for (var i = 0; i < entries.length; i++) {
          if (entries[i].isIntersecting) {
            playEntrance();
            obs.disconnect();
            break;
          }
        }
      }, { threshold: 0.15 });
      io.observe(section);
    });
  }

  // Boot order: init Swiper first, then wait for window.load so Swiper's
  // autoHeight layout has settled before we register the entrance + nav
  // animations. Without this, measurements are taken against a 0-height
  // section and the entrance never fires.
  function bootTestimonials() {
    initSwiper();
    initTestimonialsEntrance();
    initTestimonialsNavAnim();
  }

  if (document.readyState === 'complete') {
    bootTestimonials();
  } else {
    window.addEventListener('load', bootTestimonials, { once: true });
  }
})();
