"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/efeitos-3d/animacao-3d-14
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import './Dobra.css';
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* a origem não trazia JS */
  return (
    <section className="dobra" data-dobra="destaque-3d-animacao-3d-14" ref={raiz}>
      <div className="main-container">
        <h1>by BL/S<span>®</span></h1>
        <div
          className="image"
          style={{backgroundImage: `url(${s.imagem})`}}
        ></div>
      </div>
      <div className="controls">
        <div className="shape-controls">
          <button className="shape-btn active" data-shape="rectangle" onClick={s.onClick}>1</button>
          <button className="shape-btn" data-shape="triangle" onClick={s.onClick}>2</button>
          <button className="shape-btn" data-shape="chevron" onClick={s.onClick}>3</button>
          <button className="shape-btn" data-shape="oval" onClick={s.onClick}>4</button>
        </div>
        <div className="effect-controls">
          <button className="effect-btn active" data-effect="stroke" onClick={s.onClick}>{s.acao}</button>
          <span>{s.rotulo}</span>
          <button className="effect-btn" data-effect="shade" onClick={s.onClick}>{s.acao2}</button>
        </div>
      </div>
      
      <div className="cursor-drag" id="cursorDrag">
        <span className="drag-text">{s.rotulo2}</span>
      </div>
      
      <div className="debug-panel" id="debugPanel">
        <div className="debug-info">
          <span id="rotationInfo">{s.rotulo3}</span>
          <span id="scaleInfo">{s.rotulo4}</span>
          <span id="edgesInfo">{s.rotulo5}</span>
        </div>
      </div>
    </section>
  );
}