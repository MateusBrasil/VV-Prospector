/**
 * Aplica a direção de arte escolhida ao brief antes de o validar e materializar.
 *
 * `direcao` é explícita de propósito: o nome do tema é uma implementação/versionamento,
 * enquanto a direção é a decisão visual. Inferir uma a partir da outra voltaria a ligar
 * por acidente clínica dentária, estética e futuros temas.
 */
import { readFileSync } from 'node:fs';

export function fundirProfundo(base, sobre) {
  if (!sobre || typeof sobre !== 'object' || Array.isArray(sobre)) return sobre ?? base;
  const resultado = { ...(base ?? {}) };
  for (const [chave, valor] of Object.entries(sobre)) {
    resultado[chave] = (resultado[chave] && typeof resultado[chave] === 'object' && !Array.isArray(resultado[chave]))
      ? fundirProfundo(resultado[chave], valor)
      : structuredClone(valor);
  }
  return resultado;
}

export function aplicarDirecao(cliente, direcoes) {
  if (!cliente.direcao) return structuredClone(cliente);
  const direcao = direcoes[cliente.direcao];
  if (!direcao?.design) {
    throw new Error(`direção de arte desconhecida: ${cliente.direcao}`);
  }
  return {
    ...structuredClone(cliente),
    design: fundirProfundo(direcao.design, cliente.design ?? {}),
  };
}

export function carregarDirecoes(caminho) {
  return JSON.parse(readFileSync(caminho, 'utf8'));
}
