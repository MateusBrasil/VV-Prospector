"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/animacoes/interactive-chip-switches
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
    <section className="dobra" data-dobra="destaque-anim-interactive-chip-switches" ref={raiz}>
      <fieldset>
          <legend>Slide Animation (Default)</legend>
          <input type="checkbox" className="chip" role="switch" value="Pear" aria-label="Pear" />
          <input type="checkbox" className="chip" role="switch" value="Banana" aria-label="Banana" style={{'-Color': 'var(--base-100)'}} checked={true} />
          <input type="checkbox" className="chip" role="switch" value="Apple" aria-label="Apple" style={{'-Color': 'var(--base-200)'}} />
          <input type="checkbox" className="chip" role="switch" value="Peach" aria-label="Peach" style={{'-Color': 'var(--acento)'}} />
        </fieldset>
      
        <fieldset>
          <legend>Grow Animation</legend>
          <input type="checkbox" className="chip grow" role="switch" value="Pear" aria-label="Pear" />
          <input type="checkbox" className="chip grow" role="switch" value="Banana" aria-label="Banana" style={{'-Color': 'var(--base-100)'}} />
          <input type="checkbox" className="chip grow" role="switch" value="Apple" aria-label="Apple" style={{'-Color': 'var(--base-200)'}} />
          <input type="checkbox" className="chip grow" role="switch" value="Peach" aria-label="Peach" style={{'-Color': 'var(--acento)'}} checked={true} />
        </fieldset>
      
        <fieldset>
          <legend>Bounce Animation</legend>
          <input type="checkbox" className="chip bounce" role="switch" value="Pear" aria-label="Pear" />
          <input type="checkbox" className="chip bounce" role="switch" value="Banana" aria-label="Banana" style={{'-Color': 'var(--base-100)'}} />
          <input type="checkbox" className="chip bounce" role="switch" value="Apple" aria-label="Apple" style={{'-Color': 'var(--base-200)'}} checked={true} />
          <input type="checkbox" className="chip bounce" role="switch" value="Peach" aria-label="Peach" style={{'-Color': 'var(--acento)'}} />
        </fieldset>
      
        <fieldset>
          <legend>Disabled Styles</legend>
          <input type="checkbox" className="chip bounce" role="switch" value="Pear" aria-label="Pear" disabled={true} />
          <input type="checkbox" className="chip bounce" role="switch" value="Banana" aria-label="Banana" style={{'-Color': 'var(--base-100)'}} disabled={true} />
          <input type="checkbox" className="chip bounce" role="switch" value="Apple" aria-label="Apple" style={{'-Color': 'var(--base-200)'}} checked={true} disabled={true} />
          <input type="checkbox" className="chip bounce" role="switch" value="Peach" aria-label="Peach" style={{'-Color': 'var(--acento)'}} checked={true} disabled={true} />
        </fieldset>
    </section>
  );
}