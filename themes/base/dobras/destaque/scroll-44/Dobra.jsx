"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/scroll/scroll-44
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
  //   document.addEventListener("DOMContentLoaded", () => {
  //     gsap.registerPlugin(ScrollTrigger);
  //   
  //     // smooth scroll
  //     const lenis = new Lenis();
  //     lenis.on("scroll", ScrollTrigger.update);
  //     gsap.ticker.add((time) => {
  //       lenis.raf(time * 1000);
  //     });
  //     gsap.ticker.lagSmoothing(0);
  //   
  //     const cards = gsap.utils.toArray(".card");
  //     const totalScrollHeight = window.innerHeight * 3;
  //     const positions = [14, 38, 62, 86];
  //     const rotations = [-15, -7.5, 7.5, 15];
  //   
  //     // pin the cards section
  //     ScrollTrigger.create({
  //       trigger: ".cards",
  //       start: "top top",
  //       end: () => `+=${totalScrollHeight}`,
  //       pin: true,
  //       pinSpacing: true,
  //     });
  //   
  //     // spread cards
  //     cards.forEach((card, index) => {
  //       gsap.to(card, {
  //         left: `${positions[index]}%`,
  //         rotation: `${rotations[index]}`,
  //         ease: "none",
  //         scrollTrigger: {
  //           trigger: ".cards",
  //           start: "top top",
  //           end: () => `+=${window.innerHeight}`,
  //           scrub: 0.5,
  //           id: `spread-${index}`,
  //         },
  //       });
  //     });
  //   
  //     // rotate and flip cards with staggered effect
  //     cards.forEach((card, index) => {
  //       const frontEl = card.querySelector(".flip-card-front");
  //       const backEl = card.querySelector(".flip-card-back");
  //   
  //       const staggerOffset = index * 0.05;
  //       const startOffset = 1 / 3 + staggerOffset;
  //       const endOffset = 2 / 3 + staggerOffset;
  //   
  //       ScrollTrigger.create({
  //         trigger: ".cards",
  //         start: "top top",
  //         end: () => `+=${totalScrollHeight}`,
  //         scrub: 1,
  //         id: `rotate-flip-${index}`,
  //         onUpdate: (self) => {
  //           const progress = self.progress;
  //           if (progress >= startOffset && progress <= endOffset) {
  //             const animationProgress = (progress - startOffset) / (1 / 3);
  //             const frontRotation = -180 * animationProgress;
  //             const backRotation = 180 - 180 * animationProgress;
  //             const cardRotation = rotations[index] * (1 - animationProgress);
  //   
  //             frontEl.style.transform = `rotateY(${frontRotation}deg)`;
  //             backEl.style.transform = `rotateY(${backRotation}deg)`;
  //             card.style.transform = `translate(-50%, -50%) rotate(${cardRotation}deg)`;
  //           }
  //         },
  //       });
  //     });
  //   });
  //   
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-scroll-44" ref={raiz}>
      <section className="hero">
            <h1>
              Keep scrolling to <br />
              reveal the cards
            </h1>
          </section>
      
          <section className="cards">
            <div className="card" id="card-1">
              <div className="card-wrapper">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={s.imagem} alt="Card" />
                  </div>
                  <div className="flip-card-back">
                    <p>
                      Your card details <br />
                      appear here
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card" id="card-2">
              <div className="card-wrapper">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={s.imagem2} alt="Card" />
                  </div>
                  <div className="flip-card-back">
                    <p>
                      Your card details <br />
                      appear here
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card" id="card-3">
              <div className="card-wrapper">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={s.imagem3} alt="Card" />
                  </div>
                  <div className="flip-card-back">
                    <p>
                      Your card details <br />
                      appear here
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card" id="card-4">
              <div className="card-wrapper">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={s.imagem4} alt="Card" />
                  </div>
                  <div className="flip-card-back">
                    <p>
                      Your card details <br />
                      appear here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
      
          <section className="footer">
            <h1>{s.titulo}</h1>
          </section>
    </section>
  );
}