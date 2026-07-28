"use client";
/* DOBRA da esteira a partir de bank/_componentes/secoes/secao-21, PORTADA À MÃO
 * em 2026-07-28 para o tema `odontologia` (registo sóbrio).
 *
 * PORQUÊ ESTA E NÃO AS OUTRAS 6 DO SLOT
 * É a única das sete que abre e fecha com `<details>/<summary>` nativos. As outras seis
 * são acordeões de `<div>` com o estado em JS: sem o JS de origem, que a esteira não
 * converte, ficam com todas as respostas abertas ou todas fechadas para sempre. Esta
 * funciona sozinha, e num nicho sóbrio isso vale mais do que a animação que se perdeu.
 *
 * O QUE FICOU: o enquadramento em linha fina com as quatro marcas de canto, e o cruzado
 * que roda 45° quando a pergunta abre.
 *
 * O QUE FOI ARRANCADO
 *   1. As quatro perguntas escritas à mão (`rotulo2..5` + `texto..texto4`) viraram um
 *      `map` sobre `s.itens`. Uma clínica tem 3 dúvidas ou tem 9; quatro é do template.
 *   2. O `useGSAP` inteiro: entrada com ScrollTrigger e abrir/fechar por gsap. O
 *      abrir/fechar é do browser, e a entrada era espetáculo que o nicho não pede.
 *      Consequência: a dobra deixou de depender de gsap e de ScrollTrigger.
 *   3. `.faq-section-pre-anim`, que punha `visibility:hidden` à espera da timeline. Sem
 *      timeline, essa classe deixava a secção inteira invisível.
 *
 * Nada aqui pode ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import './Dobra.css';

export default function Dobra({ slots: s = {}, id }) {
  const itens = (Array.isArray(s.itens) ? s.itens : []).filter(i => i && i.pergunta);
  if (!itens.length) return null;

  return (
    <section className="dobra" data-dobra="faq-secao-21" id={id}>
      <section className="faq">
        <div className="faq__inner">
          {(s.rotulo || s.titulo) && (
            <header className="faq__header">
              {s.rotulo && <span className="faq__eyebrow">{s.rotulo}</span>}
              {s.titulo && <h2 className="faq__headline">{s.titulo}</h2>}
            </header>
          )}

          <div className="faq__list">
            <span className="faq-frame-line faq-frame-line--top" aria-hidden="true"></span>
            <span className="faq-frame-line faq-frame-line--right" aria-hidden="true"></span>
            <span className="faq-frame-line faq-frame-line--bottom" aria-hidden="true"></span>
            <span className="faq-frame-line faq-frame-line--left" aria-hidden="true"></span>

            <svg className="faq-marker faq-marker--tl" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M16 7.5V8.5H8.5V16H7.5V7.5Z"></path>
            </svg>
            <svg className="faq-marker faq-marker--tr" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M0 7.5V8.5H7.5V16H8.5V7.5Z"></path>
            </svg>
            <svg className="faq-marker faq-marker--bl" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M16 8.5V7.5H8.5V0H7.5V8.5Z"></path>
            </svg>
            <svg className="faq-marker faq-marker--br" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M0 8.5V7.5H7.5V0H8.5V8.5Z"></path>
            </svg>

            {itens.map((item, i) => (
              <details className="faq-item" key={i} name="faq" open={i === 0 ? true : undefined}>
                <summary className="faq-item__summary">
                  <span className="faq-item__q">{item.pergunta}</span>
                  <span className="faq-chevron" aria-hidden="true">
                    <span className="faq-chevron__bar faq-chevron__bar--h"></span>
                    <span className="faq-chevron__bar faq-chevron__bar--v"></span>
                  </span>
                </summary>
                <div className="faq-answer">
                  <p className="faq-item__a">{item.resposta}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
