"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/cursor/efeitos-mouse-4
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
  //   import Three from "./core/Three";
  //   import "./style.css";
  //   
  //   document.addEventListener("DOMContentLoaded", async () => {
  //   	const container = document.querySelector("#app");
  //   	const three = new Three(container);
  //   	await three.run();
  //   	await three.scene.ready;
  //   	document.body.classList.remove("loading");
  //   });
  //   
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="cursor-efeitos-mouse-4" ref={raiz}>
      <main>
      
          <div id="app"></div>
        </main>
    </section>
  );
}