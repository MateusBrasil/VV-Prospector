"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/efeitos-3d/animacao-3d-22
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Dobra.css';
gsap.registerPlugin(ScrollTrigger);
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* ⚠ REVER: o JS de origem está abaixo em bruto (categoria: modulo-es).
   * A esteira NÃO o converte sozinha, e nesta categoria escopar ao `raiz.current` NÃO
   * chega: o código assume que é dono da página (window/document.body/listeners de
   * load|resize|scroll), ou traz import/export, ou monta um canvas WebGL. Converter às
   * cegas produz animação que corre no elemento errado, que é pior que animação
   * nenhuma. Precisa de reescrita, não de troca de prefixo. */
  // useEffect(() => {
  //   import gsap from "gsap";
  //   import { ScrollTrigger } from "gsap/ScrollTrigger";
  //   import Lenis from "lenis";
  //   
  //   document.addEventListener("DOMContentLoaded", () => {
  //     gsap.registerPlugin(ScrollTrigger);
  //   
  //     const lenis = new Lenis();
  //     lenis.on("scroll", ScrollTrigger.update);
  //     gsap.ticker.add((time) => {
  //       lenis.raf(time * 1000);
  //     });
  //     gsap.ticker.lagSmoothing(0);
  //   
  //     const smoothStep = (p) => p * p * (3 - 2 * p);
  //   
  //     if (window.innerWidth > 1000) {
  //       ScrollTrigger.create({
  //         trigger: ".hero",
  //         start: "top top",
  //         end: "75% top",
  //         scrub: 1,
  //         onUpdate: (self) => {
  //           const progress = self.progress;
  //   
  //           const heroCardsContainerOpacity = gsap.utils.interpolate(
  //             1,
  //             0.5,
  //             smoothStep(progress)
  //           );
  //           gsap.set(".hero-cards", {
  //             opacity: heroCardsContainerOpacity,
  //           });
  //   
  //           ["#hero-card-1", "#hero-card-2", "#hero-card-3"].forEach(
  //             (cardId, index) => {
  //               const delay = index * 0.9;
  //               const cardProgress = gsap.utils.clamp(
  //                 0,
  //                 1,
  //                 (progress - delay * 0.1) / (1 - delay * 0.1)
  //               );
  //   
  //               const y = gsap.utils.interpolate(
  //                 "0%",
  //                 "350%",
  //                 smoothStep(cardProgress)
  //               );
  //               const scale = gsap.utils.interpolate(
  //                 1,
  //                 0.75,
  //                 smoothStep(cardProgress)
  //               );
  //   
  //               let x = "0%";
  //               let rotation = 0;
  //               if (index === 0) {
  //                 x = gsap.utils.interpolate("0%", "90%", smoothStep(cardProgress));
  //                 rotation = gsap.utils.interpolate(
  //                   0,
  //                   -15,
  //                   smoothStep(cardProgress)
  //                 );
  //               } else if (index === 2) {
  //                 x = gsap.utils.interpolate(
  //                   "0%",
  //                   "-90%",
  //                   smoothStep(cardProgress)
  //                 );
  //                 rotation = gsap.utils.interpolate(
  //                   0,
  //                   15,
  //                   smoothStep(cardProgress)
  //                 );
  //               }
  //   
  //               gsap.set(cardId, {
  //                 y: y,
  //                 x: x,
  //                 rotation: rotation,
  //                 scale: scale,
  //               });
  //             }
  //           );
  //         },
  //       });
  //   
  //       ScrollTrigger.create({
  //         trigger: ".services",
  //         start: "top top",
  //         end: `+=${window.innerHeight * 4}px`,
  //         pin: ".services",
  //         pinSpacing: true,
  //       });
  //   
  //       ScrollTrigger.create({
  //         trigger: ".services",
  //         start: "top top",
  //         end: `+=${window.innerHeight * 4}px`,
  //         onLeave: () => {
  //           const servicesSection = document.querySelector(".services");
  //           const servicesRect = servicesSection.getBoundingClientRect();
  //           const servicesTop = window.pageYOffset + servicesRect.top;
  //   
  //           gsap.set(".cards", {
  //             position: "absolute",
  //             top: servicesTop,
  //             left: 0,
  //             width: "100vw",
  //             height: "100vh",
  //           });
  //         },
  //         onEnterBack: () => {
  //           gsap.set(".cards", {
  //             position: "fixed",
  //             top: 0,
  //             left: 0,
  //             width: "100vw",
  //             height: "100vh",
  //           });
  //         },
  //       });
  //   
  //       ScrollTrigger.create({
  //         trigger: ".services",
  //         start: "top bottom",
  //         end: `+=${window.innerHeight * 4}`,
  //         scrub: 1,
  //         onUpdate: (self) => {
  //           const progress = self.progress;
  //   
  //           const headerProgress = gsap.utils.clamp(0, 1, progress / 0.9);
  //           const headerY = gsap.utils.interpolate(
  //             "400%",
  //             "0%",
  //             smoothStep(headerProgress)
  //           );
  //           gsap.set(".services-header", {
  //             y: headerY,
  //           });
  //   
  //           ["#card-1", "#card-2", "#card-3"].forEach((cardId, index) => {
  //             const delay = index * 0.5;
  //             const cardProgress = gsap.utils.clamp(
  //               0,
  //               1,
  //               (progress - delay * 0.1) / (0.9 - delay * 0.1)
  //             );
  //   
  //             const innerCard = document.querySelector(
  //               `${cardId} .flip-card-inner`
  //             );
  //   
  //             let y;
  //             if (cardProgress < 0.4) {
  //               const normalizedProgress = cardProgress / 0.4;
  //               y = gsap.utils.interpolate(
  //                 "-100%",
  //                 "50%",
  //                 smoothStep(normalizedProgress)
  //               );
  //             } else if (cardProgress < 0.6) {
  //               const normalizedProgress = (cardProgress - 0.4) / 0.2;
  //               y = gsap.utils.interpolate(
  //                 "50%",
  //                 "0%",
  //                 smoothStep(normalizedProgress)
  //               );
  //             } else {
  //               y = "0%";
  //             }
  //   
  //             let scale;
  //             if (cardProgress < 0.4) {
  //               const normalizedProgress = cardProgress / 0.4;
  //               scale = gsap.utils.interpolate(
  //                 0.25,
  //                 0.75,
  //                 smoothStep(normalizedProgress)
  //               );
  //             } else if (cardProgress < 0.6) {
  //               const normalizedProgress = (cardProgress - 0.4) / 0.2;
  //               scale = gsap.utils.interpolate(
  //                 0.75,
  //                 1,
  //                 smoothStep(normalizedProgress)
  //               );
  //             } else {
  //               scale = 1;
  //             }
  //   
  //             let opacity;
  //             if (cardProgress < 0.2) {
  //               const normalizedProgress = cardProgress / 0.2;
  //               opacity = smoothStep(normalizedProgress);
  //             } else {
  //               opacity = 1;
  //             }
  //   
  //             let x, rotate, rotationY;
  //             if (cardProgress < 0.6) {
  //               x = index === 0 ? "100%" : index === 1 ? "0%" : "-100%";
  //               rotate = index === 0 ? -5 : index === 1 ? 0 : 5;
  //               rotationY = 0;
  //             } else if (cardProgress < 1) {
  //               const normalizedProgress = (cardProgress - 0.6) / 0.4;
  //               x = gsap.utils.interpolate(
  //                 index === 0 ? "100%" : index === 1 ? "0%" : "-100%",
  //                 "0%",
  //                 smoothStep(normalizedProgress)
  //               );
  //               rotate = gsap.utils.interpolate(
  //                 index === 0 ? -5 : index === 1 ? 0 : 5,
  //                 0,
  //                 smoothStep(normalizedProgress)
  //               );
  //               rotationY = smoothStep(normalizedProgress) * 180;
  //             } else {
  //               x = "0%";
  //               rotate = 0;
  //               rotationY = 180;
  //             }
  //   
  //             gsap.set(cardId, {
  //               opacity: opacity,
  //               y: y,
  //               x: x,
  //               rotate: rotate,
  //               scale: scale,
  //             });
  //   
  //             gsap.set(innerCard, {
  //               rotationY: rotationY,
  //             });
  //           });
  //         },
  //       });
  //     }
  //   });
  //   
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="destaque-3d-animacao-3d-22" ref={raiz}>
      <nav>
            <div className="logo"><span>{s.rotulo}</span></div>
            <div className="menu-btn"><span>{s.rotulo2}</span></div>
          </nav>
      
          <section className="hero">
            <div className="hero-cards">
              <div className="card" id="hero-card-1">
                <div className="card-title">
                  <span>{s.rotulo3}</span>
                  <span>01</span>
                </div>
                <div className="card-title">
                  <span>01</span>
                  <span>{s.rotulo4}</span>
                </div>
              </div>
      
              <div className="card" id="hero-card-2">
                <div className="card-title">
                  <span>{s.rotulo5}</span>
                  <span>02</span>
                </div>
                <div className="card-title">
                  <span>02</span>
                  <span>{s.rotulo6}</span>
                </div>
              </div>
      
              <div className="card" id="hero-card-3">
                <div className="card-title">
                  <span>{s.rotulo7}</span>
                  <span>03</span>
                </div>
                <div className="card-title">
                  <span>03</span>
                  <span>{s.rotulo8}</span>
                </div>
              </div>
            </div>
          </section>
      
          <section className="about">
            <h1>{s.titulo}</h1>
          </section>
      
          <section className="services">
            <div className="services-header">
              <h1>{s.titulo2}</h1>
            </div>
      
            <div className="mobile-cards">
              <div className="cards-container">
                <div className="card" id="mobile-card-1">
                  <div className="card-wrapper">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <div className="card-title">
                          <span>{s.rotulo9}</span>
                          <span>01</span>
                        </div>
                        <div className="card-title">
                          <span>01</span>
                          <span>{s.rotulo10}</span>
                        </div>
                      </div>
                      <div className="flip-card-back">
                        <div className="card-title">
                          <span>{s.rotulo11}</span>
                          <span>01</span>
                        </div>
                        <div className="card-copy">
                          <p>{s.texto}</p>
                          <p>{s.texto2}</p>
                          <p>{s.texto3}</p>
                          <p>{s.texto4}</p>
                          <p>{s.texto5}</p>
                          <p>{s.texto6}</p>
                        </div>
                        <div className="card-title">
                          <span>01</span>
                          <span>{s.rotulo12}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
      
                <div className="card" id="mobile-card-2">
                  <div className="card-wrapper">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <div className="card-title">
                          <span>{s.rotulo13}</span>
                          <span>02</span>
                        </div>
                        <div className="card-title">
                          <span>02</span>
                          <span>{s.rotulo14}</span>
                        </div>
                      </div>
                      <div className="flip-card-back">
                        <div className="card-title">
                          <span>{s.rotulo15}</span>
                          <span>02</span>
                        </div>
                        <div className="card-copy">
                          <p>{s.texto7}</p>
                          <p>{s.texto8}</p>
                          <p>{s.texto9}</p>
                          <p>{s.texto10}</p>
                          <p>{s.texto11}</p>
                          <p>{s.texto12}</p>
                        </div>
                        <div className="card-title">
                          <span>02</span>
                          <span>{s.rotulo16}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
      
                <div className="card" id="mobile-card-3">
                  <div className="card-wrapper">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <div className="card-title">
                          <span>{s.rotulo17}</span>
                          <span>03</span>
                        </div>
                        <div className="card-title">
                          <span>03</span>
                          <span>{s.rotulo18}</span>
                        </div>
                      </div>
                      <div className="flip-card-back">
                        <div className="card-title">
                          <span>{s.rotulo19}</span>
                          <span>03</span>
                        </div>
                        <div className="card-copy">
                          <p>{s.texto13}</p>
                          <p>{s.texto14}</p>
                          <p>{s.texto15}</p>
                          <p>{s.texto16}</p>
                          <p>{s.texto17}</p>
                          <p>{s.texto18}</p>
                        </div>
                        <div className="card-title">
                          <span>03</span>
                          <span>{s.rotulo20}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
      
          <section className="cards">
            <div className="cards-container">
              <div className="card" id="card-1">
                <div className="card-wrapper">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <div className="card-title">
                        <span>{s.rotulo21}</span>
                        <span>01</span>
                      </div>
                      <div className="card-title">
                        <span>01</span>
                        <span>{s.rotulo22}</span>
                      </div>
                    </div>
                    <div className="flip-card-back">
                      <div className="card-title">
                        <span>{s.rotulo23}</span>
                        <span>01</span>
                      </div>
                      <div className="card-copy">
                        <p>{s.texto19}</p>
                        <p>{s.texto20}</p>
                        <p>{s.texto21}</p>
                        <p>{s.texto22}</p>
                        <p>{s.texto23}</p>
                        <p>{s.texto24}</p>
                      </div>
                      <div className="card-title">
                        <span>01</span>
                        <span>{s.rotulo24}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      
              <div className="card" id="card-2">
                <div className="card-wrapper">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <div className="card-title">
                        <span>{s.rotulo25}</span>
                        <span>02</span>
                      </div>
                      <div className="card-title">
                        <span>02</span>
                        <span>{s.rotulo26}</span>
                      </div>
                    </div>
                    <div className="flip-card-back">
                      <div className="card-title">
                        <span>{s.rotulo27}</span>
                        <span>02</span>
                      </div>
                      <div className="card-copy">
                        <p>{s.texto25}</p>
                        <p>{s.texto26}</p>
                        <p>{s.texto27}</p>
                        <p>{s.texto28}</p>
                        <p>{s.texto29}</p>
                        <p>{s.texto30}</p>
                      </div>
                      <div className="card-title">
                        <span>02</span>
                        <span>{s.rotulo28}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      
              <div className="card" id="card-3">
                <div className="card-wrapper">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <div className="card-title">
                        <span>{s.rotulo29}</span>
                        <span>03</span>
                      </div>
                      <div className="card-title">
                        <span>03</span>
                        <span>{s.rotulo30}</span>
                      </div>
                    </div>
                    <div className="flip-card-back">
                      <div className="card-title">
                        <span>{s.rotulo31}</span>
                        <span>03</span>
                      </div>
                      <div className="card-copy">
                        <p>{s.texto31}</p>
                        <p>{s.texto32}</p>
                        <p>{s.texto33}</p>
                        <p>{s.texto34}</p>
                        <p>{s.texto35}</p>
                        <p>{s.texto36}</p>
                      </div>
                      <div className="card-title">
                        <span>03</span>
                        <span>{s.rotulo32}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
      
          <section className="outro">
            <h1>{s.titulo3}</h1>
          </section>
    </section>
  );
}