"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-1
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
  //   // gsap, ScrollTrigger and SplitText are loaded as globals from CDN.
  //   if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
  //     gsap.registerPlugin(ScrollTrigger);
  //   }
  //   if (typeof gsap !== 'undefined' && typeof SplitText !== 'undefined') {
  //     gsap.registerPlugin(SplitText);
  //   }
  //   
  //   // Scroll-triggered entrance per overview block:
  //   //   - Title: Heading Stagger pattern — per-word rise (yPercent 50 → 0)
  //   //   - Description: line-by-line stagger (y 20 → 0, fade)
  //   //   - Image: curtain reveal — wrapper grows height 0 → 100%, image
  //   //     scales 1.05 → 1 (stays anchored at top via container queries).
  //   // Same recipe used in Hero / ServicesHero / CaseStudyHero so all image
  //   // reveals across the site share a coherent feel.
  //   function initCsIntOverviewReveals() {
  //     if (typeof gsap === 'undefined') return;
  //     const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  //     if (reduce) return;
  //   
  //     const blocks = document.querySelectorAll('.csIntOverview');
  //     blocks.forEach((block) => {
  //       const title = block.querySelector('.csIntOverview__title');
  //       const desc = block.querySelector('.csIntOverview__description');
  //       const imageReveal = block.querySelector('.csIntOverview__imageReveal');
  //       const image = block.querySelector('.csIntOverview__image');
  //   
  //       // Heading word stagger.
  //       let titleWords = [];
  //       if (title && typeof SplitText !== 'undefined') {
  //         titleWords = SplitText.create(title, { type: 'words' }).words;
  //         gsap.set(titleWords, { yPercent: 50, autoAlpha: 0 });
  //       }
  //   
  //       // Description — animates as a SINGLE block, not split into lines.
  //       // The paragraph wraps naturally to the column width; treating each
  //       // visible line as its own animation target makes the text read as
  //       // disjoint slabs instead of one continuous body.
  //       if (desc) gsap.set(desc, { y: 20, autoAlpha: 0 });
  //   
  //       // Curtain reveal.
  //       if (imageReveal) gsap.set(imageReveal, { height: 0 });
  //       if (image) gsap.set(image, { scale: 1.05 });
  //   
  //       const tl = gsap.timeline({
  //         scrollTrigger: { trigger: block, start: 'top 85%', once: true },
  //       });
  //   
  //       if (imageReveal) {
  //         tl.to(imageReveal, { height: '100%', duration: 1.1, ease: 'power3.out' }, 0);
  //       }
  //       if (image) {
  //         tl.to(image, { scale: 1, duration: 1.1, ease: 'power3.out' }, 0);
  //       }
  //       if (titleWords.length) {
  //         tl.to(titleWords, {
  //           yPercent: 0,
  //           autoAlpha: 1,
  //           duration: 0.8,
  //           ease: 'power3.out',
  //           stagger: 0.06,
  //         }, 0.15);
  //       }
  //       if (desc) {
  //         tl.to(desc, { y: 0, autoAlpha: 1, duration: 0.7, ease: 'power3.out' }, 0.4);
  //       }
  //     });
  //   }
  //   
  //   if (document.readyState === 'loading') {
  //     document.addEventListener('DOMContentLoaded', () => setTimeout(initCsIntOverviewReveals, 0));
  //   } else {
  //     setTimeout(initCsIntOverviewReveals, 0);
  //   }
  //   
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="numeros-secao-1" ref={raiz}>
      <main>
          <section className="csIntOverview" aria-label="Project overview">
            <div className="csIntOverview__inner">
              <div className="csIntOverview__imageCard">
                <div className="csIntOverview__imageReveal">
                  <img src={s.imagem} alt="Two consultants reviewing financial documents" width="564" height="533" className="csIntOverview__image" loading="lazy" />
                </div>
              </div>
      
              <div className="csIntOverview__text">
                <h2 className="csIntOverview__title">{s.titulo}</h2>
                <p className="csIntOverview__description">{s.texto}</p>
              </div>
            </div>
          </section>
      
          <section className="csIntOverview csIntOverview--reverse csIntOverview--cream" aria-label="Unlocking growth with strategies that drive real results">
            <div className="csIntOverview__inner">
              <div className="csIntOverview__imageCard">
                <div className="csIntOverview__imageReveal">
                  <img src={s.imagem2} alt="Team of professionals reviewing project plans" width="564" height="533" className="csIntOverview__image" loading="lazy" />
                </div>
              </div>
      
              <div className="csIntOverview__text">
                <h2 className="csIntOverview__title">{s.titulo2}</h2>
                <p className="csIntOverview__description">{s.texto2}</p>
              </div>
            </div>
          </section>
      
          <section className="csIntOverview" aria-label="Achieving breakthroughs in project execution">
            <div className="csIntOverview__inner">
              <div className="csIntOverview__imageCard">
                <div className="csIntOverview__imageReveal">
                  <img src={s.imagem3} alt="Team of professionals collaborating around a table" width="564" height="533" className="csIntOverview__image" loading="lazy" />
                </div>
              </div>
      
              <div className="csIntOverview__text">
                <h2 className="csIntOverview__title">{s.titulo3}</h2>
                <p className="csIntOverview__description">{s.texto3}</p>
              </div>
            </div>
          </section>
        </main>
    </section>
  );
}