"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/scroll/scroll-51
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
  //   import { SplitText } from "gsap/SplitText";
  //   import Lenis from "lenis";
  //   
  //   document.addEventListener("DOMContentLoaded", () => {
  //     gsap.registerPlugin(ScrollTrigger, SplitText);
  //   
  //     const lenis = new Lenis();
  //     lenis.on("scroll", ScrollTrigger.update);
  //     gsap.ticker.add((time) => {
  //       lenis.raf(time * 1000);
  //     });
  //     gsap.ticker.lagSmoothing(0);
  //   
  //     gsap.utils.toArray(".work-item").forEach((item) => {
  //       const img = item.querySelector(".work-item-img");
  //       const nameH1 = item.querySelector(".work-item-name h1");
  //   
  //       const split = SplitText.create(nameH1, {
  //         type: "chars",
  //         mask: "chars",
  //       });
  //   
  //       gsap.set(split.chars, { y: "125%" });
  //   
  //       split.chars.forEach((char, index) => {
  //         ScrollTrigger.create({
  //           trigger: item,
  //           start: `top+=${index * 25 - 250} top`,
  //           end: `top+=${index * 25 - 100} top`,
  //           scrub: 1,
  //           animation: gsap.fromTo(
  //             char,
  //             {
  //               y: "125%",
  //             },
  //             {
  //               y: "0%",
  //               ease: "none",
  //             }
  //           ),
  //         });
  //       });
  //   
  //       ScrollTrigger.create({
  //         trigger: item,
  //         start: "top bottom",
  //         end: "top top",
  //         scrub: 0.5,
  //         animation: gsap.fromTo(
  //           img,
  //           {
  //             clipPath: "polygon(25% 25%, 75% 40%, 100% 100%, 0% 100%)",
  //           },
  //           {
  //             clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  //             ease: "none",
  //           }
  //         ),
  //       });
  //   
  //       ScrollTrigger.create({
  //         trigger: item,
  //         start: "bottom bottom",
  //         end: "bottom top",
  //         scrub: 0.5,
  //         animation: gsap.fromTo(
  //           img,
  //           {
  //             clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  //           },
  //           {
  //             clipPath: "polygon(0% 0%, 100% 0%, 75% 60%, 25% 75%)",
  //             ease: "none",
  //           }
  //         ),
  //       });
  //     });
  //   });
  //   
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="destaque-scroll-51" ref={raiz}>
      <section className="hero">
            <h1>{s.titulo}</h1>
          </section>
          <section className="work-item">
            <div className="work-item-img"><img src={s.imagem} alt="" /></div>
            <div className="work-item-name">
              <h1>{s.titulo2}</h1>
            </div>
          </section>
          <section className="work-item">
            <div className="work-item-img"><img src={s.imagem2} alt="" /></div>
            <div className="work-item-name">
              <h1>{s.titulo3}</h1>
            </div>
          </section>
          <section className="work-item">
            <div className="work-item-img"><img src={s.imagem3} alt="" /></div>
            <div className="work-item-name">
              <h1>{s.titulo4}</h1>
            </div>
          </section>
          <section className="work-item">
            <div className="work-item-img"><img src={s.imagem4} alt="" /></div>
            <div className="work-item-name">
              <h1>{s.titulo5}</h1>
            </div>
          </section>
          <section className="work-item">
            <div className="work-item-img"><img src={s.imagem5} alt="" /></div>
            <div className="work-item-name">
              <h1>{s.titulo6}</h1>
            </div>
          </section>
          <section className="outro">
            <h1>{s.titulo7}</h1>
          </section>
    </section>
  );
}