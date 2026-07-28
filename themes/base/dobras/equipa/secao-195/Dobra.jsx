"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-195
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Dobra.css';
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* ⚠ REVER: o JS de origem está abaixo em bruto (categoria: global-duro).
   * A esteira NÃO o converte sozinha, e nesta categoria escopar ao `raiz.current` NÃO
   * chega: o código assume que é dono da página (window/document.body/listeners de
   * load|resize|scroll), ou traz import/export, ou monta um canvas WebGL. Converter às
   * cegas produz animação que corre no elemento errado, que é pior que animação
   * nenhuma. Precisa de reescrita, não de troca de prefixo. */
  useGSAP(() => {
  //   (function () {
  //     'use strict';
  //   
  //     var gsap = window.gsap;
  //     var Swiper = window.Swiper;
  //   
  //     // ── Swiper init ───────────────────────────────────────────────────────
  //     // Slide engine — Swiper handles the actual transitions (fade with
  //     // crossfade, loop, keyboard arrows). Each section gets its own Swiper
  //     // instance so multiple Testimonials components on a page don't share a
  //     // controller.
  //     function initSwiper() {
  //       if (typeof Swiper === 'undefined') return;
  //   
  //       document.querySelectorAll('.testimonials').forEach(function (section) {
  //         var slider = section.querySelector('.testimonials__slider');
  //         var prev = section.querySelector('[data-prev]');
  //         var next = section.querySelector('[data-next]');
  //         if (!slider || !prev || !next) return;
  //   
  //         new Swiper(slider, {
  //           effect: 'fade',
  //           fadeEffect: { crossFade: true },
  //           speed: 700,
  //           loop: true,
  //           autoHeight: true,
  //           keyboard: { enabled: true, onlyInViewport: true },
  //           navigation: { prevEl: prev, nextEl: next },
  //         });
  //       });
  //     }
  //   
  //     // ── Nav button micro-interactions ─────────────────────────────────────
  //     // GSAP nav animations — replaces the CSS hover transition with a richer
  //     // micro-interaction: scale-up + colour shift on hover, a quick squash on
  //     // press, and a directional icon nudge whenever Swiper transitions.
  //     function initTestimonialsNavAnim() {
  //       if (typeof gsap === 'undefined') return;
  //       var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  //   
  //       document.querySelectorAll('.testimonials').forEach(function (section) {
  //         var prev = section.querySelector('[data-prev]');
  //         var next = section.querySelector('[data-next]');
  //         var slider = section.querySelector('.testimonials__slider');
  //         if (!prev || !next || !slider) return;
  //   
  //         // Touch viewports skip the hover/press bindings entirely. On touch
  //         // devices a tap fires mouseenter+mouseleave around the tap, leaving
  //         // the button flashing through the hover state. Keyboard focus/blur
  //         // and the slide nudge both stay on.
  //         var allowHover = window.matchMedia(
  //           '(min-width: 992px) and (hover: hover) and (pointer: fine)'
  //         ).matches;
  //   
  //         function bindButton(btn, dirSign) {
  //           if (reduce) return { nudge: function () {} };
  //   
  //           var animTo = function (vars) {
  //             var merged = Object.assign(
  //               { duration: 0.35, ease: 'power3.out', overwrite: 'auto' },
  //               vars
  //             );
  //             return gsap.to(btn, merged);
  //           };
  //   
  //           if (allowHover) {
  //             btn.addEventListener('mouseenter', function () { animTo({ scale: 1.08 }); });
  //             btn.addEventListener('mouseleave', function () { animTo({ scale: 1, x: 0 }); });
  //             btn.addEventListener('pointerdown', function () { animTo({ scale: 0.92, duration: 0.18 }); });
  //             btn.addEventListener('pointerup', function () { animTo({ scale: 1.08 }); });
  //           }
  //           btn.addEventListener('focus', function () { animTo({ scale: 1.08 }); });
  //           btn.addEventListener('blur', function () { animTo({ scale: 1, x: 0 }); });
  //   
  //           // `nudge()` runs whenever Swiper changes slide — the matching
  //           // button (prev or next) slides briefly in its own direction then
  //           // returns.
  //           return {
  //             nudge: function () {
  //               gsap.fromTo(
  //                 btn,
  //                 { x: dirSign * -6 },
  //                 { x: 0, duration: 0.5, ease: 'power3.out', overwrite: 'auto' }
  //               );
  //             },
  //           };
  //         }
  //   
  //         var prevAnim = bindButton(prev, -1);
  //         var nextAnim = bindButton(next, +1);
  //   
  //         // Listen for Swiper slide changes. The Swiper instance is attached
  //         // to the .swiper element as `.swiper` — we wait a tick to grab it.
  //         var lastIndex = -1;
  //         var tick = function () {
  //           var swiperInst = slider.swiper;
  //           if (!swiperInst) {
  //             requestAnimationFrame(tick);
  //             return;
  //           }
  //           lastIndex = swiperInst.realIndex;
  //           swiperInst.on('slideChange', function () {
  //             var cur = swiperInst.realIndex;
  //             var dir = cur - lastIndex;
  //             if (dir > 1) dir = -1;       // wrapped from last → first
  //             if (dir < -1) dir = 1;       // wrapped from first → last
  //             if (dir > 0) nextAnim.nudge();
  //             else if (dir < 0) prevAnim.nudge();
  //             lastIndex = cur;
  //           });
  //         };
  //         requestAnimationFrame(tick);
  //       });
  //     }
  //   
  //     // ── Cascading entrance ────────────────────────────────────────────────
  //     // Image reveals top-down via a curtain (height 0 → 100% on the inner
  //     // wrapper, paired with a 1.05 → 1 image zoom), text drops in line-by-
  //     // line (y: -16 → 0 with stagger), and the nav arrows scale 0.5 → 1 with
  //     // a fade. Triggered once via IntersectionObserver.
  //     function initTestimonialsEntrance() {
  //       if (typeof gsap === 'undefined') return;
  //       var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  //   
  //       document.querySelectorAll('.testimonials').forEach(function (section) {
  //         var firstSlide = section.querySelector('.swiper-slide');
  //         if (!firstSlide) return;
  //   
  //         var imageReveal = firstSlide.querySelector('.testimonials__imageReveal');
  //         var image = firstSlide.querySelector('.testimonials__image');
  //         var quote = firstSlide.querySelector('.testimonials__quote');
  //         var authorName = firstSlide.querySelector('.testimonials__authorName');
  //         var authorTitle = firstSlide.querySelector('.testimonials__authorTitle');
  //         var navBtns = section.querySelectorAll('.testimonials__navBtn');
  //   
  //         if (reduce) return; // respect user preference
  //   
  //         var textBlocks = [quote, authorName, authorTitle].filter(Boolean);
  //   
  //         // Prime initial states.
  //         if (imageReveal) gsap.set(imageReveal, { height: 0 });
  //         if (image) gsap.set(image, { scale: 1.05 });
  //         if (textBlocks.length) gsap.set(textBlocks, { y: -16, autoAlpha: 0 });
  //         if (navBtns.length) {
  //           gsap.set(navBtns, { scale: 0.5, autoAlpha: 0, transformOrigin: 'center center' });
  //         }
  //   
  //         var playEntrance = function () {
  //           var tl = gsap.timeline();
  //   
  //           // 0.00s — curtain unroll paired with subtle image zoom-out.
  //           if (imageReveal) {
  //             tl.to(imageReveal, {
  //               height: '100%',
  //               duration: 1.1,
  //               ease: 'power3.out',
  //             }, 0);
  //           }
  //           if (image) {
  //             tl.to(image, {
  //               scale: 1,
  //               duration: 1.1,
  //               ease: 'power3.out',
  //             }, 0);
  //           }
  //   
  //           // 0.20s — quote + author drop in as whole blocks, staggered.
  //           if (textBlocks.length) {
  //             tl.to(textBlocks, {
  //               y: 0,
  //               autoAlpha: 1,
  //               duration: 0.8,
  //               ease: 'power3.out',
  //               stagger: 0.15,
  //             }, 0.2);
  //           }
  //   
  //           // 0.60s — nav arrows scale-in last.
  //           if (navBtns.length) {
  //             tl.to(navBtns, {
  //               scale: 1,
  //               autoAlpha: 1,
  //               duration: 0.55,
  //               ease: 'power3.out',
  //               stagger: 0.08,
  //             }, 0.6);
  //           }
  //         };
  //   
  //         var io = new IntersectionObserver(function (entries, obs) {
  //           for (var i = 0; i < entries.length; i++) {
  //             if (entries[i].isIntersecting) {
  //               playEntrance();
  //               obs.disconnect();
  //               break;
  //             }
  //           }
  //         }, { threshold: 0.15 });
  //         io.observe(section);
  //       });
  //     }
  //   
  //     // Boot order: init Swiper first, then wait for window.load so Swiper's
  //     // autoHeight layout has settled before we register the entrance + nav
  //     // animations. Without this, measurements are taken against a 0-height
  //     // section and the entrance never fires.
  //     function bootTestimonials() {
  //       initSwiper();
  //       initTestimonialsEntrance();
  //       initTestimonialsNavAnim();
  //     }
  //   
  //     if (document.readyState === 'complete') {
  //       bootTestimonials();
  //     } else {
  //       window.addEventListener('load', bootTestimonials, { once: true });
  //     }
  //   })();
  //   
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="equipa-secao-195" ref={raiz}>
      <section className="testimonials testimonials--light" aria-label="Testimonials">
          <div className="testimonials__inner">
            <div className="testimonials__label">
              <span className="testimonials__labelDot" aria-hidden="true"></span>
              <span className="testimonials__labelText">{s.rotulo}</span>
            </div>
      
            <div className="testimonials__content" data-testimonial-wrap="" data-autoplay="false" data-autoplay-duration="5000">
              <div className="swiper testimonials__slider">
                <div className="swiper-wrapper">
                  <article className="swiper-slide testimonials__slide" aria-roledescription="slide" aria-label="1 of 4">
                    <div className="testimonials__imageWrap">
                      <div className="testimonials__imageReveal">
                        <img src={s.imagem} alt="John Doe, CEO of Tech Innovations" width="552" height="552" className="testimonials__image" loading="lazy" />
                      </div>
                    </div>
      
                    <blockquote className="testimonials__quote">
                      “They brought clarity to complex problems, breaking down barriers and delivering innovative solutions. I was truly impressed by how quickly their strategies turned into real, tangible outcomes, driving measurable growth and success for our business.”
                    </blockquote>
      
                    <footer className="testimonials__author">
                      <p className="testimonials__authorName">{s.texto}</p>
                      <p className="testimonials__authorTitle">{s.texto2}</p>
                    </footer>
                  </article>
      
                  <article className="swiper-slide testimonials__slide" aria-roledescription="slide" aria-label="2 of 4">
                    <div className="testimonials__imageWrap">
                      <div className="testimonials__imageReveal">
                        <img src={s.imagem2} alt="Jane Smith, Head of Strategy at GrowthCo" width="552" height="552" className="testimonials__image" loading="lazy" />
                      </div>
                    </div>
      
                    <blockquote className="testimonials__quote">
                      “Their team reshaped the way we approach decision-making. Every recommendation was grounded in data and delivered with a clarity that made execution effortless across our entire organization.”
                    </blockquote>
      
                    <footer className="testimonials__author">
                      <p className="testimonials__authorName">{s.texto3}</p>
                      <p className="testimonials__authorTitle">{s.texto4}</p>
                    </footer>
                  </article>
      
                  <article className="swiper-slide testimonials__slide" aria-roledescription="slide" aria-label="3 of 4">
                    <div className="testimonials__imageWrap">
                      <div className="testimonials__imageReveal">
                        <img src={s.imagem3} alt="Michael Chen, COO of BrightPath Consulting" width="552" height="552" className="testimonials__image" loading="lazy" />
                      </div>
                    </div>
      
                    <blockquote className="testimonials__quote">
                      “Working with them felt like adding a senior partner to our leadership team. They challenged our assumptions, refined our roadmap, and helped us scale with confidence.”
                    </blockquote>
      
                    <footer className="testimonials__author">
                      <p className="testimonials__authorName">{s.texto5}</p>
                      <p className="testimonials__authorTitle">{s.texto6}</p>
                    </footer>
                  </article>
      
                  <article className="swiper-slide testimonials__slide" aria-roledescription="slide" aria-label="4 of 4">
                    <div className="testimonials__imageWrap">
                      <div className="testimonials__imageReveal">
                        <img src={s.imagem4} alt="David Thompson, Head of Growth at Veridian Digital" width="552" height="552" className="testimonials__image" loading="lazy" />
                      </div>
                    </div>
      
                    <blockquote className="testimonials__quote">
                      “They didn’t just offer advice; they embedded themselves into our workflow. Their ability to dissect our bottlenecks and implement high-impact strategies allowed us to triple our acquisition rate while staying lean.”
                    </blockquote>
      
                    <footer className="testimonials__author">
                      <p className="testimonials__authorName">{s.texto7}</p>
                      <p className="testimonials__authorTitle">{s.texto8}</p>
                    </footer>
                  </article>
                </div>
              </div>
      
              <div className="testimonials__nav" role="group" aria-label="Testimonial navigation">
                <button type="button" className="testimonials__navBtn testimonials__navBtn--prev" aria-label="Previous testimonial" data-prev="" onClick={s.onClick}>
                  <span className="testimonials__navIcon" aria-hidden="true">
                    <svg viewBox="0 0 10 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.292893 10.7071C-0.0976311 10.3166 -0.0976311 9.68342 0.292893 9.29289L8.58579 1L9.99999 2.41421L2.41421 10L9.99999 17.5858L8.58579 19L0.292893 10.7071Z"></path>
                    </svg>
                  </span>
                </button>
                <button type="button" className="testimonials__navBtn" aria-label="Next testimonial" data-next="" onClick={s.onClick}>
                  <span className="testimonials__navIcon" aria-hidden="true">
                    <svg viewBox="0 0 10 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.292893 10.7071C-0.0976311 10.3166 -0.0976311 9.68342 0.292893 9.29289L8.58579 1L9.99999 2.41421L2.41421 10L9.99999 17.5858L8.58579 19L0.292893 10.7071Z"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
    </section>
  );
}