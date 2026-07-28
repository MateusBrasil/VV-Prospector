"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-169
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
  //   // Advisora — About Team
  //   // No component-specific boot logic. The shared /advisora/scripts/scroll-reveal.js
  //   // (loaded as a classic <script> before this file) drives the [data-reveal] entrance
  //   // animations on the heading, description and team cards. Nothing else to wire up here.
  //   
  //   // Advisora scroll-reveal — CDN-friendly global (gsap + ScrollTrigger from CDN).
  //   // Self-initializes on DOM ready. Ported from src/scripts/scroll-reveal.ts.
  //   // No top-level export (would be a parse-time SyntaxError as a classic <script>).
  //   (function () {
  //     function init() {
  //       if (typeof gsap === "undefined") return;
  //       if (typeof ScrollTrigger !== "undefined") gsap.registerPlugin(ScrollTrigger);
  //   
  //       var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  //   
  //       if (prefersReduced || typeof ScrollTrigger === "undefined") {
  //         document.querySelectorAll("[data-reveal]").forEach(function (el) {
  //           el.style.opacity = "1";
  //           el.style.transform = "none";
  //           el.style.filter = "none";
  //         });
  //         return;
  //       }
  //   
  //       document.querySelectorAll("[data-reveal]").forEach(function (el) {
  //         var direction = el.dataset.reveal || "up";
  //         var delayAttr = el.dataset.revealDelay;
  //         var delay = delayAttr ? parseFloat(delayAttr) / 1000 : 0.1;
  //   
  //         var from, to;
  //   
  //         if (direction === "zoom-blur") {
  //           from = { opacity: 0, scale: 1.15, filter: "blur(8px)" };
  //           to = { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.1, ease: "power3.out", delay: delay };
  //         } else {
  //           from = { opacity: 0 };
  //           if (direction === "up") from.y = 15;
  //           else if (direction === "down") from.y = -15;
  //           else if (direction === "left") from.x = -15;
  //           else if (direction === "right") from.x = 15;
  //   
  //           to = { opacity: 1, x: 0, y: 0, duration: 0.7, ease: "power3.out", delay: delay };
  //         }
  //   
  //         gsap.set(el, from);
  //         ScrollTrigger.create({
  //           trigger: el,
  //           start: "top 90%",
  //           onEnter: function () { gsap.to(el, to); },
  //           once: true,
  //         });
  //       });
  //     }
  //   
  //     if (document.readyState === "loading") {
  //       document.addEventListener("DOMContentLoaded", init);
  //     } else {
  //       init();
  //     }
  //   })();
  //   
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="equipa-grelha" ref={raiz}>
      <div className="page-wrapper">
          <div className="section_team">
            <div className="padding-global padding-section-large">
              <div className="container-large">
                <div className="content-wrap">
                  <div className="team_header">
                    <div className="team_title" data-reveal="up">
                      <h2 className="text-5xl">{s.titulo}</h2>
                    </div>
                    <div className="team_description" data-reveal="up" data-reveal-delay="150">
                      <div className="text-lg text-color-secondary">Meet the talented individuals who drive our company's success with their dedication, expertise, and passion for innovation</div>
                    </div>
                  </div>
                  <div className="team_content">
                    <div className="team_grid">
                      <div className="team_card" data-reveal="up" data-reveal-delay="100">
                        <div className="team_card-visual">
                          <div className="img-wrapper"><img sizes="(max-width: 479px) 76vw, (max-width: 767px) 55vw, (max-width: 991px) 43vw, 28vw" alt="" src={s.imagem} loading="lazy" srcSet="https://d173woph5zl366.cloudfront.net/advisora/images/team-image-1_1team-image-1.webp 500w, https://d173woph5zl366.cloudfront.net/advisora/images/team-image-1_1.webp 742w" className="img" /></div>
                        </div>
                        <div className="team_card-content">
                          <div className="team_card-text">
                            <h3 className="text-2xl text-weight-medium">{s.subtitulo}</h3>
                            <div className="text-base text-color-secondary">Head of Marketing</div>
                          </div>
                          <a href={s.destino || '#'} target="_blank" className="team_card-link w-inline-block"><img src={s.imagem2} loading="lazy" alt="" className="team_card-logo" /></a>
                        </div>
                      </div>
                      <div className="team_card" data-reveal="up" data-reveal-delay="200">
                        <div className="team_card-visual">
                          <div className="img-wrapper"><img sizes="(max-width: 479px) 76vw, (max-width: 767px) 55vw, (max-width: 991px) 43vw, 28vw" alt="" src={s.imagem3} loading="lazy" srcSet="https://d173woph5zl366.cloudfront.net/advisora/images/team-image-2_1team-image-2.webp 500w, https://d173woph5zl366.cloudfront.net/advisora/images/team-image-2_1.webp 742w" className="img" /></div>
                        </div>
                        <div className="team_card-content">
                          <div className="team_card-text">
                            <h3 className="text-2xl text-weight-medium">{s.subtitulo2}</h3>
                            <div className="text-base text-color-secondary">Head of Finance</div>
                          </div>
                          <a href={s.destino2 || '#'} target="_blank" className="team_card-link w-inline-block"><img src={s.imagem4} loading="lazy" alt="" className="team_card-logo" /></a>
                        </div>
                      </div>
                      <div className="team_card" data-reveal="up" data-reveal-delay="300">
                        <div className="team_card-visual">
                          <div className="img-wrapper"><img sizes="(max-width: 479px) 76vw, (max-width: 767px) 55vw, (max-width: 991px) 43vw, 28vw" alt="" src={s.imagem5} loading="lazy" srcSet="https://d173woph5zl366.cloudfront.net/advisora/images/team-image-3_1team-image-3.webp 500w, https://d173woph5zl366.cloudfront.net/advisora/images/team-image-3_1.webp 742w" className="img" /></div>
                        </div>
                        <div className="team_card-content">
                          <div className="team_card-text">
                            <h3 className="text-2xl text-weight-medium">{s.subtitulo3}</h3>
                            <div className="text-base text-color-secondary">Accountant</div>
                          </div>
                          <a href={s.destino3 || '#'} target="_blank" className="team_card-link w-inline-block"><img src={s.imagem6} loading="lazy" alt="" className="team_card-logo" /></a>
                        </div>
                      </div>
                      <div className="team_card" data-reveal="up" data-reveal-delay="400">
                        <div className="team_card-visual">
                          <div className="img-wrapper"><img sizes="(max-width: 479px) 76vw, (max-width: 767px) 55vw, (max-width: 991px) 43vw, 28vw" alt="" src={s.imagem7} loading="lazy" srcSet="https://d173woph5zl366.cloudfront.net/advisora/images/team-image-4_1team-image-4.webp 500w, https://d173woph5zl366.cloudfront.net/advisora/images/team-image-4_1.webp 742w" className="img" /></div>
                        </div>
                        <div className="team_card-content">
                          <div className="team_card-text">
                            <h3 className="text-2xl text-weight-medium">{s.subtitulo4}</h3>
                            <div className="text-base text-color-secondary">Product Manager</div>
                          </div>
                          <a href={s.destino4 || '#'} target="_blank" className="team_card-link w-inline-block"><img src={s.imagem8} loading="lazy" alt="" className="team_card-logo" /></a>
                        </div>
                      </div>
                      <div className="team_card" data-reveal="up" data-reveal-delay="500">
                        <div className="team_card-visual">
                          <div className="img-wrapper"><img sizes="(max-width: 479px) 76vw, (max-width: 767px) 55vw, (max-width: 991px) 43vw, 28vw" alt="" src={s.imagem9} loading="lazy" srcSet="https://d173woph5zl366.cloudfront.net/advisora/images/team-image-5_1team-image-5.webp 500w, https://d173woph5zl366.cloudfront.net/advisora/images/team-image-5_1.webp 742w" className="img" /></div>
                        </div>
                        <div className="team_card-content">
                          <div className="team_card-text">
                            <h3 className="text-2xl text-weight-medium">{s.subtitulo5}</h3>
                            <div className="text-base text-color-secondary">Business &amp; Development</div>
                          </div>
                          <a href={s.destino5 || '#'} target="_blank" className="team_card-link w-inline-block"><img src={s.imagem10} loading="lazy" alt="" className="team_card-logo" /></a>
                        </div>
                      </div>
                      <div className="team_card" data-reveal="up" data-reveal-delay="600">
                        <div className="team_card-visual">
                          <div className="img-wrapper"><img sizes="(max-width: 479px) 76vw, (max-width: 767px) 55vw, (max-width: 991px) 43vw, 28vw" alt="" src={s.imagem11} loading="lazy" srcSet="https://d173woph5zl366.cloudfront.net/advisora/images/team-image-6_1team-image-6.webp 500w, https://d173woph5zl366.cloudfront.net/advisora/images/team-image-6_1.webp 742w" className="img" /></div>
                        </div>
                        <div className="team_card-content">
                          <div className="team_card-text">
                            <h3 className="text-2xl text-weight-medium">{s.subtitulo6}</h3>
                            <div className="text-base text-color-secondary">Account Manager</div>
                          </div>
                          <a href={s.destino6 || '#'} target="_blank" className="team_card-link w-inline-block"><img src={s.imagem12} loading="lazy" alt="" className="team_card-logo" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}