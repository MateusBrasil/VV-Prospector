"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import "./Dobra.css";
import AtlasReserva from "@/dobras/botao/atlas-reserva/Dobra";

export default function MesaRevelada({ s, slots }) {
  // `slots` is the theme-wide component contract. Keep `s` as an alias so the
  // original restaurant composition remains backwards compatible.
  s = s || slots || {};
  const raiz = useRef(null);
  const imagens = (s?.imagens || []).slice(0, 7);
  const titulo = String(s?.titulo || "").trim();
  if (!titulo || imagens.length < 5) return null;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(raiz);
      const cards = q(".mesa-revelada__card");
      const letras = q(".mesa-revelada__letter");
      gsap.set(letras, { yPercent: 115 });
      gsap.set(cards, { clipPath: "inset(100% 0 0 0)" });
      gsap.timeline({ defaults: { ease: "power3.out" } })
        .to(letras, { yPercent: 0, duration: 1.05, stagger: 0.035 })
        .to(cards, { clipPath: "inset(0 0 0 0)", duration: 0.9, stagger: 0.075 }, "<0.15");
    }, raiz);
    return () => ctx.revert();
  }, []);

  const caracteres = [...titulo];
  const meio = Math.ceil(caracteres.length / 2);
  return (
    <section className="mesa-revelada" data-dobra="hero-mesa-revelada" ref={raiz}>
      <div className="mesa-revelada__grid" aria-hidden="true">
        {imagens.map((imagem, indice) => (
          <figure className={`mesa-revelada__card mesa-revelada__card--${indice + 1}`} key={`${imagem.src}-${indice}`}>
            <img src={imagem.src} alt="" />
          </figure>
        ))}
      </div>
      <div className="mesa-revelada__content">
        <p className="mesa-revelada__eyebrow">{s.rotulo}</p>
        <h1 aria-label={titulo}>
          {[caracteres.slice(0, meio), caracteres.slice(meio)].map((linha, indice) => (
            <span className="mesa-revelada__line" key={indice}>
              {linha.map((letra, i) => <span className="mesa-revelada__clip" key={`${indice}-${i}`}><span className="mesa-revelada__letter">{letra === " " ? "\u00a0" : letra}</span></span>)}
            </span>
          ))}
        </h1>
        <div className="mesa-revelada__footer">
          <p>{s.texto}</p>
          <AtlasReserva href={s.destino}>{s.acao}</AtlasReserva>
        </div>
      </div>
    </section>
  );
}
