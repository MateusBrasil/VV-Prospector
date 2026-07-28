"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-109
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Dobra.css';
gsap.registerPlugin(ScrollTrigger);
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* ⚠ REVER: o JS de origem está abaixo em bruto (categoria: global-duro).
   * A esteira NÃO o converte sozinha, e nesta categoria escopar ao `raiz.current` NÃO
   * chega: o código assume que é dono da página (window/document.body/listeners de
   * load|resize|scroll), ou traz import/export, ou monta um canvas WebGL. Converter às
   * cegas produz animação que corre no elemento errado, que é pior que animação
   * nenhuma. Precisa de reescrita, não de troca de prefixo. */
  useGSAP(() => {
  //   /* ============================================================
  //      Vaultix — Hero
  //      Standalone port. Uses GSAP + ScrollTrigger + SplitText + Flip
  //      loaded from the CDN as globals (window.gsap, window.ScrollTrigger,
  //      window.SplitText, window.Flip). The eases + scramble-hover helpers
  //      come from /vaultix/eases.js + /vaultix/scramble-hover.js.
  //      ============================================================ */
  //   (function () {
  //     "use strict";
  //   
  //     // ------------------------------------------------------------
  //     // LiquidCanvas — animated halftone field + floating popup cards.
  //     // Runs independently of GSAP (rAF + native canvas).
  //     // ------------------------------------------------------------
  //     (function initLiquidCanvas() {
  //       const stage = document.getElementById("stage");
  //       if (!stage) return;
  //   
  //       const PRESET = {
  //         color: "#b5d2ff",
  //         bg: "#010101",
  //         scaleX: 0.05,
  //         scaleY: 0.05,
  //         octaves: 1,
  //         warp: 0.46,
  //         speed: 1.66,
  //         driftX: -0.4,
  //         driftY: -0.32,
  //         threshold: 0.67,
  //         softness: 0.22,
  //         maxSize: 1,
  //         glow: 10,
  //         glowIntensity: 0.5,
  //         glowOn: false,
  //       };
  //   
  //       const CELL = 7;
  //       const GAP = 1.5;
  //       const DOT = CELL - GAP;
  //   
  //       function hash3(x, y, z) {
  //         const n = Math.sin(x * 127.1 + y * 311.7 + z * 74.7) * 43758.5453;
  //         return n - Math.floor(n);
  //       }
  //       function vnoise3(x, y, z) {
  //         const xi = Math.floor(x),
  //           yi = Math.floor(y),
  //           zi = Math.floor(z);
  //         const xf = x - xi,
  //           yf = y - yi,
  //           zf = z - zi;
  //         const sx = xf * xf * (3 - 2 * xf),
  //           sy = yf * yf * (3 - 2 * yf),
  //           sz = zf * zf * (3 - 2 * zf);
  //         const c000 = hash3(xi, yi, zi);
  //         const c100 = hash3(xi + 1, yi, zi);
  //         const c010 = hash3(xi, yi + 1, zi);
  //         const c110 = hash3(xi + 1, yi + 1, zi);
  //         const c001 = hash3(xi, yi, zi + 1);
  //         const c101 = hash3(xi + 1, yi, zi + 1);
  //         const c011 = hash3(xi, yi + 1, zi + 1);
  //         const c111 = hash3(xi + 1, yi + 1, zi + 1);
  //         const x00 = c000 * (1 - sx) + c100 * sx;
  //         const x10 = c010 * (1 - sx) + c110 * sx;
  //         const x01 = c001 * (1 - sx) + c101 * sx;
  //         const x11 = c011 * (1 - sx) + c111 * sx;
  //         const y0 = x00 * (1 - sy) + x10 * sy;
  //         const y1 = x01 * (1 - sy) + x11 * sy;
  //         return y0 * (1 - sz) + y1 * sz;
  //       }
  //       function smoothstep(e0, e1, x) {
  //         const t = Math.max(0, Math.min(1, (x - e0) / (e1 - e0)));
  //         return t * t * (3 - 2 * t);
  //       }
  //   
  //       const POPUP_W = 165;
  //       const POPUP_H = 115;
  //       const SLOTS = 12;
  //       const SPAWN_EVERY = 900;
  //       const ALIVE_AT_ONCE = SLOTS - 3;
  //       const LIFESPAN_MS = SPAWN_EVERY * ALIVE_AT_ONCE;
  //       let spawnIdx = 0;
  //   
  //       const globalCanvas = document.createElement("canvas");
  //       const gctx = globalCanvas.getContext("2d");
  //       let STAGE_W = 0,
  //         STAGE_H = 0;
  //   
  //       function slotPosition(slotIdx, rect) {
  //         const cx = rect.width / 2;
  //         const cy = rect.height / 2;
  //         const R = Math.min(rect.width, rect.height) * 0.26;
  //         const ang = (slotIdx / SLOTS) * Math.PI * 2 - Math.PI / 2;
  //         return {
  //           x: cx + Math.cos(ang) * R - POPUP_W / 2,
  //           y: cy + Math.sin(ang) * R - POPUP_H / 2,
  //         };
  //       }
  //   
  //       function resizeGlobal() {
  //         const r = stage.getBoundingClientRect();
  //         STAGE_W = Math.floor(r.width);
  //         STAGE_H = Math.floor(r.height);
  //         globalCanvas.width = STAGE_W;
  //         globalCanvas.height = STAGE_H;
  //         gctx.imageSmoothingEnabled = false;
  //         stage.querySelectorAll(".popup").forEach((p) => {
  //           const slot = parseInt(p.dataset.slot || "0", 10);
  //           const { x, y } = slotPosition(slot, r);
  //           p.style.left = x + "px";
  //           p.style.top = y + "px";
  //         });
  //       }
  //       window.addEventListener("resize", resizeGlobal);
  //       resizeGlobal();
  //   
  //       const gT0 = performance.now();
  //       function renderGlobalHalftone(now) {
  //         const t = (now - gT0) * 0.001;
  //         gctx.clearRect(0, 0, STAGE_W, STAGE_H);
  //         gctx.fillStyle = PRESET.color;
  //   
  //         const cols = Math.floor(STAGE_W / CELL);
  //         const rows = Math.floor(STAGE_H / CELL);
  //         const maxSide = DOT * PRESET.maxSize;
  //         const lo = PRESET.threshold - PRESET.softness;
  //         const hi = PRESET.threshold + PRESET.softness;
  //         const dx = t * PRESET.driftX;
  //         const dy = t * PRESET.driftY;
  //         const nz = t * PRESET.speed;
  //   
  //         for (let y = 0; y < rows; y++) {
  //           for (let x = 0; x < cols; x++) {
  //             let nx = x * PRESET.scaleX + dx;
  //             let ny = y * PRESET.scaleY + dy;
  //             if (PRESET.warp > 0) {
  //               nx +=
  //                 (vnoise3(nx * 1.3 + 11, ny * 1.3, nz * 0.7) - 0.5) *
  //                 PRESET.warp *
  //                 4;
  //               ny +=
  //                 (vnoise3(nx * 1.3, ny * 1.3 + 23, nz * 0.7 + 7) - 0.5) *
  //                 PRESET.warp *
  //                 4;
  //             }
  //             let n = vnoise3(nx, ny, nz);
  //             if (PRESET.octaves >= 2) {
  //               n = n * 0.6 + vnoise3(nx * 2.1, ny * 2.1, nz * 1.3) * 0.4;
  //             }
  //             if (PRESET.octaves >= 3) {
  //               n = n * 0.75 + vnoise3(nx * 4.3, ny * 4.3, nz * 1.7) * 0.25;
  //             }
  //             const side = smoothstep(lo, hi, n) * maxSide;
  //             if (side < 0.6) continue;
  //             const cx = x * CELL + CELL / 2;
  //             const cy = y * CELL + CELL / 2;
  //             gctx.fillRect(cx - side / 2, cy - side / 2, side, side);
  //           }
  //         }
  //         requestAnimationFrame(renderGlobalHalftone);
  //       }
  //       requestAnimationFrame(renderGlobalHalftone);
  //   
  //       function popupTemplate(label) {
  //         return (
  //           '<div class="popup-header">' +
  //           '<div class="popup-status"></div>' +
  //           '<div class="popup-title">' +
  //           label +
  //           "</div>" +
  //           '<div class="popup-bars" aria-hidden="true">' +
  //           '<span class="bar" style="animation-delay:0.00s"></span>' +
  //           '<span class="bar" style="animation-delay:0.18s"></span>' +
  //           '<span class="bar" style="animation-delay:0.36s"></span>' +
  //           '<span class="bar" style="animation-delay:0.54s"></span>' +
  //           '<span class="bar" style="animation-delay:0.72s"></span>' +
  //           '<span class="bar" style="animation-delay:0.90s"></span>' +
  //           "</div>" +
  //           "</div>" +
  //           '<div class="popup-body"><canvas></canvas></div>'
  //         );
  //       }
  //   
  //       const LABELS = [
  //         "ROUTE",
  //         "INFER",
  //         "DEPLOY",
  //         "INGEST",
  //         "STREAM",
  //         "VAULT",
  //         "CACHE",
  //         "PROXY",
  //         "TRACE",
  //         "MODEL",
  //         "EDGE",
  //         "SHARD",
  //       ];
  //   
  //       function makeLabel() {
  //         const word = LABELS[spawnIdx % LABELS.length];
  //         return word + '<span class="sep">//</span>';
  //       }
  //   
  //       const popupCanvases = new Set();
  //   
  //       function hexToRgba(hex, a) {
  //         const r = parseInt(hex.slice(1, 3), 16);
  //         const g = parseInt(hex.slice(3, 5), 16);
  //         const b = parseInt(hex.slice(5, 7), 16);
  //         return "rgba(" + r + "," + g + "," + b + "," + a + ")";
  //       }
  //   
  //       function applyGlowToCanvas(canvas) {
  //         if (!PRESET.glowOn) {
  //           canvas.style.filter = "";
  //           return;
  //         }
  //         const g = PRESET.glow,
  //           gi = PRESET.glowIntensity;
  //         const inner = (g * 0.35).toFixed(1);
  //         const outer = g.toFixed(1);
  //         const c1 = hexToRgba(PRESET.color, Math.min(1, gi).toFixed(2));
  //         const c2 = hexToRgba(PRESET.color, Math.min(1, gi * 0.55).toFixed(2));
  //         canvas.style.filter =
  //           "drop-shadow(0 0 " +
  //           inner +
  //           "px " +
  //           c1 +
  //           ") drop-shadow(0 0 " +
  //           outer +
  //           "px " +
  //           c2 +
  //           ")";
  //       }
  //   
  //       function startClipFromGlobal(canvas) {
  //         const ctx = canvas.getContext("2d");
  //         const dpr = window.devicePixelRatio || 1;
  //         const r = canvas.getBoundingClientRect();
  //         const W = Math.floor(r.width);
  //         const H = Math.floor(r.height);
  //         canvas.width = W * dpr;
  //         canvas.height = H * dpr;
  //         ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  //         ctx.imageSmoothingEnabled = false;
  //         applyGlowToCanvas(canvas);
  //         popupCanvases.add(canvas);
  //   
  //         let alive = true;
  //         function frame() {
  //           if (!alive) return;
  //           const pRect = canvas.getBoundingClientRect();
  //           const sRect = stage.getBoundingClientRect();
  //           const sx = pRect.left - sRect.left;
  //           const sy = pRect.top - sRect.top;
  //           ctx.clearRect(0, 0, W, H);
  //           ctx.drawImage(globalCanvas, sx, sy, W, H, 0, 0, W, H);
  //           requestAnimationFrame(frame);
  //         }
  //         requestAnimationFrame(frame);
  //         return {
  //           stop: function () {
  //             alive = false;
  //             popupCanvases.delete(canvas);
  //           },
  //         };
  //       }
  //   
  //       function spawn() {
  //         const rect = stage.getBoundingClientRect();
  //         const slotIdx = spawnIdx % SLOTS;
  //         const pos = slotPosition(slotIdx, rect);
  //   
  //         const el = document.createElement("div");
  //         el.className = "popup";
  //         el.dataset.slot = String(slotIdx);
  //         el.style.width = POPUP_W + "px";
  //         el.style.height = POPUP_H + "px";
  //         el.style.left = pos.x + "px";
  //         el.style.top = pos.y + "px";
  //         el.innerHTML = popupTemplate(makeLabel());
  //         stage.appendChild(el);
  //   
  //         requestAnimationFrame(function () {
  //           const canvas = el.querySelector("canvas");
  //           const handle = startClipFromGlobal(canvas);
  //           requestAnimationFrame(function () {
  //             el.classList.add("enter");
  //           });
  //           setTimeout(function () {
  //             el.classList.remove("enter");
  //             el.classList.add("exit");
  //             setTimeout(function () {
  //               handle.stop();
  //               el.remove();
  //             }, 500);
  //           }, LIFESPAN_MS);
  //         });
  //   
  //         spawnIdx++;
  //       }
  //   
  //       spawn();
  //       setInterval(spawn, SPAWN_EVERY);
  //   
  //       stage.style.setProperty("--stage-bg", PRESET.bg);
  //       stage.style.filter = "";
  //     })();
  //   
  //     // ------------------------------------------------------------
  //     // VideoPreview (showreel) lightbox — Flip.js animates the player
  //     // card from its in-flow slot into the centred fixed lightbox.
  //     // ------------------------------------------------------------
  //     (function initShowreel() {
  //       const gsap = window.gsap;
  //       const Flip = window.Flip;
  //       if (!gsap || !Flip) return;
  //       gsap.registerPlugin(Flip);
  //   
  //       const DURATION = 0.9;
  //       const EASE = "expo.inOut";
  //       const Z_INDEX = 999;
  //   
  //       const state = {
  //         name: "",
  //         isOpen: false,
  //         lb: null,
  //         pw: null,
  //         tg: null,
  //         pwCss: "",
  //         lbZ: "",
  //         pwZ: "",
  //         pwOrigParent: null,
  //         pwOrigNextSibling: null,
  //       };
  //   
  //       function q(sel, root) {
  //         return (root || document).querySelector(sel);
  //       }
  //       function getLB(name) {
  //         return q('[data-mini-showreel-lightbox="' + name + '"]');
  //       }
  //       function getPW(name) {
  //         return q('[data-mini-showreel-player="' + name + '"]');
  //       }
  //       function safe(t) {
  //         return (
  //           t.closest("[data-mini-showreel-safearea]") ||
  //           q("[data-mini-showreel-safearea]", t) ||
  //           t
  //         );
  //       }
  //       function fit(b, a) {
  //         let w = b.width;
  //         let h = w / a;
  //         if (h > b.height) {
  //           h = b.height;
  //           w = h * a;
  //         }
  //         return {
  //           left: b.left + (b.width - w) / 2,
  //           top: b.top + (b.height - h) / 2,
  //           width: w,
  //           height: h,
  //         };
  //       }
  //       function rectFor(t) {
  //         const b = safe(t).getBoundingClientRect();
  //         const r = t.getBoundingClientRect();
  //         const a = r.width > 0 && r.height > 0 ? r.width / r.height : 16 / 9;
  //         return fit(b, a);
  //       }
  //       function place(el, r) {
  //         gsap.set(el, {
  //           position: "fixed",
  //           left: r.left,
  //           top: r.top,
  //           width: r.width,
  //           height: r.height,
  //           margin: 0,
  //           x: 0,
  //           y: 0,
  //         });
  //       }
  //       function setStatus(name, status) {
  //         document
  //           .querySelectorAll(
  //             '[data-mini-showreel-lightbox="' +
  //               name +
  //               '"], [data-mini-showreel-player="' +
  //               name +
  //               '"]'
  //           )
  //           .forEach(function (el) {
  //             el.setAttribute("data-mini-showreel-status", status);
  //           });
  //       }
  //       function zOn() {
  //         state.lbZ = (state.lb && state.lb.style.zIndex) || "";
  //         state.pwZ = (state.pw && state.pw.style.zIndex) || "";
  //         if (state.lb) state.lb.style.zIndex = String(Z_INDEX);
  //         if (state.pw) state.pw.style.zIndex = String(Z_INDEX);
  //       }
  //       function zOff() {
  //         if (state.lb) state.lb.style.zIndex = state.lbZ;
  //         if (state.pw) state.pw.style.zIndex = state.pwZ;
  //       }
  //       function setIframeSrc(pw, src) {
  //         const iframe = pw.querySelector("[data-reel-iframe]");
  //         if (!iframe) return;
  //         iframe.src = src;
  //       }
  //       function clearIframeSrc(pw) {
  //         const iframe = pw.querySelector("[data-reel-iframe]");
  //         if (!iframe) return;
  //         iframe.src = "";
  //       }
  //   
  //       function openBy(name) {
  //         if (!name || state.isOpen) return;
  //         const lb = getLB(name);
  //         const pw = getPW(name);
  //         if (!lb || !pw) return;
  //         const tg = q("[data-mini-showreel-target]", lb);
  //         if (!tg) return;
  //   
  //         state.name = name;
  //         state.isOpen = true;
  //         state.lb = lb;
  //         state.pw = pw;
  //         state.tg = tg;
  //         state.pwCss = pw.style.cssText || "";
  //         state.pwOrigParent = pw.parentElement;
  //         state.pwOrigNextSibling = pw.nextSibling;
  //   
  //         zOn();
  //         setStatus(name, "active");
  //   
  //         const iframe = pw.querySelector("[data-reel-iframe]");
  //         const embedUrl = iframe && iframe.dataset.reelEmbedUrl;
  //         if (embedUrl) setIframeSrc(pw, embedUrl);
  //   
  //         const flipState = Flip.getState(pw);
  //         document.body.appendChild(pw);
  //         place(pw, rectFor(tg));
  //   
  //         Flip.from(flipState, {
  //           duration: DURATION,
  //           ease: EASE,
  //           absolute: true,
  //           scale: false,
  //         });
  //       }
  //   
  //       function closeBy(nameOrEmpty) {
  //         if (!state.isOpen || !state.pw) return;
  //         if (nameOrEmpty && nameOrEmpty !== state.name) return;
  //   
  //         const closingPw = state.pw;
  //         const closingLb = state.lb;
  //         const savedCss = state.pwCss;
  //         const origParent = state.pwOrigParent;
  //         const origNext = state.pwOrigNextSibling;
  //   
  //         setStatus(state.name, "not-active");
  //   
  //         const flipState = Flip.getState(closingPw);
  //   
  //         if (origParent) {
  //           if (origNext && origNext.parentNode === origParent) {
  //             origParent.insertBefore(closingPw, origNext);
  //           } else {
  //             origParent.appendChild(closingPw);
  //           }
  //         }
  //         closingPw.style.cssText = savedCss;
  //         if (closingLb) closingLb.style.zIndex = String(Z_INDEX);
  //         if (closingPw) closingPw.style.zIndex = String(Z_INDEX);
  //   
  //         Flip.from(flipState, {
  //           duration: DURATION,
  //           ease: EASE,
  //           absolute: true,
  //           scale: false,
  //           onComplete: function () {
  //             zOff();
  //             clearIframeSrc(closingPw);
  //             state.name = "";
  //             state.isOpen = false;
  //             state.lb = null;
  //             state.pw = null;
  //             state.tg = null;
  //             state.pwCss = "";
  //             state.lbZ = "";
  //             state.pwZ = "";
  //             state.pwOrigParent = null;
  //             state.pwOrigNextSibling = null;
  //           },
  //         });
  //       }
  //   
  //       function onResize() {
  //         if (!state.isOpen || !state.pw || !state.tg) return;
  //         place(state.pw, rectFor(state.tg));
  //       }
  //   
  //       function init() {
  //         // Move every lightbox shell to <body> so position:fixed escapes any
  //         // transformed ancestor (Hero applies GSAP transforms during entrance).
  //         document
  //           .querySelectorAll("[data-mini-showreel-lightbox]")
  //           .forEach(function (lb) {
  //             if (lb.parentElement !== document.body) document.body.appendChild(lb);
  //           });
  //   
  //         const openBtns = document.querySelectorAll("[data-mini-showreel-open]");
  //         if (!openBtns.length) return;
  //   
  //         openBtns.forEach(function (btn) {
  //           btn.addEventListener("click", function (e) {
  //             e.preventDefault();
  //             openBy(btn.getAttribute("data-mini-showreel-open") || "");
  //           });
  //         });
  //   
  //         document.addEventListener("click", function (e) {
  //           const target = e.target;
  //           const closeBtn =
  //             target && target.closest
  //               ? target.closest("[data-mini-showreel-close]")
  //               : null;
  //           if (!closeBtn) return;
  //           e.preventDefault();
  //           closeBy(closeBtn.getAttribute("data-mini-showreel-close") || "");
  //         });
  //   
  //         window.addEventListener("keydown", function (e) {
  //           if (e.key === "Escape") closeBy("");
  //         });
  //   
  //         window.addEventListener("resize", onResize);
  //       }
  //   
  //       if (document.readyState === "loading") {
  //         document.addEventListener("DOMContentLoaded", init);
  //       } else {
  //         init();
  //       }
  //     })();
  //   
  //     // ------------------------------------------------------------
  //     // Hero entrance — frame draw-in, SplitText reveal, CTA pop,
  //     // marquee fade. Waits for the loader event if one is running.
  //     // ------------------------------------------------------------
  //     (function initHeroEntrance() {
  //       const gsap = window.gsap;
  //       const SplitText = window.SplitText;
  //       if (!gsap) return;
  //       if (SplitText) gsap.registerPlugin(SplitText);
  //       if (typeof window.registerVaultixEases === "function") {
  //         window.registerVaultixEases();
  //       }
  //   
  //       const html = document.documentElement;
  //       const reducedMotion = window.matchMedia(
  //         "(prefers-reduced-motion: reduce)"
  //       ).matches;
  //       if (reducedMotion) {
  //         html.classList.remove("hero-pre-anim");
  //         return;
  //       }
  //   
  //       const hero = document.querySelector("[data-hero]");
  //       if (!hero) {
  //         html.classList.remove("hero-pre-anim");
  //         return;
  //       }
  //       const navbar = document.querySelector("[data-navbar]");
  //   
  //       const verticalLines = gsap.utils.toArray(
  //         '[data-frame-line][data-axis="y"]',
  //         hero
  //       );
  //       const horizontalLines = gsap.utils.toArray(
  //         '[data-frame-line][data-axis="x"]',
  //         hero
  //       );
  //       const ticks = gsap.utils.toArray("[data-hero-tick]", hero);
  //       const frameTicks = gsap.utils.toArray(
  //         ".hero-frame > [data-hero-tick]",
  //         hero
  //       );
  //       const marqueeTicks = gsap.utils.toArray(
  //         ".hero-marquee-inner > [data-hero-tick]",
  //         hero
  //       );
  //       const headline = hero.querySelector("h1");
  //       const subhead = hero.querySelector("[data-hero-subhead]");
  //       const headlineSplit =
  //         headline && SplitText
  //           ? new SplitText(headline, { type: "lines", mask: "lines" })
  //           : null;
  //       const subheadSplit =
  //         subhead && SplitText
  //           ? new SplitText(subhead, { type: "lines", mask: "lines" })
  //           : null;
  //       const headlineLines = (headlineSplit && headlineSplit.lines) || [];
  //       const subheadLines = (subheadSplit && subheadSplit.lines) || [];
  //       const ctas = gsap.utils.toArray("[data-hero-cta]", hero);
  //       const video = hero.querySelector("[data-hero-video]");
  //       const marqueeTrack = hero.querySelector("[data-hero-marquee-track]");
  //       const heroVisual = hero.querySelector("[data-hero-visual]");
  //       const frame = hero.querySelector(".hero-frame");
  //       const colLeft = hero.querySelector(".hero-col-left");
  //       const marqueeWrap = hero.querySelector(".hero-marquee-wrap");
  //       const marqueeInner = hero.querySelector(".hero-marquee-inner");
  //   
  //       gsap.set(verticalLines, { scaleY: 0, transformOrigin: "top center" });
  //       gsap.set(horizontalLines, { scaleX: 0, transformOrigin: "left center" });
  //       gsap.set(ticks, { opacity: 0, scale: 0.6, transformOrigin: "center" });
  //       gsap.set(headlineLines, { yPercent: 110 });
  //       gsap.set(subheadLines, { yPercent: 110 });
  //       if (headline) gsap.set(headline, { opacity: 1 });
  //       if (subhead) gsap.set(subhead, { opacity: 1 });
  //       if (video) gsap.set(video, { y: 16, opacity: 0 });
  //       gsap.set(ctas, {
  //         y: 12,
  //         scale: 0.96,
  //         opacity: 0,
  //         transformOrigin: "center",
  //       });
  //       if (marqueeTrack) gsap.set(marqueeTrack, { opacity: 0 });
  //       if (heroVisual) gsap.set(heroVisual, { opacity: 0 });
  //       if (navbar) gsap.set(navbar, { y: -12, opacity: 0 });
  //   
  //       const borderTargets = [frame, colLeft, marqueeWrap, marqueeInner].filter(
  //         Boolean
  //       );
  //       borderTargets.forEach(function (el) {
  //         el.style.borderColor = "transparent";
  //       });
  //   
  //       html.classList.remove("hero-pre-anim");
  //   
  //       function play() {
  //         const tl = gsap.timeline();
  //   
  //         if (navbar) {
  //           tl.to(
  //             navbar,
  //             {
  //               y: 0,
  //               opacity: 1,
  //               duration: 0.65,
  //               ease: "vaultixStructure",
  //             },
  //             0
  //           );
  //         }
  //   
  //         tl.to(
  //           verticalLines,
  //           {
  //             scaleY: 1,
  //             duration: 0.45,
  //             ease: "vaultixStructure",
  //             stagger: 0.035,
  //           },
  //           0
  //         );
  //         tl.to(
  //           horizontalLines,
  //           {
  //             scaleX: 1,
  //             duration: 0.45,
  //             ease: "vaultixStructure",
  //             stagger: 0.035,
  //           },
  //           0.04
  //         );
  //   
  //         tl.add(function () {
  //           borderTargets.forEach(function (el) {
  //             el.style.borderColor = "";
  //           });
  //         }, 0.5);
  //   
  //         tl.to(
  //           frameTicks,
  //           {
  //             opacity: 1,
  //             scale: 1,
  //             duration: 0.38,
  //             ease: "vaultixDecor",
  //             stagger: { each: 0.025, from: "start", ease: "power2.out" },
  //           },
  //           0.55
  //         );
  //         tl.to(
  //           marqueeTicks,
  //           {
  //             opacity: 1,
  //             scale: 1,
  //             duration: 0.38,
  //             ease: "vaultixDecor",
  //           },
  //           0.55
  //         );
  //   
  //         tl.to(
  //           heroVisual,
  //           { opacity: 1, duration: 0.8, ease: "vaultixReveal" },
  //           0.7
  //         );
  //   
  //         tl.to(
  //           headlineLines,
  //           {
  //             yPercent: 0,
  //             duration: 0.85,
  //             ease: "vaultixReveal",
  //             stagger: 0.12,
  //           },
  //           0.75
  //         );
  //   
  //         tl.to(
  //           subheadLines,
  //           {
  //             yPercent: 0,
  //             duration: 0.7,
  //             ease: "vaultixReveal",
  //             stagger: 0.08,
  //           },
  //           1.15
  //         );
  //         tl.to(
  //           ctas,
  //           {
  //             y: 0,
  //             scale: 1,
  //             opacity: 1,
  //             duration: 0.55,
  //             ease: "vaultixDecor",
  //             stagger: 0.12,
  //           },
  //           1.3
  //         );
  //         tl.to(
  //           video,
  //           { y: 0, opacity: 1, duration: 0.6, ease: "vaultixReveal" },
  //           1.45
  //         );
  //         tl.to(
  //           marqueeTrack,
  //           { opacity: 1, duration: 0.65, ease: "vaultixReveal" },
  //           1.6
  //         );
  //       }
  //   
  //       if (typeof window.applyVaultixScrambleHover === "function") {
  //         window.applyVaultixScrambleHover("[data-hero-cta]", hero);
  //       }
  //   
  //       if (html.classList.contains("is-loading")) {
  //         window.addEventListener("vaultix:loaded", play, { once: true });
  //       } else {
  //         play();
  //       }
  //     })();
  //   })();
  //   
  //   /* ===== TEMLIS-INLINED-NAVBAR: vaultix-navbar behavior ===== */
  //   (function () {
  //     // Scramble (block roll-up) hover effect — same one used on Navbar Buy
  //     // Template / Home Hero CTAs. Applied once per page load to every nav link
  //     // marked with [data-scramble-hover] and every accent button.
  //     if (typeof window.applyVaultixScrambleHover === "function") {
  //       window.applyVaultixScrambleHover("[data-navbar] [data-scramble-hover]");
  //       window.applyVaultixScrambleHover("[data-accent-btn]");
  //     }
  //   
  //     // Mobile / tablet drawer toggle.
  //     const burger = document.querySelector("[data-nav-burger]");
  //     const drawer = document.querySelector("[data-nav-drawer]");
  //     if (burger && drawer) {
  //       const setOpen = (open) => {
  //         burger.setAttribute("aria-expanded", open ? "true" : "false");
  //         drawer.setAttribute("aria-hidden", open ? "false" : "true");
  //         drawer.classList.toggle("is-open", open);
  //       };
  //       burger.addEventListener("click", () => {
  //         const open = burger.getAttribute("aria-expanded") !== "true";
  //         setOpen(open);
  //       });
  //       // Close on link click so navigation feels natural.
  //       drawer.querySelectorAll("a").forEach((a) => {
  //         a.addEventListener("click", () => setOpen(false));
  //       });
  //       // Close if the viewport jumps to desktop (e.g. tablet rotates wide).
  //       window
  //         .matchMedia("(min-width: 1024px)")
  //         .addEventListener("change", (e) => {
  //           if (e.matches) setOpen(false);
  //         });
  //     }
  //   
  //     // Features sub-list expand within the drawer.
  //     const groupToggle = document.querySelector("[data-nav-drawer-toggle]");
  //     const groupSub = document.getElementById("nav-drawer-features");
  //     if (groupToggle && groupSub) {
  //       groupToggle.addEventListener("click", () => {
  //         const open = groupToggle.getAttribute("aria-expanded") !== "true";
  //         groupToggle.setAttribute("aria-expanded", open ? "true" : "false");
  //         if (open) groupSub.removeAttribute("hidden");
  //         else groupSub.setAttribute("hidden", "");
  //       });
  //     }
  //   })();
  //   
  //   // Block roll-up hover (Osmo). Idempotent — safe to call multiple times.
  //   window.applyVaultixScrambleHover = function (selector, root) {
  //     root = root || document
  //     const elements = root.querySelectorAll(selector)
  //     elements.forEach((el) => {
  //       if (el.dataset.scrambleApplied) return
  //       const text = (el.textContent || "").trim()
  //       if (!text) return
  //       const width = el.getBoundingClientRect().width
  //       if (width > 0) el.style.minWidth = `${width}px`
  //       el.textContent = ""
  //       el.classList.add("hover-stagger")
  //       const inner = document.createElement("span")
  //       inner.className = "hover-stagger__inner"
  //       const textSpan = document.createElement("span")
  //       textSpan.textContent = text
  //       inner.appendChild(textSpan)
  //       el.appendChild(inner)
  //       let trigger = el
  //       const closest = el.closest("a, button")
  //       if (closest && closest !== el) trigger = closest
  //       if (trigger !== el) {
  //         trigger.addEventListener("mouseenter", () => el.classList.add("is-stagger-hovered"))
  //         trigger.addEventListener("mouseleave", () => el.classList.remove("is-stagger-hovered"))
  //       }
  //       el.dataset.scrambleApplied = "1"
  //     })
  //   }
  //   
  //   // Custom GSAP eases for Vaultix. Call window.registerVaultixEases() after gsap + CustomEase load.
  //   window.registerVaultixEases = function () {
  //     if (window._vaultixEasesRegistered) return
  //     const { gsap, CustomEase } = window
  //     if (!gsap || !CustomEase) return
  //     gsap.registerPlugin(CustomEase)
  //     CustomEase.create("vaultixStructure", "0.7, 0, 0.2, 1")
  //     CustomEase.create("vaultixReveal", "0.16, 1, 0.3, 1")
  //     CustomEase.create("vaultixDecor", "0.34, 1.3, 0.64, 1")
  //     CustomEase.create("vaultixExit", "0.4, 0, 1, 1")
  //     window._vaultixEasesRegistered = true
  //   }
  //   
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="precos-secao-109" ref={raiz}>
      <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]" data-navbar="">
                <nav className="mx-auto flex w-full max-w-[70.5rem] items-center justify-between px-4 py-4 md:px-[calc(1.25rem+1px)]">
                  <a href="#" className="vaultix-logo flex items-center gap-3">
                    <svg className="h-[1.2035rem] w-[1.625rem] text-[var(--color-accent)]" viewBox="0 0 26 19.256" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M11.0922 19.256L0 0H7.36519L14.8191 12.8669L18.4573 6.47782L14.8191 0H22.1843L26 6.47782L22.3618 13.0444L14.8191 12.8669L11.0922 19.256Z"></path>
                    </svg>
                    <span className="font-mono text-[0.875rem] uppercase leading-[1.125rem] tracking-[0.105rem] text-white">{s.rotulo}</span>
                  </a>
          
                  
                  <div className="relative hidden={true} items-center gap-2 bg-[var(--color-surface-2)] p-1 lg:flex">
                    <ul className="flex items-center">
                      <li>
                        <a href="#about" data-scramble-hover="" className="nav-link flex h-9 items-center px-3 font-mono text-[0.875rem] uppercase leading-[1.125rem] tracking-[0.105rem] text-white/60">{s.acao}</a>
                      </li>
          
                      <li className="group" data-platform-dropdown="">
                        <button type="button" aria-haspopup="true" className="nav-link relative flex h-9 cursor-pointer items-center gap-1 pl-3 pr-2 font-mono text-[0.875rem] uppercase leading-[1.125rem] tracking-[0.105rem] text-white/60 after:absolute after:left-0 after:right-0 after:top-full after:h-[0.75rem] after:content-['']" onClick={s.onClick}>
                          <span data-scramble-hover="">{s.rotulo2}</span>
                          <svg className="platform-chevron h-[1.125rem] w-[1.125rem]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M10 17L15 12L10 7V17Z"></path>
                          </svg>
                        </button>
          
                        <div className="invisible absolute inset-x-0 top-[calc(100%+0.5rem)] z-50 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                          <ul className="flex flex-col">
                            <li>
                              <a href="#pipeline-monitoring" className="nav-feature-item relative flex cursor-pointer items-center justify-between gap-6 border border-[var(--color-border)] bg-[var(--base-600)] px-6 py-5 transition-colors">
                                <span className="nav-active-marker" aria-hidden="true"></span>
                                <span className="flex items-center gap-6">
                                  <img src={s.imagem} alt="" className="nav-feature-icon h-7 w-7 shrink-0" loading="lazy" decoding="async" />
                                  <span data-scramble-hover="" className="nav-feature-label whitespace-nowrap font-mono text-[0.875rem] uppercase leading-[1.125rem] tracking-[0.105rem] text-white">{s.rotulo3}</span>
                                </span>
                                <svg className="nav-feature-chevron h-[1.125rem] w-[1.125rem] shrink-0 text-white/40 transition-colors" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                  <path d="M10 17L15 12L10 7V17Z"></path>
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a href="#anomaly-detection" className="nav-feature-item relative flex cursor-pointer items-center justify-between gap-6 border border-[var(--color-border)] bg-[var(--base-600)] px-6 py-5 transition-colors">
                                <span className="nav-active-marker" aria-hidden="true"></span>
                                <span className="flex items-center gap-6">
                                  <img src={s.imagem2} alt="" className="nav-feature-icon h-7 w-7 shrink-0" loading="lazy" decoding="async" />
                                  <span data-scramble-hover="" className="nav-feature-label whitespace-nowrap font-mono text-[0.875rem] uppercase leading-[1.125rem] tracking-[0.105rem] text-white">{s.rotulo4}</span>
                                </span>
                                <svg className="nav-feature-chevron h-[1.125rem] w-[1.125rem] shrink-0 text-white/40 transition-colors" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                  <path d="M10 17L15 12L10 7V17Z"></path>
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a href="#security" className="nav-feature-item relative flex cursor-pointer items-center justify-between gap-6 border border-[var(--color-border)] bg-[var(--base-600)] px-6 py-5 transition-colors">
                                <span className="nav-active-marker" aria-hidden="true"></span>
                                <span className="flex items-center gap-6">
                                  <img src={s.imagem3} alt="" className="nav-feature-icon h-7 w-7 shrink-0" loading="lazy" decoding="async" />
                                  <span data-scramble-hover="" className="nav-feature-label whitespace-nowrap font-mono text-[0.875rem] uppercase leading-[1.125rem] tracking-[0.105rem] text-white">{s.rotulo5}</span>
                                </span>
                                <svg className="nav-feature-chevron h-[1.125rem] w-[1.125rem] shrink-0 text-white/40 transition-colors" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                  <path d="M10 17L15 12L10 7V17Z"></path>
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a href="#vector-database" className="nav-feature-item relative flex cursor-pointer items-center justify-between gap-6 border border-[var(--color-border)] bg-[var(--base-600)] px-6 py-5 transition-colors">
                                <span className="nav-active-marker" aria-hidden="true"></span>
                                <span className="flex items-center gap-6">
                                  <img src={s.imagem4} alt="" className="nav-feature-icon h-7 w-7 shrink-0" loading="lazy" decoding="async" />
                                  <span data-scramble-hover="" className="nav-feature-label whitespace-nowrap font-mono text-[0.875rem] uppercase leading-[1.125rem] tracking-[0.105rem] text-white">{s.rotulo6}</span>
                                </span>
                                <svg className="nav-feature-chevron h-[1.125rem] w-[1.125rem] shrink-0 text-white/40 transition-colors" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                  <path d="M10 17L15 12L10 7V17Z"></path>
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a href="#features" className="nav-feature-item nav-feature-item--all relative flex cursor-pointer items-center justify-between gap-6 border border-[var(--color-border)] bg-[var(--base-600)] px-6 py-5 transition-colors">
                                <span className="nav-active-marker" aria-hidden="true"></span>
                                <span data-scramble-hover="" className="nav-feature-label whitespace-nowrap font-mono text-[0.875rem] uppercase leading-[1.125rem] tracking-[0.105rem] text-white/70">{s.rotulo7}</span>
                                <svg className="nav-feature-chevron h-[1.125rem] w-[1.125rem] shrink-0 text-white/40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                  <path d="M10 17L15 12L10 7V17Z"></path>
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
          
                      <li>
                        <a href="#pricing" data-scramble-hover="" className="nav-link flex h-9 items-center px-3 font-mono text-[0.875rem] uppercase leading-[1.125rem] tracking-[0.105rem] text-white/60">{s.acao2}</a>
                      </li>
                      <li>
                        <a href="#blog" data-scramble-hover="" className="nav-link flex h-9 items-center px-3 font-mono text-[0.875rem] uppercase leading-[1.125rem] tracking-[0.105rem] text-white/60">{s.acao3}</a>
                      </li>
                      <li>
                        <a href="#contact" data-scramble-hover="" className="nav-link flex h-9 items-center px-3 font-mono text-[0.875rem] uppercase leading-[1.125rem] tracking-[0.105rem] text-white/60">{s.acao4}</a>
                      </li>
                    </ul>
          
                    <a href="#buy" data-scramble-hover="" data-accent-btn="" className="btn-accent-glow inline-flex cursor-pointer items-center justify-center border-0 bg-[var(--color-accent)] px-[1rem] py-[0.5rem] font-mono text-[0.875rem] uppercase leading-[1.25rem] tracking-[0.105rem] text-[var(--base-600)] outline-none transition-[filter] hover:brightness-110 focus:outline-none focus-visible:outline-none">{s.acao5}</a>
                  </div>
          
                  
                  <div className="flex items-center gap-2 lg:hidden">
                    <a href="#buy" data-accent-btn="" className="btn-accent-glow inline-flex cursor-pointer items-center justify-center border-0 bg-[var(--color-accent)] px-[1rem] py-[0.5rem] font-mono text-[0.875rem] uppercase leading-[1.25rem] tracking-[0.105rem] text-[var(--base-600)] outline-none transition-[filter] hover:brightness-110 focus:outline-none focus-visible:outline-none">{s.acao6}</a>
                    <button type="button" className="nav-burger flex h-10 w-10 items-center justify-center border border-[var(--color-border)] bg-[var(--color-surface-2)]" aria-label="Toggle menu" aria-expanded="false" aria-controls="nav-drawer" data-nav-burger="" onClick={s.onClick}>
                      <span className="nav-burger__bars" aria-hidden="true">
                        <span></span>
                        <span></span>
                        <span></span>
                      </span>
                    </button>
                  </div>
                </nav>
          
                
                <div id="nav-drawer" className="nav-drawer lg:hidden" data-nav-drawer="" aria-hidden="true">
                  <ul className="nav-drawer__list">
                    <li>
                      <a href="#about" className="nav-drawer__link">{s.acao7}</a>
                    </li>
          
                    <li className="nav-drawer__group" data-nav-drawer-group="">
                      <button type="button" className="nav-drawer__group-toggle" aria-expanded="false" aria-controls="nav-drawer-features" data-nav-drawer-toggle="" onClick={s.onClick}>
                        <span>{s.rotulo8}</span>
                        <svg className="nav-drawer__chevron" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                          <path d="M10 17L15 12L10 7V17Z"></path>
                        </svg>
                      </button>
                      <ul id="nav-drawer-features" className="nav-drawer__sub" hidden="">
                        <li>
                          <a href="#pipeline-monitoring" className="nav-drawer__sub-link">
                            <img src={s.imagem5} alt="" className="nav-drawer__sub-icon" loading="lazy" decoding="async" />
                            <span>{s.rotulo9}</span>
                          </a>
                        </li>
                        <li>
                          <a href="#anomaly-detection" className="nav-drawer__sub-link">
                            <img src={s.imagem6} alt="" className="nav-drawer__sub-icon" loading="lazy" decoding="async" />
                            <span>{s.rotulo10}</span>
                          </a>
                        </li>
                        <li>
                          <a href="#security" className="nav-drawer__sub-link">
                            <img src={s.imagem7} alt="" className="nav-drawer__sub-icon" loading="lazy" decoding="async" />
                            <span>{s.rotulo11}</span>
                          </a>
                        </li>
                        <li>
                          <a href="#vector-database" className="nav-drawer__sub-link">
                            <img src={s.imagem8} alt="" className="nav-drawer__sub-icon" loading="lazy" decoding="async" />
                            <span>{s.rotulo12}</span>
                          </a>
                        </li>
                        <li>
                          <a href="#features" className="nav-drawer__sub-link nav-drawer__sub-link--all">
                            <span className="nav-drawer__sub-icon" aria-hidden="true"></span>
                            <span>{s.rotulo13}</span>
                          </a>
                        </li>
                      </ul>
                    </li>
          
                    <li>
                      <a href="#pricing" className="nav-drawer__link">{s.acao8}</a>
                    </li>
                    <li>
                      <a href="#blog" className="nav-drawer__link">{s.acao9}</a>
                    </li>
                    <li>
                      <a href="#contact" className="nav-drawer__link">{s.acao10}</a>
                    </li>
                  </ul>
                </div>
              </header>
      
          <section className="hero relative flex flex-col lg:min-h-[calc(100svh-var(--nav-height))]" data-hero="">
            <div className="hero-frame relative mx-auto flex w-full min-h-[max(36rem,calc(100svh-73px))] max-w-[70.5rem] flex-1 flex-col lg:grid lg:min-h-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:border-x lg:border-[var(--color-border)]">
              
              <div className="frame-line pointer-events-none absolute top-0 z-[5] hidden={true} h-full w-px bg-[var(--color-border)] lg:block" style={{left: '-1px'}} data-frame-line="" data-axis="y" aria-hidden="true"></div>
              <div className="frame-line pointer-events-none absolute top-0 z-[5] hidden={true} h-full w-px bg-[var(--color-border)] lg:block" style={{right: '-1px'}} data-frame-line="" data-axis="y" aria-hidden="true"></div>
              <div className="frame-line pointer-events-none absolute top-0 z-[5] hidden={true} h-full w-px bg-[var(--color-border)] lg:block" style={{left: 'calc(100% / 2.25)'}} data-frame-line="" data-axis="y" aria-hidden="true"></div>
      
              
              <svg className="pointer-events-none absolute left-[calc(-0.5rem_-_1px)] top-[calc(-0.5rem_+_0.5px)] z-10 hidden={true} h-4 w-4 text-white lg:block" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-hero-tick="">
                <path d="M0 7.5H16V8.5H9V16H8V8.5H0Z"></path>
              </svg>
              
              <svg className="pointer-events-none absolute -right-2 top-[calc(-0.5rem_+_0.5px)] z-10 hidden={true} h-4 w-4 text-white lg:block" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-hero-tick="">
                <path d="M0 7.5H16V8.5H9V16H8V8.5H0Z"></path>
              </svg>
              
              <svg className="pointer-events-none absolute left-[calc(100%/2.25_-_9px)] top-[calc(-0.5rem_+_0.5px)] z-10 hidden={true} h-4 w-4 text-white lg:block" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-hero-tick="">
                <path d="M0 7.5H16V8.5H9V16H8V8.5H0Z"></path>
              </svg>
              
              <svg className="pointer-events-none absolute bottom-[calc(-0.5rem_-_0.5px)] left-[calc(100%/2.25_-_9px)] z-10 hidden={true} h-4 w-4 text-white lg:block" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-hero-tick="">
                <path d="M0 8.5H16V7.5H9V0H8V7.5H0Z"></path>
              </svg>
      
              <div className="hero-col-left lg:flex lg:flex-col lg:justify-between lg:gap-8 lg:p-5">
                <div className="relative z-10 order-1 flex flex-col items-start gap-6 p-5 lg:order-none lg:z-auto lg:gap-10 lg:p-0">
                  <div className="flex flex-col items-start gap-3 font-mono uppercase">
                    <h1 className="text-[2.75rem] leading-none tracking-[0.2rem] text-white md:text-[3.5rem] md:tracking-[0.42rem]">
                      <span className="hero-line"><span className="hero-word">{s.rotulo14}</span>
                        <span className="hero-word">{s.rotulo15}</span></span>
                      <span className="hero-line"><span className="hero-word">{s.rotulo16}</span>
                        <span className="hero-word">{s.rotulo17}</span></span>
                    </h1>
                    <p className="text-[0.875rem] leading-[1.125rem] text-white/60 lg:max-w-[27.3125rem]" data-hero-subhead="">{s.texto}</p>
                  </div>
                  <div className="flex w-full flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
                    <a href="#" className="btn-accent-glow inline-flex cursor-pointer items-center justify-center border-0 bg-[var(--color-accent)] px-[1rem] py-[0.5rem] font-mono text-[0.875rem] uppercase leading-[1.25rem] tracking-[0.105rem] text-[var(--base-600)] outline-none transition-[filter] hover:brightness-110 focus:outline-none focus-visible:outline-none w-full whitespace-nowrap text-center sm:w-auto" data-accent-btn="" data-hero-cta="">{s.acao11}</a>
                    <a href="#" className="inline-flex items-center justify-center px-[1rem] py-[0.5rem] font-mono text-[0.875rem] uppercase leading-[1.25rem] tracking-[0.105rem] transition-colors bg-white/[0.12] text-white hover:bg-white/[0.18] w-full whitespace-nowrap text-center sm:w-auto" data-secondary-btn="" data-hero-cta="">{s.acao12}</a>
                  </div>
                </div>
      
                
                <div className="absolute bottom-4 right-4 z-20 hidden={true} w-[14.6875rem] md:block lg:static lg:z-auto lg:order-none lg:ml-0 lg:self-auto lg:p-0" data-hero-video="">
                  
                  <div className="reel-lightbox" data-mini-showreel-lightbox="showreel" data-mini-showreel-status="not-active" aria-hidden="true">
                    <div className="reel-lightbox__dark" data-mini-showreel-close="showreel"></div>
                    <div className="reel-lightbox__safearea" data-mini-showreel-safearea="">
                      <div className="reel-lightbox__target" data-mini-showreel-target=""></div>
                    </div>
                  </div>
      
                  
                  <div className="reel-card group relative block w-full overflow-hidden border border-[var(--color-border)] bg-[var(--base-600)]" data-mini-showreel-player="showreel" data-mini-showreel-status="not-active">
                    <div className="reel-card__media relative w-full" style={{aspectRatio: '16 / 9'}}>
                      <img src={s.imagem9} alt="Play showreel" className="reel-card__thumb absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity duration-500 group-hover:opacity-100" />
                      <iframe className="reel-card__iframe absolute inset-0 h-full w-full" data-reel-iframe="" data-reel-embed-url="https://www.youtube.com/embed/A6oW7SnNq2g?autoplay=1&amp;rel=0&amp;modestbranding=1&amp;playsinline=1" title="Play showreel" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
                      <div className="reel-card__gradient absolute inset-0 bg-gradient-to-t from-[var(--base-600)]/80 via-transparent to-transparent"></div>
      
                      <span className="reel-corner absolute left-1 top-1 h-[0.375rem] w-[0.375rem] border-l border-t border-white/30"></span>
                      <span className="reel-corner absolute right-1 top-1 h-[0.375rem] w-[0.375rem] border-r border-t border-white/30"></span>
                      <span className="reel-corner absolute bottom-1 left-1 h-[0.375rem] w-[0.375rem] border-b border-l border-white/30"></span>
                      <span className="reel-corner absolute bottom-1 right-1 h-[0.375rem] w-[0.375rem] border-b border-r border-white/30"></span>
                    </div>
      
                    <div className="reel-card__info flex items-center justify-between border-t border-[var(--color-border)] px-[0.625rem] py-2">
                      <span className="reel-label font-mono text-[0.625rem] uppercase tracking-[0.075rem] text-[var(--color-accent)]">{s.rotulo18}</span>
                      <div className="reel-play-btn flex h-4 w-4 items-center justify-center rounded-full bg-[var(--color-accent)]">
                        <svg width="7" height="7" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                          <path d="M6 3L17 10L6 17V3Z" fill="var(--base-600)"></path>
                        </svg>
                      </div>
                    </div>
      
                    <button type="button" className="reel-card__click absolute inset-0 z-[2] block w-full cursor-pointer" data-mini-showreel-open="showreel" aria-label="Play showreel" onClick={s.onClick}></button>
                  </div>
                </div>
      
                
                <button type="button" className="hero-mini-play absolute bottom-4 right-4 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-accent)] md:hidden" data-mini-showreel-open="showreel" aria-label="Play showreel" onClick={s.onClick}>
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M6 3L17 10L6 17V3Z" fill="var(--base-600)"></path>
                  </svg>
                </button>
              </div>
      
              <div className="relative order-2 my-0 flex-1 overflow-hidden md:-my-8 md:aspect-[4/3] md:flex-none lg:order-none lg:my-0 lg:aspect-auto" data-hero-visual="">
                
                <div className="stage" id="stage" data-liquid-stage=""></div>
              </div>
            </div>
      
            <div className="hero-marquee-wrap relative lg:border-y lg:border-[var(--color-border)]">
              
              <div className="frame-line pointer-events-none absolute left-0 right-0 z-[5] hidden={true} h-px bg-[var(--color-border)] lg:block" style={{top: '-1px'}} data-frame-line="" data-axis="x" aria-hidden="true"></div>
              <div className="frame-line pointer-events-none absolute left-0 right-0 z-[5] hidden={true} h-px bg-[var(--color-border)] lg:block" style={{bottom: '-1px'}} data-frame-line="" data-axis="x" aria-hidden="true"></div>
      
              <div className="hero-marquee-inner relative z-10 mx-auto w-full max-w-[70.5rem] pt-16 pb-6 lg:py-6 lg:border-x lg:border-[var(--color-border)]" data-hero-marquee="">
                
                <svg className="pointer-events-none absolute left-[calc(-0.5rem_-_1px)] top-[calc(-0.5rem_-_0.5px)] z-10 hidden={true} h-4 w-4 text-white lg:block" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-hero-tick="">
                  <path d="M8 8.5H0V7.5H8V0H9V7.5H16V8.5H9V16H8V8.5Z"></path>
                </svg>
                
                <svg className="pointer-events-none absolute -right-2 top-[calc(-0.5rem_-_0.5px)] z-10 hidden={true} h-4 w-4 text-white lg:block" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-hero-tick="">
                  <path d="M8 8.5H0V7.5H8V0H9V7.5H16V8.5H9V16H8V8.5Z"></path>
                </svg>
                
                <svg className="pointer-events-none absolute bottom-[calc(-0.5rem_-_0.5px)] left-[calc(-0.5rem_-_1px)] z-10 hidden={true} h-4 w-4 text-white lg:block" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-hero-tick="">
                  <path d="M0 8.5H16V7.5H9V0H8V7.5H0Z"></path>
                </svg>
                
                <svg className="pointer-events-none absolute -right-2 bottom-[calc(-0.5rem_-_0.5px)] z-10 hidden={true} h-4 w-4 text-white lg:block" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-hero-tick="">
                  <path d="M0 8.5H16V7.5H9V0H8V7.5H0Z"></path>
                </svg>
      
                <div className="overflow-hidden" data-hero-marquee-track="">
                  <div className="marquee-track flex w-max">
                    <div className="flex shrink-0 items-center gap-[6.46875rem] pr-[6.46875rem]">
                      <img src={s.imagem10} alt="" className="h-[2.25rem] w-auto shrink-0" />
                      <img src={s.imagem11} alt="" className="h-[2.25rem] w-auto shrink-0" />
                      <img src={s.imagem12} alt="" className="h-[2.25rem] w-auto shrink-0" />
                      <img src={s.imagem13} alt="" className="h-[2.25rem] w-auto shrink-0" />
                      <img src={s.imagem14} alt="" className="h-[2.25rem] w-auto shrink-0" />
                      <img src={s.imagem15} alt="" className="h-[2.25rem] w-auto shrink-0" />
                      <img src={s.imagem16} alt="" className="h-[2.25rem] w-auto shrink-0" />
                    </div>
                    <div className="flex shrink-0 items-center gap-[6.46875rem] pr-[6.46875rem]" aria-hidden="true">
                      <img src={s.imagem17} alt="" className="h-[2.25rem] w-auto shrink-0" />
                      <img src={s.imagem18} alt="" className="h-[2.25rem] w-auto shrink-0" />
                      <img src={s.imagem19} alt="" className="h-[2.25rem] w-auto shrink-0" />
                      <img src={s.imagem20} alt="" className="h-[2.25rem] w-auto shrink-0" />
                      <img src={s.imagem21} alt="" className="h-[2.25rem] w-auto shrink-0" />
                      <img src={s.imagem22} alt="" className="h-[2.25rem] w-auto shrink-0" />
                      <img src={s.imagem23} alt="" className="h-[2.25rem] w-auto shrink-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </section>
  );
}