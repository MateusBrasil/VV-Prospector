"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/ui-effects/coin-animation
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
    <section className="dobra" data-dobra="destaque-coin-animation" ref={raiz}>
      <div className="pl">
              <div className="pl__coin">
                  <div className="pl__coin-flare"></div>
                  <div className="pl__coin-flare"></div>
                  <div className="pl__coin-flare"></div>
                  <div className="pl__coin-flare"></div>
                  <div className="pl__coin-layers">
                      <div className="pl__coin-layer">
                          <div className="pl__coin-inscription"></div>
                      </div>
                      <div className="pl__coin-layer"></div>
                      <div className="pl__coin-layer"></div>
                      <div className="pl__coin-layer"></div>
                      <div className="pl__coin-layer">
                          <div className="pl__coin-inscription"></div>
                      </div>
                  </div>
              </div>
              <div className="pl__shadow"></div>
          </div>
    </section>
  );
}