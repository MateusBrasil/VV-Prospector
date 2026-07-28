"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/animacoes/hover-14
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import './Dobra.css';
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* ⚠ REVER: o JS de origem está abaixo em bruto (categoria: webgl).
   * A esteira NÃO o converte sozinha, e nesta categoria escopar ao `raiz.current` NÃO
   * chega: o código assume que é dono da página (window/document.body/listeners de
   * load|resize|scroll), ou traz import/export, ou monta um canvas WebGL. Converter às
   * cegas produz animação que corre no elemento errado, que é pior que animação
   * nenhuma. Precisa de reescrita, não de troca de prefixo. */
  // useEffect(() => {
  //   import * as THREE from "three";
  //   import { FluidSimulation } from "./FluidSimulation";
  //   
  //   const config = {
  //     simResolution: 256,
  //     dyeResolution: 1024,
  //     curl: 50,
  //     pressureIterations: 40,
  //     velocityDissipation: 0.95,
  //     dyeDissipation: 0.95,
  //     splatRadius: 0.3,
  //     forceStrength: 8.5,
  //     pressureDecay: 0.75,
  //     threshold: 1.0,
  //     edgeSoftness: 0.0,
  //     inkColor: new THREE.Color(1, 1, 1),
  //   };
  //   
  //   new FluidSimulation(document.getElementById("fluid"), config);
  //   
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="destaque-anim-hover-14" ref={raiz}>
      <nav>
            <div className="nav-logo">
              <a href="/">{s.acao}</a>
            </div>
            <div className="nav-links">
              <a href="/works">{s.acao2}</a>
              <a href="/about">{s.acao3}</a>
              <a href="/updates">{s.acao4}</a>
              <a href="/start-a-project">{s.acao5}</a>
            </div>
          </nav>
      
          <section className="hero">
            <div className="header">
              <h1>{s.titulo}</h1>
              <h1>{s.titulo2}</h1>
              <h1>{s.titulo3}</h1>
            </div>
          </section>
      
          <canvas id="fluid"></canvas>
    </section>
  );
}