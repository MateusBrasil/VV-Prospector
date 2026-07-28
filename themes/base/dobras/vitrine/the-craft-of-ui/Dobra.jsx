"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/carrossel/the-craft-of-ui
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import './Dobra.css';
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* ⚠ REVER: o JS de origem está abaixo em bruto (categoria: global-duro).
   * A esteira NÃO o converte sozinha, e nesta categoria escopar ao `raiz.current` NÃO
   * chega: o código assume que é dono da página (window/document.body/listeners de
   * load|resize|scroll), ou traz import/export, ou monta um canvas WebGL. Converter às
   * cegas produz animação que corre no elemento errado, que é pior que animação
   * nenhuma. Precisa de reescrita, não de troca de prefixo. */
  // useEffect(() => {
  //   
  //       // Seleção de elementos da galeria
  //       const list = document.querySelector('ul')
  //       const items = list.querySelectorAll('li')
  //       
  //       const setIndex = (event) => {
  //         const closest = event.target.closest('li')
  //         if (closest) {
  //           const index = [...items].indexOf(closest)
  //           // Correção de segurança: mapeia com base em items.length
  //           const cols = new Array(items.length)
  //             .fill()
  //             .map((_, i) => {
  //               if (items[i]) {
  //                 items[i].dataset.active = (index === i).toString()
  //               }
  //               return index === i ? '10fr' : '1fr'
  //             })
  //             .join(' ')
  //           list.style.setProperty('grid-template-columns', cols)
  //         }
  //       }
  //       
  //       list.addEventListener('focus', setIndex, true)
  //       list.addEventListener('click', setIndex)
  //       list.addEventListener('pointermove', setIndex)
  //       
  //       const resync = () => {
  //         const w = Math.max(
  //           ...[...items].map((i) => {
  //             return i.offsetWidth || 0
  //           })
  //         )
  //         if (w > 0) {
  //           list.style.setProperty('--article-width', w)
  //         }
  //       }
  //       
  //       window.addEventListener('resize', resync)
  //       // Pequeno atraso para garantir renderização correta de fontes e layout
  //       setTimeout(resync, 50)
  //     
  // }, []);
  return (
    <section className="dobra" data-dobra="vitrine-the-craft-of-ui" ref={raiz}>
      <ul>
          <li data-active="true">
            <article>
              <h3>{s.subtitulo}</h3>
              <p>
                Discover the incredible biodiversity and vibrant colors hidden={true} deep within the heart of Earth's greatest wilderness.
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 3h12l4 6-10 13L2 9Z" />
                <path d="M11 3 8 9l4 13 4-13-3-6" />
                <path d="M2 9h20" />
              </svg>
              <a href="#">
                <span>{s.rotulo}</span>
              </a>
              <img 
                src={s.imagem} 
                alt="Tropical Rainforests" 
                onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=720&auto=format&fit=crop';" />
            </article>
          </li>
          <li>
            <article>
              <h3>{s.subtitulo2}</h3>
              <p>{s.texto}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M7 3v18" />
                <path d="M3 7.5h4" />
                <path d="M3 12h18" />
                <path d="M3 16.5h4" />
                <path d="M17 3v18" />
                <path d="M17 7.5h4" />
                <path d="M17 16.5h4" />
              </svg>
              <a href="#"><span>{s.rotulo2}</span></a>
              <img 
                src={s.imagem2} 
                alt="Deep Oceans" 
                onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=720&auto=format&fit=crop';" />
            </article>
          </li>
          <li>
            <article>
              <h3>{s.subtitulo3}</h3>
              <p>{s.texto2}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
              </svg>
              <a href="#"><span>{s.rotulo3}</span></a>
              <img 
                src={s.imagem3} 
                alt="Snowy Mountains" 
                onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=720&auto=format&fit=crop';" />
            </article>
          </li>
          <li>
            <article>
              <h3>{s.subtitulo4}</h3>
              <p>{s.texto3}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 17V5a2 2 0 0 0-2-2H4" />
                <path
                  d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"
                />
              </svg>
              <a href="#"><span>{s.rotulo4}</span></a>
              <img 
                src={s.imagem4} 
                alt="Untouched Deserts" 
                onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=720&auto=format&fit=crop';" />
            </article>
          </li>
          <li>
            <article>
              <h3>{s.subtitulo5}</h3>
              <p>{s.texto4}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
                <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
                <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
                <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
                <path
                  d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"
                />
              </svg>
              <a href="#"><span>{s.rotulo5}</span></a>
              <img 
                src={s.imagem5} 
                alt="Aurora Borealis" 
                onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=720&auto=format&fit=crop';" />
            </article>
          </li>
          <li>
            <article>
              <h3>{s.subtitulo6}</h3>
              <p>{s.texto5}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"
                />
                <path d="m14 7 3 3" />
                <path d="M5 6v4" />
                <path d="M19 14v4" />
                <path d="M10 2v2" />
                <path d="M7 8H3" />
                <path d="M21 16h-4" />
                <path d="M11 3H9" />
              </svg>
              <a href="#"><span>{s.rotulo6}</span></a>
              <img 
                src={s.imagem6} 
                alt="African Savannas" 
                onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=720&auto=format&fit=crop';" />
            </article>
          </li>
          <li>
            <article>
              <h3>{s.subtitulo7}</h3>
              <p>{s.texto6}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 22h14" />
                <path d="M5 2h14" />
                <path
                  d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"
                />
                <path
                  d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"
                />
              </svg>
              <a href="#"><span>{s.rotulo7}</span></a>
              <img 
                src={s.imagem7} 
                alt="Ancient Caves" 
                onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=720&auto=format&fit=crop';" />
            </article>
          </li>
        </ul>
    </section>
  );
}