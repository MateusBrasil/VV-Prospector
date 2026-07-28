"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/carrossel/3d-carousel-curved
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
    <section className="dobra" data-dobra="vitrine-3d-carousel-curved" ref={raiz}>
      <div className="scene">
              
              <div className="a3d" style={{'-N': '12'}}>
                  
                  <img className="card" src={s.imagem} style={{'-I': '0'}} alt="imagem 1" />
                  <img className="card" src={s.imagem2} style={{'-I': '1'}} alt="imagem 2" />
                  <img className="card" src={s.imagem3} style={{'-I': '2'}} alt="imagem 1" />
                  <img className="card" src={s.imagem4} style={{'-I': '3'}} alt="imagem 2" />
                  <img className="card" src={s.imagem5} style={{'-I': '4'}} alt="imagem 1" />
                  <img className="card" src={s.imagem6} style={{'-I': '5'}} alt="imagem 2" />
                  <img className="card" src={s.imagem7} style={{'-I': '6'}} alt="imagem 1" />
                  <img className="card" src={s.imagem8} style={{'-I': '7'}} alt="imagem 2" />
                  <img className="card" src={s.imagem9} style={{'-I': '8'}} alt="imagem 1" />
                  <img className="card" src={s.imagem10} style={{'-I': '9'}} alt="imagem 2" />
                  <img className="card" src={s.imagem11} style={{'-I': '10'}} alt="imagem 1" />
                  <img className="card" src={s.imagem12} style={{'-I': '11'}} alt="imagem 2" />
              </div>
          </div>
    </section>
  );
}