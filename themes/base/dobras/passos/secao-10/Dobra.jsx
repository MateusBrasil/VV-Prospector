"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-10
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
  //   // Case Study cards — direction matches the layout:
  //   //   >=768px (image + content side-by-side, "wide" card) -> slide from the
  //   //          RIGHT with a fade, mirroring the horizontal reading flow.
  //   //   <=767px (stacked, image above content, "narrow" card) -> rise from
  //   //          BELOW with a fade, matching the vertical stacking.
  //   // Each card owns its ScrollTrigger so it reveals individually as the
  //   // page scrolls past it. `gsap.matchMedia` swaps the behaviour on resize
  //   // and cleans up between modes.
  //   
  //   // GSAP + ScrollTrigger are loaded as global scripts via <script src="...">.
  //   // They expose `window.gsap` and `window.ScrollTrigger`.
  //   
  //   function initCasesReveals() {
  //     if (typeof gsap === 'undefined') return;
  //     if (typeof ScrollTrigger !== 'undefined') {
  //       gsap.registerPlugin(ScrollTrigger);
  //     }
  //   
  //     function buildReveal(axis, distance) {
  //       const cards = document.querySelectorAll('.csCard');
  //       if (!cards.length) return null;
  //   
  //       cards.forEach((card) => {
  //         gsap.set(card, { autoAlpha: 0, [axis]: distance });
  //         gsap.to(card, {
  //           autoAlpha: 1,
  //           [axis]: 0,
  //           duration: 0.9,
  //           ease: 'power3.out',
  //           scrollTrigger: {
  //             trigger: card,
  //             start: 'top 85%',
  //             once: true,
  //           },
  //         });
  //       });
  //   
  //       // Cleanup — strip inline transforms so cards rest at their natural
  //       // position when the matchMedia query stops matching.
  //       return () => {
  //         document.querySelectorAll('.csCard').forEach((card) => {
  //           gsap.set(card, {
  //             clearProps: 'opacity,visibility,translate,rotate,scale,transform',
  //           });
  //         });
  //       };
  //     }
  //   
  //     // Wide card (>=768px) — horizontal slide from the right.
  //     gsap.matchMedia().add(
  //       '(min-width: 768px) and (prefers-reduced-motion: no-preference)',
  //       () => buildReveal('x', 60)
  //     );
  //   
  //     // Stacked card (<=767px) — vertical rise from below.
  //     gsap.matchMedia().add(
  //       '(max-width: 767px) and (prefers-reduced-motion: no-preference)',
  //       () => buildReveal('y', 40)
  //     );
  //   }
  //   
  //   if (document.readyState === 'loading') {
  //     document.addEventListener('DOMContentLoaded', () => setTimeout(initCasesReveals, 0));
  //   } else {
  //     setTimeout(initCasesReveals, 0);
  //   }
  //   
  //   /* Acelia button character-stagger hover.
  //    *
  //    * Wraps every .btn label (plus the case-study CTA, primary nav links and footer
  //    * links) in <span class="btn__text" data-button-animate-chars> containing one
  //    * <span> per character, each with a staggered transition-delay. The CSS in
  //    * global.css drives the roll-up on hover (.btn__text span → translateY(-1.3em),
  //    * with a text-shadow duplicate sliding in from below); this script only builds
  //    * the structure and also lifts the label above the circle-fill disc.
  //    *
  //    * Ported from the source template's BaseLayout.astro (a site-wide script that was
  //    * lost when the sections were migrated to standalone components). Per the porting
  //    * rules this is a plain global that self-initializes — no top-level export.
  //    */
  //   (function () {
  //     function initButtonCharacterStagger() {
  //       const offsetIncrement = 0.01; // seconds between each character
  //       // Targets: all .btn, the case-study "Learn more" CTA, primary desktop nav
  //       // links (but not the "More Links" dropdown toggle), and footer links.
  //       const buttons = document.querySelectorAll(
  //         ".btn, .cases__cta, .navbar__link:not(.navbar__linkMoreBtn), .footer__link"
  //       );
  //   
  //       buttons.forEach((btn) => {
  //         // Skip if already initialized (re-run / hot reload) or already wrapped.
  //         if (btn.dataset.charStaggerInit === "true" || btn.querySelector(".btn__text")) {
  //           btn.dataset.charStaggerInit = "true";
  //           return;
  //         }
  //         const text = btn.textContent.trim();
  //         if (!text) return;
  //         btn.dataset.charStaggerInit = "true";
  //         btn.textContent = "";
  //   
  //         const textEl = document.createElement("span");
  //         textEl.className = "btn__text";
  //         textEl.setAttribute("data-button-animate-chars", "");
  //   
  //         [...text].forEach((char, index) => {
  //           const span = document.createElement("span");
  //           span.textContent = char;
  //           span.style.transitionDelay = `${index * offsetIncrement}s`;
  //           if (char === " ") span.style.whiteSpace = "pre";
  //           textEl.appendChild(span);
  //         });
  //   
  //         btn.appendChild(textEl);
  //       });
  //     }
  //   
  //     if (document.readyState === "loading") {
  //       document.addEventListener("DOMContentLoaded", initButtonCharacterStagger);
  //     } else {
  //       initButtonCharacterStagger();
  //     }
  //   })();
  //   
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="passos-secao-10" ref={raiz}>
      <section className="cases" aria-label="Case studies">
            <div className="cases__inner">
              <div className="cases__label">
                <span className="cases__labelDot" aria-hidden="true"></span>
                <span className="cases__labelText">{s.rotulo}</span>
              </div>
      
              <div className="cases__list">
                
                <article className="csCard">
                  <div className="csCard__imageWrap">
                    <img src={s.imagem} alt="Doctor in white coat with stethoscope" width="952" height="800" className="csCard__image" loading="lazy" />
                  </div>
                  <div className="csCard__body">
                    <div className="csCard__textBlock">
                      <h3 className="csCard__title">{s.subtitulo}</h3>
                      <p className="csCard__desc">{s.texto}</p>
                      <ul className="csCard__tags">
                        <li className="csCard__tag">{s.item}</li>
                        <li className="csCard__tag">{s.item2}</li>
                        <li className="csCard__tag">{s.item3}</li>
                      </ul>
                    </div>
                    <a href="/case-studies/operational-efficiency-boost" className="btn btn--outline csCard__cta" aria-label="View more about Operational efficiency boost">{s.acao}</a>
                  </div>
                </article>
      
                
                <article className="csCard">
                  <div className="csCard__imageWrap">
                    <img src={s.imagem2} alt="Construction worker with hard hat and vest" width="952" height="800" className="csCard__image" loading="lazy" />
                  </div>
                  <div className="csCard__body">
                    <div className="csCard__textBlock">
                      <h3 className="csCard__title">{s.subtitulo2}</h3>
                      <p className="csCard__desc">{s.texto2}</p>
                      <ul className="csCard__tags">
                        <li className="csCard__tag">{s.item4}</li>
                        <li className="csCard__tag">{s.item5}</li>
                        <li className="csCard__tag">{s.item6}</li>
                      </ul>
                    </div>
                    <a href="/case-studies/construction-advisory" className="btn btn--outline csCard__cta" aria-label="View more about Construction advisory">{s.acao2}</a>
                  </div>
                </article>
      
                
                <article className="csCard">
                  <div className="csCard__imageWrap">
                    <img src={s.imagem3} alt="Hospitality worker holding tablet" width="952" height="800" className="csCard__image" loading="lazy" />
                  </div>
                  <div className="csCard__body">
                    <div className="csCard__textBlock">
                      <h3 className="csCard__title">{s.subtitulo3}</h3>
                      <p className="csCard__desc">{s.texto3}</p>
                      <ul className="csCard__tags">
                        <li className="csCard__tag">{s.item7}</li>
                        <li className="csCard__tag">{s.item8}</li>
                        <li className="csCard__tag">{s.item9}</li>
                      </ul>
                    </div>
                    <a href="/case-studies/hospitality-solutions" className="btn btn--outline csCard__cta" aria-label="View more about Hospitality solutions">{s.acao3}</a>
                  </div>
                </article>
      
                
                <article className="csCard">
                  <div className="csCard__imageWrap">
                    <img src={s.imagem4} alt="Firefighter in protective gear" width="952" height="800" className="csCard__image" loading="lazy" />
                  </div>
                  <div className="csCard__body">
                    <div className="csCard__textBlock">
                      <h3 className="csCard__title">{s.subtitulo4}</h3>
                      <p className="csCard__desc">{s.texto4}</p>
                      <ul className="csCard__tags">
                        <li className="csCard__tag">{s.item10}</li>
                        <li className="csCard__tag">{s.item11}</li>
                        <li className="csCard__tag">{s.item12}</li>
                      </ul>
                    </div>
                    <a href="/case-studies/firefighting-communication" className="btn btn--outline csCard__cta" aria-label="View more about Firefighting communication">{s.acao4}</a>
                  </div>
                </article>
              </div>
            </div>
          </section>
    </section>
  );
}