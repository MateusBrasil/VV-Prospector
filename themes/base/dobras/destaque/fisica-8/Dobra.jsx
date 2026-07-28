"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/physics/efeitos-de-fisica-8/sphere-packing/dist
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
  //   // Licence CC BY-NC-SA 4.0
  //   // Attribution — You must give appropriate credit.
  //   // Non Commercial — You may not use the material for commercial purposes.
  //   
  //   import Spheres1Background from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.17/build/backgrounds/spheres1.cdn.min.js'
  //   
  //   const bg = Spheres1Background(document.getElementById('webgl-canvas'), {
  //     count: 300,
  //     minSize: 0.3,
  //     maxSize: 1,
  //     gravity: 0.5
  //   })
  //   
  //   // document.body.addEventListener('click', () => {
  //   //   bg.spheres.setColors([0xffffff * Math.random(), 0xffffff * Math.random(), 0xffffff * Math.random()])
  //   // })
  //   
  //   //document.body.addEventListener('keydown', (ev) => {
  //   //  bg.spheres.config.gravity = bg.spheres.config.gravity === 0 ? 1 : 0
  //   //})
  //   
  //   document.getElementById('gravity-btn').addEventListener('click', () => {
  //     bg.spheres.config.gravity = bg.spheres.config.gravity === 0 ? 1 : 0
  //   })
  //   
  //   document.getElementById('colors-btn').addEventListener('click', () => {
  //     bg.spheres.setColors([0xffffff * Math.random(), 0xffffff * Math.random(), 0xffffff * Math.random()])
  //   })
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="destaque-fisica-8" ref={raiz}>
      <div id="app">
        <div className="hero">
          <h1>{s.titulo}</h1>
          <h2>{s.titulo2}</h2>
        </div>
        <div className="buttons">
          <button type="button" id="gravity-btn" onClick={s.onClick}>{s.acao}</button>
          <button type="button" id="colors-btn" onClick={s.onClick}>{s.acao2}</button>
          <a href={s.destino || '#'} target="_blank">{s.acao3}</a>
        </div>
        <canvas id="webgl-canvas"></canvas>
      </div>
    </section>
  );
}