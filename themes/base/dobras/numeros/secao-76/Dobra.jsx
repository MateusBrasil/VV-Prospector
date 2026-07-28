"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-76
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
  //   // About-us entrance — same word-scrub statement + stats staircase + logos
  //   // fade as the home About, kept consistent for the section language.
  //   // GSAP and ScrollTrigger are loaded from CDN globals (window.gsap / window.ScrollTrigger).
  //   
  //   function initAboutCompanyReveals() {
  //     if (typeof gsap === 'undefined') return;
  //     if (typeof ScrollTrigger !== 'undefined') {
  //       gsap.registerPlugin(ScrollTrigger);
  //     }
  //     const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  //   
  //     const inner = document.querySelector('.aboutCompany__inner');
  //     if (!inner) return;
  //   
  //     const statement = inner.querySelector('.aboutCompany__statement');
  //     const stats = Array.from(inner.querySelectorAll('.aboutCompany__stat'));
  //     const logosTrack = inner.querySelector('[data-aboutCompany-logos]');
  //   
  //     // ── Word-scrub on the statement (same pattern as the home About) ──
  //     let wordSpans = [];
  //     if (statement && !statement.hasAttribute('data-words-split')) {
  //       statement.setAttribute('data-words-split', '');
  //       const text = statement.textContent.trim();
  //       const words = text.split(/\s+/);
  //       statement.innerHTML = '';
  //       words.forEach((word, i) => {
  //         const span = document.createElement('span');
  //         span.className = 'aboutCompany__statementWord';
  //         span.textContent = word;
  //         statement.appendChild(span);
  //         wordSpans.push(span);
  //         if (i < words.length - 1) statement.appendChild(document.createTextNode(' '));
  //       });
  //     }
  //   
  //     if (reduce) {
  //       if (wordSpans.length) gsap.set(wordSpans, { opacity: 1 });
  //       stats.forEach((s) => gsap.set(s, { autoAlpha: 1, y: 0 }));
  //       // Marquee skipped under reduced motion — logos sit static in their default order.
  //       return;
  //     }
  //   
  //     // Soft entrance on the statement before the scrub starts.
  //     if (statement) {
  //       gsap.from(statement, {
  //         autoAlpha: 0,
  //         y: 20,
  //         duration: 0.9,
  //         ease: 'power3.out',
  //         scrollTrigger: { trigger: statement, start: 'top 85%', once: true },
  //       });
  //     }
  //   
  //     // Scroll-scrubbed word reveal — words climb from 0.15 → 1 opacity.
  //     if (wordSpans.length) {
  //       gsap.fromTo(wordSpans,
  //         { opacity: 0.15 },
  //         {
  //           opacity: 1,
  //           ease: 'none',
  //           stagger: { each: 1 },
  //           scrollTrigger: {
  //             trigger: statement,
  //             start: 'top 75%',
  //             end: 'bottom 60%',
  //             scrub: true,
  //           },
  //         }
  //       );
  //     }
  //   
  //     // Stats staircase
  //     if (stats.length) {
  //       gsap.from(stats, {
  //         opacity: 0,
  //         y: 24,
  //         duration: 0.6,
  //         ease: 'power3.out',
  //         stagger: 0.1,
  //         scrollTrigger: {
  //           trigger: stats[0].parentElement,
  //           start: 'top 85%',
  //           once: true,
  //         },
  //       });
  //     }
  //   
  //     // Logos — infinite right-to-left marquee.
  //     // The trick to a seamless loop is to clone the original set as many
  //     // times as needed for the track to be at least `viewport + oneCycle`
  //     // wide. Then animating x from 0 → -oneCycle returns the track to a
  //     // visually-identical frame: the items at the far right step in to
  //     // replace those that just exited on the left, with no empty gap.
  //     if (logosTrack) {
  //       const viewport = inner.querySelector('.aboutCompany__logosViewport');
  //       const originalItems = Array.from(logosTrack.children);
  //   
  //       requestAnimationFrame(() => {
  //         const gapStr = getComputedStyle(logosTrack).columnGap || getComputedStyle(logosTrack).gap;
  //         const gap = parseFloat(gapStr) || 0;
  //   
  //         // One cycle = the visual offset that returns the track to an
  //         // identical frame: sum of original item widths + one gap per item
  //         // (each item's column + the gap that follows it, including the
  //         // gap between the last original and the first clone).
  //         const itemsWidth = originalItems.reduce((sum, el) => sum + el.getBoundingClientRect().width, 0);
  //         const oneCycle = itemsWidth + gap * originalItems.length;
  //   
  //         // Clone the original set repeatedly until the track is wide
  //         // enough to keep the viewport fully covered through the entire
  //         // animation cycle (no empty space appears on the right edge).
  //         const viewportWidth = viewport.getBoundingClientRect().width;
  //         const minTrackWidth = viewportWidth + oneCycle;
  //   
  //         let trackWidth = itemsWidth + gap * (originalItems.length - 1);
  //         while (trackWidth < minTrackWidth) {
  //           originalItems.forEach((item) => logosTrack.appendChild(item.cloneNode(true)));
  //           trackWidth += oneCycle;
  //         }
  //   
  //         // Speed: ~30px per second — "ligera" pace that's relaxed but visible.
  //         const speed = 30;
  //         gsap.to(logosTrack, {
  //           x: -oneCycle,
  //           duration: oneCycle / speed,
  //           ease: 'none',
  //           repeat: -1,
  //         });
  //       });
  //     }
  //   }
  //   
  //   if (document.readyState === 'loading') {
  //     document.addEventListener('DOMContentLoaded', () => setTimeout(initAboutCompanyReveals, 0));
  //   } else {
  //     setTimeout(initAboutCompanyReveals, 0);
  //   }
  //   
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="numeros-secao-76" ref={raiz}>
      <section className="aboutCompany" aria-label="About Acelia">
            <div className="aboutCompany__inner">
              <div className="aboutCompany__label">
                <span className="aboutCompany__labelDot" aria-hidden="true"></span>
                <span className="aboutCompany__labelText">{s.rotulo}</span>
              </div>
      
              <div className="aboutCompany__content">
                <p className="aboutCompany__statement">{s.texto}</p>
      
                <div className="aboutCompany__stats" data-aboutcompany-stats="">
                  <div className="aboutCompany__stat">
                    <p className="aboutCompany__statValue">{s.texto2}</p>
                    <p className="aboutCompany__statDesc">{s.texto3}</p>
                  </div>
                  <div className="aboutCompany__stat">
                    <p className="aboutCompany__statValue">{s.texto4}</p>
                    <p className="aboutCompany__statDesc">{s.texto5}</p>
                  </div>
                  <div className="aboutCompany__stat">
                    <p className="aboutCompany__statValue">{s.texto6}</p>
                    <p className="aboutCompany__statDesc">{s.texto7}</p>
                  </div>
                  <div className="aboutCompany__stat">
                    <p className="aboutCompany__statValue">{s.texto8}</p>
                    <p className="aboutCompany__statDesc">{s.texto9}</p>
                  </div>
                </div>
      
                <div className="aboutCompany__logosViewport" aria-label="Trusted by">
                  <ul className="aboutCompany__logosTrack" data-aboutcompany-logos="">
                    <li>
                      <img src={s.imagem} alt="Client logo" width="132" height="32" className="aboutCompany__logo" loading="lazy" />
                    </li>
                    <li>
                      <img src={s.imagem2} alt="Client logo" width="132" height="32" className="aboutCompany__logo" loading="lazy" />
                    </li>
                    <li>
                      <img src={s.imagem3} alt="Client logo" width="132" height="32" className="aboutCompany__logo" loading="lazy" />
                    </li>
                    <li>
                      <img src={s.imagem4} alt="Client logo" width="132" height="32" className="aboutCompany__logo" loading="lazy" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
    </section>
  );
}