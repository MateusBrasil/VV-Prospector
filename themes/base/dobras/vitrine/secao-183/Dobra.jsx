"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-183
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
  //   // Advisora — Testimonials Section
  //   // No component-specific boot logic needed.
  //   // The header reveals are handled by the shared /advisora/scripts/scroll-reveal.js
  //   // (reads [data-reveal] / [data-reveal-delay] and animates via GSAP + ScrollTrigger).
  //   // The card marquee is a pure CSS animation defined in style.css.
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
    <section className="dobra" data-dobra="vitrine-secao-183" ref={raiz}>
      <div className="page-wrapper">
          <section className="section_testimonials">
            <div className="padding-section-large">
              <div className="content-wrap">
                <div className="padding-global">
                  <div className="header is-centered">
                    <h2 className="text-5xl" data-reveal="up">{s.titulo}</h2>
                    <div className="testimonials_description" data-reveal="up" data-reveal-delay="150">
                      <div className="text-lg text-color-secondary">Our users love how Advisora simplifies their processes and streamlines operations.</div>
                    </div>
                  </div>
                </div>
                <div className="testimonials_content">
                  <div className="testimonials_track">
                    <div className="testimonials_grid">
                      <div className="testimonials_card">
                        <div className="text-lg text-color-secondary">Advisora has completely transformed the way I manage my finances. With its intuitive interface and powerful features, I now have better control and visibility into my expenses and investments. Highly recommend it!</div>
                        <div className="testimonials_card-bottom">
                          <div className="testimonials_card-user"><img src={s.imagem} loading="lazy" alt="" className="img" /></div>
                          <div className="testimonials_card-bottom-content">
                            <div className="text-xl text-weight-medium">William Parker</div>
                            <div className="text-lg text-color-secondary">CFO at BrightPath</div>
                          </div>
                        </div>
                      </div>
                      <div className="testimonials_card">
                        <div className="text-lg text-color-secondary">I've been using Advisora for years now, and I can't imagine managing my finances without it. From tracking expenses to creating budgets, Advisora has simplified every aspect of my financial life. Thank you for such an amazing platform!</div>
                        <div className="testimonials_card-bottom">
                          <div className="testimonials_card-user"><img src={s.imagem2} loading="lazy" alt="" className="img" /></div>
                          <div className="testimonials_card-bottom-content">
                            <div className="text-xl text-weight-medium">Michael Carter</div>
                            <div className="text-lg text-color-secondary">Freelance Web Developer</div>
                          </div>
                        </div>
                      </div>
                      <div className="testimonials_card">
                        <div className="text-lg text-color-secondary">Advisora has been a game-changer for our business. With its comprehensive financial management tools, we've been able to streamline our processes and make more informed decisions. The customer support team is also top-notch.</div>
                        <div className="testimonials_card-bottom">
                          <div className="testimonials_card-user"><img src={s.imagem3} loading="lazy" alt="" className="img" /></div>
                          <div className="testimonials_card-bottom-content">
                            <div className="text-xl text-weight-medium">John Spencer</div>
                            <div className="text-lg text-color-secondary">Manager at GlobeSync</div>
                          </div>
                        </div>
                      </div>
                      <div className="testimonials_card">
                        <div className="text-lg text-color-secondary">As someone new to investing, Advisora has been an invaluable resource for me. The investment management tools have helped me understand my portfolio better and optimize my investments for better returns. I couldn't be happier with the results!</div>
                        <div className="testimonials_card-bottom">
                          <div className="testimonials_card-user"><img src={s.imagem4} loading="lazy" alt="" className="img" /></div>
                          <div className="testimonials_card-bottom-content">
                            <div className="text-xl text-weight-medium">Christopher Reed</div>
                            <div className="text-lg text-color-secondary">CEO, Beta Technologies</div>
                          </div>
                        </div>
                      </div>
                      <div className="testimonials_card">
                        <div className="text-lg text-color-secondary">Advisora has exceeded all my expectations. Not only does it make managing finances easy and efficient, but the platform also prioritizes security, giving me peace of mind knowing my data is safe. I'm a loyal Advisora user for life!</div>
                        <div className="testimonials_card-bottom">
                          <div className="testimonials_card-user"><img src={s.imagem5} loading="lazy" alt="" className="img" /></div>
                          <div className="testimonials_card-bottom-content">
                            <div className="text-xl text-weight-medium">James Rodriguez</div>
                            <div className="text-lg text-color-secondary">Founder of GreenHarves</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="testimonials_grid" aria-hidden="true">
                      <div className="testimonials_card">
                        <div className="text-lg text-color-secondary">Advisora has completely transformed the way I manage my finances. With its intuitive interface and powerful features, I now have better control and visibility into my expenses and investments. Highly recommend it!</div>
                        <div className="testimonials_card-bottom">
                          <div className="testimonials_card-user"><img src={s.imagem6} loading="lazy" alt="" className="img" /></div>
                          <div className="testimonials_card-bottom-content">
                            <div className="text-xl text-weight-medium">William Parker</div>
                            <div className="text-lg text-color-secondary">CFO at BrightPath</div>
                          </div>
                        </div>
                      </div>
                      <div className="testimonials_card">
                        <div className="text-lg text-color-secondary">I've been using Advisora for years now, and I can't imagine managing my finances without it. From tracking expenses to creating budgets, Advisora has simplified every aspect of my financial life. Thank you for such an amazing platform!</div>
                        <div className="testimonials_card-bottom">
                          <div className="testimonials_card-user"><img src={s.imagem7} loading="lazy" alt="" className="img" /></div>
                          <div className="testimonials_card-bottom-content">
                            <div className="text-xl text-weight-medium">Michael Carter</div>
                            <div className="text-lg text-color-secondary">Freelance Web Developer</div>
                          </div>
                        </div>
                      </div>
                      <div className="testimonials_card">
                        <div className="text-lg text-color-secondary">Advisora has been a game-changer for our business. With its comprehensive financial management tools, we've been able to streamline our processes and make more informed decisions. The customer support team is also top-notch.</div>
                        <div className="testimonials_card-bottom">
                          <div className="testimonials_card-user"><img src={s.imagem8} loading="lazy" alt="" className="img" /></div>
                          <div className="testimonials_card-bottom-content">
                            <div className="text-xl text-weight-medium">John Spencer</div>
                            <div className="text-lg text-color-secondary">Manager at GlobeSync</div>
                          </div>
                        </div>
                      </div>
                      <div className="testimonials_card">
                        <div className="text-lg text-color-secondary">As someone new to investing, Advisora has been an invaluable resource for me. The investment management tools have helped me understand my portfolio better and optimize my investments for better returns. I couldn't be happier with the results!</div>
                        <div className="testimonials_card-bottom">
                          <div className="testimonials_card-user"><img src={s.imagem9} loading="lazy" alt="" className="img" /></div>
                          <div className="testimonials_card-bottom-content">
                            <div className="text-xl text-weight-medium">Christopher Reed</div>
                            <div className="text-lg text-color-secondary">CEO, Beta Technologies</div>
                          </div>
                        </div>
                      </div>
                      <div className="testimonials_card">
                        <div className="text-lg text-color-secondary">Advisora has exceeded all my expectations. Not only does it make managing finances easy and efficient, but the platform also prioritizes security, giving me peace of mind knowing my data is safe. I'm a loyal Advisora user for life!</div>
                        <div className="testimonials_card-bottom">
                          <div className="testimonials_card-user"><img src={s.imagem10} loading="lazy" alt="" className="img" /></div>
                          <div className="testimonials_card-bottom-content">
                            <div className="text-xl text-weight-medium">James Rodriguez</div>
                            <div className="text-lg text-color-secondary">Founder of GreenHarves</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonials_shadow-left"></div>
                  <div className="testimonials_shadow-right"></div>
                </div>
              </div>
            </div>
          </section>
        </div>
    </section>
  );
}