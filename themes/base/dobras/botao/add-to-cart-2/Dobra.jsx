"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/botoes/add-to-cart-2
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useEffect, useRef } from 'react';
import './Dobra.css';
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* JS de origem ESCOPADO pela esteira (categoria: dom-simples).
   * Só tocava em querySelector/classList dentro do próprio componente, por isso a troca
   * de `document.` para `raiz.current.` é equivalente e foi feita automaticamente.
   * Continua a precisar de confirmação no ecrã antes de a dobra ser promovida. */
  useEffect(() => {
    
            raiz.current.querySelectorAll('.button').forEach(button => button.addEventListener('click', e => {
                if(!button.classList.contains('loading')) {
                    button.classList.add('loading');
                    setTimeout(() => button.classList.remove('loading'), 3700);
                }
                e.preventDefault();
            }));
        
  }, []);
  return (
    <section className="dobra" data-dobra="botao-add-to-cart-2" ref={raiz}>
      <button className="button" onClick={s.onClick}>
              <span>{s.rotulo}</span>
              <div className="cart">
                  <svg viewBox="0 0 36 26">
                      <polyline points="1 2.5 6 2.5 10 18.5 25.5 18.5 28.5 7.5 7.5 7.5"></polyline>
                      <polyline points="15 13.5 17 15.5 22 10.5"></polyline>
                  </svg>
              </div>
          </button>
      
          
          <a className="dribbble" href={s.destino || '#'} target="_blank">
              <img src={s.imagem} alt="" />
          </a>
    </section>
  );
}