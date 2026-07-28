"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-99
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
  //   // === Above-the-fold entrance (heading + image via master timeline) +
  //   //     per-element fade-from-right cascade for body + sidebar (ScrollTrigger).
  //   //     Same brand-DNA pace as CaseStudyHero. ===
  //   (() => {
  //     const gsap = window.gsap;
  //     const ScrollTrigger = window.ScrollTrigger;
  //     if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  //     gsap.registerPlugin(ScrollTrigger);
  //     const card = document.querySelector('.blog-post__card');
  //     if (!card) return;
  //   
  //     const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  //     if (prefersReduced) return;
  //   
  //     const heading = card.querySelector('.blog-post__heading');
  //     const img = card.querySelector('.blog-post__media img');
  //     const prose = card.querySelector('.blog-post__prose');
  //     const sidebarBlocks = Array.from(card.querySelectorAll('.blog-post__meta-group'));
  //   
  //     // Above-the-fold master timeline (heading + image)
  //     if (heading) gsap.set(heading, { autoAlpha: 0, x: 60 });
  //     if (img) gsap.set(img, { scale: 1.1, autoAlpha: 0 });
  //   
  //     const tl = gsap.timeline({
  //       defaults: { ease: 'power3.out' },
  //       onComplete: () => {
  //         if (heading) gsap.set(heading, { clearProps: 'translate,rotate,scale,transform,x' });
  //       },
  //     });
  //     if (heading) tl.to(heading, { autoAlpha: 1, x: 0, duration: 0.8 }, 0);
  //     if (img) tl.to(img, { scale: 1, autoAlpha: 1, duration: 1, ease: 'power2.out' }, 0.1);
  //   
  //     // Per-element cascade for prose + sidebar (below-the-fold tolerant)
  //     const items = [prose, ...sidebarBlocks].filter(Boolean);
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
    <section className="dobra" data-dobra="precos-secao-99" ref={raiz}>
      <main className="container container--padded">
            <article className="blog-post__card">
              <h1 className="blog-post__heading">{s.titulo}</h1>
      
              <div className="blog-post__body">
                <div className="blog-post__main">
                  <figure className="blog-post__media">
                    <img src={s.imagem} alt="Abstract visualization of streaming data through a distributed pipeline" width="776" height="400" loading="eager" />
                  </figure>
      
                  <div className="blog-post__prose">
                    <h2>{s.titulo2}</h2>
                    <p>{s.texto}</p>
                    <p>{s.texto2}</p>
      
                    <h2>{s.titulo3}</h2>
                    <p>{s.texto3}</p>
                    <p>{s.texto4}</p>
      
                    <h2>{s.titulo4}</h2>
                    <p>{s.texto5}</p>
                    <p>{s.texto6}</p>
                  </div>
                </div>
      
                <aside className="blog-post__sidebar">
                  <div className="blog-post__meta-group">
                    <p className="blog-post__meta-label">{s.texto7}</p>
                    <div className="blog-post__tags">
                      <span className="blog-post__tag">{s.rotulo}</span>
                      <span className="blog-post__tag">{s.rotulo2}</span>
                      <span className="blog-post__tag">{s.rotulo3}</span>
                    </div>
                  </div>
      
                  <div className="blog-post__meta-group">
                    <p className="blog-post__meta-label">{s.texto8}</p>
                    <div className="blog-post__author">
                      <img className="blog-post__author-avatar" src={s.imagem2} alt="Portrait of Maren Ortiz" width="72" height="72" loading="lazy" />
                      <div className="blog-post__author-text">
                        <p className="blog-post__author-name">{s.texto9}</p>
                        <p className="blog-post__author-role">{s.texto10}</p>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </article>
          </main>
    </section>
  );
}