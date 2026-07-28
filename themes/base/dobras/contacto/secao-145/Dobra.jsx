"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-145
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
  //   /* Aurae — About Hero.
  //      Animation + behavior live in the shared classic scripts loaded before this file:
  //        /aurae/scripts/about-hero-intro.js → SplitText headline reveal, parallax image
  //                                             clip-path uncover, users-list + copy + CTA
  //                                             stagger, fonts.ready gating, reduced-motion guard
  //        /aurae/scripts/navbar.js           → mobile hamburger menu toggle
  //      Nothing to boot here. */
  //   
  //   // navbar.js — Aurae navbar behaviour.
  //   // Desktop: plain Aurae nav links (no dropdown — the Products mega-dropdown was removed).
  //   // Mobile (≤991): OSMO scaling hamburger — state lives in <html data-navigation-status>
  //   // ("active"/"not-active"); CSS in hamburger-nav.css transitions off that attribute.
  //   (function () {
  //     function init() {
  //       const html = document.documentElement;
  //   
  //       // --- OSMO hamburger (mobile) ---
  //       const toggleEls = document.querySelectorAll('[data-navigation-toggle="toggle"]');
  //       const closeEls = document.querySelectorAll('[data-navigation-toggle="close"]');
  //       const menuLinks = document.querySelectorAll(".hamburger-nav__a");
  //   
  //       const setStatus = (active) => {
  //         html.setAttribute("data-navigation-status", active ? "active" : "not-active");
  //         toggleEls.forEach((el) => el.setAttribute("aria-expanded", String(active)));
  //       };
  //       setStatus(false);
  //   
  //       toggleEls.forEach((btn) =>
  //         btn.addEventListener("click", (e) => {
  //           e.stopPropagation();
  //           setStatus(html.getAttribute("data-navigation-status") !== "active");
  //         })
  //       );
  //       closeEls.forEach((el) => el.addEventListener("click", () => setStatus(false)));
  //       menuLinks.forEach((link) => link.addEventListener("click", () => setStatus(false)));
  //       document.addEventListener("keydown", (e) => {
  //         if (e.key === "Escape") setStatus(false);
  //       });
  //     }
  //   
  //     if (document.readyState === "loading") {
  //       document.addEventListener("DOMContentLoaded", init);
  //     } else {
  //       init();
  //     }
  //   })();
  //   
  //   // about-hero-intro.js — page-load entrance for the About hero, built on the same
  //   // patterns as the home hero (hero-intro.js): SplitText per-character heading reveal,
  //   // fonts.ready gating, a finally{} that always reveals the layout, and
  //   // prefers-reduced-motion → no motion.
  //   //
  //   //   [.about-hero_img]            clip-path reveal (uncovers bottom→top) + opacity  pos 0
  //   //   [hero-heading] eyebrow       y + opacity                                       pos .2
  //   //   [hero-heading] h1 chars      y 50% + opacity, stagger amount .5                pos .3
  //   //   [.users-list]                y + opacity                                       pos .6
  //   //   [hero-description] copy      y + opacity                                       pos .7
  //   //   [hero-button]                y + opacity                              dur .45  pos .8
  //   (function () {
  //     function run() {
  //       const hero = document.querySelector(".section_about-hero");
  //       if (!hero) return;
  //       const grid = hero.querySelector(".about-hero_grid");
  //   
  //       try {
  //         const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  //         if (reduce) return; // finally reveals; no motion
  //   
  //         const ease = "power3.out";
  //         const content = hero.querySelector(".about-hero_content");
  //         const img = hero.querySelector(".about-hero_img");
  //         const eyebrow = content?.querySelector('[animation="hero-heading"]:not(h1)');
  //         const h1 = content?.querySelector('h1[animation="hero-heading"]');
  //         const usersList = content?.querySelector(".users-list");
  //         const description = content?.querySelector('[animation="hero-description"]:not(.users-list)');
  //         const button = content?.querySelector('[animation="hero-button"]');
  //   
  //         // Per-character split of the h1 (aria-label keeps it readable; split spans
  //         // aria-hidden via SplitText 3.13's aria option).
  //         let chars = [];
  //         if (h1) {
  //           h1.setAttribute("aria-label", h1.textContent ?? "");
  //           chars = new SplitText(h1, { type: "chars", aria: "hidden" }).chars;
  //         }
  //   
  //         const tl = gsap.timeline({ defaults: { ease, duration: 0.8 } });
  //         if (img) {
  //           tl.from(img, { clipPath: "inset(100% 0 0 0)", opacity: 0, duration: 1.1 }, 0);
  //         }
  //         if (eyebrow) tl.from(eyebrow, { yPercent: 50, opacity: 0, duration: 0.6 }, 0.2);
  //         if (chars.length) {
  //           tl.from(chars, { yPercent: 50, opacity: 0, duration: 0.6, stagger: { amount: 0.5 } }, 0.3);
  //         }
  //         if (usersList) tl.from(usersList, { yPercent: 50, opacity: 0 }, 0.6);
  //         if (description) tl.from(description, { yPercent: 50, opacity: 0 }, 0.7);
  //         if (button) tl.from(button, { yPercent: 50, opacity: 0, duration: 0.45 }, 0.8);
  //       } finally {
  //         if (grid) grid.style.visibility = "visible";
  //       }
  //     }
  //   
  //     // Wait for fonts so SplitText measures glyphs correctly; fall back if it stalls.
  //     function start() {
  //       if (document.fonts?.ready) {
  //         let done = false;
  //         const go = () => { if (!done) { done = true; run(); } };
  //         document.fonts.ready.then(go);
  //         setTimeout(go, 600); // safety: never block the entrance on a slow font
  //       } else {
  //         run();
  //       }
  //     }
  //   
  //     function init() {
  //       gsap.registerPlugin(SplitText);
  //       start();
  //     }
  //   
  //     if (document.readyState === "loading") {
  //       document.addEventListener("DOMContentLoaded", init);
  //     } else {
  //       init();
  //     }
  //   })();
  //   
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="contacto-secao-145" ref={raiz}>
      <div className="page-wrapper">
          <div data-navbar="" data-collapse="medium" className="navbar w-nav" role="banner">
            <div className="padding-global is-navbar">
              <div className="navbar_content">
                <a href="/" className="navbar_logo-link w-nav-brand" aria-label="Aurae home">
                  <img loading="eager" src={s.imagem} alt="Aurae" className="navbar_logo" />
                </a>
                <div className="nav_wrap">
                  <nav role="navigation" className="nav_mobile w-nav-menu" data-nav-menu="">
                    <div className="navbar_list">
                      <a href="/about" className="nav_links w-nav-link">{s.acao}</a>
                      <a href="/shop" className="nav_links w-nav-link">{s.acao2}</a>
                      <a href="/blog" className="nav_links w-nav-link">{s.acao3}</a>
                      <a href="/contact" className="nav_links w-nav-link">{s.acao4}</a>
                    </div>
                  </nav>
                </div>
                <div className="nav_buttons-wrap">
                  <div className="login-wrap hide-tablet">
                    <a href="/shop" className="button-component w-inline-block">
                      <div className="button_text">Shop Now</div>
                      <div className="button_background"></div>
                    </a>
                  </div>
                  <div className="hamburger-anchor">
                    <div className="hamburger-nav">
                      <div className="hamburger-nav__bg" aria-hidden="true"></div>
                      <div className="hamburger-nav__group">
                        <p className="hamburger-nav__menu-p">{s.texto}</p>
                        <ul className="hamburger-nav__ul">
                          <li className="hamburger-nav__li"><a href="/about" className="hamburger-nav__a"><p className="hamburger-nav__p">{s.texto2}</p><div className="hamburger-nav__dot" aria-hidden="true"></div></a></li>
                          <li className="hamburger-nav__li"><a href="/shop" className="hamburger-nav__a"><p className="hamburger-nav__p">{s.texto3}</p><div className="hamburger-nav__dot" aria-hidden="true"></div></a></li>
                          <li className="hamburger-nav__li"><a href="/blog" className="hamburger-nav__a"><p className="hamburger-nav__p">{s.texto4}</p><div className="hamburger-nav__dot" aria-hidden="true"></div></a></li>
                          <li className="hamburger-nav__li"><a href="/contact" className="hamburger-nav__a"><p className="hamburger-nav__p">{s.texto5}</p><div className="hamburger-nav__dot" aria-hidden="true"></div></a></li>
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
          <div data-navigation-toggle="close" className="navigation__dark-bg" aria-hidden="true"></div>
      
          <section className="section_about-hero">
            <div className="padding-global">
              <div className="container-large">
                <div className="about-hero_grid">
                  <div className="about-hero_img"><img src={s.imagem2} loading="lazy" sizes="100vw" srcSet="https://d173woph5zl366.cloudfront.net/aurae/images/about-hero-one-p-500.avif 500w, https://d173woph5zl366.cloudfront.net/aurae/images/about-hero-one.avif 1200w" alt="Close-up of three young women with closed eyes and relaxed expressions, showing natural skin and freckles." className="img_parallax is-hero" /></div>
                  <div id="w-node-_449c57df-010e-94fa-b6f3-df64566dd75f-ace63637" className="about-hero_content">
                    <div animation="zoom">
                      <div animation="hero-heading" className="text-style-allcaps">Aurae - beauty</div>
                      <div className="spacer-medium"></div>
                      <h1 animation="hero-heading" className="h5">Thoughtful skincare, <em className="italic-heading">designed</em> for real skin</h1>
                    </div>
                    <div animation="zoom">
                      <div animation="hero-description" className="users-list">
                        <div className="user-visuals"><img animation="hero-user-img" loading="lazy" alt="Close-up of a woman's face with glowing, dewy skin and natural makeup." src={s.imagem3} className="user-image" /><img animation="hero-user-img" loading="lazy" alt="Close-up of a woman gently touching her glowing, healthy skin on her face." src={s.imagem4} className="user-image negative-margin" /><img animation="hero-user-img" loading="lazy" alt="Close-up of a woman with glowing, dewy skin gently touching her cheek." src={s.imagem5} className="user-image negative-margin" /></div>
                        <div animation="hero-user-img">1200+ Happy Customers</div>
                      </div>
                      <div className="spacer-huge"></div>
                      <div animation="hero-description" className="text-color-secondary">Aurae was created with a simple belief: skincare should work with your skin, not overwhelm it. In a world full of complicated routines and overstated claims, we focus on clarity, balance, and effectiveness.</div>
                      <div className="spacer-huge"></div>
                      <div animation="hero-button" className="button-wrap is-center">
                        <a href="/products/aurae-skincare" className="button-component w-inline-block">
                          <div className="button_text">Shop Now</div>
                          <div className="button_background"></div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    </section>
  );
}