"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/botoes/tailwind-button
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import './Dobra.css';
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* a origem não trazia JS */
  return (
    <section className="dobra" data-dobra="botao-tailwind-button" ref={raiz}>
      <button
            className="bg-white border border-gray-200 shadow-md text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group"
            type="button"
           onClick={s.onClick}>
            <div
              className="bg-[var(--acento)] rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                height="25px"
                width="25px"
              >
                <path
                  d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                  fill="var(--base-600)"
                ></path>
                <path
                  d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                  fill="var(--base-600)"
                ></path>
              </svg>
            </div>
            <p className="translate-x-2">{s.texto}</p>
          </button>
    </section>
  );
}