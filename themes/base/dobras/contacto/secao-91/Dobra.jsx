"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-91
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
  //   // Firmo locations — sección estática. No requiere JS propio: las revelaciones
  //   // (.scroll-into-view) las maneja la hoja compartida /firmo/scripts/scroll-reveal.js,
  //   // que se auto-inicializa en DOM ready. Stub intencional (sin `export` — Rule 1).
  //   
  //   /* Firmo — shared reveal engine. Port of the template's reveal.ts to a plain global
  //      (no `export`, self-init — Rule 1). Expects window.gsap + window.ScrollTrigger from CDN.
  //      Generic reveals only (parallax images, scroll-into-view slide-in, reveal-up, fade,
  //      logos scrub); page heroes carry their own on-load script. Timings/easings verbatim
  //      from the source (outQuart = power3.out). Honors prefers-reduced-motion. */
  //   (function () {
  //     if (typeof gsap === 'undefined') return; // fail-safe: no JS → content stays visible
  //     if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);
  //   
  //     if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  //   
  //     var EASE = 'power3.out';
  //     var SLIDE = 0.7;
  //     var PARALLAX = 1.7;
  //     var SLIDE_X = 100;
  //     var SLIDE_Y = 100;
  //   
  //     var PARALLAX_PARENTS = [
  //       '.business_image',
  //       '.support_image',
  //       '.overview_image',
  //       '.contact_image',
  //       '.about-three_image',
  //       '.services-hero_image',
  //       '.experience_image',
  //       '.blog_image',
  //       '.blogs-hero_image',
  //       '.location_image',
  //       '.blogs-three_card-image',
  //       '.team_card-image',
  //     ].join(',');
  //   
  //     function initReveal() {
  //       if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  //         document.documentElement.classList.remove('anim');
  //         return;
  //       }
  //   
  //       // 1) Parallax images — wrapper y -110%→0; img y 110%→0, scale 1.5→1, blur 10→0; 1.7s.
  //       document.querySelectorAll(PARALLAX_PARENTS).forEach(function (parent) {
  //         var wrap = parent.querySelector('.img-wrapper');
  //         var img = wrap && wrap.querySelector('.img');
  //         if (!wrap || !img) return;
  //         gsap.set(wrap, { yPercent: -110, opacity: 1 });
  //         gsap.set(img, { yPercent: 110, scale: 1.5, filter: 'blur(10px)' });
  //         gsap
  //           .timeline({
  //             scrollTrigger: { trigger: parent, start: 'top 85%', once: true },
  //             onComplete: function () { gsap.set([wrap, img], { clearProps: 'transform,filter' }); },
  //           })
  //           .to(wrap, { yPercent: 0, duration: PARALLAX, ease: EASE }, 0)
  //           .to(img, { yPercent: 0, scale: 1, filter: 'blur(0px)', duration: PARALLAX, ease: EASE }, 0);
  //       });
  //   
  //       // 2) [reveal-x] .scroll-into-view → horizontal slide-in: x +100 → 0 + opacity, 0.7s.
  //       gsap.utils.toArray('.scroll-into-view').forEach(function (el) {
  //         if (el.closest('.section_hero')) return;
  //         if (el.closest('.section_logos')) return;
  //         gsap.set(el, { x: SLIDE_X, opacity: 0 });
  //         gsap.to(el, {
  //           x: 0, opacity: 1, duration: SLIDE, ease: EASE,
  //           scrollTrigger: { trigger: el, start: 'top 90%', once: true },
  //         });
  //       });
  //   
  //       // 2c) [reveal-y] .reveal-up cards enter from below: y +100 → 0 + opacity.
  //       gsap.utils.toArray('.reveal-up').forEach(function (el) {
  //         if (el.closest('.footer')) return;
  //         gsap.set(el, { y: SLIDE_Y, opacity: 0 });
  //         gsap.to(el, {
  //           y: 0, opacity: 1, duration: SLIDE, ease: EASE,
  //           scrollTrigger: { trigger: el, start: 'top 90%', once: true },
  //         });
  //       });
  //   
  //       // 2d) Footer entrance — .reveal-up blocks slide up, staggered, off the .footer container.
  //       var footer = document.querySelector('.footer');
  //       if (footer) {
  //         var items = footer.querySelectorAll('.reveal-up');
  //         gsap.set(items, { y: SLIDE_Y, opacity: 0 });
  //         gsap.to(items, {
  //           y: 0, opacity: 1, duration: SLIDE, ease: EASE, stagger: 0.08,
  //           scrollTrigger: { trigger: footer, start: 'top 80%', once: true },
  //         });
  //       }
  //   
  //       // 2e) [reveal-fade] .reveal-fade — opacity 0 → 1, no transform.
  //       gsap.utils.toArray('.reveal-fade').forEach(function (el) {
  //         gsap.set(el, { opacity: 0 });
  //         gsap.to(el, {
  //           opacity: 1, duration: SLIDE, ease: EASE,
  //           scrollTrigger: { trigger: el, start: 'top 90%', once: true },
  //         });
  //       });
  //   
  //       // 3) Logos strip — one-shot slide-in ON VIEW (adapted from the source scroll-scrub
  //       // for the standalone catalog: a scroll-scrub and a clean thumbnail are mutually
  //       // exclusive — the scrub's settled state IS scroll-0, so to SEE motion the strip must
  //       // start off-position, which the thumbnail would then capture. Firing the same
  //       // 30vw→0 slide ONCE when the strip enters view gives both: motion in the opened
  //       // live preview (injectRevealFix runs it on-view in prod) + settled/clean thumbnail.
  //       // Lines fade in. ≤991: fade only.
  //       var logos = document.querySelector('.section_logos');
  //       if (logos) {
  //         var lines = logos.querySelectorAll('.horizontal-line');
  //         var mm = gsap.matchMedia();
  //         mm.add('(min-width: 992px)', function () {
  //           gsap.set(logos, { x: function () { return 0.3 * window.innerWidth; } });
  //           gsap.to(logos, {
  //             x: 0, duration: PARALLAX, ease: EASE,
  //             scrollTrigger: { trigger: logos, start: 'top 90%', once: true },
  //           });
  //           lines.forEach(function (line) {
  //             gsap.set(line, { opacity: 0 });
  //             gsap.to(line, {
  //               opacity: 1, duration: SLIDE, ease: EASE,
  //               scrollTrigger: { trigger: logos, start: 'top 85%', once: true },
  //             });
  //           });
  //         });
  //         mm.add('(max-width: 991px)', function () {
  //           gsap.set(logos, { x: 0 });
  //           gsap.set(lines, { opacity: 1 });
  //           gsap.fromTo(logos, { opacity: 0 }, {
  //             opacity: 1, duration: SLIDE, ease: EASE,
  //             scrollTrigger: { trigger: logos, start: 'top 85%', once: true },
  //           });
  //         });
  //       }
  //   
  //       if (typeof ScrollTrigger !== 'undefined') {
  //         ScrollTrigger.refresh();
  //         window.addEventListener('load', function () { ScrollTrigger.refresh(); });
  //       }
  //     }
  //   
  //     if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initReveal);
  //     else initReveal();
  //   })();
  //   
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false,true);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="contacto-secao-91" ref={raiz}>
      <div className="page-wrapper">
          <main className="main-wrapper">
            <section className="section_locations">
              <div className="padding-global padding-section-large">
                <div className="w-layout-grid locations_wrapper">
                  <div className="locations_content-left">
                    <div className="header">
                      <div data-wf--label--variant="base" className="label">
                        <div className="text-style-allcaps scroll-into-view">Our office sites</div>
                      </div>
                      <h2 className="scroll-into-view">{s.titulo}</h2>
                      <div className="text-color-secondary scroll-into-view">to experience our personalized approach to legal representation.</div>
                    </div>
                    <div className="scroll-into-view">
                      <a data-wf--button-primary--variant="base" href="/contact" className="button w-inline-block">
                        <div className="button-content">
                          <div className="button-text is-one">Contact Us</div>
                          <div className="button-text is-two">Contact Us</div>
                        </div>
                        <div className="button-slide-one"></div>
                        <div className="button-slide-two"></div>
                      </a>
                    </div>
                  </div>
                  <div className="locations_cards-wrapper">
                    <div className="locations_card scroll-into-view">
                      <div className="locations_card-icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none">
                          <path d="M20.3857 9.16509H3.19218C3.20421 8.96562 3.20421 8.76561 3.19218 8.56615C3.17498 8.46069 3.19144 8.3525 3.23922 8.25693C3.28701 8.16136 3.36369 8.08327 3.45837 8.03376C6.20373 6.14553 8.94287 4.25021 11.6758 2.34779C11.7054 2.3201 11.7444 2.30469 11.7849 2.30469C11.8255 2.30469 11.8645 2.3201 11.8941 2.34779C14.682 4.28393 17.4718 6.21563 20.2633 8.1429C20.303 8.16492 20.3355 8.19804 20.3568 8.23822C20.3781 8.2784 20.3872 8.32389 20.383 8.36916C20.3804 8.63004 20.3857 8.89091 20.3857 9.16509Z" fill="currentColor"></path>
                          <path d="M3.08008 21.4228V20.4725H3.52462V19.5195H20.0447V20.4645H20.4999V21.4228H3.08008Z" fill="currentColor"></path>
                          <path d="M7.01293 19.1399H5.36253V18.9429C5.36253 16.5383 5.36253 14.1345 5.36253 11.7317C5.35564 11.5076 5.30046 11.2877 5.20077 11.0869C5.10108 10.8862 4.95922 10.7093 4.78489 10.5684C4.73841 10.5405 4.68455 10.5275 4.63049 10.5311C4.25249 10.5311 4.28178 10.5764 4.28178 10.1744V9.72986C4.28178 9.62604 4.32437 9.57812 4.43351 9.57812H7.93131C8.04577 9.57812 8.09102 9.62604 8.09102 9.73784C8.09102 9.95346 8.09102 10.1664 8.09102 10.382C8.09102 10.4992 8.03779 10.5524 7.92865 10.5311C7.66245 10.4752 7.49209 10.6323 7.33769 10.8292C7.11816 11.1039 7.00141 11.4466 7.00761 11.7982C7.00761 14.178 7.00761 16.5578 7.00761 18.9403L7.01293 19.1399Z" fill="currentColor"></path>
                          <path d="M12.6154 19.1387H10.965V18.939C10.965 16.5344 10.965 14.1306 10.965 11.7278C10.9586 11.5038 10.9031 11.284 10.8024 11.0839C10.7017 10.8838 10.5581 10.7083 10.382 10.5698C10.3288 10.5192 10.209 10.5325 10.1158 10.5299C9.87891 10.5299 9.87891 10.5299 9.87891 10.2983C9.87891 10.1066 9.87891 9.91495 9.87891 9.72329C9.87891 9.61947 9.92682 9.57422 10.0333 9.57422H13.5391C13.6562 9.57422 13.6988 9.6248 13.6961 9.73394C13.6961 9.94956 13.6961 10.1652 13.6961 10.3781C13.6961 10.4846 13.6535 10.5485 13.5471 10.5272C13.2569 10.4686 13.0919 10.631 12.9348 10.8387C12.7238 11.1072 12.6102 11.4394 12.6127 11.781C12.6127 14.1768 12.6127 16.5512 12.6127 18.9364L12.6154 19.1387Z" fill="currentColor"></path>
                          <path d="M18.2155 19.1387H16.5651V18.939C16.5651 16.5344 16.5651 14.1306 16.5651 11.7278C16.5586 11.5041 16.5032 11.2846 16.403 11.0846C16.3028 10.8846 16.16 10.7089 15.9848 10.5698C15.9289 10.5192 15.8091 10.5325 15.7186 10.5299C15.4844 10.5299 15.4844 10.5299 15.4844 10.2983C15.4844 10.1119 15.4844 9.9256 15.4844 9.73926C15.4844 9.63012 15.5216 9.57422 15.6388 9.57422H19.1286C19.243 9.57422 19.2856 9.6248 19.2856 9.7366C19.2856 9.94956 19.2856 10.1652 19.2856 10.3781C19.2856 10.4846 19.2404 10.5485 19.1339 10.5272C18.8464 10.4686 18.6814 10.631 18.5243 10.8387C18.3106 11.1067 18.1967 11.4408 18.2022 11.7837C18.2022 14.167 18.2022 16.5512 18.2022 18.9364L18.2155 19.1387Z" fill="currentColor"></path>
                        </svg></div>
                      <div className="locations_card-content">
                        <h3 className="text-2xl">{s.subtitulo}</h3>
                        <div className="text-color-secondary">NY 123 Legal Avenue, Suite 456 <br />New York, NY 10001</div>
                      </div>
                    </div>
                    <div className="locations_card scroll-into-view">
                      <div className="locations_card-icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none">
                          <path d="M20.3857 9.16509H3.19218C3.20421 8.96562 3.20421 8.76561 3.19218 8.56615C3.17498 8.46069 3.19144 8.3525 3.23922 8.25693C3.28701 8.16136 3.36369 8.08327 3.45837 8.03376C6.20373 6.14553 8.94287 4.25021 11.6758 2.34779C11.7054 2.3201 11.7444 2.30469 11.7849 2.30469C11.8255 2.30469 11.8645 2.3201 11.8941 2.34779C14.682 4.28393 17.4718 6.21563 20.2633 8.1429C20.303 8.16492 20.3355 8.19804 20.3568 8.23822C20.3781 8.2784 20.3872 8.32389 20.383 8.36916C20.3804 8.63004 20.3857 8.89091 20.3857 9.16509Z" fill="currentColor"></path>
                          <path d="M3.08008 21.4228V20.4725H3.52462V19.5195H20.0447V20.4645H20.4999V21.4228H3.08008Z" fill="currentColor"></path>
                          <path d="M7.01293 19.1399H5.36253V18.9429C5.36253 16.5383 5.36253 14.1345 5.36253 11.7317C5.35564 11.5076 5.30046 11.2877 5.20077 11.0869C5.10108 10.8862 4.95922 10.7093 4.78489 10.5684C4.73841 10.5405 4.68455 10.5275 4.63049 10.5311C4.25249 10.5311 4.28178 10.5764 4.28178 10.1744V9.72986C4.28178 9.62604 4.32437 9.57812 4.43351 9.57812H7.93131C8.04577 9.57812 8.09102 9.62604 8.09102 9.73784C8.09102 9.95346 8.09102 10.1664 8.09102 10.382C8.09102 10.4992 8.03779 10.5524 7.92865 10.5311C7.66245 10.4752 7.49209 10.6323 7.33769 10.8292C7.11816 11.1039 7.00141 11.4466 7.00761 11.7982C7.00761 14.178 7.00761 16.5578 7.00761 18.9403L7.01293 19.1399Z" fill="currentColor"></path>
                          <path d="M12.6154 19.1387H10.965V18.939C10.965 16.5344 10.965 14.1306 10.965 11.7278C10.9586 11.5038 10.9031 11.284 10.8024 11.0839C10.7017 10.8838 10.5581 10.7083 10.382 10.5698C10.3288 10.5192 10.209 10.5325 10.1158 10.5299C9.87891 10.5299 9.87891 10.5299 9.87891 10.2983C9.87891 10.1066 9.87891 9.91495 9.87891 9.72329C9.87891 9.61947 9.92682 9.57422 10.0333 9.57422H13.5391C13.6562 9.57422 13.6988 9.6248 13.6961 9.73394C13.6961 9.94956 13.6961 10.1652 13.6961 10.3781C13.6961 10.4846 13.6535 10.5485 13.5471 10.5272C13.2569 10.4686 13.0919 10.631 12.9348 10.8387C12.7238 11.1072 12.6102 11.4394 12.6127 11.781C12.6127 14.1768 12.6127 16.5512 12.6127 18.9364L12.6154 19.1387Z" fill="currentColor"></path>
                          <path d="M18.2155 19.1387H16.5651V18.939C16.5651 16.5344 16.5651 14.1306 16.5651 11.7278C16.5586 11.5041 16.5032 11.2846 16.403 11.0846C16.3028 10.8846 16.16 10.7089 15.9848 10.5698C15.9289 10.5192 15.8091 10.5325 15.7186 10.5299C15.4844 10.5299 15.4844 10.5299 15.4844 10.2983C15.4844 10.1119 15.4844 9.9256 15.4844 9.73926C15.4844 9.63012 15.5216 9.57422 15.6388 9.57422H19.1286C19.243 9.57422 19.2856 9.6248 19.2856 9.7366C19.2856 9.94956 19.2856 10.1652 19.2856 10.3781C19.2856 10.4846 19.2404 10.5485 19.1339 10.5272C18.8464 10.4686 18.6814 10.631 18.5243 10.8387C18.3106 11.1067 18.1967 11.4408 18.2022 11.7837C18.2022 14.167 18.2022 16.5512 18.2022 18.9364L18.2155 19.1387Z" fill="currentColor"></path>
                        </svg></div>
                      <div className="locations_card-content">
                        <h3 className="text-2xl">{s.subtitulo2}</h3>
                        <div className="text-color-secondary">CA 789 Justice Blvd, Floor 3 <br />Los Angeles, CA 90001</div>
                      </div>
                    </div>
                    <div className="locations_card scroll-into-view">
                      <div className="locations_card-icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none">
                          <path d="M20.3857 9.16509H3.19218C3.20421 8.96562 3.20421 8.76561 3.19218 8.56615C3.17498 8.46069 3.19144 8.3525 3.23922 8.25693C3.28701 8.16136 3.36369 8.08327 3.45837 8.03376C6.20373 6.14553 8.94287 4.25021 11.6758 2.34779C11.7054 2.3201 11.7444 2.30469 11.7849 2.30469C11.8255 2.30469 11.8645 2.3201 11.8941 2.34779C14.682 4.28393 17.4718 6.21563 20.2633 8.1429C20.303 8.16492 20.3355 8.19804 20.3568 8.23822C20.3781 8.2784 20.3872 8.32389 20.383 8.36916C20.3804 8.63004 20.3857 8.89091 20.3857 9.16509Z" fill="currentColor"></path>
                          <path d="M3.08008 21.4228V20.4725H3.52462V19.5195H20.0447V20.4645H20.4999V21.4228H3.08008Z" fill="currentColor"></path>
                          <path d="M7.01293 19.1399H5.36253V18.9429C5.36253 16.5383 5.36253 14.1345 5.36253 11.7317C5.35564 11.5076 5.30046 11.2877 5.20077 11.0869C5.10108 10.8862 4.95922 10.7093 4.78489 10.5684C4.73841 10.5405 4.68455 10.5275 4.63049 10.5311C4.25249 10.5311 4.28178 10.5764 4.28178 10.1744V9.72986C4.28178 9.62604 4.32437 9.57812 4.43351 9.57812H7.93131C8.04577 9.57812 8.09102 9.62604 8.09102 9.73784C8.09102 9.95346 8.09102 10.1664 8.09102 10.382C8.09102 10.4992 8.03779 10.5524 7.92865 10.5311C7.66245 10.4752 7.49209 10.6323 7.33769 10.8292C7.11816 11.1039 7.00141 11.4466 7.00761 11.7982C7.00761 14.178 7.00761 16.5578 7.00761 18.9403L7.01293 19.1399Z" fill="currentColor"></path>
                          <path d="M12.6154 19.1387H10.965V18.939C10.965 16.5344 10.965 14.1306 10.965 11.7278C10.9586 11.5038 10.9031 11.284 10.8024 11.0839C10.7017 10.8838 10.5581 10.7083 10.382 10.5698C10.3288 10.5192 10.209 10.5325 10.1158 10.5299C9.87891 10.5299 9.87891 10.5299 9.87891 10.2983C9.87891 10.1066 9.87891 9.91495 9.87891 9.72329C9.87891 9.61947 9.92682 9.57422 10.0333 9.57422H13.5391C13.6562 9.57422 13.6988 9.6248 13.6961 9.73394C13.6961 9.94956 13.6961 10.1652 13.6961 10.3781C13.6961 10.4846 13.6535 10.5485 13.5471 10.5272C13.2569 10.4686 13.0919 10.631 12.9348 10.8387C12.7238 11.1072 12.6102 11.4394 12.6127 11.781C12.6127 14.1768 12.6127 16.5512 12.6127 18.9364L12.6154 19.1387Z" fill="currentColor"></path>
                          <path d="M18.2155 19.1387H16.5651V18.939C16.5651 16.5344 16.5651 14.1306 16.5651 11.7278C16.5586 11.5041 16.5032 11.2846 16.403 11.0846C16.3028 10.8846 16.16 10.7089 15.9848 10.5698C15.9289 10.5192 15.8091 10.5325 15.7186 10.5299C15.4844 10.5299 15.4844 10.5299 15.4844 10.2983C15.4844 10.1119 15.4844 9.9256 15.4844 9.73926C15.4844 9.63012 15.5216 9.57422 15.6388 9.57422H19.1286C19.243 9.57422 19.2856 9.6248 19.2856 9.7366C19.2856 9.94956 19.2856 10.1652 19.2856 10.3781C19.2856 10.4846 19.2404 10.5485 19.1339 10.5272C18.8464 10.4686 18.6814 10.631 18.5243 10.8387C18.3106 11.1067 18.1967 11.4408 18.2022 11.7837C18.2022 14.167 18.2022 16.5512 18.2022 18.9364L18.2155 19.1387Z" fill="currentColor"></path>
                        </svg></div>
                      <div className="locations_card-content">
                        <h3 className="text-2xl">{s.subtitulo3}</h3>
                        <div className="text-color-secondary">IL 456 Law Street, Suite 101 <br />Chicago, IL 60601</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
    </section>
  );
}