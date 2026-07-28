"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-9
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
  //   // Per-block fade-from-right entrance.
  //   // Each `.case-study-story` block animates independently — we loop over
  //   // every instance on the page rather than relying on the original
  //   // `document.currentScript.previousElementSibling` walk-back (that pattern
  //   // only works when the script is inlined adjacent to each block; here the
  //   // script tag lives once at the bottom of the page).
  //   (() => {
  //     const gsap = window.gsap;
  //     const ScrollTrigger = window.ScrollTrigger;
  //     if (!gsap) return;
  //   
  //     const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  //     if (prefersReduced) return;
  //   
  //     const blocks = document.querySelectorAll('.case-study-story');
  //     if (!blocks.length) return;
  //   
  //     // Initial state — hide all blocks before ScrollTrigger wires up.
  //     blocks.forEach((section) => {
  //       gsap.set(section, { autoAlpha: 0, x: 60 });
  //     });
  //   
  //     if (!ScrollTrigger) return;
  //     gsap.registerPlugin(ScrollTrigger);
  //   
  //     blocks.forEach((section) => {
  //       ScrollTrigger.create({
  //         trigger: section,
  //         start: 'top 88%',
  //         once: true,
  //         onEnter: () => {
  //           gsap.to(section, {
  //             autoAlpha: 1,
  //             x: 0,
  //             duration: 0.8,
  //             ease: 'power3.out',
  //             onComplete: () =>
  //               gsap.set(section, { clearProps: 'translate,rotate,scale,transform,x' }),
  //           });
  //           const img = section.querySelector('.case-study-story__media img');
  //           if (img) {
  //             gsap.fromTo(img, { scale: 1.1 }, { scale: 1, duration: 1, ease: 'power2.out' });
  //           }
  //         },
  //       });
  //     });
  //   })();
  //   
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="equipa-secao-9" ref={raiz}>
      <main>
            <section className="case-study-section">
              <div className="container container--padded">
                <div className="case-study__card">
                  
                  <div className="case-study-story case-study-story--image-left">
                    <div className="case-study-story__media">
                      <img src={s.imagem} alt="Overview of the case study showing operations dashboard" width="503" height="533" loading="lazy" />
                    </div>
                    <div className="case-study-story__text">
                      <h2 className="case-study-story__heading">{s.titulo}</h2>
                      <p className="case-study-story__body">{s.texto}</p>
                    </div>
                  </div>
      
                  
                  <div className="case-study-story case-study-story--image-right">
                    <div className="case-study-story__media">
                      <img src={s.imagem2} alt="Engineers reviewing the new monitoring workflow" width="503" height="533" loading="lazy" />
                    </div>
                    <div className="case-study-story__text">
                      <h2 className="case-study-story__heading">{s.titulo2}</h2>
                      <p className="case-study-story__body">{s.texto2}</p>
                    </div>
                  </div>
      
                  
                  <div className="case-study-story case-study-story--image-left">
                    <div className="case-study-story__media">
                      <img src={s.imagem3} alt="Growth chart from the deployment quarter" width="503" height="533" loading="lazy" />
                    </div>
                    <div className="case-study-story__text">
                      <p className="case-study-story__body">{s.texto3}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
    </section>
  );
}