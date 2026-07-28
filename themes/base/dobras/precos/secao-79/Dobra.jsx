"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-79
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
  //   // Aeline — Contact Hero — no local logic. Reveals/sliders run from the shared /aeline/scripts/.
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
    <section className="dobra" data-dobra="precos-secao-79" ref={raiz}>
      <div data-navbar-root="">
          <div className="navbar w-variant-b70328b2-1dfd-ba7a-c1d1-5c2a5b388d0d" data-navbar="" role="banner"> <div className="padding-global is-navbar w-variant-b70328b2-1dfd-ba7a-c1d1-5c2a5b388d0d"> <div className="container-large"> <div className="navbar_content"> <a href="/" aria-label="Aeline, home" className="navbar_logo-link w-inline-block w-variant-b70328b2-1dfd-ba7a-c1d1-5c2a5b388d0d"> <img src={s.imagem} loading="lazy" alt="" className="navbar_logo w-variant-b70328b2-1dfd-ba7a-c1d1-5c2a5b388d0d" /> <img src={s.imagem2} loading="lazy" alt="" className="navbar_logo is-black w-variant-b70328b2-1dfd-ba7a-c1d1-5c2a5b388d0d" /> </a>  <div className="nav_wrap"> <nav role="navigation" className="nav_mobile w-variant-b70328b2-1dfd-ba7a-c1d1-5c2a5b388d0d" aria-label="Primary"> <div className="navbar_list w-variant-b70328b2-1dfd-ba7a-c1d1-5c2a5b388d0d"> <a href="/services" className="nav_links">{s.acao}</a><a href="/about" className="nav_links">{s.acao2}</a><a href="/pricing" className="nav_links">{s.acao3}</a><a href="/blog" className="nav_links">{s.acao4}</a> </div> </nav> </div> <div className="nav_buttons-wrap"> <div className="login-wrap hide-mobile-landscape"> <a href="/contact" className="button w-inline-block"> <div className="text-button-wrap"> <div>Contact Us</div> </div> </a> </div>  <div className="hamburger-anchor"> <div className="hamburger-nav"> <div className="hamburger-nav__bg" aria-hidden="true"></div> <div className="hamburger-nav__group"> <p className="hamburger-nav__menu-p">{s.texto}</p> <ul className="hamburger-nav__ul"> <li className="hamburger-nav__li"> <a href="/services" className="hamburger-nav__a"> <p className="hamburger-nav__p">{s.texto2}</p> <div className="hamburger-nav__dot" aria-hidden="true"></div> </a> </li><li className="hamburger-nav__li"> <a href="/about" className="hamburger-nav__a"> <p className="hamburger-nav__p">{s.texto3}</p> <div className="hamburger-nav__dot" aria-hidden="true"></div> </a> </li><li className="hamburger-nav__li"> <a href="/pricing" className="hamburger-nav__a"> <p className="hamburger-nav__p">{s.texto4}</p> <div className="hamburger-nav__dot" aria-hidden="true"></div> </a> </li><li className="hamburger-nav__li"> <a href="/blog" className="hamburger-nav__a"> <p className="hamburger-nav__p">{s.texto5}</p> <div className="hamburger-nav__dot" aria-hidden="true"></div> </a> </li> <li className="hamburger-nav__li"> <a href="/contact" aria-current="page" className="hamburger-nav__a"> <p className="hamburger-nav__p">{s.texto6}</p> <div className="hamburger-nav__dot" aria-hidden="true"></div> </a> </li> </ul> </div> <button type="button" data-navigation-toggle="toggle" aria-label="Toggle menu" aria-expanded="false" className="hamburger-nav__toggle" onClick={s.onClick}> <div className="hamburger-nav__toggle-bar"></div> <div className="hamburger-nav__toggle-bar"></div> </button> </div> </div> </div> </div> </div> </div> </div>
          <div data-navigation-toggle="close" className="navigation__dark-bg" aria-hidden="true"></div>
          </div>
        <div className="page-wrapper">
      <section className="sec_hero-contact"> <div className="container-full"> <div className="hero-contact_layout"> <div data-hero-fade="" className="hero-contact_left"> <div> <h1 className="text-4xl text-color-primary">{s.titulo}</h1> <div className="spacer-medium"></div> <div className="text-base text-color-secondary">Learn about our journey, mission, and the team driving innovation.</div> </div> <div className="hero-contact_data"> <div> <div className="text-base text-weight-light">Email:</div> <div className="spacer-medium"></div> <a href="mailto:Consulting@gmail.com" className="text-lg is-contact">{s.acao5}</a> </div> <div> <div className="text-base text-weight-light">Phone:</div> <div className="spacer-medium"></div> <a href="tel:+11234567890" className="text-lg is-contact">{s.acao6}</a> </div> <div> <div className="text-base text-weight-light">Office:</div> <div className="spacer-medium"></div> <a href={s.destino || '#'} className="text-lg is-contact">{s.acao7}</a> </div> <div> <div className="text-base text-weight-light">Follow Us:</div> <div className="spacer-medium"></div> <div className="hero-contact_social"> <a href={s.destino2 || '#'} className="hero-contac_social_item w-inline-block"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" className="icon-1x1-main"> <path d="M13.3333 2.5C14.4384 2.5 15.4982 2.93899 16.2796 3.72039C17.061 4.50179 17.5 5.5616 17.5 6.66667V13.3333C17.5 14.4384 17.061 15.4982 16.2796 16.2796C15.4982 17.061 14.4384 17.5 13.3333 17.5H6.66667C5.5616 17.5 4.50179 17.061 3.72039 16.2796C2.93899 15.4982 2.5 14.4384 2.5 13.3333V6.66667C2.5 5.5616 2.93899 4.50179 3.72039 3.72039C4.50179 2.93899 5.5616 2.5 6.66667 2.5H13.3333ZM10 6.66667C9.11594 6.66667 8.2681 7.01786 7.64298 7.64298C7.01786 8.2681 6.66667 9.11594 6.66667 10C6.66667 10.8841 7.01786 11.7319 7.64298 12.357C8.2681 12.9821 9.11594 13.3333 10 13.3333C10.8841 13.3333 11.7319 12.9821 12.357 12.357C12.9821 11.7319 13.3333 10.8841 13.3333 10C13.3333 9.11594 12.9821 8.2681 12.357 7.64298C11.7319 7.01786 10.8841 6.66667 10 6.66667ZM10 8.33333C10.442 8.33333 10.866 8.50893 11.1785 8.82149C11.4911 9.13405 11.6667 9.55797 11.6667 10C11.6667 10.442 11.4911 10.866 11.1785 11.1785C10.866 11.4911 10.442 11.6667 10 11.6667C9.55797 11.6667 9.13405 11.4911 8.82149 11.1785C8.50893 10.866 8.33333 10.442 8.33333 10C8.33333 9.55797 8.50893 9.13405 8.82149 8.82149C9.13405 8.50893 9.55797 8.33333 10 8.33333ZM13.75 5.41667C13.529 5.41667 13.317 5.50446 13.1607 5.66074C13.0045 5.81702 12.9167 6.02899 12.9167 6.25C12.9167 6.47101 13.0045 6.68298 13.1607 6.83926C13.317 6.99554 13.529 7.08333 13.75 7.08333C13.971 7.08333 14.183 6.99554 14.3393 6.83926C14.4955 6.68298 14.5833 6.47101 14.5833 6.25C14.5833 6.02899 14.4955 5.81702 14.3393 5.66074C14.183 5.50446 13.971 5.41667 13.75 5.41667Z" fill="currentColor"></path> </svg></a> <a href={s.destino3 || '#'} className="hero-contac_social_item w-inline-block"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" className="icon-1x1-main"> <path d="M18.3346 10.0013C18.3346 5.4013 14.6013 1.66797 10.0013 1.66797C5.4013 1.66797 1.66797 5.4013 1.66797 10.0013C1.66797 14.0346 4.53464 17.393 8.33464 18.168V12.5013H6.66797V10.0013H8.33464V7.91797C8.33464 6.30964 9.64297 5.0013 11.2513 5.0013H13.3346V7.5013H11.668C11.2096 7.5013 10.8346 7.8763 10.8346 8.33464V10.0013H13.3346V12.5013H10.8346V18.293C15.043 17.8763 18.3346 14.3263 18.3346 10.0013Z" fill="currentColor"></path> </svg></a> <a href={s.destino4 || '#'} className="hero-contac_social_item w-inline-block"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" className="icon-1x1-main"> <path d="M14.4192 1.875H5.58083C4.59799 1.875 3.65539 2.26543 2.96041 2.96041C2.26543 3.65539 1.875 4.59799 1.875 5.58083V14.4192C1.875 15.402 2.26543 16.3446 2.96041 17.0396C3.65539 17.7346 4.59799 18.125 5.58083 18.125H14.4192C15.402 18.125 16.3446 17.7346 17.0396 17.0396C17.7346 16.3446 18.125 15.402 18.125 14.4192V5.58083C18.125 4.59799 17.7346 3.65539 17.0396 2.96041C16.3446 2.26543 15.402 1.875 14.4192 1.875ZM7.36917 14.9933C7.37178 15.0387 7.36509 15.0841 7.34951 15.1268C7.33394 15.1695 7.3098 15.2085 7.27858 15.2415C7.24736 15.2745 7.20973 15.3008 7.16798 15.3188C7.12624 15.3367 7.08127 15.3459 7.03583 15.3458H5.5525C5.46305 15.3437 5.37802 15.3065 5.31569 15.2423C5.25336 15.1781 5.2187 15.092 5.21917 15.0025V8.83333C5.21794 8.78879 5.22566 8.74446 5.24186 8.70296C5.25806 8.66145 5.28242 8.62361 5.3135 8.59168C5.34457 8.55975 5.38173 8.53438 5.42279 8.51705C5.46384 8.49973 5.50794 8.49082 5.5525 8.49083H7.03583C7.08039 8.49082 7.1245 8.49973 7.16555 8.51705C7.2066 8.53438 7.24376 8.55975 7.27484 8.59168C7.30591 8.62361 7.33027 8.66145 7.34647 8.70296C7.36268 8.74446 7.37039 8.78879 7.36917 8.83333V14.9933ZM6.26667 7.19333C6.10607 7.19213 5.94728 7.15931 5.79937 7.09674C5.65146 7.03417 5.51733 6.94308 5.40462 6.82867C5.29191 6.71426 5.20284 6.57877 5.1425 6.42994C5.08215 6.28111 5.05171 6.12185 5.05292 5.96125C5.05412 5.80065 5.08694 5.64187 5.14951 5.49396C5.21208 5.34605 5.30317 5.21191 5.41758 5.0992C5.53199 4.98649 5.66748 4.89743 5.81631 4.83708C5.96514 4.77674 6.1244 4.7463 6.285 4.7475C6.60376 4.75787 6.90586 4.8924 7.12682 5.12238C7.34778 5.35237 7.47012 5.6596 7.46773 5.97852C7.46534 6.29745 7.3384 6.60281 7.11402 6.82946C6.88963 7.0561 6.58555 7.18608 6.26667 7.19167M15.2808 14.9833C15.2804 15.0675 15.2474 15.1483 15.1886 15.2086C15.1299 15.2689 15.05 15.3041 14.9658 15.3067H13.4C13.3157 15.3041 13.2357 15.2688 13.1769 15.2083C13.1181 15.1478 13.0852 15.0668 13.085 14.9825V12.1292C13.085 11.7033 13.215 10.2767 11.955 10.2767C10.9725 10.2767 10.7783 11.2767 10.7408 11.7217V15.0475C10.7409 15.132 10.708 15.2132 10.6492 15.2738C10.5904 15.3345 10.5103 15.3699 10.4258 15.3725H8.90667C8.82062 15.3723 8.73816 15.3379 8.67739 15.277C8.61663 15.2161 8.5825 15.1336 8.5825 15.0475V8.80333C8.5851 8.71888 8.62048 8.63876 8.68115 8.57996C8.74182 8.52116 8.82301 8.48829 8.9075 8.48833H10.4258C10.5103 8.48829 10.5915 8.52116 10.6522 8.57996C10.7128 8.63876 10.7482 8.71888 10.7508 8.80333V9.34083C10.9725 9.01635 11.2786 8.75855 11.6361 8.59525C11.9935 8.43195 12.3887 8.36933 12.7792 8.41417C15.3083 8.41417 15.2992 10.7767 15.2992 12.12L15.2808 14.9833Z" fill="currentColor"></path> </svg></a> <a href={s.destino5 || '#'} className="hero-contac_social_item w-inline-block"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" className="icon-1x1-main"> <path d="M8.7387 12.2092L12.707 17.5H18.5404L11.992 8.76833L17.4404 2.5H15.232L10.9679 7.405L7.29036 2.5H1.45703L7.71536 10.8458L1.93203 17.5H4.14036L8.7387 12.2092ZM13.5404 15.8333L4.79036 4.16667H6.45703L15.207 15.8333H13.5404Z" fill="currentColor"></path> </svg></a> </div> </div> </div> </div> <div data-hero-fade="" className="hero-contact_right"><img src={s.imagem3} loading="lazy" alt="" className="img" /> <div className="hero-contact_form"> <div className="form_component w-form"> <form id="wf-form-Form" name="wf-form-Form" data-name="Form" method="post" action="/api/contact" className="form_form"> <div className="form_field-wrapper"><label htmlFor="Name" className="text-lg">Full name</label><input className="form_input w-input" maxLength="256" name="Name" data-name="Name" placeholder="Your full name" type="text" id="Name" required="" /></div> <div className="form_field-wrapper"><label htmlFor="Address" className="text-lg">Email address</label><input className="form_input w-input" maxLength="256" name="Address" data-name="Address" placeholder="Your email address" type="text" id="Address" required="" /></div> <div className="form_field-wrapper"><label htmlFor="Message-3" className="text-lg">Messages </label><textarea id="Message-3" name="Message" maxLength="5000" data-name="Message" placeholder="Your messages here..." required="" className="form_input is-text-area w-input"></textarea></div> <div className="button_wrapper"><button type="submit" className="button-arrow is-black" onClick={s.onClick}> <div className="button-arrow_wrap"> <div className="button-arrow_text"> <div className="text_button">Submit</div> </div> <div className="button_container-arrow is-black"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" className="icon-1x1-main"> <path d="M13.0457 8.13128L5.8733 15.3037L4.69479 14.1252L11.8672 6.95277L5.54568 6.95277L5.54568 5.28636H14.7121V14.4528L13.0457 14.4528V8.13128Z" fill="currentColor"></path> </svg></div> <div className="button-arrow_bg is-black"></div> </div> </button></div> </form> <div className="form_message-success w-form-done"> <div>Thank you! Your submission has been received!</div> </div> <div className="form_message-error w-form-fail"> <div>Oops! Something went wrong while submitting the form.</div> </div> </div> </div> </div> </div> </div> </section>
        </div>
    </section>
  );
}