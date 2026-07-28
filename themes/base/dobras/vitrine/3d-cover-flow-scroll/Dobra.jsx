"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/carrossel/3d-cover-flow-scroll
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
  //       const CONTAINER = document.querySelector('ul')
  //   
  //       const COVERS = [
  //         "https://i.scdn.co/image/ab67616d00001e020ecc8c4fd215d9eb83cbfdb3",
  //         "https://i.scdn.co/image/ab67616d00001e02d9194aa18fa4c9362b47464f",
  //         "https://i.scdn.co/image/ab67616d00001e02a7ea08ab3914c5fb2084a8ac",
  //         "https://i.scdn.co/image/ab67616d00001e0213ca80c3035333e5a6fcea59",
  //         "https://i.scdn.co/image/ab67616d00001e02df04e6071763615d44643725",
  //         "https://i.scdn.co/image/ab67616d00001e0239c7302c04f8d06f60e14403",
  //         "https://i.scdn.co/image/ab67616d00001e021c0bcf8b536295438d26c70d",
  //         "https://i.scdn.co/image/ab67616d00001e029bbd79106e510d13a9a5ec33",
  //         "https://i.scdn.co/image/ab67616d00001e021d97ca7376f835055f828139",
  //         "https://www.udiscovermusic.com/wp-content/uploads/2015/10/Kanye-West-Yeezus.jpg",
  //       ]
  //   
  //       const PADDING = 4
  //   
  //       // Adiciona padding inicial
  //       for (let pre = 0; pre < PADDING; pre++) {
  //         const COVER_INDEX = COVERS.length - (PADDING - 1) + pre
  //         const ITEM = Object.assign(document.createElement('li'), {
  //           ariaHidden: true,
  //           innerHTML: `
  //             <div class="image-wrapper">
  //               <img src="${COVERS[COVER_INDEX - 1] || COVERS[0]}" alt="" />
  //             </div>
  //           `
  //         })
  //         CONTAINER.appendChild(ITEM)
  //       }
  //   
  //       // Adiciona itens principais
  //       for (let i = 0; i < COVERS.length; i++) {
  //         const COVER_INDEX = i
  //         const ITEM = Object.assign(document.createElement('li'), {
  //           innerHTML: `
  //             <div class="image-wrapper">
  //               <img src="${COVERS[COVER_INDEX]}" alt="" />
  //             </div>
  //           `
  //         })
  //         CONTAINER.appendChild(ITEM)
  //       }
  //   
  //       // Adiciona padding final
  //       for (let post = 0; post < PADDING; post++) {
  //         const COVER_INDEX = post
  //         const ITEM = Object.assign(document.createElement('li'), {
  //           ariaHidden: true,
  //           innerHTML: `
  //             <div class="image-wrapper">
  //               <img src="${COVERS[COVER_INDEX]}" alt="" />
  //             </div>
  //           `
  //         })
  //         CONTAINER.appendChild(ITEM)
  //       }
  //   
  //       const ITEMS = [...CONTAINER.children]
  //   
  //       // Define o estado aria-hidden
  //       ITEMS.forEach((ITEM, index) => {
  //         if (index <= 3 || index >= ITEMS.length - 4) ITEM.setAttribute('aria-hidden', true)
  //       })
  //   
  //       let scrollBounds
  //   
  //       const UPDATE = () => {
  //         if (!scrollBounds) return;
  //         if (CONTAINER.scrollLeft < scrollBounds.min) {
  //           CONTAINER.scrollLeft = scrollBounds.max
  //         } else if (CONTAINER.scrollLeft > (scrollBounds.max) ) {
  //           CONTAINER.scrollLeft = scrollBounds.min
  //         }
  //       }
  //   
  //       const SET_SCROLL_BOUNDS = () => {
  //         scrollBounds = {}
  //         ITEMS[ITEMS.length - 1].scrollIntoView()
  //         scrollBounds.max = CONTAINER.scrollLeft + ITEMS[0].offsetWidth
  //         ITEMS[0].scrollIntoView()
  //         scrollBounds.min = CONTAINER.scrollLeft - ITEMS[0].offsetWidth
  //       }
  //   
  //       // Aguarda um pequeno momento para renderizar o layout antes de calcular os limites
  //       setTimeout(() => {
  //           SET_SCROLL_BOUNDS()
  //           CONTAINER.addEventListener('scroll', UPDATE)
  //       }, 100);
  //   
  //       // Lógica dos botões de navegação lateral
  //       const PREV_BTN = document.querySelector('.prev-btn')
  //       const NEXT_BTN = document.querySelector('.next-btn')
  //   
  //       const scrollToIndex = (direction) => {
  //         if (ITEMS.length > 0) {
  //           const itemWidth = ITEMS[0].offsetWidth
  //           CONTAINER.scrollBy({
  //             left: direction * itemWidth,
  //             behavior: 'smooth'
  //           })
  //         }
  //       }
  //   
  //       PREV_BTN.addEventListener('click', () => scrollToIndex(-1))
  //       NEXT_BTN.addEventListener('click', () => scrollToIndex(1))
  //   
  //     
  // }, []);
  return (
    <section className="dobra" data-dobra="vitrine-3d-cover-flow-scroll" ref={raiz}>
      <button className="nav-btn prev-btn" aria-label="Slide anterior" onClick={s.onClick}>
          <svg viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          </svg>
        </button>
        
        <button className="nav-btn next-btn" aria-label="Próximo slide" onClick={s.onClick}>
          <svg viewBox="0 0 24 24">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
          </svg>
        </button>
      
        <ul></ul>
      
        <h1>Seu navegador não suporta CSS Scroll-Driven Animations.<br /><small>Tente abrir no Chrome ou Edge.</small></h1>
    </section>
  );
}