"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/animacoes/hover-4
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Dobra.css';
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* JS de origem ESCOPADO pela esteira (categoria: dom-simples).
   * Só tocava em querySelector/classList dentro do próprio componente, por isso a troca
   * de `document.` para `raiz.current.` é equivalente e foi feita automaticamente.
   * Continua a precisar de confirmação no ecrã antes de a dobra ser promovida. */
  useGSAP(() => {
    const closestEdge = (x, y, w, h) => {
      const topEdgeDist = distMetric(x, y, w / 2, 0);
      const bottomEdgeDist = distMetric(x, y, w / 2, h);
      const min = Math.min(topEdgeDist, bottomEdgeDist);
      return min === topEdgeDist ? 'top' : 'bottom';
    };
    
    const distMetric = (x, y, x2, y2) => {
      const xDiff = x - x2;
      const yDiff = y - y2;
      return (xDiff * xDiff) + (yDiff * yDiff);
    };
    
    class MenuItem {
      constructor(el) {
        this.DOM = { el };
        this.DOM.link = this.DOM.el.querySelector('.menu__item-link');
        this.DOM.marquee = this.DOM.el.querySelector('.marquee');
        this.DOM.marqueeInner = this.DOM.marquee.querySelector('.marquee__inner-wrap');
        this.animationDefaults = { duration: 0.6, ease: 'expo.out' };
        this.initEvents();
      }
    
      initEvents() {
        this.onMouseEnterFn = (ev) => this.mouseEnter(ev);
        this.DOM.link.addEventListener('mouseenter', this.onMouseEnterFn);
        this.onMouseLeaveFn = (ev) => this.mouseLeave(ev);
        this.DOM.link.addEventListener('mouseleave', this.onMouseLeaveFn);
      }
    
      mouseEnter(ev) {
        const edge = this.findClosestEdge(ev);
    
        gsap.timeline({ defaults: this.animationDefaults })
          .set(this.DOM.marquee, { y: edge === 'top' ? '-101%' : '101%' }, 0)
          .set(this.DOM.marqueeInner, { y: edge === 'top' ? '101%' : '-101%' }, 0)
          .to([this.DOM.marquee, this.DOM.marqueeInner], { y: '0%' }, 0);
      }
    
      mouseLeave(ev) {
        const edge = this.findClosestEdge(ev);
    
        gsap.timeline({ defaults: this.animationDefaults })
          .to(this.DOM.marquee, { y: edge === 'top' ? '-101%' : '101%' }, 0)
          .to(this.DOM.marqueeInner, { y: edge === 'top' ? '101%' : '-101%' }, 0);
      }
    
      findClosestEdge(ev) {
        const x = ev.pageX - this.DOM.el.offsetLeft;
        const y = ev.pageY - this.DOM.el.offsetTop;
        return closestEdge(x, y, this.DOM.el.clientWidth, this.DOM.el.clientHeight);
      }
    }
    
    class Menu {
      constructor(el) {
        this.DOM = { el };
        this.DOM.menuItems = this.DOM.el.querySelectorAll('.menu__item');
        this.menuItems = [];
        this.DOM.menuItems.forEach((menuItem) => this.menuItems.push(new MenuItem(menuItem)));
      }
    }
    
    new Menu(raiz.current.querySelector('.menu'));
    
    
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-anim-hover-4" ref={raiz}>
      <main>
          <div className="menu-wrap">
            <nav className="menu">
              <div className="menu__item">
                <a className="menu__item-link" href="#">{s.acao}</a>
                <div className="marquee">
                  <div className="marquee__inner-wrap">
                    <div className="marquee__inner" aria-hidden="true">
                      <span>{s.rotulo}</span>
                      <div className="marquee__img" style={{backgroundImage: `url(${s.imagem})`}}></div>
                      <span>{s.rotulo2}</span>
                      <div className="marquee__img" style={{backgroundImage: `url(${s.imagem2})`}}></div>
                      <span>{s.rotulo3}</span>
                      <div className="marquee__img" style={{backgroundImage: `url(${s.imagem3})`}}></div>
                      <span>{s.rotulo4}</span>
                      <div className="marquee__img" style={{backgroundImage: `url(${s.imagem4})`}}></div>
                      <span>{s.rotulo5}</span>
                      <div className="marquee__img" style={{backgroundImage: `url(${s.imagem5})`}}></div>
                      <span>{s.rotulo6}</span>
                      <div className="marquee__img" style={{backgroundImage: `url(${s.imagem6})`}}></div>
                      <span>{s.rotulo7}</span>
                      <div className="marquee__img" style={{backgroundImage: `url(${s.imagem7})`}}></div>
                      <span>{s.rotulo8}</span>
                      <div className="marquee__img" style={{backgroundImage: `url(${s.imagem8})`}}></div>
                    </div>
                  </div>
                </div>
              </div>
      
              <div className="menu__item">
                <a className="menu__item-link" href="#">{s.acao2}</a>
                <div className="marquee">
                  <div className="marquee__inner-wrap">
                    <div className="marquee__inner" aria-hidden="true">
                      <span>{s.rotulo9}</span>
                      <div className="marquee__img" style={{backgroundImage: `url(${s.imagem9})`}}></div>
                      <span>{s.rotulo10}</span>
                      <div className="marquee__img" style={{backgroundImage: `url(${s.imagem10})`}}></div>
                      <span>{s.rotulo11}</span>
                      <div className="marquee__img" style={{backgroundImage: `url(${s.imagem11})`}}></div>
                      <span>{s.rotulo12}</span>
                      <div className="marquee__img" style={{backgroundImage: `url(${s.imagem12})`}}></div>
                      <span>{s.rotulo13}</span>
                      <div className="marquee__img" style={{backgroundImage: `url(${s.imagem13})`}}></div>
                      <span>{s.rotulo14}</span>
                      <div className="marquee__img" style={{backgroundImage: `url(${s.imagem14})`}}></div>
                      <span>{s.rotulo15}</span>
                      <div className="marquee__img" style={{backgroundImage: `url(${s.imagem15})`}}></div>
                      <span>{s.rotulo16}</span>
                      <div className="marquee__img" style={{backgroundImage: `url(${s.imagem16})`}}></div>
                    </div>
                  </div>
                </div>
              </div>
      
              <div className="menu__item">
                <a className="menu__item-link" href="#">{s.acao3}</a>
                <div className="marquee">
                  <div className="marquee__inner-wrap">
                    <div className="marquee__inner" aria-hidden="true">
                      <span>{s.rotulo17}</span>
                      <div className="marquee__img" style={{backgroundImage: `url(${s.imagem17})`}}></div>
                      <span>{s.rotulo18}</span>
                      <div className="marquee__img" style={{backgroundImage: `url(${s.imagem18})`}}></div>
                      <span>{s.rotulo19}</span>
                      <div className="marquee__img" style={{backgroundImage: `url(${s.imagem19})`}}></div>
                      <span>{s.rotulo20}</span>
                      <div className="marquee__img" style={{backgroundImage: `url(${s.imagem20})`}}></div>
                      <span>{s.rotulo21}</span>
                      <div className="marquee__img" style={{backgroundImage: `url(${s.imagem21})`}}></div>
                      <span>{s.rotulo22}</span>
                      <div className="marquee__img" style={{backgroundImage: `url(${s.imagem22})`}}></div>
                      <span>{s.rotulo23}</span>
                      <div className="marquee__img" style={{backgroundImage: `url(${s.imagem23})`}}></div>
                      <span>{s.rotulo24}</span>
                      <div className="marquee__img" style={{backgroundImage: `url(${s.imagem24})`}}></div>
                    </div>
                  </div>
                </div>
              </div>
      
              <div className="menu__item">
                <a className="menu__item-link" href="#">{s.acao4}</a>
                <div className="marquee">
                  <div className="marquee__inner-wrap">
                    <div className="marquee__inner" aria-hidden="true">
                      <span>{s.rotulo25}</span>
                      <div className="marquee__img" style={{backgroundImage: `url(${s.imagem25})`}}></div>
                      <span>{s.rotulo26}</span>
                      <div className="marquee__img" style={{backgroundImage: `url(${s.imagem26})`}}></div>
                      <span>{s.rotulo27}</span>
                      <div className="marquee__img" style={{backgroundImage: `url(${s.imagem27})`}}></div>
                      <span>{s.rotulo28}</span>
                      <div className="marquee__img" style={{backgroundImage: `url(${s.imagem28})`}}></div>
                      <span>{s.rotulo29}</span>
                      <div className="marquee__img" style={{backgroundImage: `url(${s.imagem29})`}}></div>
                      <span>{s.rotulo30}</span>
                      <div className="marquee__img" style={{backgroundImage: `url(${s.imagem30})`}}></div>
                      <span>{s.rotulo31}</span>
                      <div className="marquee__img" style={{backgroundImage: `url(${s.imagem31})`}}></div>
                      <span>{s.rotulo32}</span>
                      <div className="marquee__img" style={{backgroundImage: `url(${s.imagem32})`}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </main>
    </section>
  );
}