"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/scroll/scroll-15/containeranimation-splittext/dist
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
  /* JS de origem ESCOPADO pela esteira (categoria: dom-simples).
   * Só tocava em querySelector/classList dentro do próprio componente, por isso a troca
   * de `document.` para `raiz.current.` é equivalente e foi feita automaticamente.
   * Continua a precisar de confirmação no ecrã antes de a dobra ser promovida. */
  useGSAP(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);
    
    let wrapper = raiz.current.querySelector(".Horizontal");
    let text = raiz.current.querySelector(".Horizontal__text");
    let split = SplitText.create(".Horizontal__text", { type: "chars, words" });
    
    const scrollTween = gsap.to(text, {
      xPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: wrapper,
        pin: true,
        end: "+=5000px",
        scrub: true
      }
    });
    
    split.chars.forEach((char) => {
      gsap.from(char, {
        yPercent: "random(-200, 200)",
        rotation: "random(-20, 20)",
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: char,
          containerAnimation: scrollTween,
          start: "left 100%",
          end: "left 30%",
          scrub: 1
        }
      });
    });
    
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-scroll-15" ref={raiz}>
      <section className="Horizontal">
        <div className="container">
          <h3 className="Horizontal__text heading-xl">{s.subtitulo}</h3>
        </div>
      </section>
    </section>
  );
}