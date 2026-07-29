"use client";

/* Porte fiel de `bank/_componentes/scroll/scroll-29`: conteúdo, marca e URLs de demonstração foram removidos; a mecânica visual foi preservada. */
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Dobra.css";

gsap.registerPlugin(ScrollTrigger);

export default function Dobra({ slots: s = {}, id }) {
  const raiz = useRef(null);
  const itens = Array.isArray(s.itens) ? s.itens.filter(item => item?.titulo && item?.imagem) : [];

  useLayoutEffect(() => {
    const elemento = raiz.current;
    if (!elemento || itens.length < 2) return undefined;
    const contexto = gsap.context(() => {
      const cartoes = gsap.utils.toArray(".arch__info");
      const imagens = gsap.utils.toArray(".img-wrapper");
      ScrollTrigger.matchMedia({
        "(min-width: 769px)": () => {
          gsap.set(imagens, { clipPath: "inset(0 0 0 0)", objectPosition: "0 0" });
          const linha = gsap.timeline({ scrollTrigger: { trigger: ".arch", start: "top top+=56", end: "bottom bottom", pin: ".arch__right", scrub: true, anticipatePin: 1 } });
          imagens.slice(0, -1).forEach((imagem, indice) => {
            linha.to(imagem, { clipPath: "inset(0 0 100% 0)", objectPosition: "0 60%", ease: "none", duration: 1 })
              .to(imagens[indice + 1], { objectPosition: "0 40%", ease: "none", duration: 1 }, "<");
          });
        },
        "(max-width: 768px)": () => imagens.forEach((imagem, indice) => gsap.to(imagem.querySelector("img"), {
          objectPosition: "0 30%", ease: "none", scrollTrigger: { trigger: cartoes[indice], start: "top 80%", end: "bottom 25%", scrub: true },
        })),
      });
    }, elemento);
    return () => contexto.revert();
  }, [itens.length]);

  if (!itens.length) return null;
  return (
    <section ref={raiz} className="dobra" data-dobra="servicos-arcos" id={id}>
      <div className="arch-container">
        {(s.rotulo || s.titulo) && <header className="arch__header">{s.rotulo && <p className="arch__kicker sm">{s.rotulo}</p>}{s.titulo && <h2>{s.titulo}</h2>}</header>}
        <div className="arch">
          <div className="arch__left">{itens.map((item, indice) => <article className="arch__info" key={`${item.titulo}-${indice}`}><div className="content"><p className="arch__numero" aria-hidden="true">{String(indice + 1).padStart(2, "0")}</p><h3 className="header">{item.titulo}</h3>{item.texto && <p className="desc">{item.texto}</p>}{item.acao && item.destino && <a className="link" href={item.destino}><span>{item.acao}</span><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg></a>}</div></article>)}</div>
          <div className="arch__right" aria-hidden="true">{itens.map((item, indice) => <div className="img-wrapper" key={`${item.imagem}-${indice}`} style={{ zIndex: itens.length - indice }}><img src={item.imagem} alt="" /></div>)}</div>
        </div>
      </div>
    </section>
  );
}
