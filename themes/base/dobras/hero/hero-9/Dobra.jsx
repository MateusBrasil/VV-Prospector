"use client";
/* DOBRA da esteira a partir de bank/_componentes/hero-section/hero-9, PORTADA À MÃO
 * em 2026-07-28 para o tema `odontologia` (registo sóbrio).
 *
 * O QUE FICOU DA ORIGEM (é o material que vale)
 *   a estrutura do hero: fotografia a sangrar, título ancorado em baixo, e uma linha de
 *   três informações rápidas no rodapé da dobra.
 *
 * O QUE FOI ARRANCADO, E PORQUÊ
 *   1. `.preloader-counter` — contador 0→100 em ecrã inteiro. É preloader, e preloader
 *      está proibido no motor (nenhum site do Prospector pode ter ecrã de espera).
 *   2. `<nav>` interno com logo e 5 links mortos (`href="#"`). O tema já tem Nav próprio;
 *      dois <nav> na mesma página é erro de acessibilidade, e link sem destino real foi
 *      reprovado ao vivo por um cliente.
 *   3. `.progress-bar` — barra de progresso do preloader; sem preloader não mede nada.
 *   4. O bloco `useGSAP` inteiro: era a timeline do preloader (SplitText + CustomEase,
 *      9 segundos até o h1 aparecer). Num nicho onde a pessoa chega com dor e com medo,
 *      esperar 9 s pelo título é o oposto do que se quer. A entrada passou a ser uma
 *      transição CSS curta, que o `prefers-reduced-motion` do sistema já trava.
 *      Consequência: esta dobra deixou de depender de gsap (ver `libs` no variant.json).
 *
 * Nada aqui pode ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import './Dobra.css';

export default function Dobra({ slots: s = {}, id }) {
  const linhas = [s.texto, s.texto2, s.texto3].filter(Boolean);

  return (
    <section className="dobra" data-dobra="hero-hero-9" id={id}>
      <div className="hero">
        {s.imagem && (
          <div className="hero-bg">
            <img
              src={s.imagem}
              alt={s.imagemAlt || ''}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        )}

        <div className="header">
          {s.rotulo && <p className="hero-kicker sm">{s.rotulo}</p>}
          <h1>{s.titulo}</h1>
          {s.acao && s.destino && (
            <a className="hero-cta" href={s.destino}>
              <span>{s.acao}</span>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          )}
        </div>

        {linhas.length > 0 && (
          <div className="hero-footer">
            {linhas.map((linha, i) => (
              <p className="sm" key={i}>{linha}</p>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
