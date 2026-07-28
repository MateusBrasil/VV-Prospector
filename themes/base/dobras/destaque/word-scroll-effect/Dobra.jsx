"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/parallax/word-scroll-effect
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import './Dobra.css';
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* ⚠ REVER: o JS de origem está abaixo em bruto (categoria: global-duro).
   * A esteira NÃO o converte sozinha, e nesta categoria escopar ao `raiz.current` NÃO
   * chega: o código assume que é dono da página (window/document.body/listeners de
   * load|resize|scroll), ou traz import/export, ou monta um canvas WebGL. Converter às
   * cegas produz animação que corre no elemento errado, que é pior que animação
   * nenhuma. Precisa de reescrita, não de troca de prefixo. */
  // useEffect(() => {
  //   
  //           const WordScroll = (() => {
  //               const defaults = {
  //                   snap: true,
  //                   animate: true,
  //                   start: Math.floor(Math.random() * 100),
  //                   end: Math.floor(900 + Math.random() * 100),
  //                   startIndex: 0,
  //                   debug: false
  //               };
  //   
  //               const init = (selector = ".word-scroll", options = {}) => {
  //                   const root = document.querySelector(selector);
  //                   if (!root) return;
  //   
  //                   const config = { ...defaults, ...options };
  //                   const list = root.querySelector("ul");
  //                   const items = [...list.children];
  //   
  //                   list.style.setProperty("--count", items.length);
  //   
  //                   items.forEach((item, i) => {
  //                       item.style.setProperty("--i", i);
  //                   });
  //   
  //                   root.dataset.snap = config.snap;
  //                   root.dataset.animate = config.animate;
  //                   root.dataset.debug = config.debug;
  //   
  //                   root.style.setProperty("--start", config.start);
  //                   root.style.setProperty("--hue", config.start);
  //                   root.style.setProperty("--end", config.end);
  //   
  //                   const index = Math.max(0, Math.min(config.startIndex, items.length - 1));
  //                   const target = items[index];
  //   
  //                   if (target) {
  //                       // Espera renderizar para rolar para a posição exata
  //                       requestAnimationFrame(() => {
  //                           const offset = target.offsetTop - (root.clientHeight / 2) + (target.clientHeight / 2);
  //                           root.scrollTop = offset;
  //                       });
  //                   }
  //               };
  //   
  //               return { init };
  //           })();
  //   
  //           // Inicializa após a DOM estar completamente pronta
  //           document.addEventListener('DOMContentLoaded', () => {
  //               WordScroll.init(".word-scroll", {
  //                   snap: true,
  //                   animate: true,
  //                   start: 25,
  //                   end: 100,
  //                   startIndex: 4
  //               });
  //           });
  //       
  // }, []);
  return (
    <section className="dobra" data-dobra="destaque-word-scroll-effect" ref={raiz}>
      <section className="word-scroll fluid">
              <div className="scroll-spacer"></div>
      
              <div className="word-scroll-inner">
                  <h2 className="heading-2 heading-sm">
                      <span aria-hidden="true">{s.rotulo}</span>
                      <span className="sr-only">{s.rotulo2}</span>
                  </h2>
                  <ul>
                      <li>{s.item}</li>
                      <li>{s.item2}</li>
                      <li>{s.item3}</li>
                      <li>{s.item4}</li>
                      <li>{s.item5}</li>
                      <li>{s.item6}</li>
                      <li>{s.item7}</li>
                      <li>{s.item8}</li>
                      <li>{s.item9}</li>
                      <li>{s.item10}</li>
                      <li>{s.item11}</li>
                      <li>{s.item12}</li>
                      <li>{s.item13}</li>
                      <li>{s.item14}</li>
                      <li>{s.item15}</li>
                  </ul>
              </div>
      
              <div className="scroll-spacer"></div>
          </section>
    </section>
  );
}