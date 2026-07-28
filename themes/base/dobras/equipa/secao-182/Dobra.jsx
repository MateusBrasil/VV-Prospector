"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-182
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
  //   // Swiper init for cs-testimonials
  //   (() => {
  //     const init = () => {
  //       if (typeof window.Swiper === 'undefined') return;
  //       const root = document.querySelector('.cs-testimonials__slider');
  //       if (!root || root.dataset.swiperInited === 'true') return;
  //       root.dataset.swiperInited = 'true';
  //       new window.Swiper(root, {
  //         // Portrait: card takes full width (100%, no peek)
  //         slidesPerView: 1,
  //         spaceBetween: 16,
  //         speed: 600,
  //         navigation: {
  //           prevEl: '.cs-testimonials__nav-prev',
  //           nextEl: '.cs-testimonials__nav-next',
  //           disabledClass: 'swiper-button-disabled',
  //         },
  //         keyboard: { enabled: true },
  //         grabCursor: true,
  //         breakpoints: {
  //           // Mobile landscape — 1.2 cards peek
  //           480: { slidesPerView: 1.2, spaceBetween: 16 },
  //           // Tablet — 2 cards
  //           768: { slidesPerView: 2, spaceBetween: 20 },
  //           // Desktop — 3 cards visible + 4th peeks
  //           992: { slidesPerView: 3.1, spaceBetween: 24 },
  //         },
  //       });
  //     };
  //     if (document.readyState === 'loading') {
  //       document.addEventListener('DOMContentLoaded', init);
  //     } else {
  //       init();
  //     }
  //   })();
  //   
  //   // === Per-element fade-from-right entrance ===
  //   (() => {
  //     const gsap = window.gsap;
  //     const ScrollTrigger = window.ScrollTrigger;
  //     if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  //     gsap.registerPlugin(ScrollTrigger);
  //     const section = document.querySelector('.cs-testimonials');
  //     if (!section) return;
  //     const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  //     if (prefersReduced) return;
  //   
  //     const headerItems = [
  //       section.querySelector('.section-label'),
  //       section.querySelector('.cs-testimonials__heading'),
  //       section.querySelector('.cs-testimonials__sub'),
  //     ].filter(Boolean);
  //     const slider = section.querySelector('.cs-testimonials__slider');
  //     const nav = section.querySelector('.cs-testimonials__nav');
  //   
  //     const items = [...headerItems, slider, nav].filter(Boolean);
  //     if (!items.length) return;
  //   
  //     gsap.set(items, { autoAlpha: 0, x: 60 });
  //   
  //     const MIN_GAP = 0.1;
  //     let nextSlot = -Infinity;
  //   
  //     items.forEach((item) => {
  //       ScrollTrigger.create({
  //         trigger: item,
  //         start: 'top 88%',
  //         once: true,
  //         onEnter: () => {
  //           const now = performance.now() / 1000;
  //           const delay = Math.max(0, nextSlot - now);
  //           nextSlot = now + delay + MIN_GAP;
  //           gsap.to(item, {
  //             autoAlpha: 1,
  //             x: 0,
  //             duration: 0.8,
  //             ease: 'power3.out',
  //             delay,
  //             onComplete: () => gsap.set(item, { clearProps: 'translate,rotate,scale,transform,x' }),
  //           });
  //         },
  //       });
  //     });
  //   })();
  //   
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="equipa-secao-182" ref={raiz}>
      <section className="cs-testimonials">
            <div className="container container--padded">
              <div className="cs-testimonials__card">
                <header className="cs-testimonials__header">
                  <p className="section-label">{s.texto}</p>
                  <h2 className="cs-testimonials__heading">{s.titulo}</h2>
                  <p className="cs-testimonials__sub">{s.texto2}</p>
                </header>
      
                <div className="cs-testimonials__slider swiper" role="region" aria-label="Customer testimonials">
                  <div className="swiper-wrapper cs-testimonials__list">
                    <article className="swiper-slide cs-testimonial">
                      <p className="cs-testimonial__quote">{s.texto3}</p>
                      <div className="cs-testimonial__author">
                        <img className="cs-testimonial__avatar" src={s.imagem} alt="Portrait of John Doe" width="72" height="72" loading="lazy" />
                        <div className="cs-testimonial__author-text">
                          <p className="cs-testimonial__author-name">{s.texto4}</p>
                          <p className="cs-testimonial__author-title">{s.texto5}</p>
                        </div>
                      </div>
                    </article>
      
                    <article className="swiper-slide cs-testimonial">
                      <p className="cs-testimonial__quote">{s.texto6}</p>
                      <div className="cs-testimonial__author">
                        <img className="cs-testimonial__avatar" src={s.imagem2} alt="Portrait of Isabella Tran" width="72" height="72" loading="lazy" />
                        <div className="cs-testimonial__author-text">
                          <p className="cs-testimonial__author-name">{s.texto7}</p>
                          <p className="cs-testimonial__author-title">{s.texto8}</p>
                        </div>
                      </div>
                    </article>
      
                    <article className="swiper-slide cs-testimonial">
                      <p className="cs-testimonial__quote">{s.texto9}</p>
                      <div className="cs-testimonial__author">
                        <img className="cs-testimonial__avatar" src={s.imagem3} alt="Portrait of Marcus Chen" width="72" height="72" loading="lazy" />
                        <div className="cs-testimonial__author-text">
                          <p className="cs-testimonial__author-name">{s.texto10}</p>
                          <p className="cs-testimonial__author-title">{s.texto11}</p>
                        </div>
                      </div>
                    </article>
      
                    <article className="swiper-slide cs-testimonial">
                      <p className="cs-testimonial__quote">{s.texto12}</p>
                      <div className="cs-testimonial__author">
                        <img className="cs-testimonial__avatar" src={s.imagem4} alt="Portrait of Priya Shah" width="72" height="72" loading="lazy" />
                        <div className="cs-testimonial__author-text">
                          <p className="cs-testimonial__author-name">{s.texto13}</p>
                          <p className="cs-testimonial__author-title">{s.texto14}</p>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
      
                <div className="cs-testimonials__nav" aria-label="Testimonials navigation">
                  <button type="button" className="cs-testimonials__nav-btn cs-testimonials__nav-prev" aria-label="Previous testimonial" onClick={s.onClick}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M18.5315 11.4681C18.6713 11.6091 18.7497 11.7996 18.7497 11.9981C18.7497 12.1966 18.6713 12.3871 18.5315 12.5281L13.5315 17.5281C13.4628 17.6018 13.38 17.6609 13.288 17.7019C13.196 17.7429 13.0967 17.7649 12.996 17.7667C12.8953 17.7685 12.7953 17.75 12.7019 17.7122C12.6085 17.6745 12.5237 17.6184 12.4525 17.5471C12.3812 17.4759 12.3251 17.3911 12.2874 17.2977C12.2496 17.2043 12.2311 17.1043 12.2329 17.0036C12.2347 16.9029 12.2567 16.8036 12.2977 16.7116C12.3387 16.6196 12.3978 16.5368 12.4715 16.4681L16.1915 12.7481H5.9985C5.79961 12.7481 5.60881 12.6691 5.46816 12.5284C5.32751 12.3878 5.2485 12.197 5.2485 11.9981C5.2485 11.7992 5.32751 11.6084 5.46816 11.4678C5.60881 11.3271 5.79961 11.2481 5.9985 11.2481H16.1915L12.4715 7.52811C12.339 7.3859 12.2669 7.19786 12.2703 7.00356C12.2737 6.80926 12.3526 6.62387 12.49 6.48645C12.6273 6.34903 12.8127 6.27033 13.007 6.2669C13.2013 6.26347 13.3893 6.33559 13.5315 6.46811L18.5315 11.4681Z" fill="currentColor" transform="rotate(180 12 12)"></path>
                    </svg>
                  </button>
                  <button type="button" className="cs-testimonials__nav-btn cs-testimonials__nav-next" aria-label="Next testimonial" onClick={s.onClick}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M18.5315 11.4681C18.6713 11.6091 18.7497 11.7996 18.7497 11.9981C18.7497 12.1966 18.6713 12.3871 18.5315 12.5281L13.5315 17.5281C13.4628 17.6018 13.38 17.6609 13.288 17.7019C13.196 17.7429 13.0967 17.7649 12.996 17.7667C12.8953 17.7685 12.7953 17.75 12.7019 17.7122C12.6085 17.6745 12.5237 17.6184 12.4525 17.5471C12.3812 17.4759 12.3251 17.3911 12.2874 17.2977C12.2496 17.2043 12.2311 17.1043 12.2329 17.0036C12.2347 16.9029 12.2567 16.8036 12.2977 16.7116C12.3387 16.6196 12.3978 16.5368 12.4715 16.4681L16.1915 12.7481H5.9985C5.79961 12.7481 5.60881 12.6691 5.46816 12.5284C5.32751 12.3878 5.2485 12.197 5.2485 11.9981C5.2485 11.7992 5.32751 11.6084 5.46816 11.4678C5.60881 11.3271 5.79961 11.2481 5.9985 11.2481H16.1915L12.4715 7.52811C12.339 7.3859 12.2669 7.19786 12.2703 7.00356C12.2737 6.80926 12.3526 6.62387 12.49 6.48645C12.6273 6.34903 12.8127 6.27033 13.007 6.2669C13.2013 6.26347 13.3893 6.33559 13.5315 6.46811L18.5315 11.4681Z" fill="currentColor"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </section>
    </section>
  );
}