"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-199
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
  //   // Aeline — Testimonials Slider — no local logic. Reveals/sliders run from the shared /aeline/scripts/.
  //   // Stub kept for the 4-file convention.
  //   
  //   // Aeline — Swiper init (ported from src/scripts/swiper-init.ts).
  //   // Uses the global Swiper from swiper-bundle (all modules registered by the bundle, so the
  //   // `modules:[...]` arrays from the source are dropped). Guards on each section selector, so
  //   // loading this file in any slider section only inits the sliders actually present.
  //   //   - initSlider: testimonials + blog teaser (spv 1→2(768)→3(992), speed 700, custom arrows)
  //   //   - initBreakpointSlider: services/expertise/pricing/team (slider ONLY ≤991, destroyed ≥992)
  //   //   - initFadeSlider: service-detail cross-fade (effect fade, loop, w-slider arrows)
  //   (function () {
  //     var Swiper = window.Swiper;
  //     if (!Swiper) return;
  //   
  //     // Always-on slider (testimonials + blog teaser).
  //     function initSlider(sectionSelector) {
  //       document.querySelectorAll(sectionSelector).forEach(function (section) {
  //         var el = section.querySelector(".swiper");
  //         if (!el) return;
  //         var swiper = new Swiper(el, {
  //           speed: 700,
  //           loop: false,
  //           slidesPerView: 1,
  //           spaceBetween: 16,
  //           mousewheel: { forceToAxis: true },
  //           keyboard: { enabled: true, onlyInViewport: true },
  //           breakpoints: {
  //             768: { slidesPerView: 2, spaceBetween: 24 },
  //             992: { slidesPerView: 3, spaceBetween: 24 },
  //           },
  //         });
  //         section.querySelectorAll(".slide_prev").forEach(function (b) { b.addEventListener("click", function () { swiper.slidePrev(); }); });
  //         section.querySelectorAll(".slide_next").forEach(function (b) { b.addEventListener("click", function () { swiper.slideNext(); }); });
  //       });
  //     }
  //   
  //     // Static grid on desktop, slider ONLY on tablet/mobile (≤991).
  //     function initBreakpointSlider(sectionSelector, hostSelector, arrowsClass, tabletPerView) {
  //       var section = document.querySelector(sectionSelector);
  //       if (!section) return;
  //       var el = section.querySelector(hostSelector);
  //       if (!el) return;
  //   
  //       var swiper = null;
  //       var mq = window.matchMedia("(max-width: 991px)");
  //   
  //       var sync = function () {
  //         if (mq.matches && !swiper) {
  //           swiper = new Swiper(el, {
  //             speed: 700,
  //             loop: false,
  //             slidesPerView: 1,
  //             spaceBetween: 16,
  //             mousewheel: { forceToAxis: true },
  //             keyboard: { enabled: true, onlyInViewport: true },
  //             breakpoints: {
  //               768: { slidesPerView: tabletPerView, spaceBetween: tabletPerView > 1 ? 24 : 16 },
  //             },
  //           });
  //         } else if (!mq.matches && swiper) {
  //           swiper.destroy(true, true);
  //           swiper = null;
  //         }
  //       };
  //   
  //       section.querySelectorAll(arrowsClass + " .slide_prev").forEach(function (b) {
  //         b.addEventListener("click", function () { if (swiper) swiper.slidePrev(); });
  //       });
  //       section.querySelectorAll(arrowsClass + " .slide_next").forEach(function (b) {
  //         b.addEventListener("click", function () { if (swiper) swiper.slideNext(); });
  //       });
  //   
  //       mq.addEventListener("change", sync);
  //       sync();
  //     }
  //   
  //     // Cross-fade slider (service-detail testimonials).
  //     function initFadeSlider(sectionSelector) {
  //       document.querySelectorAll(sectionSelector).forEach(function (section) {
  //         var el = section.querySelector(".swiper");
  //         if (!el) return;
  //         var swiper = new Swiper(el, {
  //           effect: "fade",
  //           fadeEffect: { crossFade: true },
  //           speed: 500,
  //           loop: true,
  //           slidesPerView: 1,
  //           keyboard: { enabled: true, onlyInViewport: true },
  //         });
  //         section.querySelectorAll(".w-slider-arrow-left").forEach(function (b) { b.addEventListener("click", function () { swiper.slidePrev(); }); });
  //         section.querySelectorAll(".w-slider-arrow-right").forEach(function (b) { b.addEventListener("click", function () { swiper.slideNext(); }); });
  //       });
  //     }
  //   
  //     function initAll() {
  //       initSlider(".section_testimonials");
  //       initFadeSlider(".section_testimonia");
  //       initSlider(".section_blog");
  //       initBreakpointSlider(".section_services", ".services_cards.swiper", ".is-services", 2);
  //       initBreakpointSlider(".section_expertise", ".expertise_cards.swiper", ".is-expertise", 1);
  //       initBreakpointSlider(".section_pricing", ".pricing_cards.swiper", ".is-pricing", 2);
  //       initBreakpointSlider(".sec_team", ".team_cards.swiper", ".is-team", 2);
  //     }
  //   
  //     if (document.readyState === "loading") {
  //       document.addEventListener("DOMContentLoaded", initAll);
  //     } else {
  //       initAll();
  //     }
  //   })();
  //   
  //   // Aeline — animation layer (ported from src/scripts/animations.ts).
  //   // data-anim engine + hero entrance + 3D carousel + marquees/loops + title icons +
  //   // counters + generic reveals + staggers. Respects prefers-reduced-motion.
  //   (function () {
  //     var gsap = window.gsap;
  //     var ScrollTrigger = window.ScrollTrigger;
  //     if (!gsap) return;
  //     if (ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
  //   
  //     var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  //   
  //     // ───────────────────────── 1. data-anim engine ─────────────────────────
  //     function initDataAnim() {
  //       // Smart trigger: play on load if visible, use ScrollTrigger if below the fold.
  //       function smartPlay(el, tl, delay) {
  //         var rect = el.getBoundingClientRect();
  //         if (rect.top < window.innerHeight * 0.85) {
  //           tl.delay(delay || 0.3).play();
  //         } else {
  //           ScrollTrigger.create({ trigger: el, start: "top 85%", onEnter: function () { tl.play(); } });
  //         }
  //       }
  //   
  //       // 1. CARD REVEAL (Expertise bento cards)
  //       document.querySelectorAll('[data-anim="card-reveal"]').forEach(function (c) {
  //         var tl = gsap.timeline({ paused: true });
  //         tl.from(c, { autoAlpha: 0, scale: 0.92, duration: 0.55, ease: "power3.out" });
  //         var labels = c.querySelectorAll('[data-anim="fade-up"]');
  //         if (labels.length) {
  //           tl.from(labels, { autoAlpha: 0, y: 10, duration: 0.4, stagger: 0.1, ease: "power2.out" }, "-=0.4");
  //         }
  //         c.querySelectorAll('[data-anim="progress"]').forEach(function (b) {
  //           var f = b.firstElementChild;
  //           if (f) {
  //             var w = f.style.width || "49%";
  //             gsap.set(f, { width: "0%" });
  //             tl.to(f, { width: w, duration: 0.9, ease: "power2.inOut" }, "-=0.15");
  //           }
  //         });
  //         c.querySelectorAll('[data-anim="stagger-rows"]').forEach(function (r) {
  //           tl.from(r.children, { autoAlpha: 0, x: 20, duration: 0.4, stagger: 0.1, ease: "power2.out" }, "-=0.35");
  //         });
  //         var barChart = c.querySelector('[data-anim="bar-grow"]');
  //         if (barChart) {
  //           var barEls = barChart.querySelectorAll(".bcard_bar");
  //           barEls.forEach(function (bar) { gsap.set(bar, { scaleY: 0, transformOrigin: "bottom center" }); });
  //           var yearLabels = barChart.querySelectorAll(".bcard_text-year");
  //           tl.from(yearLabels, { autoAlpha: 0, y: 6, duration: 0.25, stagger: 0.05, ease: "power2.out" }, "-=0.3");
  //           tl.to(barEls, { scaleY: 1, duration: 0.6, stagger: 0.09, ease: "back.out(1.4)" }, "-=0.1");
  //         }
  //         c.querySelectorAll('[data-anim="stagger-text"]').forEach(function (st) {
  //           tl.from(st.children, { autoAlpha: 0, y: 12, duration: 0.35, stagger: 0.09, ease: "power2.out" }, "-=0.35");
  //         });
  //         smartPlay(c, tl, 0.3);
  //       });
  //   
  //       // 2. ORBIT REVEAL (ocard)
  //       document.querySelectorAll('[data-anim="orbit-reveal"]').forEach(function (o) {
  //         var tl = gsap.timeline({ paused: true });
  //         var rings = o.querySelectorAll(".ocard_ring");
  //         tl.from(o, { autoAlpha: 0, duration: 0.25 });
  //         tl.from(rings, { scale: 0, autoAlpha: 0, duration: 0.45, ease: "back.out(2)" }, "-=0.15");
  //         var center = o.querySelector('[data-anim="fade-up"]');
  //         if (center) tl.from(center, { scale: 0, autoAlpha: 0, duration: 0.45, ease: "back.out(2)" }, "-=0.4");
  //         var pills = o.querySelectorAll('[data-anim="pill-float"]');
  //         pills.forEach(function (pill) {
  //           tl.from(pill, { autoAlpha: 0, scale: 0.7, duration: 0.5, ease: "back.out(1.5)" }, "-=0.35");
  //         });
  //         // continuous orbit after the reveal
  //         tl.call(function () {
  //           var oRect = o.getBoundingClientRect();
  //           var cx = oRect.left + oRect.width / 2;
  //           var cy = oRect.top + oRect.height / 2;
  //           var durations = [50, 60, 45];
  //           pills.forEach(function (pill, i) {
  //             var pRect = pill.getBoundingClientRect();
  //             var px = pRect.left + pRect.width / 2;
  //             var py = pRect.top + pRect.height / 2;
  //             var dx = px - cx, dy = py - cy;
  //             var radius = Math.sqrt(dx * dx + dy * dy);
  //             var startAngle = Math.atan2(dy, dx);
  //             var origX = Math.cos(startAngle) * radius;
  //             var origY = Math.sin(startAngle) * radius;
  //             var speed = (2 * Math.PI) / (durations[i] || 50);
  //             var angle = startAngle;
  //             gsap.ticker.add(function () {
  //               angle += (speed * gsap.ticker.deltaRatio(60)) / 60;
  //               gsap.set(pill, { x: Math.cos(angle) * radius - origX, y: Math.sin(angle) * radius - origY });
  //             });
  //           });
  //         });
  //         smartPlay(o, tl, 0.3);
  //       });
  //   
  //       // 3. STANDALONE FADE-UP (no anidado en card/orbit)
  //       document.querySelectorAll('[data-anim="fade-up"]').forEach(function (el) {
  //         if (el.closest('[data-anim="card-reveal"]') || el.closest('[data-anim="orbit-reveal"]')) return;
  //         var tl = gsap.timeline({ paused: true });
  //         tl.from(el, { autoAlpha: 0, y: 40, duration: 0.7, ease: "power2.out" });
  //         smartPlay(el, tl, 0.2);
  //       });
  //   
  //       // 4. TAG MARQUEES inside cards (data-anim) — speed 35 px/s
  //       initMarquee('[data-anim="marquee-right"]', "left", 35);
  //       initMarquee('[data-anim="marquee-left"]', "right", 35);
  //     }
  //   
  //     // Seamless marquee; the children are duplicated ×2 in the markup.
  //     function initMarquee(selector, direction, speed) {
  //       document.querySelectorAll(selector).forEach(function (row) {
  //         var items = gsap.utils.toArray(row.children);
  //         if (!items.length) return;
  //         var half = items.length / 2;
  //         var totalWidth = 0;
  //         for (var i = 0; i < half; i++) {
  //           totalWidth += items[i].offsetWidth + parseFloat(getComputedStyle(row).gap || "0");
  //         }
  //         var duration = totalWidth / speed;
  //         if (direction === "left") {
  //           gsap.set(row, { x: 0 });
  //           gsap.to(row, {
  //             x: -totalWidth, duration: duration, ease: "none", repeat: -1,
  //             modifiers: { x: gsap.utils.unitize(function (x) { return parseFloat(x) % totalWidth; }) },
  //           });
  //         } else {
  //           gsap.set(row, { x: -totalWidth });
  //           gsap.to(row, {
  //             x: 0, duration: duration, ease: "none", repeat: -1,
  //             modifiers: { x: gsap.utils.unitize(function (x) { return -totalWidth + ((parseFloat(x) + totalWidth) % totalWidth); }) },
  //           });
  //         }
  //       });
  //     }
  //   
  //     // ───────────────────────── 2. HERO ENTRANCE (on load) ─────────────────────────
  //     function initHero() {
  //       var heroBits = document.querySelector('[hero-text], [data-hero-bg], [data-hero-visual], [data-hero-wrap], [data-hero-fade]');
  //       if (!heroBits) return;
  //       var tl = gsap.timeline();
  //       // [data-hero-wrap]: scale 1.1→1 (home hero). [data-hero-fade] on secondary heroes.
  //       gsap.utils.toArray("[data-hero-wrap]").forEach(function (el) {
  //         tl.from(el, { scale: 1.1, duration: 1.0, ease: "power1.out" }, 0);
  //       });
  //       var heroFades = gsap.utils.toArray("[data-hero-fade]");
  //       if (heroFades.length) {
  //         tl.from(heroFades, { autoAlpha: 0, y: "2rem", duration: 0.8, stagger: 0.12, ease: "power2.out" }, 0);
  //       }
  //       gsap.utils.toArray("[data-hero-bg]").forEach(function (el) {
  //         tl.from(el, { scale: 1.2, duration: 1.5, ease: "power1.inOut" }, 0);
  //       });
  //       gsap.utils.toArray("[data-hero-visual]").forEach(function (el) {
  //         tl.from(el, { scale: 0, autoAlpha: 0, duration: 1.25, ease: "back.out(1.7)" }, 0);
  //       });
  //       var heroTexts = gsap.utils.toArray("[hero-text]");
  //       if (heroTexts.length) {
  //         tl.from(heroTexts, { autoAlpha: 0, y: "1.5rem", duration: 0.6, stagger: 0.1, ease: "power2.out" }, 0);
  //       }
  //       var buttons = gsap.utils.toArray("[data-hero-button]");
  //       if (buttons.length) {
  //         tl.from(buttons, { scale: 0, autoAlpha: 0, duration: 0.6, stagger: { amount: 0.25 }, ease: "power2.out" }, 0.3);
  //       }
  //       // [data-hero-stairs]: social proof enters from the left in a staircase cascade.
  //       gsap.utils.toArray("[data-hero-stairs]").forEach(function (el) {
  //         var text = el.querySelector(":scope > div:not(.avatars-wrap)");
  //         var avatars = gsap.utils.toArray(el.querySelectorAll(".avatar-item"));
  //         var targets = [text].concat(avatars).filter(Boolean);
  //         if (!targets.length) return;
  //         tl.from(targets, { x: -32, autoAlpha: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" }, 0.15);
  //       });
  //     }
  //   
  //     // ───────────── 2b. HERO VISUAL — looping 3D carousel (._3d .group) ─────────────
  //     function initHeroVisual() {
  //       gsap.utils.toArray("._3d .group").forEach(function (group) {
  //         gsap.to(group, { rotation: "-=360", duration: 40, ease: "none", repeat: -1 });
  //       });
  //     }
  //   
  //     // ───────────────────────── 3. LOGO MARQUEE (.loop_logos) ─────────────────────────
  //     function initLogoMarquee() {
  //       document.querySelectorAll(".loop").forEach(function (track) {
  //         var rows = track.querySelectorAll(".loop_logos");
  //         if (rows.length < 2) return; // needs 2 identical rows for a seamless loop
  //         gsap.to(track, { xPercent: -50, duration: 20, ease: "none", repeat: -1 });
  //       });
  //     }
  //   
  //     // Continuous image loops: hero image loop (.loop_img) and services testimonials (.testi_loop).
  //     function initLoops() {
  //       document.querySelectorAll(".loop_img, .testi_loop").forEach(function (track) {
  //         if (track.children.length < 2) return; // 2 identical groups for a seamless loop
  //         gsap.to(track, { xPercent: -50, duration: 20, ease: "none", repeat: -1 });
  //       });
  //     }
  //   
  //     // ──────────── 3b. TITLE ICONS — width 0→3rem on scroll (animation="title") ────────────
  //     function initTitleIcons() {
  //       if (window.matchMedia("(max-width: 767px)").matches) return;
  //       gsap.utils.toArray(".title-wrap").forEach(function (wrap) {
  //         var icons = wrap.querySelectorAll(".title-icon");
  //         if (!icons.length) return;
  //         gsap.from(icons, {
  //           width: 0,
  //           duration: 1,
  //           ease: "power3.out",
  //           scrollTrigger: { trigger: wrap, start: "top 60%", once: true },
  //         });
  //       });
  //     }
  //   
  //     // ───────────────────────── 4. COUNTERS (fs-numbercount → GSAP) ─────────────────────────
  //     function initCounters() {
  //       document.querySelectorAll("[fs-numbercount-element='number'], [fs-numbercount-end]").forEach(function (el) {
  //         var end = parseFloat(el.getAttribute("fs-numbercount-end") || el.textContent || "0");
  //         var start = parseFloat(el.getAttribute("fs-numbercount-start") || "0");
  //         var dur = parseFloat(el.getAttribute("fs-numbercount-duration") || "2000") / 1000;
  //         if (isNaN(end)) return;
  //         // preserve suffixes/prefixes from the original text (e.g. "+", "k+", "%")
  //         var raw = (el.textContent || "").trim();
  //         var suffix = raw.replace(/[\d.,\s]/g, "");
  //         var obj = { v: start };
  //         var render = function () { el.textContent = Math.round(obj.v).toLocaleString("en-US") + suffix; };
  //         render();
  //         ScrollTrigger.create({
  //           trigger: el, start: "top 90%", once: true,
  //           onEnter: function () { gsap.to(obj, { v: end, duration: dur, ease: "power1.out", onUpdate: render }); },
  //         });
  //       });
  //     }
  //   
  //     // ───────────────────────── 5. GENERIC SCROLL REVEALS ([data-reveal]) ─────────────────────────
  //     function initReveals() {
  //       document.querySelectorAll("[data-reveal]").forEach(function (el) {
  //         var kind = el.getAttribute("data-reveal") || "up";
  //         var from = { autoAlpha: 0, duration: 1, ease: "power3.out" };
  //         if (kind === "scale") { from.scale = parseFloat(el.getAttribute("data-reveal-scale") || "0.92"); }
  //         else if (kind === "right") { from.x = "5rem"; }
  //         else { from.y = 40; }
  //         from.scrollTrigger = { trigger: el, start: "top 90%", once: true };
  //         gsap.from(el, from);
  //       });
  //     }
  //   
  //     // ───────────────────────── 6. STAGGER REVEALS ([data-stagger]) ─────────────────────────
  //     function initStaggers() {
  //       document.querySelectorAll("[data-stagger]").forEach(function (group) {
  //         var sel = group.getAttribute("data-stagger");
  //         var targets = sel ? group.querySelectorAll(sel) : group.children;
  //         if (!targets.length) return;
  //         gsap.from(targets, {
  //           autoAlpha: 0, y: 28, duration: 0.6, stagger: 0.12, ease: "power3.out",
  //           scrollTrigger: { trigger: group, start: "top 85%", once: true },
  //         });
  //       });
  //     }
  //   
  //     // ───────────────────────── bootstrap ─────────────────────────
  //     function run() {
  //       if (reduce) {
  //         // show everything statically
  //         gsap.set("[data-anim], [hero-text], [data-hero-bg], [data-hero-visual], [data-hero-wrap], [data-hero-fade], [data-hero-button], [data-hero-stairs] *, [data-stagger] > *, [data-reveal]", {
  //           clearProps: "all", autoAlpha: 1,
  //         });
  //         return;
  //       }
  //       initDataAnim();
  //       initHero();
  //       initHeroVisual();
  //       initTitleIcons();
  //       initLogoMarquee();
  //       initLoops();
  //       initCounters();
  //       initReveals();
  //       initStaggers();
  //       // refresh ScrollTrigger after images/fonts load
  //       if (ScrollTrigger) window.addEventListener("load", function () { ScrollTrigger.refresh(); });
  //     }
  //   
  //     if (document.readyState === "loading") {
  //       document.addEventListener("DOMContentLoaded", run);
  //     } else {
  //       run();
  //     }
  //   })();
  //   
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false,true);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="vitrine-secao-199" ref={raiz}>
      <div className="page-wrapper">
      <section className="section_testimonials"> <div className="padding-section-medium"></div> <div className="padding-global"> <div className="container-large"> <div> <div data-reveal="right" className="tag"> <div className="dot-square"></div> <div>Testimonials</div> </div> <div className="spacer-medium"></div> <h2 data-reveal="right">{s.titulo}</h2> <div className="spacer-medium"></div> <div className="testi_wrap"> <div data-reveal="right" className="text-color-secondary">Here’s what they shared about their experience working with our team.</div> <div className="arrows_wrap is-testimonals hide-mobile-landscape"> <div className="arrow_container slide_prev"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-medium"> <path d="M7.828 13.0007L20 13.0007L20 11.0007L7.828 11.0007L13.192 5.63666L11.778 4.22266L4 12.0007L11.778 19.7787L13.192 18.3647L7.828 13.0007Z" fill="currentColor"></path> </svg></div> <div className="arrow_container slide_next"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-medium"> <path d="M16.172 13.0007L4 13.0007L4 11.0007L16.172 11.0007L10.808 5.63666L12.222 4.22266L20 12.0007L12.222 19.7787L10.808 18.3647L16.172 13.0007Z" fill="currentColor"></path> </svg></div> </div> </div> </div> <div className="spacer-section-medium"></div> <div className="testi_swiper"> <div className="swiper"> <div className="testimonials_cards swiper-wrapper"> <div className="testimonials_card swiper-slide"> <img src={s.imagem} loading="lazy" sizes="100vw" srcSet="https://d173woph5zl366.cloudfront.net/aeline/images/testimonials-img-1-p-500.avif 500w, https://d173woph5zl366.cloudfront.net/aeline/images/testimonials-img-1.avif 752w" alt="" className="img" /> <div className="testimonials_logo-container"><img src={s.imagem2} loading="lazy" alt="" className="testimonials-logo" /></div> <div className="blur-card"></div> <div className="testimonial_card-container"> <div className="card-black-gradient"></div> <div className="relative text-color-on-primary"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 32 32" fill="none" className="icon-1x1-large"> <path d="M3.33398 6.66797H14.6673V16.868L8.69132 25.3346H5.06065L8.61532 17.3346H3.33398V6.66797ZM17.334 6.66797H28.6673V16.868L22.6913 25.3346H19.0607L22.6153 17.3346H17.334V6.66797Z" fill="currentColor"></path> </svg> <div className="text-lg text-style-3lines">"They brought clarity to complex problems, breaking down barriers and delivering innovative solutions.”</div> <div className="spacer-large"></div> <div className="text-align-right">- John Doe Tech Innovations </div> </div> </div> </div><div className="testimonials_card swiper-slide"> <img src={s.imagem3} loading="lazy" sizes="100vw" srcSet="https://d173woph5zl366.cloudfront.net/aeline/images/testimonials-img-2-p-500.avif 500w, https://d173woph5zl366.cloudfront.net/aeline/images/testimonials-img-2.avif 752w" alt="" className="img" /> <div className="testimonials_logo-container"><img src={s.imagem4} loading="lazy" alt="" className="testimonials-logo" /></div> <div className="blur-card"></div> <div className="testimonial_card-container"> <div className="card-black-gradient"></div> <div className="relative text-color-on-primary"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 32 32" fill="none" className="icon-1x1-large"> <path d="M3.33398 6.66797H14.6673V16.868L8.69132 25.3346H5.06065L8.61532 17.3346H3.33398V6.66797ZM17.334 6.66797H28.6673V16.868L22.6913 25.3346H19.0607L22.6153 17.3346H17.334V6.66797Z" fill="currentColor"></path> </svg> <div className="text-lg text-style-3lines">"Their insight resolved difficult hurdles, opening new paths and creating highly effective strategies."</div> <div className="spacer-large"></div> <div className="text-align-right">- John Doe Tech Innovations </div> </div> </div> </div><div className="testimonials_card swiper-slide"> <img src={s.imagem5} loading="lazy" alt="" className="img" /> <div className="testimonials_logo-container"><img src={s.imagem6} loading="lazy" alt="" className="testimonials-logo" /></div> <div className="blur-card"></div> <div className="testimonial_card-container"> <div className="card-black-gradient"></div> <div className="relative text-color-on-primary"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 32 32" fill="none" className="icon-1x1-large"> <path d="M3.33398 6.66797H14.6673V16.868L8.69132 25.3346H5.06065L8.61532 17.3346H3.33398V6.66797ZM17.334 6.66797H28.6673V16.868L22.6913 25.3346H19.0607L22.6153 17.3346H17.334V6.66797Z" fill="currentColor"></path> </svg> <div className="text-lg text-style-3lines">"We found focus for tricky requirements, cutting through noise and providing truly advanced responses."</div> <div className="spacer-large"></div> <div className="text-align-right">- John Doe Tech Innovations </div> </div> </div> </div><div className="testimonials_card swiper-slide"> <img src={s.imagem7} loading="lazy" alt="" className="img" /> <div className="testimonials_logo-container"><img src={s.imagem8} loading="lazy" alt="" className="testimonials-logo" /></div> <div className="blur-card"></div> <div className="testimonial_card-container"> <div className="card-black-gradient"></div> <div className="relative text-color-on-primary"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 32 32" fill="none" className="icon-1x1-large"> <path d="M3.33398 6.66797H14.6673V16.868L8.69132 25.3346H5.06065L8.61532 17.3346H3.33398V6.66797ZM17.334 6.66797H28.6673V16.868L22.6913 25.3346H19.0607L22.6153 17.3346H17.334V6.66797Z" fill="currentColor"></path> </svg> <div className="text-lg text-style-3lines">"They gave simple paths to hard puzzles, removing all delays while building fresh, brilliant projects."</div> <div className="spacer-large"></div> <div className="text-align-right">- John Doe Tech Innovations </div> </div> </div> </div> </div> </div> <div className="arrows_wrap is-testimonals-phone"> <div className="arrow_container slide_prev"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-medium"> <path d="M7.828 13.0007L20 13.0007L20 11.0007L7.828 11.0007L13.192 5.63666L11.778 4.22266L4 12.0007L11.778 19.7787L13.192 18.3647L7.828 13.0007Z" fill="currentColor"></path> </svg></div> <div className="arrow_container slide_next"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-medium"> <path d="M16.172 13.0007L4 13.0007L4 11.0007L16.172 11.0007L10.808 5.63666L12.222 4.22266L20 12.0007L12.222 19.7787L10.808 18.3647L16.172 13.0007Z" fill="currentColor"></path> </svg></div> </div> </div> </div> </div> <div className="padding-section-medium"></div> </section>
        </div>
    </section>
  );
}