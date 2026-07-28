"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/textos/animacao-texto-3
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
  //   import { Line } from './line';
  //   import './style.css'
  //   
  //   const wrapper = document.querySelector('.l-wrapper') as HTMLElement;
  //   
  //   const num = 20
  //   for (let i = 0; i < num; i++) {
  //     const el = document.createElement('div')
  //     el.classList.add('l-line')
  //     wrapper.appendChild(el)
  //   
  //     const line = new Line({
  //       el: el,
  //     }, i == num - 1)
  //     line.show(1 + i * 0.1)
  //   }
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="destaque-txt-animacao-texto-3" ref={raiz}>
      <div className="l-main">
            <div className="l-wrapper">
            </div>
          </div>
      
          <div className="l-info">
            <p>10/11 SKETCH492 >> <a href={s.destino || '#'} target="_blank">{s.acao}</a></p>
            <p><a href={s.destino2 || '#'} target="_blank">{s.acao2}</a></p>
          </div>
    </section>
  );
}