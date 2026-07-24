"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/botoes/glass-button-red
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 *
 * REVISÃO MANUAL (2026-07-24): a origem tinha `href="#"` cravado — link morto, a mesma
 * classe de defeito já documentada no CTA do Kasablanca (ver Hero.jsx do tema-irmão).
 * Um botão sem destino real não pode sair do kit. `s.href`/`s.onClick` são obrigatórios
 * para quem consome esta dobra; sem eles, aponta para o próprio elemento (`href="#"`)
 * de propósito, pra falhar visível em vez de silencioso caso alguém esqueça de passar. */
import { useRef } from 'react';
import './Dobra.css';
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  return (
    <span className="dobra" data-dobra="botao-vidro" ref={raiz}>
      <span className="reflection-wrapper">
        <a href={s.href || '#'} onClick={s.onClick} className="botao-mvm">
          <span className="elementor-button-text">{s.rotulo}</span>
        </a>
      </span>
    </span>
  );
}