"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-3
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
  //   // Per-card scroll-triggered entrance: each card animates from below
  //   // (y: 40 → 0, autoAlpha 0 → 1) only as it enters the viewport at 90%.
  //   // Header (label + heading) plays first as a separate fade.
  //   //
  //   // GSAP, ScrollTrigger and SplitText are loaded as globals via CDN in
  //   // index.html, so we read them off `window` rather than importing.
  //   function initCsGridReveals() {
  //     if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  //   
  //     // Register the plugin once GSAP is available on the page.
  //     if (gsap.registerPlugin) {
  //       gsap.registerPlugin(ScrollTrigger);
  //       if (typeof SplitText !== 'undefined') gsap.registerPlugin(SplitText);
  //     }
  //   
  //     const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  //     const inner = document.querySelector('.csGrid__inner');
  //     if (!inner) return;
  //   
  //     const heading = inner.querySelector('.csGrid__heading');
  //     const cards = Array.from(inner.querySelectorAll('.csGrid__card'));
  //   
  //     if (reduce) {
  //       if (heading) gsap.set(heading, { autoAlpha: 1 });
  //       cards.forEach((c) => gsap.set(c, { autoAlpha: 1, y: 0 }));
  //       return;
  //     }
  //   
  //     // Heading word-stagger
  //     if (heading && typeof SplitText !== 'undefined') {
  //       const split = SplitText.create(heading, { type: 'words' });
  //       gsap.set(split.words, { yPercent: 50, autoAlpha: 0 });
  //       gsap.to(split.words, {
  //         yPercent: 0, autoAlpha: 1,
  //         duration: 0.8, ease: 'power3.out', stagger: 0.06,
  //         scrollTrigger: { trigger: inner, start: 'top 80%', once: true },
  //       });
  //     }
  //   
  //     // Per-card entrance — card frame rises from below while its image
  //     // clears a slight blur and zooms back from 1.06 → 1. Mirrors the
  //     // Team responsive entrance pattern.
  //     gsap.set(cards, { autoAlpha: 0, y: 40 });
  //     cards.forEach((card) => {
  //       const img = card.querySelector('.csGrid__image');
  //       if (img) gsap.set(img, { scale: 1.06, filter: 'blur(8px)' });
  //   
  //       ScrollTrigger.create({
  //         trigger: card,
  //         start: 'top 90%',
  //         once: true,
  //         onEnter: () => {
  //           gsap.to(card, {
  //             autoAlpha: 1, y: 0,
  //             duration: 1.0, ease: 'power4.out',
  //           });
  //           if (img) {
  //             gsap.to(img, {
  //               scale: 1, filter: 'blur(0px)',
  //               duration: 1.3, ease: 'power4.out',
  //               // Drop the inline transform once the entrance settles so the
  //               // CSS `:hover` scale below can take over. Without this, the
  //               // GSAP-set `transform: matrix(...)` would always win against
  //               // the stylesheet rule.
  //               onComplete: () => gsap.set(img, { clearProps: 'transform,filter' }),
  //             });
  //           }
  //         },
  //       });
  //     });
  //   }
  //   
  //   if (document.readyState === 'loading') {
  //     document.addEventListener('DOMContentLoaded', () => setTimeout(initCsGridReveals, 0));
  //   } else {
  //     setTimeout(initCsGridReveals, 0);
  //   }
  //   
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="vitrine-secao-3" ref={raiz}>
      <section className="csGrid" aria-label="Case studies portfolio">
            <div className="csGrid__inner">
              <header className="csGrid__header">
                <div className="csGrid__label">
                  <span className="csGrid__labelDot" aria-hidden="true"></span>
                  <span className="csGrid__labelText">{s.rotulo}</span>
                </div>
                <h2 className="csGrid__heading">
                  <span className="csGrid__headingLine">{s.rotulo2}</span>
                  <span className="csGrid__headingLine">{s.rotulo3}</span>
                </h2>
              </header>
      
              <ul className="csGrid__list">
                <li className="csGrid__item">
                  <article className="csGrid__card">
                    <a className="csGrid__cardLink" href="#" aria-label="Read more about Northwind Retail Rebrand">
                      <div className="csGrid__divider" aria-hidden="true"></div>
                      <h3 className="csGrid__title">{s.subtitulo}</h3>
                      <div className="csGrid__imageWrap">
                        <img src={s.imagem} alt="Northwind retail storefront with refreshed signage and warm interior lighting" width="576" height="338" className="csGrid__image" loading="lazy" style={{objectPosition: 'center 35%'}} />
                      </div>
                      <p className="csGrid__desc">{s.texto}</p>
                    </a>
                  </article>
                </li>
      
                <li className="csGrid__item">
                  <article className="csGrid__card">
                    <a className="csGrid__cardLink" href="#" aria-label="Read more about Halden Bank Digital Platform">
                      <div className="csGrid__divider" aria-hidden="true"></div>
                      <h3 className="csGrid__title">{s.subtitulo2}</h3>
                      <div className="csGrid__imageWrap">
                        <img src={s.imagem2} alt="Halden Bank mobile app onboarding screens shown on three devices" width="576" height="338" className="csGrid__image" loading="lazy" style={{objectPosition: 'center'}} />
                      </div>
                      <p className="csGrid__desc">{s.texto2}</p>
                    </a>
                  </article>
                </li>
      
                <li className="csGrid__item">
                  <article className="csGrid__card">
                    <a className="csGrid__cardLink" href="#" aria-label="Read more about Mantle Coffee Packaging">
                      <div className="csGrid__divider" aria-hidden="true"></div>
                      <h3 className="csGrid__title">{s.subtitulo3}</h3>
                      <div className="csGrid__imageWrap">
                        <img src={s.imagem3} alt="Mantle Coffee bags arranged in a flat-lay with brass scoop and beans" width="576" height="338" className="csGrid__image" loading="lazy" style={{objectPosition: 'center 40%'}} />
                      </div>
                      <p className="csGrid__desc">{s.texto3}</p>
                    </a>
                  </article>
                </li>
      
                <li className="csGrid__item">
                  <article className="csGrid__card">
                    <a className="csGrid__cardLink" href="#" aria-label="Read more about Verge Outdoor Campaign">
                      <div className="csGrid__divider" aria-hidden="true"></div>
                      <h3 className="csGrid__title">{s.subtitulo4}</h3>
                      <div className="csGrid__imageWrap">
                        <img src={s.imagem4} alt="Hiker wearing Verge outerwear on a ridgeline at golden hour" width="576" height="338" className="csGrid__image" loading="lazy" style={{objectPosition: 'center 30%'}} />
                      </div>
                      <p className="csGrid__desc">{s.texto4}</p>
                    </a>
                  </article>
                </li>
              </ul>
            </div>
          </section>
    </section>
  );
}