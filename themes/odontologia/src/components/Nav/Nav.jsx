"use client";

/* Nav — componente de SISTEMA do tema, não uma dobra.
 *
 * O `receitas.json` já fixou isto: `nav` e `rodape` são invariantes do tema. Foi por isso
 * que o banco de 615 componentes não tinha um único rodapé — nunca foi suposto ter.
 *
 * DUAS REGRAS DURAS ESTÃO AQUI DENTRO
 *
 * 1. `position: absolute`, nunca `fixed`. Com `fixed` a barra sobrepunha-se ao conteúdo
 *    ao longo de todo o scroll e comia a primeira linha de cada secção. Está na CSS.
 *
 * 2. CONTRASTE POR ROTA, e não uma cor só. Na home a barra assenta sobre a fotografia do
 *    hero, que tem véu escuro: o texto tem de ser claro. Nas outras rotas a tela é o
 *    canvas quase branco do nicho: texto claro ali seria invisível. O `data-tom` resolve
 *    isso de forma determinística, a partir da rota, e não de um palpite sobre a foto.
 *    Sem isto, "nav absolute + contraste" fica meio feito, que é como já falhou antes.
 */

import { useState } from "react";
import { usePathname } from "next/navigation";
import { identidade, blocos, contactos, navegacao } from "@/theme/content";

import "./Nav.css";

export default function Nav() {
  const pathname = usePathname();
  const [aberto, setAberto] = useState(false);

  /* A home é a única rota com fotografia a sangrar por baixo da barra. */
  const tom = pathname === "/" ? "claro" : "escuro";

  return (
    <header className="nav" data-tom={tom} data-aberto={aberto ? "true" : "false"}>
      <div className="nav-inner">
        <a className="nav-marca" href="/" onClick={() => setAberto(false)}>
          <span className="nav-marca-ponto" aria-hidden="true" />
          {identidade.nome}
        </a>

        <nav className="nav-links" aria-label={blocos.nav?.rotuloMenu || undefined}>
          {navegacao.map(link => (
            <a
              className="nav-link"
              href={link.href}
              key={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              onClick={() => setAberto(false)}
            >
              {link.rotulo}
            </a>
          ))}
        </nav>

        <div className="nav-acoes">
          {blocos.nav?.acao && <a className="nav-cta" href={contactos.reservaUrl}>{blocos.nav.acao}</a>}

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={aberto}
            onClick={() => setAberto(v => !v)}
          >
            <span>{aberto ? blocos.nav.toggleFechar : blocos.nav.toggleAbrir}</span>
            <span className="nav-toggle-icone" aria-hidden="true" />
          </button>
        </div>
      </div>

      {aberto && (
        <div className="nav-painel" aria-label={blocos.nav?.rotuloMenu || undefined}>
          <p className="nav-painel-rotulo">{identidade.nome}</p>
          <nav className="nav-painel-links">
            {navegacao.map((link, index) => (
              <a className="nav-painel-link" href={link.href} key={link.href} onClick={() => setAberto(false)}>
                <span>0{index + 1}</span>{link.rotulo}
              </a>
            ))}
          </nav>
          {blocos.nav?.acao && <a className="nav-painel-cta" href={contactos.reservaUrl} onClick={() => setAberto(false)}>{blocos.nav.acao}</a>}
        </div>
      )}
    </header>
  );
}
