/**
 * A ponte entre o `cliente.json` e os SLOTS das dobras.
 *
 * PORQUÊ UM FICHEIRO SÓ PARA ISTO
 * Uma dobra do banco não conhece o schema do cliente: fala em `s.titulo`, `s.itens`,
 * `s.imagens`. O cliente fala em `blocos.vitrine`, `contactos.telefone`, `horarios`.
 * Se cada página fizesse a tradução à mão, a mesma dobra receberia campos diferentes em
 * rotas diferentes e a divergência apareceria como bug de conteúdo. Aqui a tradução é
 * feita uma vez, é a mesma para toda a obra, e lê-se de uma vez só o que cada dobra
 * recebe, que é o que se quer ter à frente quando um cliente diz "isto está errado".
 *
 * Nada aqui inventa conteúdo. Um campo que o cliente não deu chega à dobra como
 * `undefined`, e a dobra devolve `null` ou omite o elemento. Ausência produz ausência.
 */
import { blocos, contactos, morada, horarios, imagens } from "./content";

/* A tira de retratos do hero. `imagens.galeria` é OMISSÍVEL no schema: se o cliente não
 * a der, a tira mostra a única fotografia que ele deu, e não a mesma foto repetida cinco
 * vezes para encher o desenho. Foi por isso que a dobra passou a receber uma lista. */
const galeria = Array.isArray(imagens.galeria) ? imagens.galeria : [];

export const slotsHero = {
  rotulo: blocos.hero?.rotulo,
  titulo: blocos.hero?.titulo,
  acao: blocos.hero?.acao,
  destino: contactos.reservaUrl,
  imagens: (galeria.length ? galeria : [imagens.hero])
    .filter(Boolean)
    .map(src => ({ src })),
  texto: [morada.linhas?.[0], morada.cidade].filter(Boolean).join(", "),
};

export const slotsServicos = {
  rotulo: blocos.servicos?.rotulo,
  titulo: blocos.servicos?.titulo,
  itens: blocos.servicos?.itens,
};

/* A VITRINE É O ANTES/DEPOIS, e é obrigatória neste nicho: `receitas.json` diz que aqui o
 * resultado visível É a oferta. `rotuloControlo` é o rótulo acessível do controlo de
 * comparação, e vem do cliente porque é texto lido em voz alta por um leitor de ecrã. */
export const slotsVitrine = {
  rotulo: blocos.vitrine?.rotulo,
  titulo: blocos.vitrine?.titulo,
  texto: blocos.vitrine?.texto,
  rotuloControlo: blocos.vitrine?.rotuloControlo,
  itens: blocos.vitrine?.itens,
};

export const slotsProva = {
  rotulo: blocos.prova?.rotulo,
  titulo: blocos.prova?.titulo,
  nota: blocos.prova?.nota,
  itens: blocos.prova?.itens,
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
      icone: "telefone",
    },
    contactos.email && {
      rotulo: blocos.contacto?.rotuloEmail,
      valor: contactos.email,
      destino: `mailto:${contactos.email}`,
      icone: "email",
    },
    {
      rotulo: blocos.contacto?.rotuloMorada,
      valor: [...(morada.linhas || []), morada.cidade].filter(Boolean).join("\n"),
      icone: "mapa",
    },
  ].filter(Boolean),
  tituloPainel: blocos.contacto?.tituloPainel,
  horarios,
  acoes: blocos.contacto?.acoes,
  nota: blocos.contacto?.nota,
};
