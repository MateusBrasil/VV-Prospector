/**
 * A ponte entre o `cliente.json` e os SLOTS das dobras.
 *
 * PORQUÊ UM FICHEIRO SÓ PARA ISTO
 * Uma dobra do banco não conhece o schema do cliente: fala em `s.titulo`, `s.itens`,
 * `s.membros`. O cliente fala em `blocos.servicos`, `contactos.telefone`, `horarios`.
 * Se cada página fizesse a tradução à mão, a mesma dobra receberia campos diferentes em
 * rotas diferentes e a divergência apareceria como bug de conteúdo. Aqui a tradução é
 * feita uma vez, é a mesma para toda a obra, e lê-se de uma vez só o que cada dobra
 * recebe — que é o que se quer ter à frente quando um cliente diz "isto está errado".
 *
 * Nada aqui inventa conteúdo. Um campo que o cliente não deu chega à dobra como
 * `undefined`, e a dobra devolve `null` ou omite o elemento. Ausência produz ausência.
 */
import { blocos, contactos, morada, horarios, imagens, identidade } from "./content";

export const slotsHero = {
  rotulo: blocos.hero?.rotulo,
  titulo: blocos.hero?.titulo,
  acao: blocos.hero?.acao,
  destino: contactos.reservaUrl,
  imagem: imagens.hero,
  imagemAlt: identidade.logoAlt,
  texto: morada.linhas?.[0],
  texto2: horarios?.[0] ? `${horarios[0].dias}, ${horarios[0].horas}` : undefined,
  texto3: contactos.telefone,
};

export const slotsServicos = {
  rotulo: blocos.servicos?.rotulo,
  titulo: blocos.servicos?.titulo,
  // `scroll-29` é uma narrativa de imagens, não uma lista com ilustração genérica.
  // Cada tratamento precisa da sua fotografia real; não há fallback para o hero.
  itens: blocos.servicos?.itens?.map(item => ({ ...item, imagem: item.imagem })),
};

export const slotsEquipa = {
  titulo: blocos.equipa?.titulo,
  texto: blocos.equipa?.texto,
  membros: blocos.equipa?.membros,
};

export const slotsFaq = {
  rotulo: blocos.faq?.rotulo,
  titulo: blocos.faq?.titulo,
  itens: blocos.faq?.itens,
};

/* A morada entra como UM valor com quebras de linha, não como três informações: numa
 * clínica a morada lê-se de uma vez. O `destino` do telefone é o `telefoneLink`, que o
 * schema já limpou de espaços e parênteses. */
export const slotsContacto = {
  rotulo: blocos.contacto?.rotulo,
  titulo: blocos.contacto?.titulo,
  informacoes: [
    {
      rotulo: blocos.contacto?.rotuloTelefone,
      valor: contactos.telefone,
      destino: contactos.telefoneLink,
    },
    contactos.email && {
      rotulo: blocos.contacto?.rotuloEmail,
      valor: contactos.email,
      destino: `mailto:${contactos.email}`,
    },
    {
      rotulo: blocos.contacto?.rotuloMorada,
      valor: [...(morada.linhas || []), morada.cidade].filter(Boolean).join("\n"),
    },
  ].filter(Boolean),
  rotuloSociais: blocos.contacto?.rotuloSociais,
  sociais: blocos.contacto?.sociais,
  tituloPainel: blocos.contacto?.tituloPainel,
  horarios,
  acoes: blocos.contacto?.acoes,
  nota: blocos.contacto?.nota,
};
