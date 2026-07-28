"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/animacoes-de-grid/animacao-grid-2
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
  //   import "./style.css"
  //   import Canvas from "./canvas"
  //   
  //   class App {
  //     canvas: Canvas
  //   
  //     constructor() {
  //       this.canvas = new Canvas()
  //   
  //       this.render()
  //     }
  //   
  //     render() {
  //       this.canvas.render()
  //       requestAnimationFrame(this.render.bind(this))
  //     }
  //   }
  //   
  //   export default new App()
  //   
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="vitrine-animacao-grid-2" ref={raiz}>
      <div id="app" className="h-dvh"></div>
          <canvas id="webgl"></canvas>
    </section>
  );
}