/* ============================================================
   Vaultix — Hero
   Standalone port. Uses GSAP + ScrollTrigger + SplitText + Flip
   loaded from the CDN as globals (window.gsap, window.ScrollTrigger,
   window.SplitText, window.Flip). The eases + scramble-hover helpers
   come from /vaultix/eases.js + /vaultix/scramble-hover.js.
   ============================================================ */
(function () {
  "use strict";

  // ------------------------------------------------------------
  // LiquidCanvas — animated halftone field + floating popup cards.
  // Runs independently of GSAP (rAF + native canvas).
  // ------------------------------------------------------------
  (function initLiquidCanvas() {
    const stage = document.getElementById("stage");
    if (!stage) return;

    const PRESET = {
      color: "#b5d2ff",
      bg: "#010101",
      scaleX: 0.05,
      scaleY: 0.05,
      octaves: 1,
      warp: 0.46,
      speed: 1.66,
      driftX: -0.4,
      driftY: -0.32,
      threshold: 0.67,
      softness: 0.22,
      maxSize: 1,
      glow: 10,
      glowIntensity: 0.5,
      glowOn: false,
    };

    const CELL = 7;
    const GAP = 1.5;
    const DOT = CELL - GAP;

    function hash3(x, y, z) {
      const n = Math.sin(x * 127.1 + y * 311.7 + z * 74.7) * 43758.5453;
      return n - Math.floor(n);
    }
    function vnoise3(x, y, z) {
      const xi = Math.floor(x),
        yi = Math.floor(y),
        zi = Math.floor(z);
      const xf = x - xi,
        yf = y - yi,
        zf = z - zi;
      const sx = xf * xf * (3 - 2 * xf),
        sy = yf * yf * (3 - 2 * yf),
        sz = zf * zf * (3 - 2 * zf);
      const c000 = hash3(xi, yi, zi);
      const c100 = hash3(xi + 1, yi, zi);
      const c010 = hash3(xi, yi + 1, zi);
      const c110 = hash3(xi + 1, yi + 1, zi);
      const c001 = hash3(xi, yi, zi + 1);
      const c101 = hash3(xi + 1, yi, zi + 1);
      const c011 = hash3(xi, yi + 1, zi + 1);
      const c111 = hash3(xi + 1, yi + 1, zi + 1);
      const x00 = c000 * (1 - sx) + c100 * sx;
      const x10 = c010 * (1 - sx) + c110 * sx;
      const x01 = c001 * (1 - sx) + c101 * sx;
      const x11 = c011 * (1 - sx) + c111 * sx;
      const y0 = x00 * (1 - sy) + x10 * sy;
      const y1 = x01 * (1 - sy) + x11 * sy;
      return y0 * (1 - sz) + y1 * sz;
    }
    function smoothstep(e0, e1, x) {
      const t = Math.max(0, Math.min(1, (x - e0) / (e1 - e0)));
      return t * t * (3 - 2 * t);
    }

    const POPUP_W = 165;
    const POPUP_H = 115;
    const SLOTS = 12;
    const SPAWN_EVERY = 900;
    const ALIVE_AT_ONCE = SLOTS - 3;
    const LIFESPAN_MS = SPAWN_EVERY * ALIVE_AT_ONCE;
    let spawnIdx = 0;

    const globalCanvas = document.createElement("canvas");
    const gctx = globalCanvas.getContext("2d");
    let STAGE_W = 0,
      STAGE_H = 0;

    function slotPosition(slotIdx, rect) {
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const R = Math.min(rect.width, rect.height) * 0.26;
      const ang = (slotIdx / SLOTS) * Math.PI * 2 - Math.PI / 2;
      return {
        x: cx + Math.cos(ang) * R - POPUP_W / 2,
        y: cy + Math.sin(ang) * R - POPUP_H / 2,
      };
    }

    function resizeGlobal() {
      const r = stage.getBoundingClientRect();
      STAGE_W = Math.floor(r.width);
      STAGE_H = Math.floor(r.height);
      globalCanvas.width = STAGE_W;
      globalCanvas.height = STAGE_H;
      gctx.imageSmoothingEnabled = false;
      stage.querySelectorAll(".popup").forEach((p) => {
        const slot = parseInt(p.dataset.slot || "0", 10);
        const { x, y } = slotPosition(slot, r);
        p.style.left = x + "px";
        p.style.top = y + "px";
      });
    }
    window.addEventListener("resize", resizeGlobal);
    resizeGlobal();

    const gT0 = performance.now();
    function renderGlobalHalftone(now) {
      const t = (now - gT0) * 0.001;
      gctx.clearRect(0, 0, STAGE_W, STAGE_H);
      gctx.fillStyle = PRESET.color;

      const cols = Math.floor(STAGE_W / CELL);
      const rows = Math.floor(STAGE_H / CELL);
      const maxSide = DOT * PRESET.maxSize;
      const lo = PRESET.threshold - PRESET.softness;
      const hi = PRESET.threshold + PRESET.softness;
      const dx = t * PRESET.driftX;
      const dy = t * PRESET.driftY;
      const nz = t * PRESET.speed;

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          let nx = x * PRESET.scaleX + dx;
          let ny = y * PRESET.scaleY + dy;
          if (PRESET.warp > 0) {
            nx +=
              (vnoise3(nx * 1.3 + 11, ny * 1.3, nz * 0.7) - 0.5) *
              PRESET.warp *
              4;
            ny +=
              (vnoise3(nx * 1.3, ny * 1.3 + 23, nz * 0.7 + 7) - 0.5) *
              PRESET.warp *
              4;
          }
          let n = vnoise3(nx, ny, nz);
          if (PRESET.octaves >= 2) {
            n = n * 0.6 + vnoise3(nx * 2.1, ny * 2.1, nz * 1.3) * 0.4;
          }
          if (PRESET.octaves >= 3) {
            n = n * 0.75 + vnoise3(nx * 4.3, ny * 4.3, nz * 1.7) * 0.25;
          }
          const side = smoothstep(lo, hi, n) * maxSide;
          if (side < 0.6) continue;
          const cx = x * CELL + CELL / 2;
          const cy = y * CELL + CELL / 2;
          gctx.fillRect(cx - side / 2, cy - side / 2, side, side);
        }
      }
      requestAnimationFrame(renderGlobalHalftone);
    }
    requestAnimationFrame(renderGlobalHalftone);

    function popupTemplate(label) {
      return (
        '<div class="popup-header">' +
        '<div class="popup-status"></div>' +
        '<div class="popup-title">' +
        label +
        "</div>" +
        '<div class="popup-bars" aria-hidden="true">' +
        '<span class="bar" style="animation-delay:0.00s"></span>' +
        '<span class="bar" style="animation-delay:0.18s"></span>' +
        '<span class="bar" style="animation-delay:0.36s"></span>' +
        '<span class="bar" style="animation-delay:0.54s"></span>' +
        '<span class="bar" style="animation-delay:0.72s"></span>' +
        '<span class="bar" style="animation-delay:0.90s"></span>' +
        "</div>" +
        "</div>" +
        '<div class="popup-body"><canvas></canvas></div>'
      );
    }

    const LABELS = [
      "ROUTE",
      "INFER",
      "DEPLOY",
      "INGEST",
      "STREAM",
      "VAULT",
      "CACHE",
      "PROXY",
      "TRACE",
      "MODEL",
      "EDGE",
      "SHARD",
    ];

    function makeLabel() {
      const word = LABELS[spawnIdx % LABELS.length];
      return word + '<span class="sep">//</span>';
    }

    const popupCanvases = new Set();

    function hexToRgba(hex, a) {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return "rgba(" + r + "," + g + "," + b + "," + a + ")";
    }

    function applyGlowToCanvas(canvas) {
      if (!PRESET.glowOn) {
        canvas.style.filter = "";
        return;
      }
      const g = PRESET.glow,
        gi = PRESET.glowIntensity;
      const inner = (g * 0.35).toFixed(1);
      const outer = g.toFixed(1);
      const c1 = hexToRgba(PRESET.color, Math.min(1, gi).toFixed(2));
      const c2 = hexToRgba(PRESET.color, Math.min(1, gi * 0.55).toFixed(2));
      canvas.style.filter =
        "drop-shadow(0 0 " +
        inner +
        "px " +
        c1 +
        ") drop-shadow(0 0 " +
        outer +
        "px " +
        c2 +
        ")";
    }

    function startClipFromGlobal(canvas) {
      const ctx = canvas.getContext("2d");
      const dpr = window.devicePixelRatio || 1;
      const r = canvas.getBoundingClientRect();
      const W = Math.floor(r.width);
      const H = Math.floor(r.height);
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.imageSmoothingEnabled = false;
      applyGlowToCanvas(canvas);
      popupCanvases.add(canvas);

      let alive = true;
      function frame() {
        if (!alive) return;
        const pRect = canvas.getBoundingClientRect();
        const sRect = stage.getBoundingClientRect();
        const sx = pRect.left - sRect.left;
        const sy = pRect.top - sRect.top;
        ctx.clearRect(0, 0, W, H);
        ctx.drawImage(globalCanvas, sx, sy, W, H, 0, 0, W, H);
        requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
      return {
        stop: function () {
          alive = false;
          popupCanvases.delete(canvas);
        },
      };
    }

    function spawn() {
      const rect = stage.getBoundingClientRect();
      const slotIdx = spawnIdx % SLOTS;
      const pos = slotPosition(slotIdx, rect);

      const el = document.createElement("div");
      el.className = "popup";
      el.dataset.slot = String(slotIdx);
      el.style.width = POPUP_W + "px";
      el.style.height = POPUP_H + "px";
      el.style.left = pos.x + "px";
      el.style.top = pos.y + "px";
      el.innerHTML = popupTemplate(makeLabel());
      stage.appendChild(el);

      requestAnimationFrame(function () {
        const canvas = el.querySelector("canvas");
        const handle = startClipFromGlobal(canvas);
        requestAnimationFrame(function () {
          el.classList.add("enter");
        });
        setTimeout(function () {
          el.classList.remove("enter");
          el.classList.add("exit");
          setTimeout(function () {
            handle.stop();
            el.remove();
          }, 500);
        }, LIFESPAN_MS);
      });

      spawnIdx++;
    }

    spawn();
    setInterval(spawn, SPAWN_EVERY);

    stage.style.setProperty("--stage-bg", PRESET.bg);
    stage.style.filter = "";
  })();

  // ------------------------------------------------------------
  // VideoPreview (showreel) lightbox — Flip.js animates the player
  // card from its in-flow slot into the centred fixed lightbox.
  // ------------------------------------------------------------
  (function initShowreel() {
    const gsap = window.gsap;
    const Flip = window.Flip;
    if (!gsap || !Flip) return;
    gsap.registerPlugin(Flip);

    const DURATION = 0.9;
    const EASE = "expo.inOut";
    const Z_INDEX = 999;

    const state = {
      name: "",
      isOpen: false,
      lb: null,
      pw: null,
      tg: null,
      pwCss: "",
      lbZ: "",
      pwZ: "",
      pwOrigParent: null,
      pwOrigNextSibling: null,
    };

    function q(sel, root) {
      return (root || document).querySelector(sel);
    }
    function getLB(name) {
      return q('[data-mini-showreel-lightbox="' + name + '"]');
    }
    function getPW(name) {
      return q('[data-mini-showreel-player="' + name + '"]');
    }
    function safe(t) {
      return (
        t.closest("[data-mini-showreel-safearea]") ||
        q("[data-mini-showreel-safearea]", t) ||
        t
      );
    }
    function fit(b, a) {
      let w = b.width;
      let h = w / a;
      if (h > b.height) {
        h = b.height;
        w = h * a;
      }
      return {
        left: b.left + (b.width - w) / 2,
        top: b.top + (b.height - h) / 2,
        width: w,
        height: h,
      };
    }
    function rectFor(t) {
      const b = safe(t).getBoundingClientRect();
      const r = t.getBoundingClientRect();
      const a = r.width > 0 && r.height > 0 ? r.width / r.height : 16 / 9;
      return fit(b, a);
    }
    function place(el, r) {
      gsap.set(el, {
        position: "fixed",
        left: r.left,
        top: r.top,
        width: r.width,
        height: r.height,
        margin: 0,
        x: 0,
        y: 0,
      });
    }
    function setStatus(name, status) {
      document
        .querySelectorAll(
          '[data-mini-showreel-lightbox="' +
            name +
            '"], [data-mini-showreel-player="' +
            name +
            '"]'
        )
        .forEach(function (el) {
          el.setAttribute("data-mini-showreel-status", status);
        });
    }
    function zOn() {
      state.lbZ = (state.lb && state.lb.style.zIndex) || "";
      state.pwZ = (state.pw && state.pw.style.zIndex) || "";
      if (state.lb) state.lb.style.zIndex = String(Z_INDEX);
      if (state.pw) state.pw.style.zIndex = String(Z_INDEX);
    }
    function zOff() {
      if (state.lb) state.lb.style.zIndex = state.lbZ;
      if (state.pw) state.pw.style.zIndex = state.pwZ;
    }
    function setIframeSrc(pw, src) {
      const iframe = pw.querySelector("[data-reel-iframe]");
      if (!iframe) return;
      iframe.src = src;
    }
    function clearIframeSrc(pw) {
      const iframe = pw.querySelector("[data-reel-iframe]");
      if (!iframe) return;
      iframe.src = "";
    }

    function openBy(name) {
      if (!name || state.isOpen) return;
      const lb = getLB(name);
      const pw = getPW(name);
      if (!lb || !pw) return;
      const tg = q("[data-mini-showreel-target]", lb);
      if (!tg) return;

      state.name = name;
      state.isOpen = true;
      state.lb = lb;
      state.pw = pw;
      state.tg = tg;
      state.pwCss = pw.style.cssText || "";
      state.pwOrigParent = pw.parentElement;
      state.pwOrigNextSibling = pw.nextSibling;

      zOn();
      setStatus(name, "active");

      const iframe = pw.querySelector("[data-reel-iframe]");
      const embedUrl = iframe && iframe.dataset.reelEmbedUrl;
      if (embedUrl) setIframeSrc(pw, embedUrl);

      const flipState = Flip.getState(pw);
      document.body.appendChild(pw);
      place(pw, rectFor(tg));

      Flip.from(flipState, {
        duration: DURATION,
        ease: EASE,
        absolute: true,
        scale: false,
      });
    }

    function closeBy(nameOrEmpty) {
      if (!state.isOpen || !state.pw) return;
      if (nameOrEmpty && nameOrEmpty !== state.name) return;

      const closingPw = state.pw;
      const closingLb = state.lb;
      const savedCss = state.pwCss;
      const origParent = state.pwOrigParent;
      const origNext = state.pwOrigNextSibling;

      setStatus(state.name, "not-active");

      const flipState = Flip.getState(closingPw);

      if (origParent) {
        if (origNext && origNext.parentNode === origParent) {
          origParent.insertBefore(closingPw, origNext);
        } else {
          origParent.appendChild(closingPw);
        }
      }
      closingPw.style.cssText = savedCss;
      if (closingLb) closingLb.style.zIndex = String(Z_INDEX);
      if (closingPw) closingPw.style.zIndex = String(Z_INDEX);

      Flip.from(flipState, {
        duration: DURATION,
        ease: EASE,
        absolute: true,
        scale: false,
        onComplete: function () {
          zOff();
          clearIframeSrc(closingPw);
          state.name = "";
          state.isOpen = false;
          state.lb = null;
          state.pw = null;
          state.tg = null;
          state.pwCss = "";
          state.lbZ = "";
          state.pwZ = "";
          state.pwOrigParent = null;
          state.pwOrigNextSibling = null;
        },
      });
    }

    function onResize() {
      if (!state.isOpen || !state.pw || !state.tg) return;
      place(state.pw, rectFor(state.tg));
    }

    function init() {
      // Move every lightbox shell to <body> so position:fixed escapes any
      // transformed ancestor (Hero applies GSAP transforms during entrance).
      document
        .querySelectorAll("[data-mini-showreel-lightbox]")
        .forEach(function (lb) {
          if (lb.parentElement !== document.body) document.body.appendChild(lb);
        });

      const openBtns = document.querySelectorAll("[data-mini-showreel-open]");
      if (!openBtns.length) return;

      openBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
          e.preventDefault();
          openBy(btn.getAttribute("data-mini-showreel-open") || "");
        });
      });

      document.addEventListener("click", function (e) {
        const target = e.target;
        const closeBtn =
          target && target.closest
            ? target.closest("[data-mini-showreel-close]")
            : null;
        if (!closeBtn) return;
        e.preventDefault();
        closeBy(closeBtn.getAttribute("data-mini-showreel-close") || "");
      });

      window.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeBy("");
      });

      window.addEventListener("resize", onResize);
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", init);
    } else {
      init();
    }
  })();

  // ------------------------------------------------------------
  // Hero entrance — frame draw-in, SplitText reveal, CTA pop,
  // marquee fade. Waits for the loader event if one is running.
  // ------------------------------------------------------------
  (function initHeroEntrance() {
    const gsap = window.gsap;
    const SplitText = window.SplitText;
    if (!gsap) return;
    if (SplitText) gsap.registerPlugin(SplitText);
    if (typeof window.registerVaultixEases === "function") {
      window.registerVaultixEases();
    }

    const html = document.documentElement;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reducedMotion) {
      html.classList.remove("hero-pre-anim");
      return;
    }

    const hero = document.querySelector("[data-hero]");
    if (!hero) {
      html.classList.remove("hero-pre-anim");
      return;
    }
    const navbar = document.querySelector("[data-navbar]");

    const verticalLines = gsap.utils.toArray(
      '[data-frame-line][data-axis="y"]',
      hero
    );
    const horizontalLines = gsap.utils.toArray(
      '[data-frame-line][data-axis="x"]',
      hero
    );
    const ticks = gsap.utils.toArray("[data-hero-tick]", hero);
    const frameTicks = gsap.utils.toArray(
      ".hero-frame > [data-hero-tick]",
      hero
    );
    const marqueeTicks = gsap.utils.toArray(
      ".hero-marquee-inner > [data-hero-tick]",
      hero
    );
    const headline = hero.querySelector("h1");
    const subhead = hero.querySelector("[data-hero-subhead]");
    const headlineSplit =
      headline && SplitText
        ? new SplitText(headline, { type: "lines", mask: "lines" })
        : null;
    const subheadSplit =
      subhead && SplitText
        ? new SplitText(subhead, { type: "lines", mask: "lines" })
        : null;
    const headlineLines = (headlineSplit && headlineSplit.lines) || [];
    const subheadLines = (subheadSplit && subheadSplit.lines) || [];
    const ctas = gsap.utils.toArray("[data-hero-cta]", hero);
    const video = hero.querySelector("[data-hero-video]");
    const marqueeTrack = hero.querySelector("[data-hero-marquee-track]");
    const heroVisual = hero.querySelector("[data-hero-visual]");
    const frame = hero.querySelector(".hero-frame");
    const colLeft = hero.querySelector(".hero-col-left");
    const marqueeWrap = hero.querySelector(".hero-marquee-wrap");
    const marqueeInner = hero.querySelector(".hero-marquee-inner");

    gsap.set(verticalLines, { scaleY: 0, transformOrigin: "top center" });
    gsap.set(horizontalLines, { scaleX: 0, transformOrigin: "left center" });
    gsap.set(ticks, { opacity: 0, scale: 0.6, transformOrigin: "center" });
    gsap.set(headlineLines, { yPercent: 110 });
    gsap.set(subheadLines, { yPercent: 110 });
    if (headline) gsap.set(headline, { opacity: 1 });
    if (subhead) gsap.set(subhead, { opacity: 1 });
    if (video) gsap.set(video, { y: 16, opacity: 0 });
    gsap.set(ctas, {
      y: 12,
      scale: 0.96,
      opacity: 0,
      transformOrigin: "center",
    });
    if (marqueeTrack) gsap.set(marqueeTrack, { opacity: 0 });
    if (heroVisual) gsap.set(heroVisual, { opacity: 0 });
    if (navbar) gsap.set(navbar, { y: -12, opacity: 0 });

    const borderTargets = [frame, colLeft, marqueeWrap, marqueeInner].filter(
      Boolean
    );
    borderTargets.forEach(function (el) {
      el.style.borderColor = "transparent";
    });

    html.classList.remove("hero-pre-anim");

    function play() {
      const tl = gsap.timeline();

      if (navbar) {
        tl.to(
          navbar,
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            ease: "vaultixStructure",
          },
          0
        );
      }

      tl.to(
        verticalLines,
        {
          scaleY: 1,
          duration: 0.45,
          ease: "vaultixStructure",
          stagger: 0.035,
        },
        0
      );
      tl.to(
        horizontalLines,
        {
          scaleX: 1,
          duration: 0.45,
          ease: "vaultixStructure",
          stagger: 0.035,
        },
        0.04
      );

      tl.add(function () {
        borderTargets.forEach(function (el) {
          el.style.borderColor = "";
        });
      }, 0.5);

      tl.to(
        frameTicks,
        {
          opacity: 1,
          scale: 1,
          duration: 0.38,
          ease: "vaultixDecor",
          stagger: { each: 0.025, from: "start", ease: "power2.out" },
        },
        0.55
      );
      tl.to(
        marqueeTicks,
        {
          opacity: 1,
          scale: 1,
          duration: 0.38,
          ease: "vaultixDecor",
        },
        0.55
      );

      tl.to(
        heroVisual,
        { opacity: 1, duration: 0.8, ease: "vaultixReveal" },
        0.7
      );

      tl.to(
        headlineLines,
        {
          yPercent: 0,
          duration: 0.85,
          ease: "vaultixReveal",
          stagger: 0.12,
        },
        0.75
      );

      tl.to(
        subheadLines,
        {
          yPercent: 0,
          duration: 0.7,
          ease: "vaultixReveal",
          stagger: 0.08,
        },
        1.15
      );
      tl.to(
        ctas,
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.55,
          ease: "vaultixDecor",
          stagger: 0.12,
        },
        1.3
      );
      tl.to(
        video,
        { y: 0, opacity: 1, duration: 0.6, ease: "vaultixReveal" },
        1.45
      );
      tl.to(
        marqueeTrack,
        { opacity: 1, duration: 0.65, ease: "vaultixReveal" },
        1.6
      );
    }

    if (typeof window.applyVaultixScrambleHover === "function") {
      window.applyVaultixScrambleHover("[data-hero-cta]", hero);
    }

    if (html.classList.contains("is-loading")) {
      window.addEventListener("vaultix:loaded", play, { once: true });
    } else {
      play();
    }
  })();
})();

/* ===== TEMLIS-INLINED-NAVBAR: vaultix-navbar behavior ===== */
(function () {
  // Scramble (block roll-up) hover effect — same one used on Navbar Buy
  // Template / Home Hero CTAs. Applied once per page load to every nav link
  // marked with [data-scramble-hover] and every accent button.
  if (typeof window.applyVaultixScrambleHover === "function") {
    window.applyVaultixScrambleHover("[data-navbar] [data-scramble-hover]");
    window.applyVaultixScrambleHover("[data-accent-btn]");
  }

  // Mobile / tablet drawer toggle.
  const burger = document.querySelector("[data-nav-burger]");
  const drawer = document.querySelector("[data-nav-drawer]");
  if (burger && drawer) {
    const setOpen = (open) => {
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      drawer.setAttribute("aria-hidden", open ? "false" : "true");
      drawer.classList.toggle("is-open", open);
    };
    burger.addEventListener("click", () => {
      const open = burger.getAttribute("aria-expanded") !== "true";
      setOpen(open);
    });
    // Close on link click so navigation feels natural.
    drawer.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => setOpen(false));
    });
    // Close if the viewport jumps to desktop (e.g. tablet rotates wide).
    window
      .matchMedia("(min-width: 1024px)")
      .addEventListener("change", (e) => {
        if (e.matches) setOpen(false);
      });
  }

  // Features sub-list expand within the drawer.
  const groupToggle = document.querySelector("[data-nav-drawer-toggle]");
  const groupSub = document.getElementById("nav-drawer-features");
  if (groupToggle && groupSub) {
    groupToggle.addEventListener("click", () => {
      const open = groupToggle.getAttribute("aria-expanded") !== "true";
      groupToggle.setAttribute("aria-expanded", open ? "true" : "false");
      if (open) groupSub.removeAttribute("hidden");
      else groupSub.setAttribute("hidden", "");
    });
  }
})();
