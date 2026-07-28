"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/scroll/scroll-53
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Dobra.css';
gsap.registerPlugin(ScrollTrigger);
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* JS de origem ESCOPADO pela esteira (categoria: dom-simples).
   * Só tocava em querySelector/classList dentro do próprio componente, por isso a troca
   * de `document.` para `raiz.current.` é equivalente e foi feita automaticamente.
   * Continua a precisar de confirmação no ecrã antes de a dobra ser promovida. */
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const lenis = new Lenis();
    
    lenis.on("scroll", ScrollTrigger.update);
    
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    
    gsap.ticker.lagSmoothing(0);
    
    const initialClipPaths = [
      "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)",
      "polygon(33% 0%, 33% 0%, 33% 0%, 33% 0%)",
      "polygon(66% 0%, 66% 0%, 66% 0%, 66% 0%)",
      "polygon(0% 33%, 0% 33%, 0% 33%, 0% 33%)",
      "polygon(33% 33%, 33% 33%, 33% 33%, 33% 33%)",
      "polygon(66% 33%, 66% 33%, 66% 33%, 66% 33%)",
      "polygon(0% 66%, 0% 66%, 0% 66%, 0% 66%)",
      "polygon(33% 66%, 33% 66%, 33% 66%, 33% 66%)",
      "polygon(66% 66%, 66% 66%, 66% 66%, 66% 66%)",
    ];
    
    const finalClipPaths = [
      "polygon(0% 0%, 33.5% 0%, 33.5% 33%, 0% 33.5%)",
      "polygon(33% 0%, 66.5% 0%, 66.5% 33%, 33% 33.5%)",
      "polygon(66% 0%, 100% 0%, 100% 33%, 66% 33.5%)",
      "polygon(0% 33%, 33.5% 33%, 33.5% 66%, 0% 66.5%)",
      "polygon(33% 33%, 66.5% 33%, 66.5% 66%, 33% 66.5%)",
      "polygon(66% 33%, 100% 33%, 100% 66%, 66% 66.5%)",
      "polygon(0% 66%, 33.5% 66%, 33.5% 100%, 0% 100%)",
      "polygon(33% 66%, 66.5% 66%, 66.5% 100%, 33% 100%)",
      "polygon(66% 66%, 100% 66%, 100% 100%, 66% 100%)",
    ];
    
    function createMasks() {
      const imgs = raiz.current.querySelectorAll(".img");
      imgs.forEach((img, imgIndex) => {
        for (let i = 1; i <= 9; i++) {
          const mask = document.createElement("div");
          mask.classList.add("mask", `m-${i}`);
          img.appendChild(mask);
        }
      });
    }
    
    createMasks();
    
    const rows = gsap.utils.toArray(".row");
    
    rows.forEach((row) => {
      const imgs = row.querySelectorAll(".img");
    
      imgs.forEach((img) => {
        const masks = img.querySelectorAll(".mask");
    
        masks.forEach((mask, index) => {
          gsap.set(mask, {
            clipPath: initialClipPaths[index],
          });
        });
    
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 75%",
          },
        });
    
        const animationOrder = [
          [".m-1"],
          [".m-2", ".m-4"],
          [".m-3", ".m-5", ".m-7"],
          [".m-6", ".m-8"],
          [".m-9"],
        ];
    
        animationOrder.forEach((targets, index) => {
          tl.to(
            targets.map((cls) => img.querySelector(cls)),
            {
              clipPath: (i, el) => finalClipPaths[Array.from(masks).indexOf(el)],
              duration: 0.5,
              ease: "power2.out",
              stagger: 0.1,
            },
            index * 0.125
          );
        });
      });
    });
    
    
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-scroll-53" ref={raiz}>
      <nav>
            <a href="#">{s.acao}</a>
            <a href="#">{s.acao2}</a>
          </nav>
      
          <section className="hero">
            <h1>{s.titulo}</h1>
          </section>
      
          <section className="info">
            <p>{s.texto}</p>
      
            <p>{s.texto2}</p>
          </section>
      
          <section className="hero-imgs">
            <div className="row">
              <div className="img img-1"></div>
              <div className="img img-2"></div>
            </div>
          </section>
      
          <section className="clients">
            <div className="col"><p>{s.texto3}</p></div>
            <div className="col">
              <div className="clients-list">
                <p>{s.texto4}</p>
                <p>{s.texto5}</p>
                <p>{s.texto6}</p>
                <p>{s.texto7}</p>
                <p>{s.texto8}</p>
                <p>{s.texto9}</p>
                <p>{s.texto10}</p>
                <p>{s.texto11}</p>
                <p>{s.texto12}</p>
                <p>{s.texto13}</p>
                <p>{s.texto14}</p>
                <p>{s.texto15}</p>
                <p>{s.texto16}</p>
                <p>{s.texto17}</p>
                <p>{s.texto18}</p>
                <p>{s.texto19}</p>
                <p>{s.texto20}</p>
              </div>
              <div className="clients-list">
                <p>{s.texto21}</p>
                <p>{s.texto22}</p>
                <p>{s.texto23}</p>
                <p>{s.texto24}</p>
                <p>{s.texto25}</p>
                <p>{s.texto26}</p>
                <p>{s.texto27}</p>
                <p>{s.texto28}</p>
                <p>{s.texto29}</p>
                <p>{s.texto30}</p>
                <p>{s.texto31}</p>
                <p>{s.texto32}</p>
                <p>{s.texto33}</p>
                <p>{s.texto34}</p>
                <p>{s.texto35}</p>
                <p>{s.texto36}</p>
              </div>
            </div>
          </section>
      
          <section className="clients-imgs">
            <div className="row">
              <div className="img img-3"></div>
            </div>
          </section>
      
          <section className="product-filters">
            <div className="col">
              <p>{s.texto37}</p>
              <p>{s.texto38}</p>
              <p>{s.texto39}</p>
              <p>{s.texto40}</p>
              <p>{s.texto41}</p>
              <p>{s.texto42}</p>
            </div>
            <div className="col"></div>
          </section>
      
          <section className="products">
            <div className="row">
              <div className="img"></div>
              <div className="img img-4"></div>
              <div className="img img-5"></div>
              <div className="img"></div>
            </div>
      
            <div className="row">
              <div className="img img-6"></div>
              <div className="img"></div>
              <div className="img"></div>
              <div className="img img-7"></div>
            </div>
      
            <div className="row">
              <div className="img"></div>
              <div className="img img-8"></div>
              <div className="img"></div>
              <div className="img img-9"></div>
            </div>
      
            <div className="row">
              <div className="img img-10"></div>
              <div className="img"></div>
              <div className="img img-11"></div>
              <div className="img img-12"></div>
            </div>
          </section>
      
          <section className="about">
            <p>{s.texto43}</p>
      
            <p>{s.texto44}</p>
          </section>
      
          <section className="about-imgs">
            <div className="row">
              <div className="img img-13"></div>
              <div className="img img-14"></div>
            </div>
          </section>
      
          <section className="outro">
            <div className="row">
              <div className="img img-15"></div>
              <div className="img img-16"></div>
              <div className="img img-17"></div>
            </div>
          </section>
    </section>
  );
}