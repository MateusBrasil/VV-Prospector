"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/animacoes/hover-18
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
  //   import SplitText from "gsap/SplitText";
  //   
  //   gsap.registerPlugin(SplitText);
  //   
  //   document.addEventListener("DOMContentLoaded", () => {
  //     const profileImagesContainer = document.querySelector(".profile-images");
  //     const profileImages = document.querySelectorAll(".profile-images .img");
  //     const nameElements = document.querySelectorAll(".profile-names .name");
  //     const nameHeadings = document.querySelectorAll(".profile-names .name h1");
  //   
  //     nameHeadings.forEach((heading) => {
  //       const split = new SplitText(heading, { type: "chars" });
  //       split.chars.forEach((char) => {
  //         char.classList.add("letter");
  //       });
  //     });
  //   
  //     const defaultLetters = nameElements[0].querySelectorAll(".letter");
  //     gsap.set(defaultLetters, { y: "100%" });
  //   
  //     if (window.innerWidth >= 900) {
  //       profileImages.forEach((img, index) => {
  //         const correspondingName = nameElements[index + 1];
  //         const letters = correspondingName.querySelectorAll(".letter");
  //   
  //         img.addEventListener("mouseenter", () => {
  //           gsap.to(img, {
  //             width: 140,
  //             height: 140,
  //             duration: 0.5,
  //             ease: "power4.out",
  //           });
  //   
  //           gsap.to(letters, {
  //             y: "-100%",
  //             ease: "power4.out",
  //             duration: 0.75,
  //             stagger: {
  //               each: 0.025,
  //               from: "center",
  //             },
  //           });
  //         });
  //   
  //         img.addEventListener("mouseleave", () => {
  //           gsap.to(img, {
  //             width: 70,
  //             height: 70,
  //             duration: 0.5,
  //             ease: "power4.out",
  //           });
  //   
  //           gsap.to(letters, {
  //             y: "0%",
  //             ease: "power4.out",
  //             duration: 0.75,
  //             stagger: {
  //               each: 0.025,
  //               from: "center",
  //             },
  //           });
  //         });
  //       });
  //   
  //       profileImagesContainer.addEventListener("mouseenter", () => {
  //         gsap.to(defaultLetters, {
  //           y: "0%",
  //           ease: "power4.out",
  //           duration: 0.75,
  //           stagger: {
  //             each: 0.025,
  //             from: "center",
  //           },
  //         });
  //       });
  //   
  //       profileImagesContainer.addEventListener("mouseleave", () => {
  //         gsap.to(defaultLetters, {
  //           y: "100%",
  //           ease: "power4.out",
  //           duration: 0.75,
  //           stagger: {
  //             each: 0.025,
  //             from: "center",
  //           },
  //         });
  //       });
  //     }
  //   });
  //   
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="destaque-anim-hover-18" ref={raiz}>
      <section className="team">
            <div className="profile-images">
              <div className="img"><img src={s.imagem} alt="" /></div>
              <div className="img"><img src={s.imagem2} alt="" /></div>
              <div className="img"><img src={s.imagem3} alt="" /></div>
              <div className="img"><img src={s.imagem4} alt="" /></div>
              <div className="img"><img src={s.imagem5} alt="" /></div>
              <div className="img"><img src={s.imagem6} alt="" /></div>
              <div className="img"><img src={s.imagem7} alt="" /></div>
              <div className="img"><img src={s.imagem8} alt="" /></div>
              <div className="img"><img src={s.imagem9} alt="" /></div>
            </div>
      
            <div className="profile-names">
              <div className="name default"><h1>{s.titulo}</h1></div>
              <div className="name"><h1>{s.titulo2}</h1></div>
              <div className="name"><h1>{s.titulo3}</h1></div>
              <div className="name"><h1>{s.titulo4}</h1></div>
              <div className="name"><h1>{s.titulo5}</h1></div>
              <div className="name"><h1>{s.titulo6}</h1></div>
              <div className="name"><h1>{s.titulo7}</h1></div>
              <div className="name"><h1>{s.titulo8}</h1></div>
              <div className="name"><h1>{s.titulo9}</h1></div>
              <div className="name"><h1>{s.titulo10}</h1></div>
            </div>
          </section>
    </section>
  );
}