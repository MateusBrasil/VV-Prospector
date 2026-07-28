"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-129
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
  //   // hirely-services-hero — no local logic. The LOAD entrance (SplitText h1 +
  //   // bounce-enter ladder: title chars, bubble images, SVG width-grow, description,
  //   // button) is driven by /hirely/scripts/hero-enter.js; the `.scroll-animation`
  //   // reveals on the banner by /hirely/scripts/scroll-reveal.js; the navbar by
  //   // navbar.js + navbar-scroll.js; the `.loop` logo marquee is pure CSS (in
  //   // /hirely/styles.css). Stub kept for the 4-file convention.
  //   
  //   /* Hirely — scroll-linked navbar tone. Port of navbar-scroll.ts to a plain global
  //      (no `export`, self-init — Rule 1). Expects window.gsap + window.ScrollTrigger.
  //   
  //      STANDALONE-CARD DECISION (mirrors firmo-logos): in the source the navbar pill
  //      (`.navbar_content`) scrubs its fill white-12% -> black-40% as the hero
  //      (`.main-wrapper > :first-child`) scrolls away, so white links stay legible over
  //      light sections. In a standalone Taller card there is no long page to scroll, so
  //      a scrub would have no runway and could strand the pill mid-transition. So:
  //        • If a real hero trigger exists AND the card actually scrolls (page taller
  //          than viewport) -> run the real scrub (hero ports behave like the source).
  //        • Otherwise -> pin the pill to its settled INITIAL light state (white-12%),
  //          which is exactly the scroll-0 state — same as the live preview's first paint
  //          and a clean thumbnail. Never leaves it half-scrubbed.
  //      Only the fill colour is touched; backdrop-blur + white links are untouched. */
  //   (function () {
  //     function init() {
  //       if (typeof gsap === 'undefined') return; // fail-safe: CSS default fill stays
  //       if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);
  //   
  //       var nav = document.querySelector('.navbar_content');
  //       if (!nav) return;
  //   
  //       var wrapper = document.querySelector('.main-wrapper');
  //       var hero = wrapper ? wrapper.firstElementChild : null;
  //       var scrolls = document.documentElement.scrollHeight > window.innerHeight + 50;
  //   
  //       // Standalone card with no real scroll runway -> settle at the initial light state.
  //       if (!hero || typeof ScrollTrigger === 'undefined' || !scrolls) {
  //         gsap.set(nav, { backgroundColor: 'rgba(255, 255, 255, 0.12)' });
  //         return;
  //       }
  //   
  //       gsap.fromTo(
  //         nav,
  //         { backgroundColor: 'rgba(255, 255, 255, 0.12)' },
  //         {
  //           backgroundColor: 'rgba(0, 0, 0, 0.4)',
  //           ease: 'none',
  //           scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
  //         }
  //       );
  //     }
  //   
  //     if (document.readyState !== 'loading') init();
  //     else document.addEventListener('DOMContentLoaded', init);
  //   })();
  //   
  //   /* Hirely — scaling-hamburger navbar toggle. Port of navbar.ts to a plain global
  //      (no `export`, self-init — Rule 1). No GSAP — pure CSS transitions keyed off
  //      `<html data-navigation-status>` ("active"/"not-active"). Toggle / close /
  //      menu-link-click / Escape all flip the attribute; scroll is locked while open;
  //      the bar hides on scroll-down / shows on scroll-up. */
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
  //         if (e.key === 'Escape' && html.getAttribute('data-navigation-status') === 'active') setStatus(false);
  //       });
  //   
  //       // Sticky hide-on-scroll-down / show-on-scroll-up.
  //       var navbar = document.querySelector('[data-navbar]');
  //       if (navbar) {
  //         var lastY = window.scrollY;
  //         window.addEventListener('scroll', function () {
  //           var y = window.scrollY;
  //           if (y > lastY && y > 200) navbar.classList.add('is-hidden');
  //           else navbar.classList.remove('is-hidden');
  //           lastY = y;
  //         }, { passive: true });
  //       }
  //     }
  //   
  //     if (document.readyState !== 'loading') initNavbar();
  //     else document.addEventListener('DOMContentLoaded', initNavbar);
  //   })();
  //   
  //   /* Hirely — shared scroll-reveal engine. Port of scroll-reveal.ts to a plain
  //      global (no `export`, self-init — Rule 1). Expects window.gsap + window.ScrollTrigger
  //      from CDN. The `.scroll-animation` grow-in workhorse (opacity 0 + scale .85 -> 1,
  //      .8s power3.out, start top 88%, once) + the Solutions feature assets pop, CTA
  //      width-grow images, and Services feature-card per-card reveal. Start-states set
  //      in JS (never inline) so a missing/failed script leaves content visible.
  //      Owns clearing the `html.has-js` first-paint guard. Honors prefers-reduced-motion. */
  //   (function () {
  //     if (typeof gsap === 'undefined') return; // fail-safe: no JS -> content stays visible
  //     if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);
  //   
  //     var REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  //   
  //     // Clear the inline first-paint guard so nothing is ever stuck at opacity:0.
  //     function clearGuard() {
  //       document.documentElement.classList.remove('has-js');
  //     }
  //   
  //     function initReveals() {
  //       var els = document.querySelectorAll('.scroll-animation');
  //   
  //       if (REDUCED) {
  //         gsap.set(els, { clearProps: 'opacity,transform' });
  //         clearGuard();
  //         return;
  //       }
  //   
  //       els.forEach(function (el) {
  //         gsap.set(el, { opacity: 0, scale: 0.85, transformOrigin: 'center center' });
  //       });
  //   
  //       clearGuard();
  //   
  //       var growIn = function (el) {
  //         gsap.to(el, {
  //           opacity: 1,
  //           scale: 1,
  //           duration: 0.8,
  //           ease: 'power3.out',
  //           onComplete: function () { gsap.set(el, { clearProps: 'transform' }); },
  //         });
  //       };
  //   
  //       // Max reachable scroll position for this page. In a standalone card the page
  //       // is often barely taller than the viewport, so an element near the bottom can
  //       // NEVER cross its `top 88%` start line by scrolling — it would stay stuck at
  //       // opacity:0. Reveal immediately any element that is already in view OR that
  //       // would become visible at maximum scroll; ScrollTrigger handles the rest.
  //       var maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  //   
  //       els.forEach(function (el) {
  //         var topAtMaxScroll = el.getBoundingClientRect().top - maxScroll;
  //         if (topAtMaxScroll < window.innerHeight * 0.95) {
  //           growIn(el);
  //           return;
  //         }
  //         ScrollTrigger.create({
  //           trigger: el,
  //           start: 'top 88%',
  //           once: true,
  //           onEnter: function () { growIn(el); },
  //         });
  //       });
  //   
  //       if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
  //     }
  //   
  //     // Solutions feature svg assets — `.thumb-img` / `.picture-img` scale-pop 0->1,
  //     // .5s inOutCubic, when `.features_description` enters view.
  //     function initFeatureAssets() {
  //       document.querySelectorAll('.features_description').forEach(function (block) {
  //         var assets = block.querySelectorAll('.thumb-img, .picture-img');
  //         if (!assets.length) return;
  //   
  //         if (REDUCED) { gsap.set(assets, { clearProps: 'transform' }); return; }
  //   
  //         gsap.set(assets, { scale: 0, transformOrigin: 'center center' });
  //         ScrollTrigger.create({
  //           trigger: block,
  //           start: 'top 88%',
  //           once: true,
  //           onEnter: function () { gsap.to(assets, { scale: 1, duration: 0.5, ease: 'power2.inOut' }); },
  //         });
  //       });
  //     }
  //   
  //     // CTA heading images — `.cta_img` SVGs grow width 0->natural, .7s inOutCubic.
  //     function initCtaImages() {
  //       document.querySelectorAll('.cta_header').forEach(function (block) {
  //         var imgs = block.querySelectorAll('.cta_img');
  //         if (!imgs.length) return;
  //   
  //         if (REDUCED) { gsap.set(imgs, { clearProps: 'width' }); return; }
  //   
  //         imgs.forEach(function (img) {
  //           var natural = getComputedStyle(img).width;
  //           gsap.set(img, { width: 0 });
  //           ScrollTrigger.create({
  //             trigger: block,
  //             start: 'top 88%',
  //             once: true,
  //             onEnter: function () {
  //               gsap.to(img, {
  //                 width: natural,
  //                 duration: 0.7,
  //                 ease: 'power2.inOut',
  //                 onComplete: function () { gsap.set(img, { clearProps: 'width' }); },
  //               });
  //             },
  //           });
  //         });
  //       });
  //     }
  //   
  //     // Services feature cards — per-card reveal: `.feature_content` scale 0->1 +
  //     // `.feature_img` opacity 0->1 from yPercent 100, both .4s power3.out.
  //     function initFeatureCards() {
  //       document.querySelectorAll('.feature_card').forEach(function (card) {
  //         var content = card.querySelector('.feature_content');
  //         var img = card.querySelector('.feature_img');
  //         if (!content && !img) return;
  //         if (REDUCED) return;
  //   
  //         if (content) gsap.set(content, { scale: 0, transformOrigin: 'center center' });
  //         if (img) gsap.set(img, { opacity: 0, yPercent: 100 });
  //   
  //         ScrollTrigger.create({
  //           trigger: card,
  //           start: 'top 85%',
  //           once: true,
  //           onEnter: function () {
  //             if (content)
  //               gsap.to(content, {
  //                 scale: 1, duration: 0.4, ease: 'power3.out',
  //                 onComplete: function () { gsap.set(content, { clearProps: 'all' }); },
  //               });
  //             if (img)
  //               gsap.to(img, {
  //                 opacity: 1, yPercent: 0, duration: 0.4, ease: 'power3.out',
  //                 onComplete: function () { gsap.set(img, { clearProps: 'all' }); },
  //               });
  //           },
  //         });
  //       });
  //     }
  //   
  //     function init() {
  //       initReveals();
  //       initFeatureAssets();
  //       initCtaImages();
  //       initFeatureCards();
  //       if (typeof ScrollTrigger !== 'undefined') {
  //         window.addEventListener('load', function () { ScrollTrigger.refresh(); });
  //       }
  //     }
  //   
  //     if (document.readyState !== 'loading') init();
  //     else document.addEventListener('DOMContentLoaded', init);
  //   })();
  //   
  //   /* Hirely — hero LOAD entrance. Port of hero-enter.ts to a plain global (no
  //      `export`, self-init — Rule 1). Expects window.gsap + window.SplitText from CDN.
  //      One timeline (all from t=0 on load): the `bounce-enter` ladder (h1 SplitText
  //      chars, bubble, description, button, svg/img width-grow, stats) + the home hero
  //      4-bar slide-in + the about hero card cluster. Owns the `html.hero-loading`
  //      first-paint guard (lifts it the instant start-states commit, + 2.5s failsafe +
  //      try/catch). No JS / reduced-motion -> guard never added -> hero visible now. */
  //   (function () {
  //     var ROOT = document.documentElement;
  //     var REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  //     var EXPO = 'expo.out';
  //     var CIRC = 'circ.inOut';
  //   
  //     function reveal() { ROOT.classList.remove('hero-loading'); }
  //     function has(sel) { return document.querySelector(sel) !== null; }
  //   
  //     function init() {
  //       // No GSAP -> can't animate; just lift the guard so the hero shows.
  //       if (typeof gsap === 'undefined') { reveal(); return; }
  //       if (typeof SplitText !== 'undefined') gsap.registerPlugin(SplitText);
  //   
  //       if (REDUCED) { reveal(); return; }
  //   
  //       if (!has('[bounce-enter], .hero-two_bar-top, .hero-two_bar-bottom, .about_img-wrap')) {
  //         reveal();
  //         return;
  //       }
  //   
  //       var failsafe = window.setTimeout(reveal, 2500);
  //   
  //       try {
  //         var tl = gsap.timeline({ defaults: { duration: 0.7, ease: EXPO } });
  //         var splits = [];
  //   
  //         // h1 — split every [bounce-enter="h1"], stagger ALL chars as one wave.
  //         var h1Chars = [];
  //         var canSplit = typeof SplitText !== 'undefined';
  //         document.querySelectorAll('[bounce-enter="h1"]').forEach(function (h1) {
  //           if (canSplit) {
  //             var split = new SplitText(h1, { type: 'words, chars' });
  //             splits.push(split);
  //             h1Chars.push.apply(h1Chars, split.chars);
  //           }
  //         });
  //         if (h1Chars.length) {
  //           gsap.set(h1Chars, { transformOrigin: '100% 0%' });
  //           tl.from(h1Chars, { scale: 0, stagger: { amount: 0.4, from: 'start' } }, 0);
  //         } else if (has('[bounce-enter="h1"]')) {
  //           // SplitText unavailable — reveal the whole h1 (no per-char), keep the ladder.
  //           tl.from('[bounce-enter="h1"]', { opacity: 0, scale: 0, transformOrigin: '100% 0%' }, 0);
  //         }
  //   
  //         if (has('[bounce-enter="bubble"]'))
  //           tl.from('[bounce-enter="bubble"]', { scale: 0, ease: CIRC, stagger: { amount: 0.4 } }, 0.23);
  //   
  //         if (has('[bounce-enter="description"]'))
  //           tl.from('[bounce-enter="description"]', { opacity: 0, scale: 0, transformOrigin: '50% 0%', stagger: { amount: 0.2 } }, 0.4);
  //   
  //         if (has('[bounce-enter="custom-button"]'))
  //           tl.from('[bounce-enter="custom-button"]', { opacity: 0, scale: 0, transformOrigin: '50% 0%' }, 0.48);
  //   
  //         if (has('[bounce-enter="hero-svg"]'))
  //           tl.from('[bounce-enter="hero-svg"]', { width: 0, transformOrigin: '50% 100%' }, 0.55);
  //   
  //         if (has('[bounce-enter="hero-img"]'))
  //           tl.from('[bounce-enter="hero-img"]', { width: 0 }, 0.55);
  //   
  //         if (has('[bounce-enter="stats"] > *'))
  //           tl.from('[bounce-enter="stats"] > *', { opacity: 0, yPercent: 100, stagger: { amount: 0.1 } }, 0.59);
  //   
  //         // Home hero image bars — top bars drop in, bottom bars rise.
  //         var bar = function (sel, pos, originY, yPct) {
  //           if (has(sel))
  //             tl.from(sel, { opacity: 0, scale: 0, yPercent: yPct, transformOrigin: '50% ' + originY }, pos);
  //         };
  //         bar('.hero-two_bar-top.is-one', 0, '0%', -100);
  //         bar('.hero-two_bar-top.is-two', 0.2, '0%', -100);
  //         bar('.hero-two_bar-bottom.is-three', 0.4, '100%', 100);
  //         bar('.hero-two_bar-bottom.is-four', 0.6, '100%', 100);
  //   
  //         // About hero card cluster — rise from y:100% + scale 0, staggered.
  //         if (has('.about_visuals > *'))
  //           tl.from('.about_visuals > *', { yPercent: 100, scale: 0, stagger: { amount: 0.25 } }, 0);
  //   
  //         reveal();
  //         window.clearTimeout(failsafe);
  //         tl.eventCallback('onComplete', function () {
  //           splits.forEach(function (s) { s.revert(); });
  //           gsap.set('[bounce-enter], .hero-two_bar-top, .hero-two_bar-bottom, .about_img-wrap', { clearProps: 'all' });
  //         });
  //       } catch (e) {
  //         reveal();
  //         window.clearTimeout(failsafe);
  //       }
  //     }
  //   
  //     if (document.readyState !== 'loading') init();
  //     else document.addEventListener('DOMContentLoaded', init);
  //   })();
  //   
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false,true);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="vitrine-secao-129" ref={raiz}>
      <div className="page-wrapper">
          
          <div className="navbar w-nav" role="banner" data-navbar="">
            <div className="padding-global">
              <div className="nav_container">
                <div className="navbar_content">
                  <a href="/" aria-label="Hirely, home" className="navbar_logo-link w-nav-brand">
                    <img loading="eager" src={s.imagem} alt="Hirely" className="logo" />
                  </a>
      
                  <nav className="nav_group" aria-label="Primary">
                    <a href="/" className="nav_links hide-tablet w-nav-link">{s.acao}</a>
                    <a href="/about" className="nav_links hide-tablet w-nav-link">{s.acao2}</a>
                    <a href="/services" aria-current="page" className="nav_links hide-tablet w-nav-link w--current">{s.acao3}</a>
                    <a href="/blog" className="nav_links hide-tablet w-nav-link">{s.acao4}</a>
                  </nav>
      
                  <div className="navbar_actions">
                    <a href="/contact" className="button is-white hide-mobile-portrait w-button">{s.acao5}</a>
      
                    <div className="hamburger-anchor">
                      <div className="hamburger-nav">
                        <div className="hamburger-nav__bg" aria-hidden="true"></div>
                        <div className="hamburger-nav__group">
                          <p className="hamburger-nav__menu-p">{s.texto}</p>
                          <ul className="hamburger-nav__ul">
                            <li className="hamburger-nav__li">
                              <a href="/" className="hamburger-nav__a">
                                <p className="hamburger-nav__p">{s.texto2}</p>
                                <div className="hamburger-nav__dot" aria-hidden="true"></div>
                              </a>
                            </li>
                            <li className="hamburger-nav__li">
                              <a href="/about" className="hamburger-nav__a">
                                <p className="hamburger-nav__p">{s.texto3}</p>
                                <div className="hamburger-nav__dot" aria-hidden="true"></div>
                              </a>
                            </li>
                            <li className="hamburger-nav__li">
                              <a href="/services" aria-current="page" className="hamburger-nav__a">
                                <p className="hamburger-nav__p">{s.texto4}</p>
                                <div className="hamburger-nav__dot" aria-hidden="true"></div>
                              </a>
                            </li>
                            <li className="hamburger-nav__li">
                              <a href="/blog" className="hamburger-nav__a">
                                <p className="hamburger-nav__p">{s.texto5}</p>
                                <div className="hamburger-nav__dot" aria-hidden="true"></div>
                              </a>
                            </li>
                            <li className="hamburger-nav__li">
                              <a href="/contact" className="hamburger-nav__a">
                                <p className="hamburger-nav__p">{s.texto6}</p>
                                <div className="hamburger-nav__dot" aria-hidden="true"></div>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <button type="button" data-navigation-toggle="toggle" aria-label="Toggle menu" aria-expanded="false" className="hamburger-nav__toggle" onClick={s.onClick}>
                          <div className="hamburger-nav__toggle-bar"></div>
                          <div className="hamburger-nav__toggle-bar"></div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-navigation-toggle="close" className="navigation__dark-bg" aria-hidden="true"></div>
      
          <main className="main-wrapper">
            <section className="section_services bg-dark">
              <div className="padding-global">
                <div className="container-hero">
                  <div className="services_layout">
                    <div className="services_header-wrap">
                      <h1 className="flex-wrap gap-text"><span bounce-enter="h1">{s.rotulo}</span><span bounce-enter="h1">{s.rotulo2}</span><img src={s.imagem2} loading="lazy" bounce-enter="hero-svg" alt="" className="h1-svg" /><span bounce-enter="h1">{s.rotulo3}</span></h1>
                      <div bounce-enter="description" className="text-color-on-dark">Discover customized staffing solutions designed to address the unique challenges of your business.</div>
                    </div>
                    <div bounce-enter="custom-button">
                      <a data-wf--button--variant="base" href="/contact" className="button_wrap w-inline-block">
                        <div className="button_main">
                          <div className="button_icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 12 24" fill="none" className="icon-1x1-medium is-2">
                              <path fillRule="evenodd" clipRule="evenodd" d="M10.1569 12.711L4.49994 18.368L3.08594 16.954L8.03594 12.004L3.08594 7.05401L4.49994 5.64001L10.1569 11.297C10.3444 11.4845 10.4497 11.7389 10.4497 12.004C10.4497 12.2692 10.3444 12.5235 10.1569 12.711Z" fill="currentColor"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 12 24" fill="none" className="icon-1x1-medium is-1">
                              <path fillRule="evenodd" clipRule="evenodd" d="M10.1569 12.711L4.49994 18.368L3.08594 16.954L8.03594 12.004L3.08594 7.05401L4.49994 5.64001L10.1569 11.297C10.3444 11.4845 10.4497 11.7389 10.4497 12.004C10.4497 12.2692 10.3444 12.5235 10.1569 12.711Z" fill="currentColor"></path>
                            </svg>
                          </div>
                          <div>Start Hiring</div>
                        </div>
                        <div className="button_shadow"></div>
                      </a>
                    </div>
                    <div bounce-enter="bubble" className="services_img is-one"><img src={s.imagem3} loading="lazy" alt="A casually dressed man smiling, reflecting an approachable candidate and a positive hiring experience." className="img" /></div>
                    <div bounce-enter="bubble" className="services_img is-two"><img src={s.imagem4} loading="lazy" alt="A casually dressed man smiling, reflecting an approachable candidate and a positive hiring experience." className="img" /></div>
                    <div bounce-enter="bubble" className="services_img is-three"><img src={s.imagem5} loading="lazy" alt="A smiling professional woman working on a laptop against a purple background, representing productivity and a positive hiring experience." className="img" /></div>
                    <div bounce-enter="bubble" className="services_img is-four"><img src={s.imagem6} loading="lazy" alt="A professionally dressed man using a laptop with headphones while sitting on a sofa, highlighting remote hiring efficiency and modern workplace flexibility." className="img" /></div>
                  </div>
                </div>
              </div>
              <div data-wf--hero-banner--variant="centered" className="hero_banner w-variant-19b2c0dd-037a-9b1c-0fbc-ad7694943976">
                <div className="banner-text scroll-animation">Trusted by top brands across industries</div>
                <div animation="loop" className="loop scroll-animation">
                  <div className="loop_logo">
                    <img loading="lazy" src={s.imagem7} alt="" className="logos_img" />
                    <img loading="lazy" src={s.imagem8} alt="" className="logos_img" />
                    <img loading="lazy" src={s.imagem9} alt="" className="logos_img" />
                    <img loading="lazy" src={s.imagem10} alt="" className="logos_img" />
                  </div>
                  <div className="loop_logo">
                    <img loading="lazy" src={s.imagem11} alt="" className="logos_img" />
                    <img loading="lazy" src={s.imagem12} alt="" className="logos_img" />
                    <img loading="lazy" src={s.imagem13} alt="" className="logos_img" />
                    <img loading="lazy" src={s.imagem14} alt="" className="logos_img" />
                  </div>
                  <div className="loop_logo">
                    <img loading="lazy" src={s.imagem15} alt="" className="logos_img" />
                    <img loading="lazy" src={s.imagem16} alt="" className="logos_img" />
                    <img loading="lazy" src={s.imagem17} alt="" className="logos_img" />
                    <img loading="lazy" src={s.imagem18} alt="" className="logos_img" />
                  </div>
                  <div className="brands_gradient-left"></div>
                  <div className="brands_gradient-right"></div>
                </div>
              </div>
            </section>
          </main>
        </div>
    </section>
  );
}