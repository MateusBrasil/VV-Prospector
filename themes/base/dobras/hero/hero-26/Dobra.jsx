"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/hero-section/hero-26
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import './Dobra.css';
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
  //   import { SplitText } from "gsap/SplitText";
  //   import { CustomEase } from "gsap/all";
  //   
  //   gsap.registerPlugin(CustomEase, SplitText);
  //   CustomEase.create("hop", "0.8, 0, 0.2, 1");
  //   CustomEase.create("hop2", "0.9, 0, 0.1, 1");
  //   
  //   const splitText = (selector, type, className, mask = true) => {
  //     return SplitText.create(selector, {
  //       type: type,
  //       [`${type}Class`]: className,
  //       ...(mask && { mask: type }),
  //     });
  //   };
  //   
  //   const preloaderHeaderSplit = splitText(".preloader-header h1", "chars", "char");
  //   const navSplit = splitText("nav a", "words", "word");
  //   const headerSplit = splitText(".header h1", "chars", "char", false);
  //   const footerSplit = splitText(".hero-footer p", "words", "word");
  //   
  //   const preloaderImgInitRotations = [7.5, -2.5, -10, 12.5, -5, 5];
  //   gsap.set(".preloader-img", {
  //     rotate: (i) => preloaderImgInitRotations[i],
  //   });
  //   
  //   const tl = gsap.timeline({ delay: 0.5 });
  //   
  //   tl.to(".preloader-img", {
  //     scale: 1,
  //     clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  //     duration: 1,
  //     ease: "hop",
  //     stagger: 0.2,
  //   });
  //   
  //   tl.to(
  //     ".preloader-header h1 .char",
  //     {
  //       y: "0%",
  //       duration: 1,
  //       ease: "hop2",
  //       stagger: { each: 0.125, from: "random" },
  //     },
  //     "0.35",
  //   );
  //   
  //   tl.to(
  //     ".preloader-counter p",
  //     {
  //       y: "0%",
  //       duration: 1,
  //       ease: "hop2",
  //       onStart: () => {
  //         const counterEl = document.querySelector(".preloader-counter p");
  //         const counter = { value: 0 };
  //   
  //         gsap.to(counter, {
  //           value: 100,
  //           duration: 2,
  //           delay: 0.5,
  //           ease: "power2.inOut",
  //           onUpdate: () => {
  //             counterEl.textContent = String(Math.round(counter.value)).padStart(
  //               3,
  //               "0",
  //             );
  //           },
  //         });
  //       },
  //     },
  //     "<",
  //   );
  //   
  //   tl.to(
  //     ".preloader-counter p",
  //     {
  //       y: "-100%",
  //       duration: 0.75,
  //       ease: "hop2",
  //     },
  //     3.25,
  //   );
  //   
  //   tl.to(
  //     ".preloader-header h1 .char",
  //     {
  //       y: "-100%",
  //       duration: 0.75,
  //       ease: "hop2",
  //       stagger: { each: 0.125, from: "random" },
  //     },
  //     3.25,
  //   );
  //   
  //   tl.to(
  //     ".preloader-images .preloader-img",
  //     {
  //       scale: 0,
  //       clipPath: "polygon(20% 20%, 80% 20%, 80% 80%, 20% 80%)",
  //       duration: 1,
  //       ease: "hop2",
  //       stagger: -0.075,
  //     },
  //     3.5,
  //   );
  //   
  //   tl.to(
  //     ".preloader",
  //     {
  //       clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
  //       duration: 1,
  //       ease: "hop2",
  //     },
  //     4.35,
  //   );
  //   
  //   tl.to(
  //     ".header h1 .char",
  //     {
  //       y: "0%",
  //       duration: 1,
  //       ease: "hop",
  //       stagger: { each: 0.075, from: "random" },
  //     },
  //     4.65,
  //   );
  //   
  //   tl.to(
  //     "nav a .word",
  //     {
  //       y: "0%",
  //       duration: 1,
  //       ease: "hop",
  //       stagger: 0.075,
  //     },
  //     4.75,
  //   );
  //   
  //   tl.to(
  //     ".hero-footer p .word",
  //     {
  //       y: "0%",
  //       duration: 1,
  //       ease: "hop",
  //       stagger: 0.075,
  //     },
  //     4.75,
  //   );
  //   
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="hero-hero-26" ref={raiz}>
      <div className="preloader">
            <div className="preloader-images">
              <div className="preloader-img"><img src={s.imagem} alt="" /></div>
              <div className="preloader-img"><img src={s.imagem2} alt="" /></div>
              <div className="preloader-img"><img src={s.imagem3} alt="" /></div>
              <div className="preloader-img"><img src={s.imagem4} alt="" /></div>
              <div className="preloader-img"><img src={s.imagem5} alt="" /></div>
              <div className="preloader-img"><img src={s.imagem6} alt="" /></div>
            </div>
      
            <div className="preloader-header">
              <h1>{s.titulo}</h1>
      
              <div className="preloader-counter">
                <p>000</p>
              </div>
            </div>
          </div>
      
          <nav>
            <div className="nav-logo">
              <a href="#">{s.acao}</a>
            </div>
      
            <div className="nav-links">
              <a href="#">{s.acao2}</a>
              <a href="#">{s.acao3}</a>
              <a href="#">{s.acao4}</a>
              <a href="#">{s.acao5}</a>
              <a href="#">{s.acao6}</a>
            </div>
          </nav>
      
          <section className="hero">
            <div className="header">
              <h1>{s.titulo2}</h1>
            </div>
      
            <div className="hero-footer">
              <p>{s.texto}</p>
              <p>{s.texto2}</p>
              <p>{s.texto3}</p>
            </div>
          </section>
    </section>
  );
}