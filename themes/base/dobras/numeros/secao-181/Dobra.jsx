"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-181
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
  //   (function () {
  //     const gsap = window.gsap;
  //     const ScrollTrigger = window.ScrollTrigger;
  //     const SplitText = window.SplitText;
  //   
  //     if (!gsap || !ScrollTrigger || !SplitText) return;
  //   
  //     gsap.registerPlugin(ScrollTrigger, SplitText);
  //   
  //     if (typeof window.registerVaultixEases === "function") {
  //       window.registerVaultixEases();
  //     }
  //   
  //     const init = () => {
  //       const reduceMotion = window.matchMedia(
  //         "(prefers-reduced-motion: reduce)"
  //       ).matches;
  //       if (reduceMotion) {
  //         document.documentElement.classList.remove("test-pre-anim");
  //         return;
  //       }
  //   
  //       const section = document.querySelector("[data-test-section]");
  //       if (!section) return;
  //   
  //       const eyebrow = section.querySelector("[data-test-eyebrow]");
  //       const headline = section.querySelector("[data-test-headline]");
  //       const subhead = section.querySelector("[data-test-subhead]");
  //       const cards = gsap.utils.toArray("[data-test-card]", section);
  //   
  //       const eyebrowSplit = eyebrow
  //         ? new SplitText(eyebrow, { type: "lines", mask: "lines" })
  //         : null;
  //       const headlineSplit = headline
  //         ? new SplitText(headline, { type: "lines", mask: "lines" })
  //         : null;
  //       const subheadSplit = subhead
  //         ? new SplitText(subhead, { type: "lines", mask: "lines" })
  //         : null;
  //   
  //       const cardParts = cards.map((el) => {
  //         const quoteEl = el.querySelector("[data-test-quote]");
  //         return {
  //           el,
  //           quoteSplit: quoteEl
  //             ? new SplitText(quoteEl, { type: "lines", mask: "lines" })
  //             : null,
  //           author: el.querySelector("[data-test-author]"),
  //           corners: gsap.utils.toArray("[data-test-corner]", el),
  //         };
  //       });
  //   
  //       // ---- Pre-anim states ----
  //       if (eyebrowSplit) gsap.set(eyebrowSplit.lines, { yPercent: 110 });
  //       if (headlineSplit) gsap.set(headlineSplit.lines, { yPercent: 110 });
  //       if (subheadSplit) gsap.set(subheadSplit.lines, { yPercent: 110 });
  //   
  //       cardParts.forEach(({ el, quoteSplit, author, corners }) => {
  //         gsap.set(el, { opacity: 0, y: 24 });
  //         if (quoteSplit) gsap.set(quoteSplit.lines, { yPercent: 110 });
  //         if (author) gsap.set(author, { opacity: 0, y: 8 });
  //         gsap.set(corners, { opacity: 0, scale: 0.4, transformOrigin: "center" });
  //       });
  //   
  //       document.documentElement.classList.remove("test-pre-anim");
  //   
  //       const tl = gsap.timeline({
  //         scrollTrigger: {
  //           trigger: section,
  //           start: "top 80%",
  //           once: true,
  //         },
  //       });
  //   
  //       // 1. Heading reveal
  //       if (eyebrowSplit) {
  //         tl.to(
  //           eyebrowSplit.lines,
  //           {
  //             yPercent: 0,
  //             duration: 0.6,
  //             ease: "vaultixReveal",
  //             stagger: 0.05,
  //           },
  //           0
  //         );
  //       }
  //       if (headlineSplit) {
  //         tl.to(
  //           headlineSplit.lines,
  //           {
  //             yPercent: 0,
  //             duration: 0.85,
  //             ease: "vaultixReveal",
  //             stagger: 0.1,
  //           },
  //           0.15
  //         );
  //       }
  //       if (subheadSplit) {
  //         tl.to(
  //           subheadSplit.lines,
  //           {
  //             yPercent: 0,
  //             duration: 0.55,
  //             ease: "vaultixReveal",
  //             stagger: 0.05,
  //           },
  //           0.4
  //         );
  //       }
  //   
  //       // 2. Cards stagger — each one reveals its container, quote, author, corners
  //       cardParts.forEach(({ el, quoteSplit, author, corners }, idx) => {
  //         const cStart = 0.55 + idx * 0.13;
  //   
  //         tl.to(
  //           el,
  //           {
  //             opacity: 1,
  //             y: 0,
  //             duration: 0.55,
  //             ease: "vaultixReveal",
  //           },
  //           cStart
  //         );
  //   
  //         if (quoteSplit) {
  //           tl.to(
  //             quoteSplit.lines,
  //             {
  //               yPercent: 0,
  //               duration: 0.65,
  //               ease: "vaultixReveal",
  //               stagger: 0.06,
  //             },
  //             cStart + 0.1
  //           );
  //         }
  //   
  //         if (author) {
  //           tl.to(
  //             author,
  //             {
  //               opacity: 1,
  //               y: 0,
  //               duration: 0.5,
  //               ease: "vaultixReveal",
  //             },
  //             cStart + 0.3
  //           );
  //         }
  //   
  //         if (corners.length) {
  //           tl.to(
  //             corners,
  //             {
  //               opacity: 1,
  //               scale: 1,
  //               duration: 0.35,
  //               ease: "vaultixDecor",
  //               stagger: 0.04,
  //             },
  //             cStart + 0.4
  //           );
  //         }
  //       });
  //     };
  //   
  //     if (document.readyState === "loading") {
  //       document.addEventListener("DOMContentLoaded", init);
  //     } else {
  //       init();
  //     }
  //   })();
  //   
  //   // Custom GSAP eases for Vaultix. Call window.registerVaultixEases() after gsap + CustomEase load.
  //   window.registerVaultixEases = function () {
  //     if (window._vaultixEasesRegistered) return
  //     const { gsap, CustomEase } = window
  //     if (!gsap || !CustomEase) return
  //     gsap.registerPlugin(CustomEase)
  //     CustomEase.create("vaultixStructure", "0.7, 0, 0.2, 1")
  //     CustomEase.create("vaultixReveal", "0.16, 1, 0.3, 1")
  //     CustomEase.create("vaultixDecor", "0.34, 1.3, 0.64, 1")
  //     CustomEase.create("vaultixExit", "0.4, 0, 1, 1")
  //     window._vaultixEasesRegistered = true
  //   }
  //   
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="numeros-secao-181" ref={raiz}>
      <section className="bg-[var(--color-bg)] py-12 md:py-[6rem]" data-test-section="">
            <div className="mx-auto w-full max-w-[68rem] px-4">
              <div className="grid grid-cols-1 gap-x-[2rem] gap-y-4 md:grid-cols-2 md:gap-y-[2rem] lg:gap-x-[3.75rem] lg:gap-y-[3.75rem]">
                
                <div className="flex flex-col gap-y-4 md:gap-y-[2rem] lg:gap-y-[3.75rem]">
                  <div className="flex flex-col gap-4 font-mono font-normal uppercase md:gap-[0.75rem]">
                    <p className="text-[0.875rem] leading-[1.2857] tracking-[1.68px] text-[var(--color-accent)]" data-test-eyebrow="">{s.texto}</p>
                    <h2 className="text-[2.5rem] leading-none tracking-[4.8px] text-white md:text-[2.5rem] md:tracking-[4.8px]" data-test-headline="">{s.titulo}</h2>
                    <p className="text-[0.875rem] leading-[1.2857] text-white/60" data-test-subhead="">{s.texto2}</p>
                  </div>
      
                  <article className="relative flex flex-col items-start justify-center gap-6 border border-[var(--color-border)] bg-[var(--base-600)] p-6 md:gap-[3rem] md:p-[2rem]" data-test-card="">
                    <p className="font-mono text-[1.125rem] uppercase leading-[1.5556] tracking-[2.16px] text-white" data-test-quote="">{s.texto3}</p>
                    <div className="flex w-full items-center gap-[1.5rem]" data-test-author="">
                      <img src={s.imagem} alt="Priya Mehta" width="72" height="72" loading="lazy" decoding="async" className="h-[4.5rem] w-[4.5rem] shrink-0 bg-[var(--base-600)] object-cover" />
                      <div className="flex flex-1 flex-col gap-[0.75rem] font-mono uppercase">
                        <p className="text-[1rem] leading-[1.25] text-white">{s.texto4}</p>
                        <p className="text-[0.875rem] leading-[1.2857] text-white/60">{s.texto5}</p>
                      </div>
                    </div>
                    <span className="corner-marker corner-tl" aria-hidden="true" data-test-corner=""></span>
                    <span className="corner-marker corner-tr" aria-hidden="true" data-test-corner=""></span>
                    <span className="corner-marker corner-bl" aria-hidden="true" data-test-corner=""></span>
                    <span className="corner-marker corner-br" aria-hidden="true" data-test-corner=""></span>
                  </article>
      
                  <article className="relative flex flex-col items-start justify-center gap-6 border border-[var(--color-border)] bg-[var(--base-600)] p-6 md:gap-[3rem] md:p-[2rem]" data-test-card="">
                    <p className="font-mono text-[1.125rem] uppercase leading-[1.5556] tracking-[2.16px] text-white" data-test-quote="">{s.texto6}</p>
                    <div className="flex w-full items-center gap-[1.5rem]" data-test-author="">
                      <img src={s.imagem2} alt="Kadin Korsgaard" width="72" height="72" loading="lazy" decoding="async" className="h-[4.5rem] w-[4.5rem] shrink-0 bg-[var(--base-600)] object-cover" />
                      <div className="flex flex-1 flex-col gap-[0.75rem] font-mono uppercase">
                        <p className="text-[1rem] leading-[1.25] text-white">{s.texto7}</p>
                        <p className="text-[0.875rem] leading-[1.2857] text-white/60">{s.texto8}</p>
                      </div>
                    </div>
                    <span className="corner-marker corner-tl" aria-hidden="true" data-test-corner=""></span>
                    <span className="corner-marker corner-tr" aria-hidden="true" data-test-corner=""></span>
                    <span className="corner-marker corner-bl" aria-hidden="true" data-test-corner=""></span>
                    <span className="corner-marker corner-br" aria-hidden="true" data-test-corner=""></span>
                  </article>
                </div>
      
                
                <div className="flex flex-col gap-y-4 md:gap-y-[2rem] lg:gap-y-[3.75rem]">
                  <article className="relative flex flex-col items-start justify-center gap-6 border border-[var(--color-border)] bg-[var(--base-600)] p-6 md:gap-[3rem] md:p-[2rem]" data-test-card="">
                    <p className="font-mono text-[1.125rem] uppercase leading-[1.5556] tracking-[2.16px] text-white" data-test-quote="">{s.texto9}</p>
                    <div className="flex w-full items-center gap-[1.5rem]" data-test-author="">
                      <img src={s.imagem3} alt="Dulce Baptista" width="72" height="72" loading="lazy" decoding="async" className="h-[4.5rem] w-[4.5rem] shrink-0 bg-[var(--base-600)] object-cover" />
                      <div className="flex flex-1 flex-col gap-[0.75rem] font-mono uppercase">
                        <p className="text-[1rem] leading-[1.25] text-white">{s.texto10}</p>
                        <p className="text-[0.875rem] leading-[1.2857] text-white/60">{s.texto11}</p>
                      </div>
                    </div>
                    <span className="corner-marker corner-tl" aria-hidden="true" data-test-corner=""></span>
                    <span className="corner-marker corner-tr" aria-hidden="true" data-test-corner=""></span>
                    <span className="corner-marker corner-bl" aria-hidden="true" data-test-corner=""></span>
                    <span className="corner-marker corner-br" aria-hidden="true" data-test-corner=""></span>
                  </article>
      
                  <article className="relative flex flex-col items-start justify-center gap-6 border border-[var(--color-border)] bg-[var(--base-600)] p-6 md:gap-[3rem] md:p-[2rem]" data-test-card="">
                    <p className="font-mono text-[1.125rem] uppercase leading-[1.5556] tracking-[2.16px] text-white" data-test-quote="">{s.texto12}</p>
                    <div className="flex w-full items-center gap-[1.5rem]" data-test-author="">
                      <img src={s.imagem4} alt="Jaxson George" width="72" height="72" loading="lazy" decoding="async" className="h-[4.5rem] w-[4.5rem] shrink-0 bg-[var(--base-600)] object-cover" />
                      <div className="flex flex-1 flex-col gap-[0.75rem] font-mono uppercase">
                        <p className="text-[1rem] leading-[1.25] text-white">{s.texto13}</p>
                        <p className="text-[0.875rem] leading-[1.2857] text-white/60">{s.texto14}</p>
                      </div>
                    </div>
                    <span className="corner-marker corner-tl" aria-hidden="true" data-test-corner=""></span>
                    <span className="corner-marker corner-tr" aria-hidden="true" data-test-corner=""></span>
                    <span className="corner-marker corner-bl" aria-hidden="true" data-test-corner=""></span>
                    <span className="corner-marker corner-br" aria-hidden="true" data-test-corner=""></span>
                  </article>
                </div>
              </div>
            </div>
          </section>
    </section>
  );
}