"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/textos/3d-ring-text
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
    <section className="dobra" data-dobra="destaque-txt-3d-ring-text" ref={raiz}>
      <div className="wrapper">
          <div className="title">code eagle</div>
          <div className="ring" style={{'-Total': '6'}}>
            <img src={s.imagem} alt="Summer vibe 1" style={{'-I': '0'}} />
            <img src={s.imagem2} alt="Summer vibe 2" style={{'-I': '1'}} />
            <img src={s.imagem3} alt="Summer vibe 3" style={{'-I': '2'}} />
            <img src={s.imagem4} alt="Summer vibe 4" style={{'-I': '3'}} />
            <img src={s.imagem5} alt="Summer vibe 5" style={{'-I': '4'}} />
            <img src={s.imagem6} alt="Summer vibe 6" style={{'-I': '5'}} />
          </div>
        </div>
    </section>
  );
}