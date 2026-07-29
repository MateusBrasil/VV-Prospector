"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Dobra.css";
gsap.registerPlugin(ScrollTrigger);

export default function RodaPratos({ s }) {
  const raiz = useRef(null); const itens = (s?.itens || []).slice(0, 12);
  if (itens.length < 5) return null;
  useLayoutEffect(() => { const ctx = gsap.context(() => {
    const cards = gsap.utils.toArray(".roda-pratos__card");
    cards.forEach((card, i) => gsap.set(card, { rotationX: i / cards.length * 360, transformOrigin: "50% 50% -460px" }));
    gsap.to(cards, { rotationX: "+=360", ease: "none", scrollTrigger: { trigger: raiz.current, start: "top top", end: "+=1800", pin: true, scrub: 1 } });
  }, raiz); return () => ctx.revert(); }, []);
  return <section className="roda-pratos" data-dobra="vitrine-roda-pratos" ref={raiz}><header><p>{s.rotulo}</p><h2>{s.titulo}</h2></header><div className="roda-pratos__palco">{itens.map((item,i)=><figure className="roda-pratos__card" key={`${item.imagem}-${i}`}><img src={item.imagem} alt={item.alt || item.titulo || ""}/><figcaption>{item.titulo}</figcaption></figure>)}</div></section>;
}
