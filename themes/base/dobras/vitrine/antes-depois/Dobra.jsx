"use client";
/* DOBRA da esteira a partir de bank/_componentes/cards/image-compare-slider-3d,
 * PORTADA À MÃO em 2026-07-28 para o tema `clinica-estetica` (registo editorial).
 *
 * MUDOU DE SLOT: estava em `destaque`, passou para `vitrine`. Não é arrumação: no
 * `receitas.json` a vitrine deste nicho é obrigatória e é o antes/depois, porque aqui o
 * resultado visível É a oferta. Esta é a única peça do acervo inteiro que faz comparação
 * de duas fotografias (procura por before/after, comparison, compare em 552 variant.json
 * devolve esta e mais nada útil), e estava classificada como decoração.
 *
 * O QUE FICOU DA ORIGEM (é a mecânica que vale)
 *   duas fotografias empilhadas no mesmo enquadramento, a de cima cortada por `clip-path:
 *   inset(0 0 0 X%)`, e um `<input type="range">` invisível por cima a controlar o X. É
 *   acessível de teclado de graça, porque o controlo é mesmo um input nativo.
 *
 * O QUE FOI ARRANCADO, E PORQUÊ
 *   1. O JS de origem inteiro (categoria `global-duro`): escrevia `--compare` e `--xp`/`--yp`
 *      em `document.documentElement` e registava `pointermove` no `document.body`. Uma
 *      dobra a escrever no elemento raiz do documento é a mesma classe de defeito que o
 *      `:root` global das folhas de estilo. Passa a ser estado de React escrito na
 *      própria peça, por instância, sem tocar em nada fora dela.
 *   2. O `@layer debug` completo: `outline: 4px dashed` à volta de tudo, `rotateX(-24deg)
 *      rotateY(50deg)` no conteúdo e um parallax de rato. Era o andaime do CodePen de
 *      origem, não a peça.
 *   3. `alt="Vercel Home"` nas duas imagens e as duas fotos de demonstração servidas por
 *      assets.codepen.io. O alt entra agora pelo slot; sem fotografias do cliente a peça
 *      não renderiza.
 *   4. Uma comparação única deu lugar a `s.itens`. Uma clínica mostra vários casos, e um
 *      caso só não é vitrine.
 *
 * Nada aqui pode ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useState } from 'react';
import './Dobra.css';

function Comparacao({ item, rotuloControlo }) {
  const [posicao, setPosicao] = useState(50);

  return (
    <figure className="caso">
      <div className="caso__palco" style={{ '--compare': posicao }}>
        <img className="caso__foto" src={item.antes} alt={item.antesAlt || ''} />
        <img className="caso__foto caso__foto--depois" src={item.depois} alt={item.depoisAlt || ''} />

        <span className="caso__etiqueta caso__etiqueta--antes">{item.rotuloAntes}</span>
        <span className="caso__etiqueta caso__etiqueta--depois">{item.rotuloDepois}</span>

        <span className="caso__pega" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.25">
            <path d="M9 6 4 12l5 6M15 6l5 6-5 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>

        <input
          className="caso__controlo"
          type="range"
          min="0"
          max="100"
          step="1"
          value={posicao}
          aria-label={rotuloControlo}
          onChange={e => setPosicao(Number(e.target.value))}
        />
      </div>

      {(item.titulo || item.texto) && (
        <figcaption className="caso__legenda">
          {item.titulo && <h3>{item.titulo}</h3>}
          {item.texto && <p className="sm">{item.texto}</p>}
        </figcaption>
      )}
    </figure>
  );
}

export default function Dobra({ slots: s = {}, id }) {
  const itens = (Array.isArray(s.itens) ? s.itens : []).filter(i => i && i.antes && i.depois);
  if (!itens.length) return null;

  return (
    <section className="dobra" data-dobra="vitrine-antes-depois" id={id}>
      <div className="vitrine">
        {(s.rotulo || s.titulo) && (
          <header className="vitrine__header">
            {s.rotulo && <p className="vitrine__kicker sm">{s.rotulo}</p>}
            {s.titulo && <h2>{s.titulo}</h2>}
            {s.texto && <p className="vitrine__intro">{s.texto}</p>}
          </header>
        )}

        <div className="vitrine__casos">
          {itens.map((item, i) => (
            <Comparacao item={item} rotuloControlo={s.rotuloControlo} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
