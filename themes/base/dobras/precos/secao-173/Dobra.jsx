"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-173
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
  //   // Aeline — Team Member Hero — no local logic. Reveals/sliders run from the shared /aeline/scripts/.
  //   // Stub kept for the 4-file convention.
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
  //   // Aeline — scaling-hamburger navbar toggle (ported from src/scripts/navbar.ts).
  //   // Menu state lives on <html data-navigation-status>. Pure CSS transitions keyed off the
  //   // attribute; sticky hide-on-scroll-down / show-on-scroll-up on [data-navbar]. No GSAP.
  //   (function () {
  //     function initNavbar() {
  //       var html = document.documentElement;
  //       var toggleEls = document.querySelectorAll('[data-navigation-toggle="toggle"]');
  //       var closeEls = document.querySelectorAll('[data-navigation-toggle="close"]');
  //       var menuLinks = document.querySelectorAll('.hamburger-nav__a');
  //   
  //       var setStatus = function (active) {
  //         html.setAttribute('data-navigation-status', active ? 'active' : 'not-active');
  //         html.style.overflow = active ? 'hidden' : '';
  //         toggleEls.forEach(function (el) { el.setAttribute('aria-expanded', String(active)); });
  //       };
  //       setStatus(false);
  //   
  //       toggleEls.forEach(function (btn) {
  //         btn.addEventListener('click', function (e) {
  //           e.stopPropagation();
  //           setStatus(html.getAttribute('data-navigation-status') !== 'active');
  //         });
  //       });
  //       closeEls.forEach(function (el) { el.addEventListener('click', function () { setStatus(false); }); });
  //       menuLinks.forEach(function (link) { link.addEventListener('click', function () { setStatus(false); }); });
  //       document.addEventListener('keydown', function (e) {
  //         if (e.key === 'Escape' && html.getAttribute('data-navigation-status') === 'active') {
  //           setStatus(false);
  //         }
  //       });
  //   
  //       // Sticky hide-on-scroll-down / show-on-scroll-up.
  //       var navbar = document.querySelector('[data-navbar]');
  //       if (navbar) {
  //         var lastY = window.scrollY;
  //         window.addEventListener(
  //           'scroll',
  //           function () {
  //             var y = window.scrollY;
  //             if (y > lastY && y > 200) navbar.classList.add('is-hidden');
  //             else navbar.classList.remove('is-hidden');
  //             lastY = y;
  //           },
  //           { passive: true }
  //         );
  //       }
  //     }
  //   
  //     if (document.readyState !== 'loading') initNavbar();
  //     else document.addEventListener('DOMContentLoaded', initNavbar);
  //   })();
  //   
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false,true);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="precos-secao-173" ref={raiz}>
      <div data-navbar-root="">
          <div className="navbar w-variant-b70328b2-1dfd-ba7a-c1d1-5c2a5b388d0d" data-navbar="" role="banner"> <div className="padding-global is-navbar w-variant-b70328b2-1dfd-ba7a-c1d1-5c2a5b388d0d"> <div className="container-large"> <div className="navbar_content"> <a href="/" aria-label="Aeline, home" className="navbar_logo-link w-inline-block w-variant-b70328b2-1dfd-ba7a-c1d1-5c2a5b388d0d"> <img src={s.imagem} loading="lazy" alt="" className="navbar_logo w-variant-b70328b2-1dfd-ba7a-c1d1-5c2a5b388d0d" /> <img src={s.imagem2} loading="lazy" alt="" className="navbar_logo is-black w-variant-b70328b2-1dfd-ba7a-c1d1-5c2a5b388d0d" /> </a>  <div className="nav_wrap"> <nav role="navigation" className="nav_mobile w-variant-b70328b2-1dfd-ba7a-c1d1-5c2a5b388d0d" aria-label="Primary"> <div className="navbar_list w-variant-b70328b2-1dfd-ba7a-c1d1-5c2a5b388d0d"> <a href="/services" className="nav_links">{s.acao}</a><a href="/about" className="nav_links">{s.acao2}</a><a href="/pricing" className="nav_links">{s.acao3}</a><a href="/blog" className="nav_links">{s.acao4}</a> </div> </nav> </div> <div className="nav_buttons-wrap"> <div className="login-wrap hide-mobile-landscape"> <a href="/contact" className="button w-inline-block"> <div className="text-button-wrap"> <div>Contact Us</div> </div> </a> </div>  <div className="hamburger-anchor"> <div className="hamburger-nav"> <div className="hamburger-nav__bg" aria-hidden="true"></div> <div className="hamburger-nav__group"> <p className="hamburger-nav__menu-p">{s.texto}</p> <ul className="hamburger-nav__ul"> <li className="hamburger-nav__li"> <a href="/services" className="hamburger-nav__a"> <p className="hamburger-nav__p">{s.texto2}</p> <div className="hamburger-nav__dot" aria-hidden="true"></div> </a> </li><li className="hamburger-nav__li"> <a href="/about" className="hamburger-nav__a"> <p className="hamburger-nav__p">{s.texto3}</p> <div className="hamburger-nav__dot" aria-hidden="true"></div> </a> </li><li className="hamburger-nav__li"> <a href="/pricing" className="hamburger-nav__a"> <p className="hamburger-nav__p">{s.texto4}</p> <div className="hamburger-nav__dot" aria-hidden="true"></div> </a> </li><li className="hamburger-nav__li"> <a href="/blog" className="hamburger-nav__a"> <p className="hamburger-nav__p">{s.texto5}</p> <div className="hamburger-nav__dot" aria-hidden="true"></div> </a> </li> <li className="hamburger-nav__li"> <a href="/contact" className="hamburger-nav__a"> <p className="hamburger-nav__p">{s.texto6}</p> <div className="hamburger-nav__dot" aria-hidden="true"></div> </a> </li> </ul> </div> <button type="button" data-navigation-toggle="toggle" aria-label="Toggle menu" aria-expanded="false" className="hamburger-nav__toggle" onClick={s.onClick}> <div className="hamburger-nav__toggle-bar"></div> <div className="hamburger-nav__toggle-bar"></div> </button> </div> </div> </div> </div> </div> </div> </div>
          <div data-navigation-toggle="close" className="navigation__dark-bg" aria-hidden="true"></div>
          </div>
        <div className="page-wrapper">
      <section className="sec_hero-team"> <div className="container-large height-100"> <div className="hero-team_layout"> <div className="hero-team_img"><img src={s.imagem3} loading="lazy" alt="Cheyenne George" className="img" /></div> <div data-stagger="h1, .text-base.text-color-secondary:not(.text-style-nowrap), .hero-team_social_item, .button_wrapper" className="hero-team_content"> <div> <h1 className="text-4xl text-color-primary">{s.titulo}</h1> <div className="spacer-medium"></div> <div className="text-base text-color-secondary">Cheyenne is the VP of Operations of the firm. With a rich history of leadership in the Market, She leads our efforts with a goal: to make scaling smooth, predictable, and fully centered around smart data insights.</div> </div> <div> <div className="hero-team_social_wrap"> <div className="hero-team_social_item"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-medium"> <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="currentColor"></path> </svg> <div className="text-base text-color-secondary text-style-nowrap">Cheyenne Geor</div> </div> <div className="hero-team_social_item"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-medium"> <path d="M10.488 14.651L15.25 21H22.25L14.392 10.522L20.93 3H18.28L13.163 8.886L8.75 3H1.75L9.26 13.015L2.32 21H4.97L10.488 14.651ZM16.25 19L5.75 5H7.75L18.25 19H16.25Z" fill="currentColor"></path> </svg> <div className="text-base text-color-secondary text-style-nowrap">@cheyennegeor</div> </div> <div className="hero-team_social_item"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-medium"> <path d="M16 3C17.3261 3 18.5979 3.52678 19.5355 4.46447C20.4732 5.40215 21 6.67392 21 8V16C21 17.3261 20.4732 18.5979 19.5355 19.5355C18.5979 20.4732 17.3261 21 16 21H8C6.67392 21 5.40215 20.4732 4.46447 19.5355C3.52678 18.5979 3 17.3261 3 16V8C3 6.67392 3.52678 5.40215 4.46447 4.46447C5.40215 3.52678 6.67392 3 8 3H16ZM12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8ZM12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10ZM16.5 6.5C16.2348 6.5 15.9804 6.60536 15.7929 6.79289C15.6054 6.98043 15.5 7.23478 15.5 7.5C15.5 7.76522 15.6054 8.01957 15.7929 8.20711C15.9804 8.39464 16.2348 8.5 16.5 8.5C16.7652 8.5 17.0196 8.39464 17.2071 8.20711C17.3946 8.01957 17.5 7.76522 17.5 7.5C17.5 7.23478 17.3946 6.98043 17.2071 6.79289C17.0196 6.60536 16.7652 6.5 16.5 6.5Z" fill="currentColor"></path> </svg> <div className="text-base text-color-secondary text-style-nowrap">@cheyennegeor</div> </div> </div> <div className="spacer-huge"></div> <div className="button_wrapper"> <a href="/contact" className="button-arrow is-black w-inline-block"> <div className="button-arrow_wrap"> <div className="button-arrow_text"> <div className="text_button">Get Started</div> </div> <div className="button_container-arrow is-black"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" className="icon-1x1-main"> <path d="M13.0457 8.13128L5.8733 15.3037L4.69479 14.1252L11.8672 6.95277L5.54568 6.95277L5.54568 5.28636H14.7121V14.4528L13.0457 14.4528V8.13128Z" fill="currentColor"></path> </svg></div> <div className="button-arrow_bg is-black"></div> </div> </a> </div> </div> </div> </div> </div> </section>
        </div>
    </section>
  );
}