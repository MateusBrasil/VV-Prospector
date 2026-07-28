"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/botoes/radio-button
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
  /* ⚠ REVER: o JS de origem está abaixo em bruto (categoria: global-duro).
   * A esteira NÃO o converte sozinha, e nesta categoria escopar ao `raiz.current` NÃO
   * chega: o código assume que é dono da página (window/document.body/listeners de
   * load|resize|scroll), ou traz import/export, ou monta um canvas WebGL. Converter às
   * cegas produz animação que corre no elemento errado, que é pior que animação
   * nenhuma. Precisa de reescrita, não de troca de prefixo. */
  useGSAP(() => {
  //   
  //       class RadioButtonEffect {
  //         constructor(radioBtnGroups) {
  //           this.previousRadioBtn = null;
  //   
  //           radioBtnGroups.forEach((group) => {
  //             const radioBtn = gsap.utils.selector(group)("input[type='radio']")[0];
  //             const nodes = this.getNodes(radioBtn);
  //   
  //             radioBtn.addEventListener("change", () => {
  //               if (this.previousRadioBtn && this.previousRadioBtn !== radioBtn) {
  //                 this.changeEffect(this.getNodes(this.previousRadioBtn), false);
  //               }
  //   
  //               this.changeEffect(nodes, true);
  //               this.previousRadioBtn = radioBtn;
  //             });
  //           });
  //         }
  //   
  //         getNodes(radioBtn) {
  //           const container = radioBtn.closest(".radio-btn-group");
  //           return gsap.utils.shuffle(gsap.utils.selector(container)("rect"));
  //         }
  //   
  //         changeEffect(nodes, isChecked) {
  //           gsap.to(nodes, {
  //             duration: 0.8,
  //             ease: "elastic.out(1, 0.3)",
  //             xPercent: isChecked ? "100" : "0",
  //             stagger: 0.01,
  //             overwrite: true
  //           });
  //   
  //           gsap.fromTo(
  //             nodes,
  //             {
  //               fill: "#0c79f7"
  //             },
  //             {
  //               fill: "#76b3fa",
  //               duration: 0.1,
  //               ease: "elastic.out(1, 0.3)",
  //               repeat: -1
  //             }
  //           );
  //   
  //           if (isChecked) {
  //             const randomNodes = nodes.slice(0, 5);
  //             gsap.to(randomNodes, {
  //               duration: 0.7,
  //               ease: "elastic.out(1, 0.1)",
  //               xPercent: "100",
  //               stagger: 0.1,
  //               repeatDelay: 1.5,
  //               repeat: -1
  //             });
  //           }
  //         }
  //       }
  //   
  //       document.addEventListener("DOMContentLoaded", () => {
  //         const radioBtnGroups = document.querySelectorAll(".radio-btn-group");
  //         new RadioButtonEffect(radioBtnGroups);
  //       });
  //     
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="botao-radio-button" ref={raiz}>
      <div className="container">
          <div className="radio-btn-group">
            <input type="radio" name="stagger-radio-group" value="1" id="input-one" />
            <label htmlFor="input-one">
              <span>{s.rotulo}</span>
              <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                <g className="left">
                  <rect x="-100%" y="0" width="100%" height="2" />
                  <rect x="-100%" y="2" width="100%" height="2" />
                  <rect x="-100%" y="4" width="100%" height="2" />
                  <rect x="-100%" y="6" width="100%" height="2" />
                  <rect x="-100%" y="8" width="100%" height="2" />
                  <rect x="-100%" y="10" width="100%" height="2" />
                  <rect x="-100%" y="12" width="100%" height="2" />
                  <rect x="-100%" y="14" width="100%" height="2" />
                  <rect x="-100%" y="16" width="100%" height="2" />
                  <rect x="-100%" y="18" width="100%" height="2" />
                  <rect x="-100%" y="20" width="100%" height="2" />
                  <rect x="-100%" y="22" width="100%" height="2" />
                  <rect x="-100%" y="24" width="100%" height="2" />
                  <rect x="-100%" y="26" width="100%" height="2" />
                  <rect x="-100%" y="28" width="100%" height="2" />
                  <rect x="-100%" y="30" width="100%" height="2" />
                  <rect x="-100%" y="32" width="100%" height="2" />
                  <rect x="-100%" y="34" width="100%" height="2" />
                  <rect x="-100%" y="36" width="100%" height="2" />
                  <rect x="-100%" y="38" width="100%" height="2" />
                  <rect x="-100%" y="40" width="100%" height="2" />
                  <rect x="-100%" y="42" width="100%" height="2" />
                  <rect x="-100%" y="44" width="100%" height="2" />
                  <rect x="-100%" y="46" width="100%" height="2" />
                  <rect x="-100%" y="48" width="100%" height="2" />
                </g>
              </svg>
            </label>
          </div>
      
          <div className="radio-btn-group">
            <input type="radio" name="stagger-radio-group" value="2" id="input-two" />
            <label htmlFor="input-two">
              <span>{s.rotulo2}</span>
              <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                <g className="left">
                  <rect x="-100%" y="0" width="100%" height="2" />
                  <rect x="-100%" y="2" width="100%" height="2" />
                  <rect x="-100%" y="4" width="100%" height="2" />
                  <rect x="-100%" y="6" width="100%" height="2" />
                  <rect x="-100%" y="8" width="100%" height="2" />
                  <rect x="-100%" y="10" width="100%" height="2" />
                  <rect x="-100%" y="12" width="100%" height="2" />
                  <rect x="-100%" y="14" width="100%" height="2" />
                  <rect x="-100%" y="16" width="100%" height="2" />
                  <rect x="-100%" y="18" width="100%" height="2" />
                  <rect x="-100%" y="20" width="100%" height="2" />
                  <rect x="-100%" y="22" width="100%" height="2" />
                  <rect x="-100%" y="24" width="100%" height="2" />
                  <rect x="-100%" y="26" width="100%" height="2" />
                  <rect x="-100%" y="28" width="100%" height="2" />
                  <rect x="-100%" y="30" width="100%" height="2" />
                  <rect x="-100%" y="32" width="100%" height="2" />
                  <rect x="-100%" y="34" width="100%" height="2" />
                  <rect x="-100%" y="36" width="100%" height="2" />
                  <rect x="-100%" y="38" width="100%" height="2" />
                  <rect x="-100%" y="40" width="100%" height="2" />
                  <rect x="-100%" y="42" width="100%" height="2" />
                  <rect x="-100%" y="44" width="100%" height="2" />
                  <rect x="-100%" y="46" width="100%" height="2" />
                  <rect x="-100%" y="48" width="100%" height="2" />
                </g>
              </svg>
            </label>
          </div>
      
          <div className="radio-btn-group">
            <input type="radio" name="stagger-radio-group" value="3" id="input-three" />
            <label htmlFor="input-three">
              <span>{s.rotulo3}</span>
              <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                <g className="left">
                  <rect x="-100%" y="0" width="100%" height="2" />
                  <rect x="-100%" y="2" width="100%" height="2" />
                  <rect x="-100%" y="4" width="100%" height="2" />
                  <rect x="-100%" y="6" width="100%" height="2" />
                  <rect x="-100%" y="8" width="100%" height="2" />
                  <rect x="-100%" y="10" width="100%" height="2" />
                  <rect x="-100%" y="12" width="100%" height="2" />
                  <rect x="-100%" y="14" width="100%" height="2" />
                  <rect x="-100%" y="16" width="100%" height="2" />
                  <rect x="-100%" y="18" width="100%" height="2" />
                  <rect x="-100%" y="20" width="100%" height="2" />
                  <rect x="-100%" y="22" width="100%" height="2" />
                  <rect x="-100%" y="24" width="100%" height="2" />
                  <rect x="-100%" y="26" width="100%" height="2" />
                  <rect x="-100%" y="28" width="100%" height="2" />
                  <rect x="-100%" y="30" width="100%" height="2" />
                  <rect x="-100%" y="32" width="100%" height="2" />
                  <rect x="-100%" y="34" width="100%" height="2" />
                  <rect x="-100%" y="36" width="100%" height="2" />
                  <rect x="-100%" y="38" width="100%" height="2" />
                  <rect x="-100%" y="40" width="100%" height="2" />
                  <rect x="-100%" y="42" width="100%" height="2" />
                  <rect x="-100%" y="44" width="100%" height="2" />
                  <rect x="-100%" y="46" width="100%" height="2" />
                  <rect x="-100%" y="48" width="100%" height="2" />
                </g>
              </svg>
            </label>
          </div>
        </div>
    </section>
  );
}