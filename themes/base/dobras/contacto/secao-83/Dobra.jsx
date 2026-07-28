"use client";
/* DOBRA da esteira a partir de bank/_componentes/secoes/secao-83, PORTADA À MÃO
 * em 2026-07-28 para o tema `odontologia` (registo sóbrio).
 *
 * PORQUÊ ESTA E NÃO AS DUAS QUE O SELETOR APONTAVA
 * `tools/tema/selecionar-24.mjs` dá `contacto/secao-110` e `contacto/secao-149` como os
 * únicos candidatos sóbrios do slot. Abri as duas: NENHUMA É UMA SECÇÃO DE CONTACTO. São
 * a mesma barra de navegação da marca "Pipely" seguida de um hero (uma com case study,
 * outra com prova social). Estão no slot errado, e é o mesmo erro de classificação que o
 * `receitas.json` já registou no slot `servicos`. Das 34 do slot, esta é a que tem
 * mesmo o layout de contacto: coluna de informação (email, telefone, morada, redes) ao
 * lado de um painel de ação.
 *
 * O QUE FICOU: a grelha de duas colunas, a lista de pares rótulo/valor, e a fila de
 * ligações sociais em círculo.
 *
 * O QUE FOI ARRANCADO
 *   1. O FORMULÁRIO INTEIRO. A obra é exportação estática: não há servidor que receba um
 *      POST. Um "Send Message" que não envia nada é um clicável sem destino real, que é
 *      a coisa que já foi reprovada ao vivo por um cliente. Em vez disso, o painel da
 *      direita tem horários e dois botões que fazem mesmo alguma coisa: ligar e abrir o
 *      mapa. Numa clínica dentária o telefone é o canal de marcação, não o formulário.
 *   2. Os literais de negócio da origem, que estavam escritos no HTML e não em slots:
 *      "Advisora@gmail.com", "(123) 1221 2323", "123 Innovation Avenue, Suite 456 /
 *      Tech District, San Francisco, CA 94107 / United States", e os rótulos em inglês
 *      "Email:", "Phone:", "Address:", "Follow Us". Tudo entra agora por `s`.
 *   3. Os quatro ícones sociais fixos (YouTube, Instagram, TikTok, X) com `href` que
 *      apontavam para o site da agência de origem. Agora a lista é do cliente e cada
 *      ligação tem de trazer o seu destino; sem destino, não é renderizada.
 *   4. O `<h1>` da secção: a página já tem um, e dois `h1` partem a hierarquia. É `<h2>`.
 *
 * Nada aqui pode ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import './Dobra.css';

const ICONES = {
  telefone: <path d="M6.6 3h3l1.5 3.7-2 1.4a12 12 0 0 0 5.3 5.3l1.4-2 3.7 1.5v3a1.8 1.8 0 0 1-2 1.8A15.6 15.6 0 0 1 4.8 5a1.8 1.8 0 0 1 1.8-2Z" />,
  mapa: <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Zm0-8.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />,
};

export default function Dobra({ slots: s = {}, id, headingLevel = 'h2' }) {
  const infos = (Array.isArray(s.informacoes) ? s.informacoes : []).filter(i => i && i.valor);
  const sociais = (Array.isArray(s.sociais) ? s.sociais : []).filter(l => l && l.destino && l.rotulo);
  const acoes = (Array.isArray(s.acoes) ? s.acoes : []).filter(a => a && a.rotulo && a.destino);
  const horarios = (Array.isArray(s.horarios) ? s.horarios : []).filter(h => h && h.dias);

  // Na home esta dobra é subseção e usa h2; numa rota de contacto ela é o assunto
  // principal e recebe h1 do tema. A semântica acompanha o contexto sem duplicar a dobra.
  const Titulo = headingLevel === 'h1' ? 'h1' : 'h2';

  return (
    <section className="dobra" data-dobra="contacto-secao-83" id={id}>
      <div className="section_contact">
        <div className="padding-global padding-section-large">
          <div className="container-large">
            <div className="contact_grid">

              <div className="contact_content">
                {s.rotulo && <p className="contact_kicker sm">{s.rotulo}</p>}
                {s.titulo && <Titulo className="text-6xl">{s.titulo}</Titulo>}

                {infos.map((info, i) => (
                  <div className="contact_info-wrapper" key={i}>
                    <div className="contact_info-title">{info.rotulo}</div>
                    {info.destino ? (
                      <a className="contact_info-description" href={info.destino}>{info.valor}</a>
                    ) : (
                      <div className="contact_info-description">
                        {String(info.valor).split('\n').map((linha, j) => (
                          <span key={j}>{linha}</span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {sociais.length > 0 && (
                  <div className="contact_info-wrapper">
                    {s.rotuloSociais && <div className="contact_info-title">{s.rotuloSociais}</div>}
                    <div className="contact_info-socials">
                      {sociais.map((link, i) => (
                        <a
                          className="contact_social-link"
                          href={link.destino}
                          target="_blank"
                          rel="noreferrer noopener"
                          key={i}
                        >
                          {link.rotulo}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <aside className="contact_painel">
                {s.tituloPainel && <h3 className="contact_painel-titulo">{s.tituloPainel}</h3>}

                {horarios.length > 0 && (
                  <dl className="contact_horarios">
                    {horarios.map((h, i) => (
                      <div className="contact_horario" key={i}>
                        <dt>{h.dias}</dt>
                        <dd>{h.horas}</dd>
                      </div>
                    ))}
                  </dl>
                )}

                {acoes.length > 0 && (
                  <div className="contact_acoes">
                    {acoes.map((a, i) => (
                      <a
                        className={`button${i === 0 ? ' is-primary' : ' is-outline'}`}
                        href={a.destino}
                        key={i}
                      >
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          {ICONES[a.icone] || ICONES.telefone}
                        </svg>
                        <span>{a.rotulo}</span>
                      </a>
                    ))}
                  </div>
                )}

                {s.nota && <p className="contact_nota sm">{s.nota}</p>}
              </aside>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
