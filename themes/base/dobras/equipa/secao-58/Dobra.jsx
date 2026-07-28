"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-58
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
  //   // GSAP + ScrollTrigger are loaded as globals from the CDN in <head>.
  //   // Register the plugin before any ScrollTrigger-backed tweens run.
  //   if (window.gsap && window.ScrollTrigger) {
  //     window.gsap.registerPlugin(window.ScrollTrigger);
  //   }
  //   
  //   // ───────────────────────────────────────────────────────────────────
  //   //  About — scroll-driven word reveal + stats staircase entrance
  //   // ───────────────────────────────────────────────────────────────────
  //   //  Paragraph
  //   //    Each word starts at opacity 0.15 (CSS default) and climbs to 1 as
  //   //    the section scrolls past. The ScrollTrigger is `scrub: true` so
  //   //    progress is tied 1:1 to the scrollbar — scrolling up will dim the
  //   //    words again, which reads as "lighting up word by word".
  //   //  Stats staircase
  //   //    Triggered just before the paragraph reveal ends. Each stat fades
  //   //    in and rises 24px from below with a 0.1s stagger → "staircase"
  //   //    effect. Fires once, independent of the scrub.
  //   function initAboutReveals() {
  //     const gsap = window.gsap;
  //     if (!gsap) return;
  //   
  //     const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  //     const statement = document.querySelector('.about__statement');
  //     const stats = [...document.querySelectorAll('.about__stat')];
  //   
  //     // ── Word split ─────────────────────────────────────────────────────
  //     let wordSpans = [];
  //     if (statement && !statement.hasAttribute('data-words-split')) {
  //       statement.setAttribute('data-words-split', '');
  //       const text = statement.textContent.trim();
  //       const words = text.split(/\s+/);
  //       statement.innerHTML = '';
  //       words.forEach((word, i) => {
  //         const span = document.createElement('span');
  //         span.className = 'about__statementWord';
  //         span.textContent = word;
  //         statement.appendChild(span);
  //         wordSpans.push(span);
  //         if (i < words.length - 1) {
  //           statement.appendChild(document.createTextNode(' '));
  //         }
  //       });
  //     }
  //   
  //     if (reduce) {
  //       // Accessibility — snap everything to its final state, no scroll hooks.
  //       if (wordSpans.length) gsap.set(wordSpans, { opacity: 1 });
  //       return;
  //     }
  //   
  //     // ── Paragraph entrance — soft fade + rise ──────────────────────────
  //     // Fires just before the scrub activates (start: 'top 85%' < 'top 75%')
  //     // so the paragraph is settled at y=0 when the word-by-word scrub
  //     // begins. Animates the container, which compounds multiplicatively
  //     // with the word-level opacity below — a gentle "lift into frame".
  //     if (statement) {
  //       gsap.from(statement, {
  //         autoAlpha: 0,
  //         y: 20,
  //         duration: 0.9,
  //         ease: 'power3.out',
  //         scrollTrigger: {
  //           trigger: statement,
  //           start: 'top 85%',
  //           once: true,
  //         },
  //       });
  //     }
  //   
  //     // ── Scroll-scrubbed word reveal ────────────────────────────────────
  //     if (wordSpans.length) {
  //       gsap.fromTo(wordSpans,
  //         { opacity: 0.15 },
  //         {
  //           opacity: 1,
  //           ease: 'none',
  //           stagger: { each: 1 },     // each word gets its own slice of progress
  //           scrollTrigger: {
  //             trigger: statement,
  //             start: 'top 75%',        // begins when the paragraph tops 75% vh
  //             end: 'bottom 60%',       // finishes as the paragraph leaves the middle
  //             scrub: true,
  //           },
  //         }
  //       );
  //     }
  //   
  //     // ── Stats staircase — fires near the end of the paragraph scrub ────
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
  //   }
  //   
  //   if (document.readyState === 'loading') {
  //     document.addEventListener('DOMContentLoaded', () => setTimeout(initAboutReveals, 0));
  //   } else {
  //     setTimeout(initAboutReveals, 0);
  //   }
  //   
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="equipa-secao-58" ref={raiz}>
      <section className="about" id="about" aria-label="About Acelia">
            <div className="about__inner">
              <div className="about__label">
                <span className="about__labelDot" aria-hidden="true"></span>
                <span className="about__labelText">{s.rotulo}</span>
              </div>
      
              <div className="about__content">
                <p className="about__statement">{s.texto}</p>
      
                <div className="about__stats" data-odometer-group="" data-odometer-trigger-start="top 95%">
                  <div className="about__stat">
                    <p className="about__statValue" data-odometer-element="" data-odometer-start="0" data-odometer-duration="2">{s.texto2}</p>
                    <p className="about__statDesc">{s.texto3}</p>
                  </div>
                  <div className="about__stat">
                    <p className="about__statValue" data-odometer-element="" data-odometer-start="0" data-odometer-duration="2">{s.texto4}</p>
                    <p className="about__statDesc">{s.texto5}</p>
                  </div>
                  <div className="about__stat">
                    <p className="about__statValue" data-odometer-element="" data-odometer-start="0" data-odometer-duration="2">{s.texto6}</p>
                    <p className="about__statDesc">{s.texto7}</p>
                  </div>
                  <div className="about__stat">
                    <p className="about__statValue" data-odometer-element="" data-odometer-start="0" data-odometer-duration="2">{s.texto8}</p>
                    <p className="about__statDesc">{s.texto9}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </section>
  );
}