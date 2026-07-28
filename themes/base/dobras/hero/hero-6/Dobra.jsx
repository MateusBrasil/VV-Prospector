"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/hero-section/hero-6
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Dobra.css';
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* JS de origem ESCOPADO pela esteira (categoria: dom-simples).
   * Só tocava em querySelector/classList dentro do próprio componente, por isso a troca
   * de `document.` para `raiz.current.` é equivalente e foi feita automaticamente.
   * Continua a precisar de confirmação no ecrã antes de a dobra ser promovida. */
  useGSAP(() => {
    
            const tl = gsap.timeline();
    
            // 1. Letters appear
            tl.from(".letter", {
                y: -20,
                opacity: 0,
                duration: 0.6,
                ease: "power3.inOut",
                stagger: 0.1
            })
                // 2. Letters move to corners, starting 2 seconds into the timeline
                .to(".top-left, .top-right", {
                    top: "0",
                    duration: 2,
                    ease: "power3.inOut"
                }, 2)
                .to(".bottom-right", {
                    bottom: "0",
                    duration: 2,
                    ease: "power3.inOut"
                }, "<") // "<" makes it start at the same time as the previous animation
                .to(".top-left", {
                    left: "0",
                    duration: 2,
                    ease: "power3.inOut"
                }, "<").to(".top-right", {
                    right: "0",
                    duration: 2,
                    ease: "power3.inOut"
                }, "<").to(".bottom-right", {
                    right: "0",
                    duration: 2,
                    ease: "power3.inOut"
                }, "<")
                // 3. White blocks slide away, starting 4 seconds into the timeline
                .to(".block-left", {
                    left: "-50%",
                    duration: 2,
                    ease: "power3.inOut"
                }, 4)
                .to(".block-right", {
                    right: "-50%",
                    duration: 2,
                    ease: "power3.inOut"
                }, "<"); // Starts at the same time as the left block animation
        
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="hero-hero-6" ref={raiz}>
      <div className="container">
              <video autoplay={true} playinline muted={true} loop={true}>
                  <source src={s.video}
                      type="video/mp4" />
              </video>
              <div className="wrapper">
                  <div className="copy">
                      <p>FR 3435, <br /> TYO 98234</p>
                      <p>{s.texto}</p>
                      <p>enter <br /> universe®</p>
                  </div>
                  <div className="blocks">
                      <div className="block block-left"></div>
                      <div className="block block-right"></div>
                  </div>
                  <div className="letters">
                      <div className="row">
                          <div className="letter top-left">P</div>
                          <div className="letter top-right">D</div>
                      </div>
                      <div className="row">
                          <div className="letter bottom-right">7</div>
                      </div>
                  </div>
              </div>
          </div>
    </section>
  );
}