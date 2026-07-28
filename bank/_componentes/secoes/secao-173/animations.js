// Aeline — animation layer (ported from src/scripts/animations.ts).
// data-anim engine + hero entrance + 3D carousel + marquees/loops + title icons +
// counters + generic reveals + staggers. Respects prefers-reduced-motion.
(function () {
  var gsap = window.gsap;
  var ScrollTrigger = window.ScrollTrigger;
  if (!gsap) return;
  if (ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ───────────────────────── 1. data-anim engine ─────────────────────────
  function initDataAnim() {
    // Smart trigger: play on load if visible, use ScrollTrigger if below the fold.
    function smartPlay(el, tl, delay) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        tl.delay(delay || 0.3).play();
      } else {
        ScrollTrigger.create({ trigger: el, start: "top 85%", onEnter: function () { tl.play(); } });
      }
    }

    // 1. CARD REVEAL (Expertise bento cards)
    document.querySelectorAll('[data-anim="card-reveal"]').forEach(function (c) {
      var tl = gsap.timeline({ paused: true });
      tl.from(c, { autoAlpha: 0, scale: 0.92, duration: 0.55, ease: "power3.out" });
      var labels = c.querySelectorAll('[data-anim="fade-up"]');
      if (labels.length) {
        tl.from(labels, { autoAlpha: 0, y: 10, duration: 0.4, stagger: 0.1, ease: "power2.out" }, "-=0.4");
      }
      c.querySelectorAll('[data-anim="progress"]').forEach(function (b) {
        var f = b.firstElementChild;
        if (f) {
          var w = f.style.width || "49%";
          gsap.set(f, { width: "0%" });
          tl.to(f, { width: w, duration: 0.9, ease: "power2.inOut" }, "-=0.15");
        }
      });
      c.querySelectorAll('[data-anim="stagger-rows"]').forEach(function (r) {
        tl.from(r.children, { autoAlpha: 0, x: 20, duration: 0.4, stagger: 0.1, ease: "power2.out" }, "-=0.35");
      });
      var barChart = c.querySelector('[data-anim="bar-grow"]');
      if (barChart) {
        var barEls = barChart.querySelectorAll(".bcard_bar");
        barEls.forEach(function (bar) { gsap.set(bar, { scaleY: 0, transformOrigin: "bottom center" }); });
        var yearLabels = barChart.querySelectorAll(".bcard_text-year");
        tl.from(yearLabels, { autoAlpha: 0, y: 6, duration: 0.25, stagger: 0.05, ease: "power2.out" }, "-=0.3");
        tl.to(barEls, { scaleY: 1, duration: 0.6, stagger: 0.09, ease: "back.out(1.4)" }, "-=0.1");
      }
      c.querySelectorAll('[data-anim="stagger-text"]').forEach(function (st) {
        tl.from(st.children, { autoAlpha: 0, y: 12, duration: 0.35, stagger: 0.09, ease: "power2.out" }, "-=0.35");
      });
      smartPlay(c, tl, 0.3);
    });

    // 2. ORBIT REVEAL (ocard)
    document.querySelectorAll('[data-anim="orbit-reveal"]').forEach(function (o) {
      var tl = gsap.timeline({ paused: true });
      var rings = o.querySelectorAll(".ocard_ring");
      tl.from(o, { autoAlpha: 0, duration: 0.25 });
      tl.from(rings, { scale: 0, autoAlpha: 0, duration: 0.45, ease: "back.out(2)" }, "-=0.15");
      var center = o.querySelector('[data-anim="fade-up"]');
      if (center) tl.from(center, { scale: 0, autoAlpha: 0, duration: 0.45, ease: "back.out(2)" }, "-=0.4");
      var pills = o.querySelectorAll('[data-anim="pill-float"]');
      pills.forEach(function (pill) {
        tl.from(pill, { autoAlpha: 0, scale: 0.7, duration: 0.5, ease: "back.out(1.5)" }, "-=0.35");
      });
      // continuous orbit after the reveal
      tl.call(function () {
        var oRect = o.getBoundingClientRect();
        var cx = oRect.left + oRect.width / 2;
        var cy = oRect.top + oRect.height / 2;
        var durations = [50, 60, 45];
        pills.forEach(function (pill, i) {
          var pRect = pill.getBoundingClientRect();
          var px = pRect.left + pRect.width / 2;
          var py = pRect.top + pRect.height / 2;
          var dx = px - cx, dy = py - cy;
          var radius = Math.sqrt(dx * dx + dy * dy);
          var startAngle = Math.atan2(dy, dx);
          var origX = Math.cos(startAngle) * radius;
          var origY = Math.sin(startAngle) * radius;
          var speed = (2 * Math.PI) / (durations[i] || 50);
          var angle = startAngle;
          gsap.ticker.add(function () {
            angle += (speed * gsap.ticker.deltaRatio(60)) / 60;
            gsap.set(pill, { x: Math.cos(angle) * radius - origX, y: Math.sin(angle) * radius - origY });
          });
        });
      });
      smartPlay(o, tl, 0.3);
    });

    // 3. STANDALONE FADE-UP (no anidado en card/orbit)
    document.querySelectorAll('[data-anim="fade-up"]').forEach(function (el) {
      if (el.closest('[data-anim="card-reveal"]') || el.closest('[data-anim="orbit-reveal"]')) return;
      var tl = gsap.timeline({ paused: true });
      tl.from(el, { autoAlpha: 0, y: 40, duration: 0.7, ease: "power2.out" });
      smartPlay(el, tl, 0.2);
    });

    // 4. TAG MARQUEES inside cards (data-anim) — speed 35 px/s
    initMarquee('[data-anim="marquee-right"]', "left", 35);
    initMarquee('[data-anim="marquee-left"]', "right", 35);
  }

  // Seamless marquee; the children are duplicated ×2 in the markup.
  function initMarquee(selector, direction, speed) {
    document.querySelectorAll(selector).forEach(function (row) {
      var items = gsap.utils.toArray(row.children);
      if (!items.length) return;
      var half = items.length / 2;
      var totalWidth = 0;
      for (var i = 0; i < half; i++) {
        totalWidth += items[i].offsetWidth + parseFloat(getComputedStyle(row).gap || "0");
      }
      var duration = totalWidth / speed;
      if (direction === "left") {
        gsap.set(row, { x: 0 });
        gsap.to(row, {
          x: -totalWidth, duration: duration, ease: "none", repeat: -1,
          modifiers: { x: gsap.utils.unitize(function (x) { return parseFloat(x) % totalWidth; }) },
        });
      } else {
        gsap.set(row, { x: -totalWidth });
        gsap.to(row, {
          x: 0, duration: duration, ease: "none", repeat: -1,
          modifiers: { x: gsap.utils.unitize(function (x) { return -totalWidth + ((parseFloat(x) + totalWidth) % totalWidth); }) },
        });
      }
    });
  }

  // ───────────────────────── 2. HERO ENTRANCE (on load) ─────────────────────────
  function initHero() {
    var heroBits = document.querySelector('[hero-text], [data-hero-bg], [data-hero-visual], [data-hero-wrap], [data-hero-fade]');
    if (!heroBits) return;
    var tl = gsap.timeline();
    // [data-hero-wrap]: scale 1.1→1 (home hero). [data-hero-fade] on secondary heroes.
    gsap.utils.toArray("[data-hero-wrap]").forEach(function (el) {
      tl.from(el, { scale: 1.1, duration: 1.0, ease: "power1.out" }, 0);
    });
    var heroFades = gsap.utils.toArray("[data-hero-fade]");
    if (heroFades.length) {
      tl.from(heroFades, { autoAlpha: 0, y: "2rem", duration: 0.8, stagger: 0.12, ease: "power2.out" }, 0);
    }
    gsap.utils.toArray("[data-hero-bg]").forEach(function (el) {
      tl.from(el, { scale: 1.2, duration: 1.5, ease: "power1.inOut" }, 0);
    });
    gsap.utils.toArray("[data-hero-visual]").forEach(function (el) {
      tl.from(el, { scale: 0, autoAlpha: 0, duration: 1.25, ease: "back.out(1.7)" }, 0);
    });
    var heroTexts = gsap.utils.toArray("[hero-text]");
    if (heroTexts.length) {
      tl.from(heroTexts, { autoAlpha: 0, y: "1.5rem", duration: 0.6, stagger: 0.1, ease: "power2.out" }, 0);
    }
    var buttons = gsap.utils.toArray("[data-hero-button]");
    if (buttons.length) {
      tl.from(buttons, { scale: 0, autoAlpha: 0, duration: 0.6, stagger: { amount: 0.25 }, ease: "power2.out" }, 0.3);
    }
    // [data-hero-stairs]: social proof enters from the left in a staircase cascade.
    gsap.utils.toArray("[data-hero-stairs]").forEach(function (el) {
      var text = el.querySelector(":scope > div:not(.avatars-wrap)");
      var avatars = gsap.utils.toArray(el.querySelectorAll(".avatar-item"));
      var targets = [text].concat(avatars).filter(Boolean);
      if (!targets.length) return;
      tl.from(targets, { x: -32, autoAlpha: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" }, 0.15);
    });
  }

  // ───────────── 2b. HERO VISUAL — looping 3D carousel (._3d .group) ─────────────
  function initHeroVisual() {
    gsap.utils.toArray("._3d .group").forEach(function (group) {
      gsap.to(group, { rotation: "-=360", duration: 40, ease: "none", repeat: -1 });
    });
  }

  // ───────────────────────── 3. LOGO MARQUEE (.loop_logos) ─────────────────────────
  function initLogoMarquee() {
    document.querySelectorAll(".loop").forEach(function (track) {
      var rows = track.querySelectorAll(".loop_logos");
      if (rows.length < 2) return; // needs 2 identical rows for a seamless loop
      gsap.to(track, { xPercent: -50, duration: 20, ease: "none", repeat: -1 });
    });
  }

  // Continuous image loops: hero image loop (.loop_img) and services testimonials (.testi_loop).
  function initLoops() {
    document.querySelectorAll(".loop_img, .testi_loop").forEach(function (track) {
      if (track.children.length < 2) return; // 2 identical groups for a seamless loop
      gsap.to(track, { xPercent: -50, duration: 20, ease: "none", repeat: -1 });
    });
  }

  // ──────────── 3b. TITLE ICONS — width 0→3rem on scroll (animation="title") ────────────
  function initTitleIcons() {
    if (window.matchMedia("(max-width: 767px)").matches) return;
    gsap.utils.toArray(".title-wrap").forEach(function (wrap) {
      var icons = wrap.querySelectorAll(".title-icon");
      if (!icons.length) return;
      gsap.from(icons, {
        width: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: wrap, start: "top 60%", once: true },
      });
    });
  }

  // ───────────────────────── 4. COUNTERS (fs-numbercount → GSAP) ─────────────────────────
  function initCounters() {
    document.querySelectorAll("[fs-numbercount-element='number'], [fs-numbercount-end]").forEach(function (el) {
      var end = parseFloat(el.getAttribute("fs-numbercount-end") || el.textContent || "0");
      var start = parseFloat(el.getAttribute("fs-numbercount-start") || "0");
      var dur = parseFloat(el.getAttribute("fs-numbercount-duration") || "2000") / 1000;
      if (isNaN(end)) return;
      // preserve suffixes/prefixes from the original text (e.g. "+", "k+", "%")
      var raw = (el.textContent || "").trim();
      var suffix = raw.replace(/[\d.,\s]/g, "");
      var obj = { v: start };
      var render = function () { el.textContent = Math.round(obj.v).toLocaleString("en-US") + suffix; };
      render();
      ScrollTrigger.create({
        trigger: el, start: "top 90%", once: true,
        onEnter: function () { gsap.to(obj, { v: end, duration: dur, ease: "power1.out", onUpdate: render }); },
      });
    });
  }

  // ───────────────────────── 5. GENERIC SCROLL REVEALS ([data-reveal]) ─────────────────────────
  function initReveals() {
    document.querySelectorAll("[data-reveal]").forEach(function (el) {
      var kind = el.getAttribute("data-reveal") || "up";
      var from = { autoAlpha: 0, duration: 1, ease: "power3.out" };
      if (kind === "scale") { from.scale = parseFloat(el.getAttribute("data-reveal-scale") || "0.92"); }
      else if (kind === "right") { from.x = "5rem"; }
      else { from.y = 40; }
      from.scrollTrigger = { trigger: el, start: "top 90%", once: true };
      gsap.from(el, from);
    });
  }

  // ───────────────────────── 6. STAGGER REVEALS ([data-stagger]) ─────────────────────────
  function initStaggers() {
    document.querySelectorAll("[data-stagger]").forEach(function (group) {
      var sel = group.getAttribute("data-stagger");
      var targets = sel ? group.querySelectorAll(sel) : group.children;
      if (!targets.length) return;
      gsap.from(targets, {
        autoAlpha: 0, y: 28, duration: 0.6, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: group, start: "top 85%", once: true },
      });
    });
  }

  // ───────────────────────── bootstrap ─────────────────────────
  function run() {
    if (reduce) {
      // show everything statically
      gsap.set("[data-anim], [hero-text], [data-hero-bg], [data-hero-visual], [data-hero-wrap], [data-hero-fade], [data-hero-button], [data-hero-stairs] *, [data-stagger] > *, [data-reveal]", {
        clearProps: "all", autoAlpha: 1,
      });
      return;
    }
    initDataAnim();
    initHero();
    initHeroVisual();
    initTitleIcons();
    initLogoMarquee();
    initLoops();
    initCounters();
    initReveals();
    initStaggers();
    // refresh ScrollTrigger after images/fonts load
    if (ScrollTrigger) window.addEventListener("load", function () { ScrollTrigger.refresh(); });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
