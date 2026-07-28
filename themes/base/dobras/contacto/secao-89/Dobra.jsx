"use client";
/* DOBRA da esteira a partir de bank/_componentes/secoes/secao-89, PORTADA À MÃO
 * em 2026-07-28 para o tema `clinica-estetica` (registo editorial).
 *
 * O QUE FICOU DA ORIGEM (é o material que vale)
 *   a grelha de contacto: três fichas com ícone de linha, rótulo e valor, alinhadas por
 *   cima do painel de acção. É a estrutura que faz uma pessoa encontrar o telefone sem ler
 *   a página, e é o que a origem tinha de bom.
 *
 * O QUE FOI ARRANCADO, E PORQUÊ
 *   1. `hello@relume.io`, `Los Angeles, CA 90001` e `+1 (555) 123-4567` estavam escritos
 *      no markup. Contactos de outra entidade num site de cliente é o defeito mais grave
 *      que este motor já cometeu; entram todos por `s.informacoes`.
 *   2. O `<form>` com nome, email e mensagem. Este tema exporta estático (`output: export`):
 *      um formulário sem destino é um botão que não faz nada, e a pessoa fica à espera de
 *      uma resposta que nunca chega. No lugar dele fica o painel de horário e as acções
 *      com destino real (telefone, mapa), que é o que resolve mesmo o problema de quem
 *      quer marcar.
 *   3. `fill="white"` nos três ícones SVG: hex fora de token. Passaram a `currentColor`
 *      e a traço, que é o registo de ícone deste motor (nunca emoji, sempre SVG de linha).
 *   4. A cadeia `page-wrapper > main.main-wrapper > section > padding-section-medium >
 *      padding-global > container-small` do Webflow, e o `<main>` interno, que é marcação
 *      inválida dentro do `<main>` do tema.
 *
 * Nada aqui pode ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import './Dobra.css';

/* Ícones de linha, um por papel. Sem emoji, e sem fonte de ícones: são quatro caminhos
   SVG e não justificam uma dependência. */
const ICONES = {
  telefone: <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z" strokeLinecap="round" strokeLinejoin="round" />,
  email: <><path d="M3.5 6.5h17v11h-17z" strokeLinecap="round" strokeLinejoin="round" /><path d="m3.5 7 8.5 6 8.5-6" strokeLinecap="round" strokeLinejoin="round" /></>,
  mapa: <><path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="10" r="2.5" /></>,
  relogio: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 1.75" strokeLinecap="round" strokeLinejoin="round" /></>,
};

function Icone({ nome }) {
  const desenho = ICONES[nome];
  if (!desenho) return null;
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
      {desenho}
    </svg>
  );
}

export default function Dobra({ slots: s = {}, id, headingLevel = 'h2' }) {
  const informacoes = (Array.isArray(s.informacoes) ? s.informacoes : []).filter(i => i && i.valor);
  const horarios = Array.isArray(s.horarios) ? s.horarios : [];
  const acoes = (Array.isArray(s.acoes) ? s.acoes : []).filter(a => a && a.rotulo && a.destino);

  const Titulo = headingLevel === 'h1' ? 'h1' : 'h2';
  return (
    <section className="dobra" data-dobra="contacto-secao-89" id={id}>
      <div className="contacto">
        {(s.rotulo || s.titulo) && (
          <header className="contacto__header">
            {s.rotulo && <p className="contacto__kicker sm">{s.rotulo}</p>}
            {s.titulo && <Titulo>{s.titulo}</Titulo>}
          </header>
        )}

        {informacoes.length > 0 && (
          <div className="contacto__grelha">
            {informacoes.map((info, i) => (
              <div className="ficha" key={i}>
                <span className="ficha__icone"><Icone nome={info.icone} /></span>
                {info.rotulo && <p className="ficha__rotulo sm">{info.rotulo}</p>}
                {info.destino ? (
                  <a className="ficha__valor" href={info.destino}>{info.valor}</a>
                ) : (
                  <p className="ficha__valor">{info.valor}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {(horarios.length > 0 || acoes.length > 0) && (
          <div className="contacto__painel">
            {horarios.length > 0 && (
              <div className="painel__horario">
                {s.tituloPainel && (
                  <p className="painel__rotulo sm">
                    <Icone nome="relogio" />
                    <span>{s.tituloPainel}</span>
                  </p>
                )}
                <ul className="painel__lista">
                  {horarios.map((h, i) => (
                    <li key={i}>
                      <span>{h.dias}</span>
                      <span>{h.horas}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {acoes.length > 0 && (
              <div className="painel__acoes">
                {acoes.map((a, i) => (
                  <a className="painel__acao" href={a.destino} key={i}>
                    <Icone nome={a.icone} />
                    <span>{a.rotulo}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        )}

        {s.nota && <p className="contacto__nota sm">{s.nota}</p>}
      </div>
    </section>
  );
}
