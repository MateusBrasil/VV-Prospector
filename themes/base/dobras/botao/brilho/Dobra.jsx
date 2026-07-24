"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/botoes/shiny-button
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 *
 * REVISÃO MANUAL (2026-07-24): origem era `<button>` sem destino nenhum (só demo). Vira
 * `<a>` com `s.href`/`s.onClick` obrigatórios, mesmo padrão do botão-irmão "vidro" —
 * nunca outro link morto no kit. */
import { useRef } from 'react';
import './Dobra.css';
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  return (
    <span className="dobra" data-dobra="botao-brilho" ref={raiz}>
      <a href={s.href || '#'} onClick={s.onClick} className="shiny-cta">
        <span>{s.rotulo}</span>
      </a>
    </span>
  );
}