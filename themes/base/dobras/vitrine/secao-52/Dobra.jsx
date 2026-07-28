"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-52
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
  //   // === Stat counter-up (IntersectionObserver — independent of GSAP) ===
  //   (() => {
  //     const cards = document.querySelectorAll('.stat-card[data-stat-target]');
  //     if (!cards.length) return;
  //   
  //     const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  //   
  //     const animate = (card) => {
  //       const numEl = card.querySelector('[data-stat-num]');
  //       if (!numEl) return;
  //       const target = parseFloat(card.dataset.statTarget) || 0;
  //       const duration = parseFloat(card.dataset.statDuration) || 1600;
  //       if (prefersReduced) {
  //         numEl.textContent = String(target);
  //         return;
  //       }
  //       const start = performance.now();
  //       const ease = (t) => 1 - Math.pow(1 - t, 3); // easeOutCubic
  //       const step = (now) => {
  //         const t = Math.min(1, (now - start) / duration);
  //         const current = Math.round(ease(t) * target);
  //         numEl.textContent = String(current);
  //         if (t < 1) requestAnimationFrame(step);
  //         else numEl.textContent = String(target);
  //       };
  //       requestAnimationFrame(step);
  //     };
  //   
  //     const io = new IntersectionObserver(
  //       (entries) => {
  //         entries.forEach((entry) => {
  //           if (entry.isIntersecting) {
  //             animate(entry.target);
  //             io.unobserve(entry.target);
  //           }
  //         });
  //       },
  //       { threshold: 0.35 }
  //     );
  //     cards.forEach((c) => io.observe(c));
  //   })();
  //   
  //   // === Per-element fade-from-right entrance (matches Webflow scroll-into-view, but with per-element triggers + cascade queue) ===
  //   (() => {
  //     const gsap = window.gsap;
  //     const ScrollTrigger = window.ScrollTrigger;
  //     if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  //     gsap.registerPlugin(ScrollTrigger);
  //     const section = document.querySelector('.about');
  //     if (!section) return;
  //   
  //     const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  //     if (prefersReduced) return;
  //   
  //     // DOM order = appearance order
  //     const items = [
  //       section.querySelector('.about__eyebrow'),
  //       section.querySelector('.about__heading'),
  //       section.querySelector('.about__marquee'),
  //       ...section.querySelectorAll('.stat-card'),
  //     ].filter(Boolean);
  //   
  //     if (!items.length) return;
  //   
  //     gsap.set(items, { autoAlpha: 0, x: 60 });
  //   
  //     // Cascade queue: elements that trigger simultaneously (same scroll moment) get a 100ms gap between starts.
  //     // Elements that trigger at different scroll moments animate immediately (no delay).
  //     const MIN_GAP = 0.1;       // 100ms between consecutive entrance starts
  //     let nextSlot = -Infinity;  // earliest allowed start time (seconds)
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
  //           });
  //         },
  //       });
  //     });
  //   })();
  //   
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="vitrine-secao-52" ref={raiz}>
      <section className="about" id="about">
            <div className="container container--padded">
              <div className="about__card">
                <header className="about__header">
                  <div className="about__intro">
                    <p className="section-label about__eyebrow">{s.texto}</p>
                    <h2 className="about__heading">{s.titulo}</h2>
                  </div>
      
                  <div className="about__marquee" aria-label="Trusted by">
                    <div className="about__marquee-track">
                      <img src={s.imagem} alt="Partner logo 1" width="100" height="24" loading="lazy" />
                      <img src={s.imagem2} alt="Partner logo 2" width="100" height="24" loading="lazy" />
                      <img src={s.imagem3} alt="Partner logo 3" width="100" height="24" loading="lazy" />
                      <img src={s.imagem4} alt="Partner logo 4" width="100" height="24" loading="lazy" />
                      <img src={s.imagem5} alt="" width="100" height="24" loading="lazy" aria-hidden="true" />
                      <img src={s.imagem6} alt="" width="100" height="24" loading="lazy" aria-hidden="true" />
                      <img src={s.imagem7} alt="" width="100" height="24" loading="lazy" aria-hidden="true" />
                      <img src={s.imagem8} alt="" width="100" height="24" loading="lazy" aria-hidden="true" />
                      <img src={s.imagem9} alt="" width="100" height="24" loading="lazy" aria-hidden="true" />
                      <img src={s.imagem10} alt="" width="100" height="24" loading="lazy" aria-hidden="true" />
                      <img src={s.imagem11} alt="" width="100" height="24" loading="lazy" aria-hidden="true" />
                      <img src={s.imagem12} alt="" width="100" height="24" loading="lazy" aria-hidden="true" />
                      <img src={s.imagem13} alt="" width="100" height="24" loading="lazy" aria-hidden="true" />
                      <img src={s.imagem14} alt="" width="100" height="24" loading="lazy" aria-hidden="true" />
                      <img src={s.imagem15} alt="" width="100" height="24" loading="lazy" aria-hidden="true" />
                      <img src={s.imagem16} alt="" width="100" height="24" loading="lazy" aria-hidden="true" />
                    </div>
                  </div>
                </header>
      
                <ul className="about__stats">
                  <li className="stat-card" data-stat-target="95" data-stat-prefix="" data-stat-suffix="%" data-stat-duration="1600">
                    <p className="section-label stat-card__label">{s.texto2}</p>
                    <p className="stat-card__value">
                      <span className="stat-card__prefix"></span><span className="stat-card__num" data-stat-num="">0</span><span className="stat-card__suffix">%</span>
                    </p>
                  </li>
                  <li className="stat-card" data-stat-target="10" data-stat-prefix="" data-stat-suffix="+" data-stat-duration="1600">
                    <p className="section-label stat-card__label">{s.texto3}</p>
                    <p className="stat-card__value">
                      <span className="stat-card__prefix"></span><span className="stat-card__num" data-stat-num="">0</span><span className="stat-card__suffix">+</span>
                    </p>
                  </li>
                  <li className="stat-card" data-stat-target="10" data-stat-prefix="$" data-stat-suffix="m" data-stat-duration="1600">
                    <p className="section-label stat-card__label">{s.texto4}</p>
                    <p className="stat-card__value">
                      <span className="stat-card__prefix">$</span><span className="stat-card__num" data-stat-num="">0</span><span className="stat-card__suffix">m</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
    </section>
  );
}