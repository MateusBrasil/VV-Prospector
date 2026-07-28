"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-102
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
  //   /* Clayo — Hero Section (home, variant is-hero-one).
  //      Animation + behavior live in the shared classic scripts loaded before this file:
  //        /clayo/scripts/hero-home.js  → content rise/slide + fade, image split-unmask,
  //                                        de-scale/de-blur of the main photo, balance badge pop
  //        /clayo/scripts/navbar.js     → mobile menu toggle
  //      Both set their own from-states, so markup stays visible if JS fails.
  //      Nothing to boot here. */
  //   
  //   // Navbar menu toggle — extracted from Clayo's Navbar.astro inline <script>.
  //   // Vanilla JS toggle — replaces Webflow's webflow.js navbar/dropdown behavior.
  //   // Rule 22: NO GSAP on load-time interactions. Pure DOM class toggling.
  //   
  //   (function () {
  //     function init() {
  //       // Mobile menu open/close
  //       const navbar = document.querySelector(".navbar.w-nav");
  //       const menuButton = navbar ? navbar.querySelector(".menu-button") : null;
  //       const navMenu = navbar ? navbar.querySelector(".w-nav-menu") : null;
  //   
  //       if (menuButton && navMenu && navbar) {
  //         menuButton.addEventListener("click", (e) => {
  //           e.stopPropagation();
  //           const isOpen = navbar.classList.toggle("is-open");
  //           menuButton.classList.toggle("w--open", isOpen);
  //           navMenu.classList.toggle("w--nav-menu-open", isOpen);
  //           document.body.classList.toggle("menu-open", isOpen);
  //         });
  //       }
  //   
  //       // Note: desktop dropdown ("More Links") removed per Edgar's post-build correction.
  //       // Nav is now a flat list of 6 items (Home/About/Features/Pricing/Blog/Contact).
  //       // Mobile menu (hamburger) renders the same flat list inside the collapse drawer.
  //     }
  //   
  //     if (document.readyState === "loading") {
  //       document.addEventListener("DOMContentLoaded", init);
  //     } else {
  //       init();
  //     }
  //   })();
  //   
  //   // Hero home load-in — source-faithful, decoded RAW from webflow.js IX2.
  //   //
  //   //   a-36 "hero content":  each child rises (y:5rem) / slides (x:5rem) + fades in.
  //   //   a-49 "hero image":    wrapper slides from y:-100%, inner content from y:+100%
  //   //                         (split unmask), the photo de-scales 1.5→1 and de-blurs
  //   //                         10px→0, the floating balance badge scales 0→1.
  //   //
  //   // outQuart === GSAP power3.out. Respects reduced-motion.
  //   // No-FOUC: inline opacity:0 + transform states kept in HeroSection.astro.
  //   // gsap is a global (loaded via CDN before this script).
  //   
  //   (function () {
  //     const EASE = "power3.out";
  //   
  //     function init() {
  //       const hero = document.querySelector(".section_hero");
  //       if (!hero) return;
  //   
  //       const q = (s) => hero.querySelector(s);
  //       const h1 = q(".heading-style-h1");
  //       const desc = q(".is-hero-one-description");
  //       const btn = q(".hero_button-wrapper");
  //       const avatars = Array.from(hero.querySelectorAll(".hero_info"));
  //       const bottom = q(".is-hero-bottom-text");
  //       const img = q(".hero_img");
  //       const imgContent = q(".hero_img-content");
  //       const innerImg = q(".img.is-hero-one");
  //       const balance = q(".hero_balance");
  //   
  //       const all = [h1, desc, btn, ...avatars, bottom, img, imgContent, innerImg, balance].filter(Boolean);
  //   
  //       if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  //         gsap.set(all, { clearProps: "opacity,transform,filter" });
  //         return;
  //       }
  //   
  //       // a-36 — hero content (rise / slide + fade), per-element delay stagger.
  //       if (h1) gsap.fromTo(h1, { autoAlpha: 0, y: "5rem" }, { autoAlpha: 1, y: 0, duration: 0.7, delay: 0.1, ease: EASE });
  //       if (desc) gsap.fromTo(desc, { autoAlpha: 0, y: "5rem" }, { autoAlpha: 1, y: 0, duration: 0.5, delay: 0.2, ease: EASE });
  //       if (btn) gsap.fromTo(btn, { autoAlpha: 0, y: "5rem" }, { autoAlpha: 1, y: 0, duration: 0.7, delay: 0.3, ease: EASE });
  //       // avatars in DOM order: is-first .4, is-second .5, is-thirth .6, is-fourth .7
  //       const avatarDelays = [0.4, 0.5, 0.6, 0.7];
  //       avatars.forEach((a, i) =>
  //         gsap.fromTo(a, { autoAlpha: 0, x: "5rem" }, { autoAlpha: 1, x: 0, duration: 0.7, delay: avatarDelays[i] != null ? avatarDelays[i] : 0.4, ease: EASE }),
  //       );
  //       if (bottom) gsap.fromTo(bottom, { autoAlpha: 0, y: "5rem" }, { autoAlpha: 1, y: 0, duration: 0.7, delay: 0.5, ease: EASE });
  //   
  //       // a-49 — hero image split-unmask + de-scale + de-blur, then balance badge.
  //       // Use y:"%" (not yPercent) so the unit matches the inline translate3d(...,%) from-state.
  //       if (img) gsap.fromTo(img, { y: "-100%" }, { y: "0%", duration: 1.2, delay: 0.1, ease: EASE });
  //       if (imgContent) gsap.fromTo(imgContent, { y: "100%" }, { y: "0%", duration: 1.2, delay: 0.1, ease: EASE });
  //       if (innerImg) gsap.fromTo(innerImg, { scale: 1.5, filter: "blur(10px)" }, { scale: 1, filter: "blur(0px)", duration: 1.2, delay: 0.1, ease: EASE });
  //       if (balance) gsap.fromTo(balance, { scale: 0 }, { scale: 1, duration: 1.0, delay: 0.5, ease: EASE });
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
    <section className="dobra" data-dobra="precos-secao-102" ref={raiz}>
      <div className="page-wrapper">
          <div data-animation="default" className="navbar w-nav" data-easing2="ease-in-back" data-easing="ease-out" data-collapse="medium" data-w-id="9edf84aa-1c78-d247-2c17-fa546717f184" role="banner" data-no-scroll="1" data-duration="500">
            <div className="padding-global is-navbar">
              <div className="navbar_content">
                <a href="/" aria-current="page" className="navbar_logo-link w-nav-brand w--current"><img loading="lazy" src={s.imagem} alt="Clayo" className="navbar_logo" /></a>
                <div className="nav_wrap">
                  <nav role="navigation" className="nav_mobile w-nav-menu">
                    <div className="navbar_list">
                      <a href="/" aria-current="page" className="nav_links w-nav-link w--current">{s.acao}</a>
                      <a href="/about" className="nav_links w-nav-link">{s.acao2}</a>
                      <a href="/features" className="nav_links w-nav-link">{s.acao3}</a>
                      <a href="/pricing" className="nav_links w-nav-link">{s.acao4}</a>
                      <a href="/blog" className="nav_links w-nav-link">{s.acao5}</a>
                      <a href="/contact" className="nav_links w-nav-link">{s.acao6}</a>
                    </div>
                  </nav>
                </div>
                <div className="nav_buttons-wrap">
                  <div className="login-wrap hide-mobile-landscape">
                    <a data-w-id="76989604-8bdb-7cc7-5204-656ce5a8a981" href={s.destino || '#'} target="_blank" className="button w-inline-block">
                      <div className="button-background"></div>
                      <div className="button-text">Get Started</div>
                    </a>
                  </div>
                  <div className="menu-button w-nav-button">
                    <div className="nav-button_component">
                      <div className="nav-button_line is-first"></div>
                      <div className="nav-button_line is-second"></div>
                      <div className="nav-button_line is-third"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
          <div className="section_hero">
            <div className="padding-global">
              <div className="container-large">
                <div data-w-id="4695cb39-d177-6352-49b0-11a5c85b440c" className="w-layout-grid hero_grid">
                  <div id="w-node-_53f9fcca-613e-6711-00d9-9582417f1a74-88febfb7" className="hero_content-wrapper">
                    <div className="hero_header">
                      <div className="header">
                        <h1 className="heading-style-h1 is-hero-one">{s.titulo}</h1>
                        <div className="text-color-secondary is-hero-one-description">Easily adapt to changes and scale your operations with our flexible infrastructure, designed to support your business growth.</div>
                      </div>
                      <div className="hero_button-wrapper">
                        <a data-w-id="76989604-8bdb-7cc7-5204-656ce5a8a981" href={s.destino2 || '#'} target="_blank" rel="noopener noreferrer" className="button w-inline-block">
                          <div className="button-background"></div>
                          <div className="button-text">Get Started</div>
                        </a>
                      </div>
                    </div>
                    <div className="hero_users-content">
                      <div className="hero_info-wrapper">
                        <div className="hero_info is-first"><img src={s.imagem2} loading="lazy" alt="" className="img" /></div>
                        <div className="hero_info is-second"><img src={s.imagem3} loading="lazy" alt="" className="img" /></div>
                        <div className="hero_info is-thirth"><img src={s.imagem4} loading="lazy" alt="" className="img" /></div>
                        <div className="hero_info is-fourth">
                          <div className="text-sm">10K+</div>
                        </div>
                      </div>
                      <div className="text-color-secondary is-hero-bottom-text">10.000+ people already joined the Advisory</div>
                    </div>
                  </div>
                  <div data-w-id="16277c67-cf38-4282-f4d1-271925f161dd" className="hero_image-wrapper">
                    <div className="hero_img">
                      <div className="hero_img-content"><img src={s.imagem5} loading="eager" fetchpriority="high" alt="" className="img is-hero-one" /></div>
                    </div>
                    <div className="hero_balance"><img src={s.imagem6} loading="lazy" alt="" className="img" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}