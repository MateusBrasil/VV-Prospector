"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/textos/infinite-loop-text
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
  //   
  //       import gsap from 'https://esm.sh/gsap@3.12.0';
  //   
  //       // gsap stuff!
  //       gsap.defaults({
  //         duration: 1,
  //       })
  //       
  //       const tl = gsap.timeline({
  //         paused: true,
  //       })
  //       const lines = gsap.utils.toArray('ul li')
  //       gsap.set('ul li', { yPercent: 300 })
  //       const paddedLines = [...lines, ...lines, ...lines]
  //       paddedLines.forEach((line, index) => {
  //         // create a mini timeline for the line
  //         const lineTl = gsap.timeline().set(line, { yPercent: 300 }).to(
  //           line,
  //           {
  //             yPercent: '-=600',
  //             repeatRefresh: true,
  //             immediateRender: false,
  //             ease: 'none',
  //             duration: 6,
  //           },
  //           0
  //         )
  //         tl.add(lineTl, index)
  //       })
  //   
  //       const scrubber = gsap.timeline({ paused: true }).fromTo(
  //         tl,
  //         {
  //           totalTime: lines.length + 1, // lines.length + 2
  //         },
  //         {
  //           totalTime: lines.length * 2 + 1, // lines.length * 2 + 2
  //           ease: 'none',
  //           duration: lines.length,
  //           repeat: -1,
  //         }
  //       )
  //       gsap.set(scrubber, { totalTime: lines.length + 2 })
  //   
  //       let index = 0
  //       gsap.set('.indicator', {
  //         '--width': lines[index].getBoundingClientRect().width,
  //       })
  //   
  //       const syncIndicator = () => {
  //         index += 1
  //         gsap.set('.indicator', {
  //           '--width': lines[index % lines.length].getBoundingClientRect().width,
  //           '--h': gsap.utils.random(0, 359)
  //         })
  //       }
  //   
  //       gsap.to(scrubber, {
  //         delay: 1,
  //         totalTime: '+=1',
  //         duration: 1,
  //         repeat: -1,
  //         repeatDelay: 1,
  //         repeatRefresh: true,
  //         onStart: syncIndicator,
  //         onRepeat: syncIndicator,
  //         ease: 'elastic.out(1, 0.875)',
  //       })
  //   
  //       gsap.set('.container', { opacity: 1 })
  //     
  // }, []);
  return (
    <section className="dobra" data-dobra="destaque-txt-infinite-loop-text" ref={raiz}>
      <div className="container fluid">
          <div className="indicator"></div>
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
            <li style={{width: '1.5em'}}>{s.item10}</li>
          </ul>
        </div>
    </section>
  );
}