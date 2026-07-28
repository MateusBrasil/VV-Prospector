"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/scroll/scroll-7
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
    <section className="dobra" data-dobra="destaque-scroll-7" ref={raiz}>
      <section>
        <h1>{s.titulo}</h1>
        <img src={s.imagem} />
        <p>{s.texto}</p>
      </section>
      
      <section>
        <div className="right">
          <h1>{s.titulo2}</h1>    
        </div> 
      
        <div className="col">
        <img src={s.imagem2} />
        <p>{s.texto2}</p>    
        </div>
        
        <div className="col">
          <p>{s.texto3}</p>      
        <img src={s.imagem3} />   </div>  
      </section>
      
      <section className="last">
          <img src={s.imagem4} />  
          <h2 data-z="1">{s.titulo3}</h2>
      </section>
    </section>
  );
}