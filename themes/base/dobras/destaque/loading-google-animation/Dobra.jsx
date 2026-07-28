"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/ui-effects/loading-google-animation
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
    <section className="dobra" data-dobra="destaque-loading-google-animation" ref={raiz}>
      <svg className="pl" width="240" height="240" viewBox="0 0 240 240">
              <circle className="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="var(--base-600)" strokeWidth="20" strokeDasharray="0 660" strokeDashoffset="-330" strokeLinecap="round" />
              <circle className="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="var(--base-600)" strokeWidth="20" strokeDasharray="0 220" strokeDashoffset="-110" strokeLinecap="round" />
              <circle className="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="var(--base-600)" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round" />
              <circle className="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="var(--base-600)" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round" />
          </svg>
    </section>
  );
}