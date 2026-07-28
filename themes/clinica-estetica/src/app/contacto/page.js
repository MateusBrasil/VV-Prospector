"use client";

/* /contacto/ — a MESMA dobra que fecha a home (`contacto/secao-89`), com os mesmos slots.
 * Não é duplicação por descuido: é o destino real do botão do rodapé e do CTA da barra, e
 * ter uma página própria é o que permite ao Google indexar a morada e o telefone como
 * conteúdo principal de um URL.
 *
 * `trailingSlash: true` no next.config é o que faz este caminho existir mesmo em
 * hospedagem estática. Sem isso, o export escreve `contacto.html` na raiz e cria uma
 * pasta `contacto/` sem `index.html` dentro dela: /contacto/ dá 404, confirmado ao vivo.
 */

import Contacto from "@/dobras/contacto/secao-89/Dobra";

import { slotsContacto } from "@/theme/secoes";

import "./contacto.css";

export default function ContactoPagina() {
  return (
    <div className="pagina-contacto">
      <Contacto slots={slotsContacto} headingLevel="h1" />
    </div>
  );
}
