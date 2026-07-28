/**
 * Scroll-reveal system for Genovas
 *
 * Implements ANIMATION_MAP recipe `a` (the master scroll-reveal used by 86%
 * of in-build IX2 triggers): fade + blur 30px → 0px, expo.out, 1s, delay 100ms.
 *
 * Usage on any element:
 *   <div data-reveal>...</div>
 *   <div data-reveal="up">...</div>      → fade + blur + translateY 30 → 0
 *   <div data-reveal="left">...</div>    → fade + blur + translateX -30 → 0
 *   <div data-reveal="right">...</div>   → fade + blur + translateX 30 → 0
 *
 * GSAP + ScrollTrigger loaded as globals via CDN.
 */
(function () {
  function init() {
    gsap.registerPlugin(ScrollTrigger);

    var REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Auto-tag elements that should reveal on scroll.
    var AUTO_REVEAL_SELECTORS = [
      // Section headings + descriptions
      "main h2",
      "main .heading-style-h1",
      "main .heading-style-h2",
      "main .text-base",
      "main .text-2xl",
      "main .text-xl",
      "main .text-wrap",
      // Card variants
      "main .card_wrap > div",
      "main .differentiators_card",
      "main .values_card",
      "main .vision_card",
      "main .mission_card",
      "main .stats_card",
      "main .stats", // .stats.is-two (home-2 layout) + .stats.is-three (home-3)
      "main .blog_card",
      "main .expertise_card",
      "main .testimonials_card",
      "main .testimonials_slider",
      "main .why_card",
      "main .author_name", // testimonial slide author block (a-4 stagger)
      "main .author_content", // testimonial author wrapper
      "main .cases-text", // yellow case card text
      // Icon blocks
      "main .icon-box", // .icon-box.is-small in cards
      // Section visuals (images)
      "main .cases_visual",
      "main .diferentiators_visual",
      "main .about-introduction_visual",
      "main .values_visual",
      "main .how_visual",
      "main .hero_visual",
      "main .partners_wrap", // about hero partners cluster
      "main .cta_img", // CTA decorative SVG (default variant — no rotation, just fade)
      "main .cta_content", // CTA content wrap (default variant)
      "main .cta_visual", // CTA visual photo (default variant)
      // CTA blocks
      "main .button-wrap",
    ];

    function autoTagReveals() {
      // Skip elements inside the hero (handled by hero-home.js on LOAD trigger)
      var hero = document.querySelector(".section_hero");
      AUTO_REVEAL_SELECTORS.forEach(function (sel) {
        document.querySelectorAll(sel).forEach(function (el) {
          if (hero && hero.contains(el)) return;
          if (!el.hasAttribute("data-reveal")) {
            el.setAttribute("data-reveal", "fade");
          }
        });
      });
    }

    autoTagReveals();

    // ============================================
    // a-25 "Image reveal" — scale 1.5→1 + blur 10→0 on `.img` children when
    // their parent enters viewport. Duration 1000ms outQuart.
    // ============================================
    function initImageReveal() {
      if (REDUCED_MOTION) return;
      var heroEl = document.querySelector(".section_hero");

      // Containers that should trigger the .img scale+blur reveal when entering viewport
      var containers = document.querySelectorAll(
        ".img-wrapper, .hero_visual, .cases_visual, .diferentiators_visual, .values_visual, .how_visual, .about-introduction_visual, .blog_visual, .testimonials_visual",
      );

      containers.forEach(function (container) {
        if (heroEl && heroEl.contains(container)) return; // skip hero
        var imgs = container.querySelectorAll(".img");
        if (!imgs.length) return;

        // Initial state (a-25 Group 0)
        gsap.set(imgs, { scale: 1.5, filter: "blur(10px)" });

        ScrollTrigger.create({
          trigger: container,
          start: "top 85%",
          once: true,
          onEnter: function () {
            return gsap.to(imgs, {
              scale: 1,
              filter: "blur(0px)",
              duration: 1.0,
              ease: "power4.out", // outQuart
            });
          },
        });
      });
    }

    initImageReveal();

    // ============================================
    // a-62 "Rotate Img two" — decorative SVG rotates 0° → 120° on scroll-in.
    // Duration 1500ms outQuad.
    // ============================================
    function initRotateOnScroll() {
      if (REDUCED_MOTION) return;
      var rotators = document.querySelectorAll(
        // home cases (a-62) + home stacked CTA (a-62) + about/blog default CTA (a-62 also)
        ".cases_img.is-three, .cta_img.is-three, .cta_img-wrap.is-two .cta_img",
      );
      rotators.forEach(function (el) {
        gsap.set(el, { rotate: 0 });
        ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          once: true,
          onEnter: function () {
            return gsap.to(el, {
              rotate: 120,
              duration: 1.5,
              ease: "power2.out", // outQuad
            });
          },
        });
      });
    }

    initRotateOnScroll();

    // ============================================
    // a-67 "Cta Img Reveal" — 4 cta_visual photos fly in from off-screen,
    // then rotate slightly for "scattered" final look.
    // ============================================
    function initCtaVisualReveal() {
      if (REDUCED_MOTION) return;
      document.querySelectorAll(".section_cta").forEach(function (section) {
        var v1 = section.querySelector(".cta_visual-one");
        var v2 = section.querySelector(".cta_visual-two");
        var v3 = section.querySelector(".cta_visual-three");
        var v4 = section.querySelector(".cta_visual-four");
        if (!v1 && !v2 && !v3 && !v4) return; // not the stacked variant

        // Initial state — far off-screen diagonal positions + invisible
        if (v1) gsap.set(v1, { opacity: 0, xPercent: 220, yPercent: 170, rotate: 0 });
        if (v2) gsap.set(v2, { opacity: 0, xPercent: -190, yPercent: 100, rotate: 0 });
        if (v3) gsap.set(v3, { opacity: 0, xPercent: 255, yPercent: -70, rotate: 0 });
        if (v4) gsap.set(v4, { opacity: 0, xPercent: -310, yPercent: -170, rotate: 0 });

        ScrollTrigger.create({
          trigger: section,
          start: "top 85%",
          once: true,
          onEnter: function () {
            // Stage 1: all visuals fly to center + fade in (1s outQuad)
            var tl = gsap.timeline();
            [v1, v2, v3, v4].forEach(function (v) {
              if (v) {
                tl.to(
                  v,
                  {
                    opacity: 1,
                    xPercent: 0,
                    yPercent: 0,
                    duration: 1.0,
                    ease: "power2.out", // outQuad
                  },
                  0,
                );
              }
            });
            // Stage 2: delay 900ms, slight rotation for scattered look (1s outQuad)
            if (v1) tl.to(v1, { rotate: -4, duration: 1.0, ease: "power2.out" }, 0.9);
            if (v2) tl.to(v2, { rotate: -4, duration: 1.0, ease: "power2.out" }, 0.9);
            if (v3) tl.to(v3, { rotate: 8, duration: 1.0, ease: "power2.out" }, 0.9);
            if (v4) tl.to(v4, { rotate: 4, duration: 1.0, ease: "power2.out" }, 0.9);
          },
        });
      });
    }

    initCtaVisualReveal();

    if (!REDUCED_MOTION) {
      var elements = document.querySelectorAll("[data-reveal]");

      elements.forEach(function (el) {
        var dir = el.dataset.reveal || "fade";
        var initial = { opacity: 0, filter: "blur(30px)" };
        var target = {
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "expo.out",
          delay: 0.1,
        };

        switch (dir) {
          case "up":
            initial.y = 30;
            target.y = 0;
            break;
          case "down":
            initial.y = -30;
            target.y = 0;
            break;
          case "left":
            initial.x = -30;
            target.x = 0;
            break;
          case "right":
            initial.x = 30;
            target.x = 0;
            break;
          // case "fade" → opacity+blur only
        }

        gsap.set(el, initial);
        ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          once: true,
          onEnter: function () {
            return gsap.to(el, target);
          },
        });
      });
    } else {
      // Reduced motion — reveal everything instantly
      document.querySelectorAll("[data-reveal]").forEach(function (el) {
        el.style.opacity = "1";
        el.style.filter = "none";
        el.style.transform = "none";
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
