"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-92
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
  //   /* hirekit-contact: restringe el campo Phone a caracteres de telefono (de contact.astro). */
  //   const phone = document.getElementById('Phone-Number');
  //   if (phone) {
  //     const ALLOWED = /[^0-9+\-()#*\s]/g;
  //     phone.addEventListener('input', () => {
  //       const cleaned = phone.value.replace(ALLOWED, '');
  //       if (cleaned !== phone.value) {
  //         const pos = phone.selectionStart ?? cleaned.length;
  //         const removed = phone.value.length - cleaned.length;
  //         phone.value = cleaned;
  //         const caret = Math.max(0, pos - removed);
  //         phone.setSelectionRange(caret, caret);
  //       }
  //     });
  //   }
  //   
  //   /* Hirekit — shared scroll + load animation engine (CDN-global IIFE port of
  //      src/scripts/scroll-reveal.ts). Self-initializes by hook presence per section.
  //      Engine: window.gsap + window.ScrollTrigger. Recreates the source IX2 presets
  //      as a declarative, data-attribute-driven layer. All motion is bypassed under
  //      prefers-reduced-motion (elements render in their final state). */
  //   (function () {
  //     var gsap = window.gsap, ScrollTrigger = window.ScrollTrigger;
  //     if (!gsap) { console.warn('[hirekit] gsap missing'); return; }
  //     gsap.registerPlugin(ScrollTrigger);
  //   
  //     const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  //     const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  //   
  //     const EASE = 'power3.out';
  //     const DUR = 0.8;
  //   
  //     /* Hero load: each [data-hero-load] runs its direct children in as a 100ms ladder. */
  //     function initHeroLoad() {
  //       $$('[data-hero-load]').forEach((group) => {
  //         const items = Array.from(group.children);
  //         if (!items.length) return;
  //         if (reduce) {
  //           gsap.set(items, { clearProps: 'all' });
  //           return;
  //         }
  //         gsap.fromTo(
  //           items,
  //           { opacity: 0, y: 18 },
  //           { opacity: 1, y: 0, duration: DUR, ease: EASE, stagger: 0.1, delay: 0.1 },
  //         );
  //       });
  //     }
  //   
  //     /* Scroll-into-view reveals. `view` is the source's site-wide `.scroll-into-view`
  //        reveal: scale 0.8->1 + opacity 0->1, 1.2s power4.out, trigger ~top 80%. */
  //     const REVEAL = {
  //       left: { from: { opacity: 0, x: -100 }, to: { opacity: 1, x: 0 } },
  //       right: { from: { opacity: 0, x: 100 }, to: { opacity: 1, x: 0 } },
  //       top: { from: { opacity: 0, y: -100 }, to: { opacity: 1, y: 0 } },
  //       shrink: { from: { opacity: 0, scale: 1.25 }, to: { opacity: 1, scale: 1 } },
  //       fade: { from: { opacity: 0 }, to: { opacity: 1 } },
  //       bottom: { from: { opacity: 0, y: 100 }, to: { opacity: 1, y: 0 } },
  //       view: {
  //         from: { opacity: 0, scale: 0.8 },
  //         to: { opacity: 1, scale: 1 },
  //         dur: 1.2,
  //         ease: 'power4.out',
  //         start: 'top 80%',
  //       },
  //       // Benefits cards slide-up (source `...Card`): y 62->0 + opacity, ~0.55s easeOutCubic.
  //       up: {
  //         from: { opacity: 0, y: 62 },
  //         to: { opacity: 1, y: 0 },
  //         dur: 0.55,
  //         ease: 'power2.out',
  //         start: 'top 85%',
  //       },
  //     };
  //   
  //     function initViewReveal() {
  //       $$('[data-reveal]').forEach((el) => {
  //         const dir = (el.dataset.reveal || 'bottom').trim() || 'bottom';
  //         const preset = REVEAL[dir] ?? REVEAL.bottom;
  //         const delay = (parseFloat(el.dataset.revealDelay || '0') || 0) / 1000;
  //         if (reduce) {
  //           gsap.set(el, { clearProps: 'all', opacity: 1 });
  //           return;
  //         }
  //         gsap.fromTo(el, preset.from, {
  //           ...preset.to,
  //           duration: preset.dur ?? DUR,
  //           ease: preset.ease ?? EASE,
  //           delay,
  //           scrollTrigger: { trigger: el, start: preset.start ?? 'top 88%', once: true },
  //         });
  //       });
  //     }
  //   
  //     /* Gentle parallax drift on flagged images while their section scrolls through. */
  //     function initParallax() {
  //       if (reduce) return;
  //       $$('[data-parallax]').forEach((el) => {
  //         const amount = parseFloat(el.dataset.parallax || '40') || 40;
  //         gsap.fromTo(
  //           el,
  //           { y: -amount },
  //           {
  //             y: amount,
  //             ease: 'none',
  //             scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
  //           },
  //         );
  //       });
  //     }
  //   
  //     /* Slow a marquee to half speed while the pointer is over it (smooth ramp). */
  //     function hoverSlow(container, getTweens, factor = 0.5) {
  //       if (!container || reduce) return;
  //       const ramp = (ts) => {
  //         const arr = getTweens().filter(Boolean);
  //         if (arr.length)
  //           gsap.to(arr, { timeScale: ts, duration: 0.4, ease: 'power2.out', overwrite: true });
  //       };
  //       container.addEventListener('mouseenter', () => ramp(factor));
  //       container.addEventListener('mouseleave', () => ramp(1));
  //     }
  //   
  //     /* Hero member marquee. Each `.vertical-loop_group[data-vloop]` is tripled and
  //        scrolls continuously, linear, forever. Seamless = translate by exactly ONE
  //        tiling period (offsetTop/offsetLeft between two collections). Axis follows the
  //        layout: >767px vertical (Y), <=767px horizontal (X). Re-measured on resize. */
  //     const MARQUEE_SPEED = 50; // px per second
  //     function initVerticalLoop() {
  //       if (reduce) return;
  //       const groups = $$('.vertical-loop_group[data-vloop]');
  //       if (!groups.length) return;
  //       let tweens = [];
  //   
  //       const build = () => {
  //         tweens.forEach((t) => t.kill());
  //         tweens = [];
  //         const horizontal = window.matchMedia('(max-width: 767px)').matches;
  //         groups.forEach((group) => {
  //           const cols = group.querySelectorAll('.loop_collection');
  //           if (cols.length < 2) return;
  //           const period = horizontal
  //             ? cols[1].offsetLeft - cols[0].offsetLeft
  //             : cols[1].offsetTop - cols[0].offsetTop;
  //           if (!period) {
  //             gsap.set(group, { clearProps: 'transform' });
  //             return;
  //           }
  //           const up = group.dataset.vloop === 'up';
  //           const duration = period / MARQUEE_SPEED;
  //           const from = {};
  //           const to = { duration, ease: 'none', repeat: -1 };
  //           if (horizontal) {
  //             from.x = 0;
  //             to.x = -period;
  //             from.y = 0;
  //             to.y = 0;
  //           } else {
  //             from.y = up ? 0 : -period;
  //             to.y = up ? -period : 0;
  //             from.x = 0;
  //             to.x = 0;
  //           }
  //           tweens.push(gsap.fromTo(group, from, to));
  //         });
  //       };
  //   
  //       build();
  //       hoverSlow(document.querySelector('.vertical-loop'), () => tweens);
  //   
  //       let resizeTimer;
  //       window.addEventListener('resize', () => {
  //         window.clearTimeout(resizeTimer);
  //         resizeTimer = window.setTimeout(build, 200);
  //       });
  //     }
  //   
  //     /* Hero marquee entrance: opacity fade-in on load. From-state held by the gate. */
  //     function initMarqueeFade() {
  //       const loop = document.querySelector('.vertical-loop');
  //       if (!loop) return;
  //       if (reduce) {
  //         gsap.set(loop, { opacity: 1 });
  //         return;
  //       }
  //       gsap.fromTo(loop, { opacity: 0 }, { opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.2 });
  //     }
  //   
  //     /* About hero images load entrance (source IX3 wf:load -> .about_image). Each
  //        fanned image grows + rises + fades in; reverse stagger (last first). GSAP
  //        animates scale/y/opacity only, so the CSS rotation is preserved. */
  //     function initAboutHeroImages() {
  //       const imgs = $$('.about_image');
  //       if (!imgs.length) return;
  //       if (reduce) {
  //         gsap.set(imgs, { opacity: 1 });
  //         return;
  //       }
  //       gsap.fromTo(
  //         imgs,
  //         { scale: 0, yPercent: 100, opacity: 0 },
  //         {
  //           scale: 1,
  //           yPercent: 0,
  //           opacity: 1,
  //           duration: 0.7,
  //           ease: 'sine.out',
  //           stagger: { each: 0.2, from: 'end', ease: 'sine.out' },
  //         },
  //       );
  //     }
  //   
  //     /* Testimonials fan reveal + hover straighten. Both share the transform with the
  //        cards' resting fan rotation (set in webflow.css). Reveal: slide up y 327->0,
  //        0.5s, stagger 0.167s (rotation preserved). Hover: straighten to 0 + bring to
  //        front (.z-index combo); on leave return to rest rotation. */
  //     function initTestimonials() {
  //       const layout = document.querySelector('.testimonial_layout');
  //       if (!layout) return;
  //       const wraps = Array.from(layout.querySelectorAll('.testimonial_wrap'));
  //       if (!wraps.length) return;
  //       const restDeg = wraps.map((w) => {
  //         const m = getComputedStyle(w).transform.match(/matrix\(([-\d.]+),\s*([-\d.]+)/);
  //         return m ? (Math.atan2(+m[2], +m[1]) * 180) / Math.PI : 0;
  //       });
  //   
  //       if (!reduce) {
  //         gsap.fromTo(
  //           wraps,
  //           { y: 327 },
  //           {
  //             y: 0,
  //             duration: 0.5,
  //             ease: 'none',
  //             stagger: 0.167,
  //             scrollTrigger: { trigger: layout, start: 'top 85%', once: true },
  //           },
  //         );
  //       }
  //   
  //       wraps.forEach((w, i) => {
  //         w.addEventListener('mouseenter', () => {
  //           w.classList.add('z-index');
  //           gsap.to(w, { rotation: 0, duration: 0.5, ease: 'power1.out', overwrite: 'auto' });
  //         });
  //         w.addEventListener('mouseleave', () => {
  //           gsap.to(w, {
  //             rotation: restDeg[i],
  //             duration: 0.5,
  //             ease: 'power1.out',
  //             overwrite: 'auto',
  //             onComplete: () => w.classList.remove('z-index'),
  //           });
  //         });
  //       });
  //     }
  //   
  //     /* Services hero "Grow With Us" loop (source a-51/52). Two rows scroll in
  //        OPPOSITE directions (row 0 left, row 1 right), ~33px/s. Seamless period =
  //        copy width + gap. Re-measured on resize. */
  //     const LIKE_SPEED = 33; // px/s
  //     function initLikeLoop() {
  //       if (reduce) return;
  //       $$('.like_loop-row').forEach((row) => {
  //         const loops = Array.from(row.querySelectorAll('.like_loop'));
  //         if (loops.length < 2) return;
  //         const left = row.dataset.likeRow !== '1'; // row 0 -> left, row 1 -> right
  //         let tween;
  //         const build = () => {
  //           tween?.kill();
  //           const period = loops[1].offsetLeft - loops[0].offsetLeft;
  //           if (!period) return;
  //           const duration = period / LIKE_SPEED;
  //           tween = left
  //             ? gsap.fromTo(loops, { x: 0 }, { x: -period, duration, ease: 'none', repeat: -1 })
  //             : gsap.fromTo(loops, { x: -period }, { x: 0, duration, ease: 'none', repeat: -1 });
  //         };
  //         build();
  //         let t;
  //         window.addEventListener('resize', () => {
  //           window.clearTimeout(t);
  //           t = window.setTimeout(build, 200);
  //         });
  //       });
  //     }
  //   
  //     /* Services sticky-list recede (source a-75/a-76). Each `.services_sticky-item`
  //        is position:sticky; as the NEXT card scrolls up to cover the current one, the
  //        current recedes: translateY 0->30% + translateZ 0->-20vw (perspective turns
  //        the z push-back into a shrink). >=768 only; on <=767 plain flex column (no
  //        transforms). Viewport-relative z -> rebuilt on resize. */
  //     function initServicesScroll() {
  //       if (reduce) return;
  //       const items = $$('.services_sticky-list .services_sticky-item');
  //       if (items.length < 2) return;
  //       const desktop = window.matchMedia('(min-width: 768px)');
  //       let triggers = [];
  //   
  //       const build = () => {
  //         triggers.forEach((t) => t.kill());
  //         triggers = [];
  //         items.forEach((el) => gsap.set(el, { clearProps: 'transform' }));
  //         if (!desktop.matches) return;
  //         for (let i = 1; i < items.length; i++) {
  //           const prev = items[i - 1];
  //           const cur = items[i];
  //           const tween = gsap.fromTo(
  //             prev,
  //             { yPercent: 0, z: 0 },
  //             {
  //               yPercent: 30,
  //               z: () => -0.2 * window.innerWidth,
  //               ease: 'none',
  //               scrollTrigger: { trigger: cur, start: 'top 60%', end: 'top -20%', scrub: 1 },
  //             },
  //           );
  //           if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
  //         }
  //         ScrollTrigger.refresh();
  //       };
  //   
  //       build();
  //       let t;
  //       window.addEventListener('resize', () => {
  //         window.clearTimeout(t);
  //         t = window.setTimeout(build, 200);
  //       });
  //     }
  //   
  //     /* "Get started" horizontal marquee (source a-44/47). Two identical
  //        `.started_list-wrapper` copies slide left continuously; period = one copy's
  //        width + gap. Re-measured on resize. */
  //     const STARTED_SPEED = 102; // px/s
  //     function initStartedLoop() {
  //       if (reduce) return;
  //       $$('.started_loop-wrapper').forEach((wrap) => {
  //         const lists = Array.from(wrap.querySelectorAll('.started_list-wrapper'));
  //         if (lists.length < 2) return;
  //         let tween;
  //         const build = () => {
  //           tween?.kill();
  //           const period = lists[1].offsetLeft - lists[0].offsetLeft;
  //           if (!period) return;
  //           tween = gsap.fromTo(
  //             lists,
  //             { x: 0 },
  //             { x: -period, duration: period / STARTED_SPEED, ease: 'none', repeat: -1 },
  //           );
  //         };
  //         build();
  //         hoverSlow(wrap, () => [tween]);
  //         let t;
  //         window.addEventListener('resize', () => {
  //           window.clearTimeout(t);
  //           t = window.setTimeout(build, 200);
  //         });
  //       });
  //     }
  //   
  //     /* Team-detail "Get started" member marquee (source a-46/a-47). Two identical
  //        `.started_loop` copies translate continuously over a fixed 60s/period. Axis:
  //        >=768 vertical (Y up), <=767 horizontal (X left). Re-measured on resize. */
  //     const STARTED_MEMBER_DURATION = 60; // s
  //     function initStartedMemberLoop() {
  //       if (reduce) return;
  //       const wrap = document.querySelector('.started_loop-wrap');
  //       if (!wrap) return;
  //       const loops = Array.from(wrap.querySelectorAll('.started_loop'));
  //       if (loops.length < 2) return;
  //       let tween;
  //       const build = () => {
  //         tween?.kill();
  //         const horizontal = window.matchMedia('(max-width: 767px)').matches;
  //         const period = horizontal
  //           ? loops[1].offsetLeft - loops[0].offsetLeft
  //           : loops[1].offsetTop - loops[0].offsetTop;
  //         if (!period) {
  //           gsap.set(loops, { clearProps: 'transform' });
  //           return;
  //         }
  //         tween = gsap.fromTo(
  //           loops,
  //           { x: 0, y: 0 },
  //           horizontal
  //             ? { x: -period, y: 0, duration: STARTED_MEMBER_DURATION, ease: 'none', repeat: -1 }
  //             : { y: -period, x: 0, duration: STARTED_MEMBER_DURATION, ease: 'none', repeat: -1 },
  //         );
  //       };
  //       build();
  //       hoverSlow(wrap, () => [tween]);
  //       let t;
  //       window.addEventListener('resize', () => {
  //         window.clearTimeout(t);
  //         t = window.setTimeout(build, 200);
  //       });
  //     }
  //   
  //     /* "Grow" reveal (source IX2 a-78..a-81). Each grow class scales 0.7->1 + fades
  //        0->1 over 500ms; the class name encodes the stagger delay. Above-the-fold
  //        heroes fire on load (start top 88%, once). `.grow-3s` is inert in the source. */
  //     const GROW = {
  //       'grow-0-1s': { delay: 0, ease: 'power4.out' },
  //       'grow-2s': { delay: 0.2, ease: 'power4.out' },
  //       'grow-0-3s': { delay: 0.3, ease: 'sine.out' },
  //       'grow-0-4s': { delay: 0.4, ease: 'sine.out' },
  //     };
  //     function initGrowReveal() {
  //       Object.entries(GROW).forEach(([cls, { delay, ease }]) => {
  //         $$(`.${cls}`).forEach((el) => {
  //           if (reduce) {
  //             gsap.set(el, { clearProps: 'all', opacity: 1 });
  //             return;
  //           }
  //           gsap.fromTo(
  //             el,
  //             { scale: 0.7, opacity: 0 },
  //             {
  //               scale: 1,
  //               opacity: 1,
  //               duration: 0.5,
  //               ease,
  //               delay,
  //               scrollTrigger: { trigger: el, start: 'top 88%', once: true },
  //             },
  //           );
  //         });
  //       });
  //     }
  //   
  //     /* Home hero stagger (custom). The left column's [data-hero-item]s slide up +
  //        fade in one after another on load. Above the fold -> no ScrollTrigger. */
  //     function initHeroStagger() {
  //       const items = $$('[data-hero-stagger] [data-hero-item]');
  //       if (!items.length) return;
  //       if (reduce) {
  //         gsap.set(items, { clearProps: 'all', opacity: 1 });
  //         return;
  //       }
  //       gsap.fromTo(
  //         items,
  //         { opacity: 0, y: 32 },
  //         { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.12, delay: 0.1 },
  //       );
  //     }
  //   
  //     /* Count-up numbers (`[data-counter]`, e.g. "300+", "95%"). Parses leading
  //        number + prefix/suffix and tweens 0->value while its stats item fades in. */
  //     function initCounters() {
  //       $$('[data-counter]').forEach((el) => {
  //         const raw = (el.textContent || '').trim();
  //         const m = raw.match(/^(\D*?)(\d[\d.,]*)(\D*)$/);
  //         if (!m) return;
  //         const prefix = m[1];
  //         const suffix = m[3];
  //         const target = parseFloat(m[2].replace(/,/g, ''));
  //         if (reduce || Number.isNaN(target)) {
  //           el.textContent = raw;
  //           return;
  //         }
  //         const o = { v: 0 };
  //         el.textContent = `${prefix}0${suffix}`;
  //         gsap.to(o, {
  //           v: target,
  //           duration: 1.6,
  //           ease: 'power2.out',
  //           delay: 0.6,
  //           onUpdate: () => {
  //             el.textContent = `${prefix}${Math.round(o.v)}${suffix}`;
  //           },
  //           onComplete: () => {
  //             el.textContent = raw;
  //           },
  //         });
  //       });
  //     }
  //   
  //     /* Service detail "Services Timeline" (source IX2 a-53). On scroll-in it plays
  //        once: step badges pop in (stagger 0/100/200/300ms), texts rise+scale+fade in
  //        together (+300ms), connecting paths fade in (400/600/800/1000ms). From-state
  //        set on load (below the fold, no flash). */
  //     function initServicesTimeline() {
  //       const wrap = document.querySelector('.process_timeline-wrap');
  //       if (!wrap) return;
  //       const badges = $$('.step-badge', wrap);
  //       const texts = $$('.timeline-text', wrap);
  //       const paths = $$('.timeline_path', wrap);
  //       if (reduce) {
  //         gsap.set([...badges, ...texts, ...paths], { clearProps: 'all', opacity: 1 });
  //         return;
  //       }
  //       const ORDER = ['is-one', 'is-two', 'is-three', 'is-four'];
  //       const ordered = (els) =>
  //         ORDER.map((c) => els.find((e) => e.classList.contains(c))).filter(Boolean);
  //       const oBadges = ordered(badges);
  //       const oPaths = ordered(paths);
  //   
  //       gsap.set(badges, { scale: 0 });
  //       gsap.set(texts, { yPercent: 100, scale: 0, opacity: 0 });
  //       gsap.set(paths, { opacity: 0 });
  //   
  //       const tl = gsap.timeline({ paused: true });
  //       oBadges.forEach((b, i) => tl.to(b, { scale: 1, duration: 0.4, ease: 'power3.inOut' }, i * 0.1));
  //       tl.to(texts, { yPercent: 0, scale: 1, opacity: 1, duration: 0.7, ease: 'power3.inOut' }, 0.3);
  //       oPaths.forEach((p, i) =>
  //         tl.to(p, { opacity: 1, duration: 0.5, ease: 'power3.inOut' }, 0.4 + i * 0.2),
  //       );
  //   
  //       ScrollTrigger.create({ trigger: wrap, start: 'top 80%', once: true, onEnter: () => tl.play() });
  //     }
  //   
  //     function init() {
  //       initHeroLoad();
  //       initViewReveal();
  //       initParallax();
  //       initVerticalLoop();
  //       initMarqueeFade();
  //       initGrowReveal();
  //       initStartedLoop();
  //       initStartedMemberLoop();
  //       initLikeLoop();
  //       initServicesScroll();
  //       initServicesTimeline();
  //       initAboutHeroImages();
  //       initTestimonials();
  //       initHeroStagger();
  //       initCounters();
  //       ScrollTrigger.refresh();
  //     }
  //   
  //     if (document.readyState === 'loading') {
  //       document.addEventListener('DOMContentLoaded', init);
  //     } else {
  //       init();
  //     }
  //   })();
  //   
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false,true);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="contacto-secao-92" ref={raiz}>
      <section className="section_contact"> <div className="contact_wrapper"> <div className="container-large"> <div className="contact_layout"> <div data-hero-stagger=""> <div className="contact_heading"> <h1 className="h3" data-hero-item="">{s.titulo}</h1> <div className="spacer-medium"></div> <div className="text-color-on-primary" data-hero-item="">
      Have a question or want to see how it works? We're here to help.
      </div> </div> <div className="spacer-xhuge"></div> <div className="contact_data-list"> <div className="contact_data" data-hero-item=""> <div className="contact_icon-wrapper bg-default"> <img src={s.imagem} loading="lazy" alt="" className="contact_icon" /> </div> <div>hello@hirekit.com</div> </div><div className="contact_data" data-hero-item=""> <div className="contact_icon-wrapper bg-default"> <img src={s.imagem2} loading="lazy" alt="" className="contact_icon" /> </div> <div>+1 (555) 123-4567</div> </div><div className="contact_data" data-hero-item=""> <div className="contact_icon-wrapper bg-default"> <img src={s.imagem3} loading="lazy" alt="" className="contact_icon" /> </div> <div>456 Example Ave, New York NY 10001 US</div> </div> </div> </div> <div> <div className="contact_form w-form" data-reveal="view"> <form id="email-form" name="email-form" data-name="Email Form" onsubmit="event.preventDefault(); this.style.display='none'; this.parentElement.querySelector('.w-form-done').style.display='block';"> <div className="form_grid"> <div> <label htmlFor="First-Name" className="form_label">First Name</label> <div className="spacer-medium"></div> <input className="form_input w-input" maxLength="256" name="First-Name" placeholder="First Name" type="text" id="First-Name" /> </div> <div> <label htmlFor="Last-Name" className="form_label">Last Name</label> <div className="spacer-medium"></div> <input className="form_input w-input" maxLength="256" name="Last-Name" placeholder="Last Name" type="text" id="Last-Name" required="" /> </div> <div> <label htmlFor="Email" className="form_label">Email Address</label> <div className="spacer-medium"></div> <input className="form_input w-input" maxLength="256" name="Email" placeholder="Email Address" type="email" id="Email" required="" /> </div> <div> <label htmlFor="Phone-Number" className="form_label">Phone Number</label> <div className="spacer-medium"></div> <input className="form_input w-input" maxLength="256" name="Phone-Number" placeholder="Phone Number" type="tel" id="Phone-Number" inputmode="tel" autoComplete="tel" pattern="[0-9+()#* -]*" title="Only phone characters: digits, + - ( ) # * and spaces" required="" /> </div> <div id="w-node-_6489595a-e5ae-035a-d4a4-1d34d5ad513e-25779641"> <label htmlFor="Text-Field" className="form_label">Message</label> <div className="spacer-medium"></div> <textarea id="Text-Field" name="Text-Field" maxLength="5000" placeholder="Enter your message..." className="form_input is-text-area w-input"></textarea> </div> <div id="w-node-_6489595a-e5ae-035a-d4a4-1d34d5ad5143-25779641" className="button-wrap"> <button type="submit" className="button_component is-form" onClick={s.onClick}> <div>Send a message</div> </button> </div> </div> </form> <div className="w-form-done" style={{display: 'none'}}> <div>Thank you! Your submission has been received!</div> </div> <div className="w-form-fail" style={{display: 'none'}}> <div>Oops! Something went wrong while submitting the form.</div> </div> </div> </div> </div> </div> </div> </section>
    </section>
  );
}