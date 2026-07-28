"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-108
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
  //   // advisora-hero — component-scoped boot logic.
  //   // Reveal, navbar and hero motion are handled by the shared scripts loaded
  //   // before this file: /advisora/scripts/scroll-reveal.js, navbar.js, hero-anim.js.
  //   // Loaded as a classic <script> — no import/export. Intentionally empty.
  //   
  //   // Advisora hero entrance — GSAP page-load animations for the HomeHero visual cluster.
  //   // CDN-friendly global, self-initializes on DOM ready. Ported from src/scripts/hero-anim.ts.
  //   //   - hero image:     scale 1.2 -> 1   + blur 10 -> 0
  //   //   - hero badges:    scale 0.5 -> 1   + opacity 0 -> 1, then gentle floating loop
  //   //   - hero user tags: translateX 300% -> 0 + blur 20 -> 0 + opacity 0 -> 1 (stagger)
  //   (function () {
  //     function init() {
  //       if (typeof gsap === "undefined") return;
  //       var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  //   
  //       if (prefersReduced) {
  //         document.querySelectorAll("[data-hero-image], [data-hero-tag], [data-hero-user-tag]").forEach(function (el) {
  //           el.style.opacity = "1";
  //           el.style.transform = "none";
  //           el.style.filter = "none";
  //         });
  //         return;
  //       }
  //   
  //       // 1. Hero image — scale + blur cinematic reveal
  //       var heroImage = document.querySelector("[data-hero-image]");
  //       if (heroImage) {
  //         gsap.fromTo(
  //           heroImage,
  //           { scale: 1.2, filter: "blur(10px)" },
  //           { scale: 1, filter: "blur(0px)", duration: 1.2, ease: "power3.out", delay: 0.1 }
  //         );
  //       }
  //   
  //       // 2. Hero badges — balloon entrance + gentle infinite float
  //       var heroTags = document.querySelectorAll("[data-hero-tag]");
  //       heroTags.forEach(function (tag, i) {
  //         gsap.set(tag, { scale: 0.5, opacity: 0 });
  //         var tl = gsap.timeline({ delay: 0.5 + i * 0.12 });
  //         tl.to(tag, { scale: 1, opacity: 1, duration: 0.7, ease: "back.out(1.6)" });
  //         tl.to(tag, { y: "+=8", duration: 2.4 + i * 0.4, ease: "sine.inOut", yoyo: true, repeat: -1 });
  //       });
  //   
  //       // 3. Hero user tags — slide in from right with blur, stagger 100ms
  //       var userTags = document.querySelectorAll("[data-hero-user-tag]");
  //       userTags.forEach(function (tag, i) {
  //         gsap.set(tag, { x: "300%", filter: "blur(20px)", opacity: 0 });
  //         gsap.to(tag, { x: 0, filter: "blur(0px)", opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.6 + i * 0.1 });
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
  //   // Advisora OSMO-style scaling-hamburger navigation (tablet + mobile only).
  //   // CDN-friendly global, self-initializes on DOM ready. Ported from src/scripts/navbar.ts.
  //   // State tracked via `data-navigation-status` on <html>.
  //   (function () {
  //     function init() {
  //       var html = document.documentElement;
  //       var toggleEls = document.querySelectorAll('[data-navigation-toggle="toggle"]');
  //       var closeEls = document.querySelectorAll('[data-navigation-toggle="close"]');
  //       var menuLinks = document.querySelectorAll(".hamburger-nav__a");
  //   
  //       function setStatus(active) {
  //         html.setAttribute("data-navigation-status", active ? "active" : "not-active");
  //         html.style.overflow = active ? "hidden" : "";
  //         toggleEls.forEach(function (el) { el.setAttribute("aria-expanded", String(active)); });
  //       }
  //   
  //       setStatus(false);
  //   
  //       toggleEls.forEach(function (btn) {
  //         btn.addEventListener("click", function (e) {
  //           e.stopPropagation();
  //           setStatus(html.getAttribute("data-navigation-status") !== "active");
  //         });
  //       });
  //   
  //       closeEls.forEach(function (el) {
  //         el.addEventListener("click", function () { setStatus(false); });
  //       });
  //   
  //       menuLinks.forEach(function (link) {
  //         link.addEventListener("click", function () { setStatus(false); });
  //       });
  //   
  //       document.addEventListener("keydown", function (e) {
  //         if (e.key === "Escape" && html.getAttribute("data-navigation-status") === "active") {
  //           setStatus(false);
  //         }
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
  //   // Advisora scroll-reveal — CDN-friendly global (gsap + ScrollTrigger from CDN).
  //   // Self-initializes on DOM ready. Ported from src/scripts/scroll-reveal.ts.
  //   // No top-level export (would be a parse-time SyntaxError as a classic <script>).
  //   (function () {
  //     function init() {
  //       if (typeof gsap === "undefined") return;
  //       if (typeof ScrollTrigger !== "undefined") gsap.registerPlugin(ScrollTrigger);
  //   
  //       var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  //   
  //       if (prefersReduced || typeof ScrollTrigger === "undefined") {
  //         document.querySelectorAll("[data-reveal]").forEach(function (el) {
  //           el.style.opacity = "1";
  //           el.style.transform = "none";
  //           el.style.filter = "none";
  //         });
  //         return;
  //       }
  //   
  //       document.querySelectorAll("[data-reveal]").forEach(function (el) {
  //         var direction = el.dataset.reveal || "up";
  //         var delayAttr = el.dataset.revealDelay;
  //         var delay = delayAttr ? parseFloat(delayAttr) / 1000 : 0.1;
  //   
  //         var from, to;
  //   
  //         if (direction === "zoom-blur") {
  //           from = { opacity: 0, scale: 1.15, filter: "blur(8px)" };
  //           to = { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.1, ease: "power3.out", delay: delay };
  //         } else {
  //           from = { opacity: 0 };
  //           if (direction === "up") from.y = 15;
  //           else if (direction === "down") from.y = -15;
  //           else if (direction === "left") from.x = -15;
  //           else if (direction === "right") from.x = 15;
  //   
  //           to = { opacity: 1, x: 0, y: 0, duration: 0.7, ease: "power3.out", delay: delay };
  //         }
  //   
  //         gsap.set(el, from);
  //         ScrollTrigger.create({
  //           trigger: el,
  //           start: "top 90%",
  //           onEnter: function () { gsap.to(el, to); },
  //           once: true,
  //         });
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
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="precos-secao-108" ref={raiz}>
      <div className="page-wrapper">
          <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar w-nav">
            <div className="padding-global is-navbar">
              <div className="navbar_content">
                <a href="/" aria-label="Advisora — Home" className="navbar_logo-link w-nav-brand">
                  <img loading="eager" decoding="async" width="128" height="32" src={s.imagem} alt="Advisora" className="navbar_logo" />
                </a>
                <div className="nav_wrap is-desktop-only">
                  <nav role="navigation" className="nav_mobile w-nav-menu">
                    <div className="navbar_list">
                      <a href="/about" className="nav_links w-nav-link">{s.acao}</a>
                      <a href="/features" className="nav_links w-nav-link">{s.acao2}</a>
                      <a href="/pricing" className="nav_links w-nav-link">{s.acao3}</a>
                      <a href="/blog" className="nav_links w-nav-link">{s.acao4}</a>
                    </div>
                  </nav>
                </div>
                <div className="nav_buttons-wrap is-desktop-only">
                  <div className="login-wrap">
                    <a href="/contact" className="button is-primary w-inline-block">
                      <div className="button-text-wrap">
                        <div className="button-text is-firts">Contact</div>
                        <div className="button-text is-second">Contact</div>
                        <div className="button-shadow-up"></div>
                        <div className="button-shadow-down"></div>
                      </div>
                      <img loading="lazy" src={s.imagem2} alt="" className="button-icon" />
                    </a>
                  </div>
                </div>
                <div className="hamburger-anchor is-mobile-only">
                  <div className="hamburger-nav">
                    <div className="hamburger-nav__bg" aria-hidden="true"></div>
                    <div className="hamburger-nav__group">
                      <p className="hamburger-nav__menu-p">{s.texto}</p>
                      <ul className="hamburger-nav__ul">
                        <li className="hamburger-nav__li"><a href="/about" className="hamburger-nav__a"><p className="hamburger-nav__p">{s.texto2}</p><div className="hamburger-nav__dot" aria-hidden="true"></div></a></li>
                        <li className="hamburger-nav__li"><a href="/features" className="hamburger-nav__a"><p className="hamburger-nav__p">{s.texto3}</p><div className="hamburger-nav__dot" aria-hidden="true"></div></a></li>
                        <li className="hamburger-nav__li"><a href="/pricing" className="hamburger-nav__a"><p className="hamburger-nav__p">{s.texto4}</p><div className="hamburger-nav__dot" aria-hidden="true"></div></a></li>
                        <li className="hamburger-nav__li"><a href="/blog" className="hamburger-nav__a"><p className="hamburger-nav__p">{s.texto5}</p><div className="hamburger-nav__dot" aria-hidden="true"></div></a></li>
                        <li className="hamburger-nav__li"><a href="/contact" className="hamburger-nav__a"><p className="hamburger-nav__p">{s.texto6}</p><div className="hamburger-nav__dot" aria-hidden="true"></div></a></li>
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
          <div data-navigation-toggle="close" className="navigation__dark-bg is-mobile-only" aria-hidden="true"></div>
      
          <section className="section_hero">
            <div className="hero_left-content">
              <div className="hero_content-wrap">
                <div className="content-wrap">
                  <div className="hero_header-wrap">
                    <div className="hero_header">
                      <div className="hero_title hero-reveal" data-stair="1">
                        <h1 className="text-6xl">{s.titulo}</h1>
                      </div>
                      <div className="text-base text-color-secondary hero-reveal" data-stair="2">Easily adapt to changes and scale your operations with our flexible infrastructure, designed to support your business growth.</div>
                    </div>
                    <div className="hero_buttons-wrap hero-reveal" data-stair="3">
                      <div className="button-wrapper">
                        <a data-wf--primary-button--variant="with-icon" href="/contact" className="button is-primary w-inline-block">
                          <div className="button-text-wrap">
                            <div className="button-text is-firts">Get Started</div>
                            <div className="button-text is-second">Get Started</div>
                            <div className="button-shadow-up"></div>
                            <div className="button-shadow-down"></div>
                          </div>
                          <img loading="lazy" src={s.imagem3} alt="" className="button-icon" />
                        </a>
                      </div>
                      <div className="button-wrapper">
                        <a href="/contact" className="button is-outline w-button">{s.acao5}</a>
                      </div>
                    </div>
                  </div>
                  <div className="hero_content-bottom hero-reveal" data-stair="4">
                    <div className="hero_users-wrap">
                      <div data-hero-user-tag="" className="hero_user-tag is-first"><img src={s.imagem4} loading="lazy" alt="" className="img" /></div>
                      <div data-hero-user-tag="" className="hero_user-tag is-second"><img src={s.imagem5} loading="lazy" alt="" className="img" /></div>
                      <div data-hero-user-tag="" className="hero_user-tag is-third"><img src={s.imagem6} loading="lazy" alt="" className="img" /></div>
                      <div data-hero-user-tag="" className="hero_user-tag is-fourth"><img src={s.imagem7} loading="lazy" alt="" className="img" /></div>
                      <div data-hero-user-tag="" className="hero_text-tag is-fifth">
                        <div className="text-sm">10K+</div>
                      </div>
                    </div>
                    <div className="text-base text-color-secondary">10.000+ people already joined the Advisora</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero_visual">
              <div data-hero-image="" className="hero_image"><img src={s.imagem8} loading="eager" fetchpriority="high" decoding="async" sizes="100vw" alt="Professional using Advisora to track financial growth" srcSet="https://d173woph5zl366.cloudfront.net/advisora/images/hero-image-p-500.webp 500w, https://d173woph5zl366.cloudfront.net/advisora/images/hero-image-p-800.webp 800w, https://d173woph5zl366.cloudfront.net/advisora/images/hero-image-p-1080.webp 1080w, https://d173woph5zl366.cloudfront.net/advisora/images/hero-image-p-1600.webp 1600w, https://d173woph5zl366.cloudfront.net/advisora/images/hero-image.webp 1846w" className="img" /></div>
              <div data-hero-tag="" className="hero_tag-one"><img src={s.imagem9} loading="lazy" alt="" className="img" /></div>
              <div data-hero-tag="" className="hero_tag-two"><img src={s.imagem10} loading="lazy" alt="" className="img" /></div>
              <div data-hero-tag="" className="hero_tag-three"><img src={s.imagem11} loading="lazy" alt="" className="img" /></div>
            </div>
          </section>
        </div>
    </section>
  );
}