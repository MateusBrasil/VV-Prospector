"use client";

/* Footer — ESCRITO À MÃO, e isto é a exceção verificada à regra do banco.
 *
 * A PROVA: `themes/base/dobras/` tem 20 slots e nenhum deles é `rodape`. A contagem é
 * zero, não é "não encontrei nada bom". O `receitas.json` explica porquê: `nav` e
 * `rodape` são componentes invariantes do TEMA, nunca foram dobras trocáveis, e foi por
 * isso que o acervo de 615 nunca teve um único rodapé. Escrever este à mão é o caminho
 * certo; escrever à mão o hero, os serviços, a equipa, a FAQ ou o contacto não seria,
 * e por isso esses vieram todos do banco.
 *
 * Base: `themes/moda-editorial/src/components/Footer/`, com o efeito de postais removido.
 * Aquele efeito são cinco fotografias que voam quando se aponta ao botão: é registo
 * editorial e o nicho é sóbrio. O que fica é o convite, o botão, os contactos e a barra.
 *
 * `blocos.footer.titulo` e `blocos.footer.botao` são FATAIS no schema desde que um botão
 * de rodapé foi publicado com um <span> vazio: um retângulo sem texto, impossível de
 * saber que era clicável. Aqui não há defaults, e é de propósito.
 */

import { blocos, contactos, morada, horarios, identidade, tem } from "@/theme/content";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-convite">
          <h2>{blocos.footer.titulo}</h2>
          <a className="footer-botao" href="/contacto/">
            {blocos.footer.botao}
          </a>
        </div>

        <div className="footer-colunas">
          <div className="footer-coluna">
            <p className="footer-rotulo sm">{blocos.footer.rotuloMorada}</p>
            <address className="footer-morada">
              {morada.linhas.map((linha, i) => (
                <span key={i}>{linha}</span>
              ))}
            </address>
          </div>

          <div className="footer-coluna">
            <p className="footer-rotulo sm">{blocos.footer.rotuloContacto}</p>
            <a className="footer-valor" href={contactos.telefoneLink}>
              {contactos.telefone}
            </a>
            {contactos.email && (
              <a className="footer-valor" href={`mailto:${contactos.email}`}>
                {contactos.email}
              </a>
            )}
          </div>

          {tem("horarios") && (
            <div className="footer-coluna">
              <p className="footer-rotulo sm">{blocos.footer.rotuloHorario}</p>
              {horarios.map((h, i) => (
                <p className="footer-valor sm" key={i}>
                  {h.dias}, {h.horas}
                </p>
              ))}
            </div>
          )}
        </div>

        <div className="footer-barra">
          <p className="sm">{blocos.footer.copyright}</p>
          <p className="sm">{blocos.footer.assinatura}</p>
          {blocos.footer.licenca && (
            <p className="sm">
              {blocos.footer.licenca} {identidade.nome}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
