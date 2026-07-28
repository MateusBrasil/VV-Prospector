"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/textos/animacao-texto-10
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
  //   document.addEventListener("DOMContentLoaded", function () {
  //       gsap.registerPlugin(ScrollTrigger);
  //   
  //       const stickyBar = document.querySelector(".sticky-bar");
  //       const footerTrigger = document.querySelector(".trigger-footer");
  //       const footerTriggerHeight = footerTrigger.offsetHeight;
  //   
  //       function getStickyBarCenter() {
  //         return stickyBar.offsetTop + stickyBar.offsetHeight / 2;
  //       }
  //   
  //       document.querySelectorAll(".row").forEach((row) => {
  //         ScrollTrigger.create({
  //           trigger: row,
  //           start: () => `top+=${getStickyBarCenter() - 650} center`,
  //           end: () => `top+=${getStickyBarCenter() - 450} center`,
  //           scrub: true,
  //           onUpdate: (self) => {
  //             const progress = self.progress;
  //             const maxGap = window.innerWidth < 900 ? 10 : 15;
  //             const minGap = window.innerWidth < 900 ? 0.5 : 1;
  //             const currentGap = minGap + (maxGap - minGap) * progress;
  //             row.style.gap = `${currentGap}em`;
  //           },
  //         });
  //       });
  //   
  //       document.querySelectorAll(".row").forEach((row) => {
  //         ScrollTrigger.create({
  //           trigger: row,
  //           start: () => `top+=${getStickyBarCenter() - 400} center`,
  //           end: () => `top+=${getStickyBarCenter() - 300} center`,
  //           scrub: true,
  //           onUpdate: (self) => {
  //             const progress = self.progress;
  //             const maxGap = window.innerWidth < 900 ? 0.5 : 1;
  //             const minGap = window.innerWidth < 900 ? 10 : 15;
  //             const currentGap = minGap + (maxGap - minGap) * progress;
  //             row.style.gap = `${currentGap}em`;
  //           },
  //         });
  //       });
  //   
  //       ScrollTrigger.create({
  //         trigger: footerTrigger,
  //         start: "top bottom",
  //         end: () => `top+=${footerTriggerHeight - window.innerHeight} center`,
  //         scrub: true,
  //         onUpdate: (self) => {
  //           const startTop = 50;
  //           const endTop = 92;
  //           const newTop = startTop + (endTop - startTop) * self.progress;
  //           stickyBar.style.top = `${newTop}%`;
  //         },
  //       });
  //   
  //       ScrollTrigger.create({
  //         trigger: footerTrigger,
  //         start: () =>
  //           `top+=${footerTriggerHeight - (window.innerHeight + 100)} bottom`,
  //         end: "bottom bottom",
  //         scrub: true,
  //         onUpdate: (self) => {
  //           const fontSizeStart = window.innerWidth < 900 ? 2.5 : 1.25;
  //           const fontSizeEnd = 9;
  //           const newFontSize =
  //             fontSizeStart + (fontSizeEnd - fontSizeStart) * self.progress;
  //           stickyBar.querySelectorAll("p").forEach((p) => {
  //             p.style.fontSize = `${newFontSize}vw`;
  //           });
  //         },
  //       });
  //     });
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-txt-animacao-texto-10" ref={raiz}>
      <div className="container">
          <div className="sticky-bar">
            <div className="item">
              <p>{s.texto}</p>
            </div>
            <div className="item">
              <p>&</p>
            </div>
            <div className="item">
              <p>{s.texto2}</p>
            </div>
          </div>
        
          <section className="hero">
            <img src={s.imagem} width="100%" height="100%" alt="Premium UI animations showcase" />
          </section>
        
          <section className="clients">
            <div className="row">
              <div className="logo">
                <p>{s.texto3}</p>
              </div>
              <div className="logo">
                <p>{s.texto4}</p>
              </div>
            </div>
            <div className="row">
              <div className="logo">
                <p>{s.texto5}</p>
              </div>
              <div className="logo">
                <p>{s.texto6}</p>
              </div>
            </div>
            <div className="row">
              <div className="logo">
                <p>{s.texto7}</p>
              </div>
              <div className="logo">
                <p>{s.texto8}</p>
              </div>
            </div>
            <div className="row">
              <div className="logo">
                <p>{s.texto9}</p>
              </div>
              <div className="logo">
                <p>{s.texto10}</p>
              </div>
            </div>
            <div className="row">
              <div className="logo">
                <p>{s.texto11}</p>
              </div>
              <div className="logo">
                <p>{s.texto12}</p>
              </div>
            </div>
            <div className="row">
              <div className="logo">
                <p>{s.texto13}</p>
              </div>
              <div className="logo">
                <p>{s.texto14}</p>
              </div>
            </div>
            <div className="row">
              <div className="logo">
                <p>{s.texto15}</p>
              </div>
              <div className="logo">
                <p>{s.texto16}</p>
              </div>
            </div>
            <div className="row">
              <div className="logo">
                <p>{s.texto17}</p>
              </div>
              <div className="logo">
                <p>{s.texto18}</p>
              </div>
            </div>
            <div className="row">
              <div className="logo">
                <p>{s.texto19}</p>
              </div>
              <div className="logo">
                <p>{s.texto20}</p>
              </div>
            </div>
            <div className="row">
              <div className="logo">
                <p>{s.texto21}</p>
              </div>
              <div className="logo">
                <p>{s.texto22}</p>
              </div>
            </div>
            <div className="row">
              <div className="logo">
                <p>{s.texto23}</p>
              </div>
              <div className="logo">
                <p>{s.texto24}</p>
              </div>
            </div>
            <div className="row">
              <div className="logo">
                <p>{s.texto25}</p>
              </div>
              <div className="logo">
                <p>{s.texto26}</p>
              </div>
            </div>
            <div className="row">
              <div className="logo">
                <p>{s.texto27}</p>
              </div>
              <div className="logo">
                <p>{s.texto28}</p>
              </div>
            </div>
            <div className="row">
              <div className="logo">
                <p>{s.texto29}</p>
              </div>
              <div className="logo">
                <p>{s.texto30}</p>
              </div>
            </div>
            <div className="row">
              <div className="logo">
                <p>{s.texto31}</p>
              </div>
              <div className="logo">
                <p>{s.texto32}</p>
              </div>
            </div>
            <div className="row">
              <div className="logo">
                <p>{s.texto33}</p>
              </div>
              <div className="logo">
                <p>{s.texto34}</p>
              </div>
            </div>
          </section>
        
          <section className="trigger-footer">
            <img src={s.imagem2}  alt="UI animation footer section" />
          </section>
        </div>
    </section>
  );
}