"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-105
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
  //   // aurae-hero — no section-specific boot needed.
  //   // The page-load entrance (per-character SplitText timeline) is handled by the
  //   // shared /aurae/scripts/hero-intro.js, and the navigation by /aurae/scripts/navbar.js.
  //   // GSAP + ScrollTrigger + SplitText globals are loaded in the head.
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
  //   // hero-intro.js — home hero page-load entrance, faithful to the webflow wf:load
  //   // timeline (IX3/GSAP system). The heading reveals PER CHARACTER (SplitText).
  //   //
  //   //   [bg]             scale 1.2 → 1                         dur 1,   pos 0
  //   //   [animation=zoom] (.home-hero_heading) y 2rem→0 + scale 1.1→1   dur 1, pos 0
  //   //   [animation=hero-heading] (h1) chars: y 50% + opacity, stagger amount .5  pos 0
  //   //   [animation=hero-description]  y 50% + opacity          pos .3
  //   //   [animation=hero-divider]      y 50% + opacity          pos .5
  //   //   [animation=hero-button]       y 50% + opacity   dur .45 pos .55
  //   //
  //   // prefers-reduced-motion → no animation (content shown as-is). A finally{} always
  //   // reveals the layout so a script error can never leave the hero hidden behind the .js guard.
  //   (function () {
  //     function run() {
  //       const hero = document.querySelector(".section_home-hero");
  //       if (!hero) return;
  //       const layout = hero.querySelector(".home-hero_layout");
  //   
  //       try {
  //         const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  //         if (reduce) return; // finally reveals; no motion
  //   
  //         const ease = "power3.out";
  //         const heading = hero.querySelector('[animation="hero-heading"]');
  //   
  //         // Per-character split. Keep the heading readable to AT/SEO (aria-label + split
  //         // spans aria-hidden, which SplitText 3.13 handles when given the type).
  //         let chars = [];
  //         if (heading) {
  //           heading.setAttribute("aria-label", heading.textContent ?? "");
  //           const split = new SplitText(heading, { type: "chars", aria: "hidden" });
  //           chars = split.chars;
  //         }
  //   
  //         const tl = gsap.timeline({ defaults: { ease, duration: 0.8 } });
  //         tl.from(hero.querySelector("[bg]"), { scale: 1.2, duration: 1 }, 0)
  //           .from(hero.querySelector('[animation="zoom"]'), { y: "2rem", scale: 1.1, duration: 1 }, 0);
  //         if (chars.length) {
  //           tl.from(chars, { yPercent: 50, opacity: 0, duration: 0.6, stagger: { amount: 0.5 } }, 0);
  //         }
  //         tl.from(hero.querySelector('[animation="hero-description"]'), { yPercent: 50, opacity: 0 }, 0.3)
  //           .from(hero.querySelector('[animation="hero-divider"]'), { yPercent: 50, opacity: 0 }, 0.5)
  //           .from(hero.querySelector('[animation="hero-button"]'), { yPercent: 50, opacity: 0, duration: 0.45 }, 0.55);
  //       } finally {
  //         if (layout) layout.style.visibility = "visible";
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
    <section className="dobra" data-dobra="contacto-secao-105" ref={raiz}>
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
      
          <section className="section_home-hero">
            <div className="padding-global">
              <div className="container-large">
                <div className="home-hero_layout">
                  <div animation="zoom" className="home-hero_heading">
                    <h1 animation="hero-heading" className="h3">Naturally better skin <span className="italic-heading">{s.rotulo}</span> here.</h1>
                  </div>
                  <div className="home-hero_bottom">
                    <div className="max-description is-22rem">
                      <div animation="hero-description">AURAE is a single, concentrated serum that works with your skin's natural intelligence.</div>
                    </div>
                    <div animation="hero-divider" className="hero-divider"></div>
                    <div animation="hero-button" className="button-wrap">
                      <a href="/products/aurae-skincare" className="button-component w-inline-block">
                        <div className="button_text">Shop Now</div>
                        <div className="button_background"></div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div bg="" className="bg">
              <div className="home-hero_background">
                <div animation="hero-shadow" className="background_shadow"></div>
              </div>
            </div>
          </section>
        </div>
    </section>
  );
}