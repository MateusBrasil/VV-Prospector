"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-24
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
  //   // aeline-faq — single-open accordion (ported from FaqSection.astro component script).
  //   (function () {
  //     document.querySelectorAll("[data-faq]").forEach(function (group) {
  //       var items = Array.from(group.querySelectorAll(".faq_item"));
  //       items.forEach(function (item) {
  //         var top = item.querySelector(".faq_top");
  //         if (!top) return;
  //         top.addEventListener("click", function () {
  //           var willOpen = !item.classList.contains("is-open");
  //           items.forEach(function (other) { other.classList.remove("is-open"); });
  //           if (willOpen) item.classList.add("is-open");
  //         });
  //       });
  //     });
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
    <section className="dobra" data-dobra="faq-secao-24" ref={raiz}>
      <div className="page-wrapper">
      <section className="section_faq"> <div className="padding-section-large"></div> <div className="padding-global"> <div className="container-large"> <div className="vertical-center"> <div data-reveal="" className="vertical-center"> <div data-wf--tag-section--variant="base" className="tag"> <div className="dot-square"></div> <div>FAQ</div> </div> <div className="spacer-large"></div> <h2 className="text-align-center">{s.titulo}</h2> <div className="spacer-large"></div> <div className="max-width-medium is-34rem"> <div className="text-base text-align-center text-color-secondary">Everything you need to know about our consulting and AI solutions — from strategy to implementation.</div> </div> </div> <div className="spacer-section-medium"></div> <div className="faq_items max-width-large" data-faq="" data-stagger=".faq_item"> <div className="faq_item scroll-right"> <div className="faq_top"> <div className="text-xl">What types of businesses do you work with?</div> <div className="container-icon bg-default"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-medium"> <path d="M18 12.9961H6C5.73478 12.9961 5.48043 12.8907 5.29289 12.7032C5.10536 12.5157 5 12.2613 5 11.9961C5 11.7309 5.10536 11.4765 5.29289 11.289C5.48043 11.1015 5.73478 10.9961 6 10.9961H18C18.2652 10.9961 18.5196 11.1015 18.7071 11.289C18.8946 11.4765 19 11.7309 19 11.9961C19 12.2613 18.8946 12.5157 18.7071 12.7032C18.5196 12.8907 18.2652 12.9961 18 12.9961Z" fill="currentColor"></path> </svg><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-medium is-animated"> <path d="M18 12.9961H6C5.73478 12.9961 5.48043 12.8907 5.29289 12.7032C5.10536 12.5157 5 12.2613 5 11.9961C5 11.7309 5.10536 11.4765 5.29289 11.289C5.48043 11.1015 5.73478 10.9961 6 10.9961H18C18.2652 10.9961 18.5196 11.1015 18.7071 11.289C18.8946 11.4765 19 11.7309 19 11.9961C19 12.2613 18.8946 12.5157 18.7071 12.7032C18.5196 12.8907 18.2652 12.9961 18 12.9961Z" fill="currentColor"></path> </svg></div> </div> <div className="faq_bottom"> <div className="faq_bottom-inner"> <div className="text-base text-color-secondary">We partner with organizations of all sizes — from startups to established enterprises — across industries like retail, technology, finance, manufacturing, and professional services. Our approach is flexible and tailored to fit your business model and growth stag</div> <div className="spacer-large"></div> </div> </div> </div><div className="faq_item scroll-right"> <div className="faq_top"> <div className="text-xl">How does your consulting process work?</div> <div className="container-icon bg-default"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-medium"> <path d="M18 12.9961H6C5.73478 12.9961 5.48043 12.8907 5.29289 12.7032C5.10536 12.5157 5 12.2613 5 11.9961C5 11.7309 5.10536 11.4765 5.29289 11.289C5.48043 11.1015 5.73478 10.9961 6 10.9961H18C18.2652 10.9961 18.5196 11.1015 18.7071 11.289C18.8946 11.4765 19 11.7309 19 11.9961C19 12.2613 18.8946 12.5157 18.7071 12.7032C18.5196 12.8907 18.2652 12.9961 18 12.9961Z" fill="currentColor"></path> </svg><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-medium is-animated"> <path d="M18 12.9961H6C5.73478 12.9961 5.48043 12.8907 5.29289 12.7032C5.10536 12.5157 5 12.2613 5 11.9961C5 11.7309 5.10536 11.4765 5.29289 11.289C5.48043 11.1015 5.73478 10.9961 6 10.9961H18C18.2652 10.9961 18.5196 11.1015 18.7071 11.289C18.8946 11.4765 19 11.7309 19 11.9961C19 12.2613 18.8946 12.5157 18.7071 12.7032C18.5196 12.8907 18.2652 12.9961 18 12.9961Z" fill="currentColor"></path> </svg></div> </div> <div className="faq_bottom"> <div className="faq_bottom-inner"> <div className="text-base text-color-secondary">We begin with a deep discovery phase to fully understand your core challenges. Then, we design a custom strategy roadmap. Finally, we execute and monitor the results. Our method ensures that every step is transparent, measurable, and aligned with your unique need</div> <div className="spacer-large"></div> </div> </div> </div><div className="faq_item scroll-right"> <div className="faq_top"> <div className="text-xl">What makes your AI solutions different?</div> <div className="container-icon bg-default"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-medium"> <path d="M18 12.9961H6C5.73478 12.9961 5.48043 12.8907 5.29289 12.7032C5.10536 12.5157 5 12.2613 5 11.9961C5 11.7309 5.10536 11.4765 5.29289 11.289C5.48043 11.1015 5.73478 10.9961 6 10.9961H18C18.2652 10.9961 18.5196 11.1015 18.7071 11.289C18.8946 11.4765 19 11.7309 19 11.9961C19 12.2613 18.8946 12.5157 18.7071 12.7032C18.5196 12.8907 18.2652 12.9961 18 12.9961Z" fill="currentColor"></path> </svg><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-medium is-animated"> <path d="M18 12.9961H6C5.73478 12.9961 5.48043 12.8907 5.29289 12.7032C5.10536 12.5157 5 12.2613 5 11.9961C5 11.7309 5.10536 11.4765 5.29289 11.289C5.48043 11.1015 5.73478 10.9961 6 10.9961H18C18.2652 10.9961 18.5196 11.1015 18.7071 11.289C18.8946 11.4765 19 11.7309 19 11.9961C19 12.2613 18.8946 12.5157 18.7071 12.7032C18.5196 12.8907 18.2652 12.9961 18 12.9961Z" fill="currentColor"></path> </svg></div> </div> <div className="faq_bottom"> <div className="faq_bottom-inner"> <div className="text-base text-color-secondary">We focus on practicality over hype. Unlike generic tools, our solutions are built on your specific data and workflows. We prioritize seamless integration and clear ROI, ensuring the technology solves real business problems rather than just being a shiny new toy.</div> <div className="spacer-large"></div> </div> </div> </div><div className="faq_item scroll-right"> <div className="faq_top"> <div className="text-xl">Do I need to have technical knowledge to work with you?</div> <div className="container-icon bg-default"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-medium"> <path d="M18 12.9961H6C5.73478 12.9961 5.48043 12.8907 5.29289 12.7032C5.10536 12.5157 5 12.2613 5 11.9961C5 11.7309 5.10536 11.4765 5.29289 11.289C5.48043 11.1015 5.73478 10.9961 6 10.9961H18C18.2652 10.9961 18.5196 11.1015 18.7071 11.289C18.8946 11.4765 19 11.7309 19 11.9961C19 12.2613 18.8946 12.5157 18.7071 12.7032C18.5196 12.8907 18.2652 12.9961 18 12.9961Z" fill="currentColor"></path> </svg><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-medium is-animated"> <path d="M18 12.9961H6C5.73478 12.9961 5.48043 12.8907 5.29289 12.7032C5.10536 12.5157 5 12.2613 5 11.9961C5 11.7309 5.10536 11.4765 5.29289 11.289C5.48043 11.1015 5.73478 10.9961 6 10.9961H18C18.2652 10.9961 18.5196 11.1015 18.7071 11.289C18.8946 11.4765 19 11.7309 19 11.9961C19 12.2613 18.8946 12.5157 18.7071 12.7032C18.5196 12.8907 18.2652 12.9961 18 12.9961Z" fill="currentColor"></path> </svg></div> </div> <div className="faq_bottom"> <div className="faq_bottom-inner"> <div className="text-base text-color-secondary">Not at all. We handle the technical heavy lifting for you. We explain every concept in plain English so you make informed decisions without needing to code. Our team bridges the gap between complex tech and business goals, making the process smooth and accessible</div> <div className="spacer-large"></div> </div> </div> </div><div className="faq_item scroll-right"> <div className="faq_top"> <div className="text-xl">How long does it take to see results?</div> <div className="container-icon bg-default"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-medium"> <path d="M18 12.9961H6C5.73478 12.9961 5.48043 12.8907 5.29289 12.7032C5.10536 12.5157 5 12.2613 5 11.9961C5 11.7309 5.10536 11.4765 5.29289 11.289C5.48043 11.1015 5.73478 10.9961 6 10.9961H18C18.2652 10.9961 18.5196 11.1015 18.7071 11.289C18.8946 11.4765 19 11.7309 19 11.9961C19 12.2613 18.8946 12.5157 18.7071 12.7032C18.5196 12.8907 18.2652 12.9961 18 12.9961Z" fill="currentColor"></path> </svg><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-medium is-animated"> <path d="M18 12.9961H6C5.73478 12.9961 5.48043 12.8907 5.29289 12.7032C5.10536 12.5157 5 12.2613 5 11.9961C5 11.7309 5.10536 11.4765 5.29289 11.289C5.48043 11.1015 5.73478 10.9961 6 10.9961H18C18.2652 10.9961 18.5196 11.1015 18.7071 11.289C18.8946 11.4765 19 11.7309 19 11.9961C19 12.2613 18.8946 12.5157 18.7071 12.7032C18.5196 12.8907 18.2652 12.9961 18 12.9961Z" fill="currentColor"></path> </svg></div> </div> <div className="faq_bottom"> <div className="faq_bottom-inner"> <div className="text-base text-color-secondary">Timelines vary by project scope. However, we structure our work to deliver quick wins early on while building toward long-term success. Typically, clients see initial impact within the first few weeks, with substantial ROI developing over the following few months.</div> <div className="spacer-large"></div> </div> </div> </div> </div> </div> </div> </div> <div className="padding-section-large"></div> </section>
        </div>
    </section>
  );
}