"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/hero-section/hero-21
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
    
          const positions = [
            { top: "0%", left: "0%" },
            { top: "0%", left: "10%" },
            { top: "0%", left: "60%" },
            { top: "16%", left: "15%" },
            { top: "16%", left: "40%" },
            { top: "16%", left: "90%" },
            { top: "32%", left: "50%" },
            { top: "32%", left: "75%" },
            { top: "48%", left: "0%" },
            { top: "64%", left: "30%" },
            { top: "64%", left: "50%" },
            { top: "64%", left: "90%" },
            { top: "80%", left: "20%" },
            { top: "80%", left: "70%" },
          ];
    
          const imgs = raiz.current.querySelectorAll(".img");
    
          gsap.set(".img", {
            top: "45%",
            left: "50%",
            transform: "translate(-50%, -50%) scale(0)",
          });
    
          gsap.from("p", {
            y: 40,
            ease: "power4.inOut",
            duration: 1,
            stagger: {
              amount: 0.15,
            },
            delay: 0.5,
          });
    
          gsap.to(".img", {
            scale: 1,
            width: "300px",
            height: "400px",
            stagger: 0.15,
            duration: 0.75,
            ease: "power2.out",
            delay: 1,
            onComplete: scatterAndShrink,
          });
    
          gsap.to("p", {
            top: "40px",
            ease: "power4.inOut",
            duration: 1,
            stagger: {
              amount: 0.15,
            },
            delay: 3,
            onComplete: () => {
              raiz.current.querySelector(".header").remove();
            },
          });
    
          gsap.from("a", {
            y: 20,
            opacity: 0,
            ease: "power2.out",
            duration: 1,
            stagger: {
              amount: 0.15,
            },
            delay: 4,
          });
    
          function scatterAndShrink() {
            gsap.to(".img", {
              top: (i) => positions[i].top,
              left: (i) => positions[i].left,
              transform: "none",
              width: "75px",
              height: "100px",
              stagger: 0.075,
              duration: 0.75,
              ease: "power2.out",
            });
          }
        
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="hero-hero-21" ref={raiz}>
      <div className="container">
            <div className="nav">
              <a href="#">{s.acao}</a>
              <a href="#">{s.acao2}</a>
            </div>
            <div className="footer">
              <a href="#">{s.acao3}</a>
              <a href="#">{s.acao4}</a>
            </div>
            <div className="header">
              <div className="text">
                <p>{s.texto}</p>
                <div className="text-revealer"></div>
              </div>
              <div className="text">
                <p>{s.texto2}</p>
                <div className="text-revealer"></div>
              </div>
            </div>
            <div className="gallery">
              <div className="img">
                <img src={s.imagem} alt="" />
              </div>
              <div className="img">
                <img src={s.imagem2} alt="" />
              </div>
              <div className="img">
                <img src={s.imagem3} alt="" />
              </div>
              <div className="img">
                <img src={s.imagem4} alt="" />
              </div>
              <div className="img">
                <img src={s.imagem5} alt="" />
              </div>
              <div className="img">
                <img src={s.imagem6} alt="" />
              </div>
              <div className="img">
                <img src={s.imagem7} alt="" />
              </div>
              <div className="img">
                <img src={s.imagem8} alt="" />
              </div>
              <div className="img">
                <img src={s.imagem9} alt="" />
              </div>
              <div className="img">
                <img src={s.imagem10} alt="" />
              </div>
              <div className="img">
                <img src={s.imagem11} alt="" />
              </div>
              <div className="img">
                <img src={s.imagem12} alt="" />
              </div>
              <div className="img">
                <img src={s.imagem13} alt="" />
              </div>
              <div className="img">
                <img src={s.imagem14} alt="" />
              </div>
            </div>
          </div>
    </section>
  );
}