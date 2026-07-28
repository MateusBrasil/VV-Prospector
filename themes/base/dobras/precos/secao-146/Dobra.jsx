"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-146
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
  //   // Advisora — About Hero
  //   // No component-specific boot logic. Scroll reveals are handled by the shared
  //   // /advisora/scripts/scroll-reveal.js and the mobile hamburger by navbar.js.
  //   // Both are loaded as classic <script> tags in index.html (no import/export here).
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
    <section className="dobra" data-dobra="precos-secao-146" ref={raiz}>
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
      
          <section className="section_about-hero">
            <div className="padding-global padding-section-large">
              <div className="content-wrap">
                <div className="about-hero_header">
                  <div className="about-hero_title" data-reveal="up">
                    <h1 className="text-5xl">{s.titulo}</h1>
                  </div>
                  <div className="about-hero_description" data-reveal="up" data-reveal-delay="150">
                    <div className="text-lg text-color-secondary">Founded by data experts, we create cutting-edge SaaS analytics platforms tailored for businesses of all sizes.</div>
                  </div>
                </div>
                <div className="about-hero_visual" data-reveal="zoom-blur" data-reveal-delay="300">
                  <div className="img-wrapper"><img src={s.imagem3} loading="eager" fetchpriority="high" decoding="async" sizes="(max-width: 479px) 91vw, (max-width: 767px) 94vw, (max-width: 991px) 89vw, 95vw" alt="Advisora team working" srcSet="https://d173woph5zl366.cloudfront.net/advisora/images/about-hero-image_1about-hero-image.webp 500w, https://d173woph5zl366.cloudfront.net/advisora/images/about-hero-image_1about-hero-image.webp 800w, https://d173woph5zl366.cloudfront.net/advisora/images/about-hero-image_1about-hero-image.webp 1080w, https://d173woph5zl366.cloudfront.net/advisora/images/about-hero-image_1about-hero-image.webp 1600w, https://d173woph5zl366.cloudfront.net/advisora/images/about-hero-image_1.webp 1742w" className="img" /></div>
                </div>
              </div>
            </div>
          </section>
        </div>
    </section>
  );
}