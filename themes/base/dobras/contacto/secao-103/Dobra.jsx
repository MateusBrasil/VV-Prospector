"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-103
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
  //   /* Genovas — Hero (home variant).
  //      Animation + behavior live in the shared classic scripts loaded before this file:
  //        /genovas/scripts/hero-home.js  → letter-ladder headline, image stagger, navbar fade-in
  //        /genovas/scripts/navbar.js     → mobile menu toggle
  //      Nothing to boot here. */
  //   
  //   /**
  //    * Genovas navbar — mobile menu open/close toggle.
  //    * Extracted from Navbar.astro inline <script>. No GSAP (Rule 22).
  //    */
  //   (function () {
  //     function init() {
  //       var navbar = document.querySelector(".navbar.w-nav");
  //       var toggle = document.querySelector("[data-nav-toggle]");
  //   
  //       if (navbar && toggle) {
  //         var setOpen = function (open) {
  //           navbar.classList.toggle("is-open", open);
  //           toggle.classList.toggle("w--open", open);
  //           toggle.setAttribute("aria-expanded", String(open));
  //           toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  //         };
  //   
  //         toggle.addEventListener("click", function (e) {
  //           e.stopPropagation();
  //           setOpen(!navbar.classList.contains("is-open"));
  //         });
  //   
  //         // Close on Escape
  //         document.addEventListener("keydown", function (e) {
  //           if (e.key === "Escape" && navbar.classList.contains("is-open")) {
  //             setOpen(false);
  //             toggle.focus();
  //           }
  //         });
  //   
  //         // Close on click outside the navbar
  //         document.addEventListener("click", function (e) {
  //           if (!navbar.classList.contains("is-open")) return;
  //           if (!navbar.contains(e.target)) setOpen(false);
  //         });
  //   
  //         // Close after tapping any nav link
  //         navbar.querySelectorAll(".nav_mobile a").forEach(function (a) {
  //           a.addEventListener("click", function () {
  //             return setOpen(false);
  //           });
  //         });
  //       }
  //     }
  //   
  //     if (document.readyState === "loading") {
  //       document.addEventListener("DOMContentLoaded", init);
  //     } else {
  //       init();
  //     }
  //   })();
  //   
  //   /**
  //    * Hero home — Action list a-68 "Home Hero three" (PAGE_FINISH)
  //    * GSAP loaded as a global via CDN.
  //    */
  //   (function () {
  //     function init() {
  //       var REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  //       var EASE = "circ.out"; // outCirc
  //       var EASE_TITLE = "power4.out"; // outQuart for title-wrap move
  //   
  //       var hero = document.querySelector(".container-box.is-hero.is-home-three");
  //       if (!hero) return; // Not on home page
  //   
  //       // Split "Genovas" h1 into letter spans if not already split
  //       var h1 = hero.querySelector(".hero_title");
  //       if (h1 && !h1.querySelector("span")) {
  //         var text = (h1.textContent && h1.textContent.trim()) || "";
  //         h1.innerHTML = "";
  //         var letterClasses = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  //         text.split("").forEach(function (char, i) {
  //           var span = document.createElement("span");
  //           span.className = letterClasses[i] || "";
  //           span.textContent = char;
  //           span.style.display = "inline-block";
  //           h1.appendChild(span);
  //         });
  //       }
  //   
  //       // Element refs
  //       var titleWrap = hero.querySelector(".hero_title-wrap");
  //       var research = hero.querySelector(".hero_research");
  //       var letters = (h1 && h1.querySelectorAll("span")) || null;
  //       var tag = hero.querySelector(".tag-wrap.is-hero-tag");
  //       var heroImgs = hero.querySelectorAll(".hero_img-wrap .hero_img");
  //       var navbar = document.querySelector(".navbar");
  //   
  //       if (REDUCED_MOTION) return;
  //   
  //       // ============================================
  //       // INITIAL STATES (Group 0)
  //       // ============================================
  //       if (letters && letters.length) {
  //         gsap.set(letters, { opacity: 0, filter: "blur(40px)", xPercent: 150 });
  //       }
  //       if (titleWrap) gsap.set(titleWrap, { yPercent: 40 });
  //       if (research) gsap.set(research, { opacity: 0 });
  //       if (heroImgs.length) gsap.set(heroImgs, { opacity: 0 });
  //       if (tag) gsap.set(tag, { opacity: 0 });
  //       if (navbar) gsap.set(navbar, { opacity: 0 });
  //       gsap.set(hero, { backgroundColor: "rgb(241,241,241)" });
  //   
  //       // ============================================
  //       // TRANSITIONS (Group 1) — verbatim from source
  //       // ============================================
  //       var tl = gsap.timeline();
  //   
  //       // Letters — each has 3 simultaneous ops: opacity, filter, transform
  //       var letterDelays = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6]; // G/e/n/o/v/a/s
  //       if (letters) {
  //         letters.forEach(function (letter, i) {
  //           var d = letterDelays[i];
  //           if (d === undefined) return;
  //           tl.to(letter, { opacity: 1, duration: 0.1, ease: EASE }, d);
  //           tl.to(letter, { filter: "blur(0px)", duration: 0.5, ease: EASE }, d);
  //           tl.to(letter, { xPercent: 0, duration: 0.5, ease: EASE }, d);
  //         });
  //       }
  //   
  //       // Eyebrow "Research" — delay 400, dur 1000
  //       if (research) tl.to(research, { opacity: 1, duration: 1.0, ease: EASE }, 0.4);
  //   
  //       // Tag-wrap — delay 600, dur 1000
  //       if (tag) tl.to(tag, { opacity: 1, duration: 1.0, ease: EASE }, 0.6);
  //   
  //       // Title-wrap move — delay 800, dur 1000, outQuart
  //       if (titleWrap) tl.to(titleWrap, { yPercent: 0, duration: 1.0, ease: EASE_TITLE }, 0.8);
  //   
  //       // Hero images — staggered 200ms apart starting at 900, each 100ms fade
  //       var imgDelays = [0.9, 1.1, 1.3, 1.5];
  //       heroImgs.forEach(function (img, i) {
  //         var d = imgDelays[i];
  //         if (d === undefined) return;
  //         tl.to(img, { opacity: 1, duration: 0.1, ease: EASE }, d);
  //       });
  //   
  //       // Container background-color shift — delay 1500, dur 800
  //       tl.to(hero, { backgroundColor: "rgb(255,255,255)", duration: 0.8, ease: EASE }, 1.5);
  //   
  //       // Navbar — delay 1600, dur 1000
  //       if (navbar) tl.to(navbar, { opacity: 1, duration: 1.0, ease: EASE }, 1.6);
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
    <section className="dobra" data-dobra="contacto-secao-103" ref={raiz}>
      <div className="page-wrapper main-wrapper">
          <div data-animation="default" className="navbar w-nav" data-easing2="ease-out" data-easing="ease-out" data-collapse="medium" data-w-id="e7d4d26f-d31a-9c04-c358-7f118264cca4" role="banner" data-no-scroll="1" data-duration="500">
            <div className="padding-global is-navbar">
              <div className="navbar_content">
                <a href="/" className="navbar_logo-link w-nav-brand w--current">
                  <img loading="lazy" src={s.imagem} alt="Genovas" className="navbar_logo" />
                </a>
                <div className="nav_wrap">
                  <nav role="navigation" className="nav_mobile w-nav-menu">
                    <div className="navbar_list">
                      <a href="/" className="nav_links w-nav-link w--current" aria-current="page">{s.acao}</a>
                      <a href="/about" className="nav_links w-nav-link">{s.acao2}</a>
                      <a href="/services" className="nav_links w-nav-link">{s.acao3}</a>
                      <a href="/blog" className="nav_links w-nav-link">{s.acao4}</a>
                      <a href="/contact" className="nav_links w-nav-link">{s.acao5}</a>
                    </div>
                  </nav>
                </div>
                <div className="nav_buttons-wrap">
                  <div className="login-wrap hide-mobile-landscape">
                    <a data-w-id="0d534c1f-9815-d0a7-c90c-3d1656c11977" href="/contact" className="button w-inline-block">
                      <div className="button-text-wrap">
                        <div className="button-text is-firts">Contact us</div>
                        <div className="button-text is-second">Contact us</div>
                        <div className="button-shadow-up"></div>
                        <div className="button-shadow-down"></div>
                      </div>
                      <img loading="lazy" src={s.imagem2} alt="" className="button-icon" />
                    </a>
                  </div>
                  <button type="button" className="menu-button w-nav-button" aria-label="Open menu" aria-expanded="false" aria-controls="primary-nav" data-nav-toggle="" onClick={s.onClick}>
                    <div className="nav-button_component">
                      <div className="nav-button_line is-first"></div>
                      <div className="nav-button_line is-second"></div>
                      <div className="nav-button_line is-third"></div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
      
          <section className="section_hero">
            <div className="padding-global is-gap">
              <div data-w-id="1e4dfca2-2113-c880-610d-98ec11431dfc" className="container-box is-hero is-home-three">
                <div className="hero_content-wrap is-home-three">
                  <div data-w-id="1e4dfca2-2113-c880-610d-98ec11431dfe" className="hero_title-wrap">
                    <div data-w-id="1e4dfca2-2113-c880-610d-98ec11431dff" className="hero_research">
                      Research-driven biotech advisory
                    </div>
                    <h1 className="hero_title">{s.titulo}</h1>
                    <div data-w-id="1e4dfca2-2113-c880-610d-98ec11431e10" className="tag-wrap is-hero-tag">
                      <img src={s.imagem3} loading="lazy" alt="" className="img" />
                    </div>
                  </div>
      
                  <div className="hero_img-wrap">
                    <div data-w-id="home-hero-img-0" className="hero_img">
                      <img src={s.imagem4} loading="eager" fetchpriority="high" sizes="100vw" alt="Scientist examining samples in a biotech laboratory" className="img" />
                    </div>
                    <div data-w-id="home-hero-img-1" className="hero_img is-two">
                      <img src={s.imagem5} loading="eager" fetchpriority="auto" sizes="100vw" alt="Researchers reviewing genomic data on screen" className="img" />
                    </div>
                    <div data-w-id="home-hero-img-2" className="hero_img is-three">
                      <img src={s.imagem6} loading="eager" fetchpriority="auto" sizes="100vw" alt="Close-up of laboratory pipetting equipment" className="img" />
                    </div>
                    <div data-w-id="home-hero-img-3" className="hero_img is-four">
                      <img src={s.imagem7} loading="eager" fetchpriority="auto" sizes="100vw" alt="Team meeting in a modern biotech office" className="img" />
                    </div>
                  </div>
      
                  <div className="hero-cta">
                    <div data-w-id="1e4dfca2-2113-c880-610d-98ec11431e1c" className="text-base">
                      We help biotech founders and life-science teams turn early research into
                      fundable, regulator-ready ventures.
                    </div>
                    <div className="button-wrap">
                      <a data-w-id="0d534c1f-9815-d0a7-c90c-3d1656c11977" href="/contact" className="button w-inline-block">
                        <div className="button-text-wrap">
                          <div className="button-text is-firts">Get in touch</div>
                          <div className="button-text is-second">Get in touch</div>
                          <div className="button-shadow-up"></div>
                          <div className="button-shadow-down"></div>
                        </div>
                        <img loading="lazy" src={s.imagem8} alt="" className="button-icon" />
                      </a>
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