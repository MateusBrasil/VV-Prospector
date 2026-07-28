"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/ui-effects/marquee-3d
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
    <section className="dobra" data-dobra="destaque-marquee-3d" ref={raiz}>
      <div className="marquee-wrapper left">
          <div className="marquee">
            <div>
              <span className="emoji-1">{s.rotulo}</span> hellooooo
            </div>
            <div>
              <span className="emoji-2">{s.rotulo2}</span> nice to meet you
            </div>
            <div>
              <span className="emoji-1">{s.rotulo3}</span> hellooooo
            </div>
            <div>
              <span className="emoji-2">{s.rotulo4}</span> nice to meet you
            </div>
          </div>
        </div>
      
        
        <div className="marquee-wrapper center">
          <div className="marquee">
            <div>
              <span className="emoji-1">{s.rotulo5}</span> hellooooo
            </div>
            <div>
              <span className="emoji-2">{s.rotulo6}</span> nice to meet you
            </div>
            <div>
              <span className="emoji-1">{s.rotulo7}</span> hellooooo
            </div>
            <div>
              <span className="emoji-2">{s.rotulo8}</span> nice to meet you
            </div>
          </div>
        </div>
      
        
        <div className="marquee-wrapper right">
          <div className="marquee">
            <div>
              <span className="emoji-1">{s.rotulo9}</span> hellooooo
            </div>
            <div>
              <span className="emoji-2">{s.rotulo10}</span> nice to meet you
            </div>
            <div>
              <span className="emoji-1">{s.rotulo11}</span> hellooooo
            </div>
            <div>
              <span className="emoji-2">{s.rotulo12}</span> nice to meet you
            </div>
            <div>
              <span className="emoji-1">{s.rotulo13}</span> hellooooo
            </div>
            <div>
              <span className="emoji-2">{s.rotulo14}</span> nice to meet you
            </div>
            <div>
              <span className="emoji-1">{s.rotulo15}</span> hellooooo
            </div>
            <div>
              <span className="emoji-2">{s.rotulo16}</span> nice to meet you
            </div>
          </div>
        </div>
    </section>
  );
}