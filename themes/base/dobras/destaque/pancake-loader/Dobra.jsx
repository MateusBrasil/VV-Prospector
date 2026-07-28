"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/loaders/pancake-loader
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
    <section className="dobra" data-dobra="destaque-pancake-loader" ref={raiz}>
      <div className="frame">
          <div className="loader">
            <span style={{'-Idx': '0'}}></span>
            <span style={{'-Idx': '1'}}></span>
            <span style={{'-Idx': '2'}}></span>
            <span style={{'-Idx': '3'}}></span>
            <span style={{'-Idx': '4'}}></span>
            <span style={{'-Idx': '5'}}></span>
            <span style={{'-Idx': '6'}}></span>
            <span style={{'-Idx': '7'}}></span>
            <span style={{'-Idx': '8'}}></span>
            <span style={{'-Idx': '9'}}></span>
          </div>
        </div>
    </section>
  );
}