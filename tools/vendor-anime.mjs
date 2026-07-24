#!/usr/bin/env node
/**
 * Vendoriza o anime.js v4 — Prospector Premium
 * Uso: node tools/vendor-anime.mjs
 *
 * POR QUE ISTO EXISTE
 * O download original apontava para `lib/anime.iife.min.js` — esse é o layout do anime.js
 * v3. No v4 o pacote mudou: os bundles vivem em `dist/bundles/` e o IIFE virou UMD.
 * Caminho correto do upstream: animejs@4.5.0/dist/bundles/anime.umd.min.js
 *
 * MAS não vendorizamos o bundle inteiro. Motivos medidos (2026-07-16):
 *   - anime.umd.min.js completo = 118 KB. O site sóbrio inteiro tem 21,5 KB.
 *     Inlinar o bundle todo = 6x a página para usar 3 funções.
 *   - O bundle completo carrega hex hardcoded (#FF4B4B, #FF971B… — cores de debug do
 *     módulo de scroll/console). Inlinado no HTML, cada um vira FAIL de C3 no gate.
 * Então tree-shakeamos só o que os efeitos usam: animate + stagger + utils.
 * Resultado: ~38 KB raw / ~16 KB gzip, zero hex, zero cubic-bezier literal (não polui a
 * contagem de easings do M2).
 *
 * O esbuild aqui é passo de VENDORING, não de build do site: o output continua sendo
 * um HTML único autocontido, sem bundler no caminho do cliente.
 */
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync, mkdtempSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { tmpdir } from 'node:os';

const HERE = dirname(fileURLToPath(import.meta.url));
const VENDOR = join(HERE, '..', 'vendor');
const VERSAO = '4.5.0';
const npx = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';

// Windows: npm/npx são .cmd e o Node 24 recusa spawnSync de .cmd sem shell (EINVAL).
const win = process.platform === 'win32';
const run = (cmd, args, opts = {}) => execFileSync(cmd, args, { shell: win, stdio: 'pipe', ...opts });

const tmp = mkdtempSync(join(tmpdir(), 'anime-vendor-'));
console.log(`· a obter animejs@${VERSAO} do registry…`);
run(npm, ['pack', `animejs@${VERSAO}`], { cwd: tmp });
run('tar', ['-xzf', `animejs-${VERSAO}.tgz`], { cwd: tmp });

const modulos = join(tmp, 'package', 'dist', 'modules', 'index.js');
if (!existsSync(modulos)) throw new Error(`layout inesperado do pacote: ${modulos} não existe`);

// Superfície mínima: só o que os efeitos de cinema consomem.
const entry = join(tmp, 'entry.js');
writeFileSync(entry, `import { animate, stagger, utils } from ${JSON.stringify(modulos.replace(/\\/g, '/'))};
window.anime = { animate, stagger, utils };
`, 'utf8');

const saidaTmp = join(tmp, 'anime.subset.min.js');
run(npx, ['-y', 'esbuild', JSON.stringify(entry), '--bundle', '--minify', '--format=iife', '--target=es2018', `--outfile=${JSON.stringify(saidaTmp)}`]);

const licenca = readFileSync(join(tmp, 'package', 'LICENSE.md'), 'utf8').trim();
const corpo = readFileSync(saidaTmp, 'utf8');
const cabecalho = `/*! anime.js v${VERSAO} — subset (animate + stagger + utils) · MIT · (c) Julian Garnier
 * Upstream: animejs@${VERSAO}/dist/bundles/anime.umd.min.js (118 KB)
 * Este ficheiro: tree-shake de dist/modules/index.js, expõe window.anime.
 * Gerado por tools/vendor-anime.mjs — não editar à mão.
 */
`;
writeFileSync(join(VENDOR, 'anime.subset.min.js'), cabecalho + corpo, 'utf8');
writeFileSync(join(VENDOR, 'anime.LICENSE.md'), licenca + '\n', 'utf8');

// Sanidade: tem de ser JS que parseia (o ficheiro antigo era uma mensagem de erro de 67 bytes).
new Function(corpo);
const kb = n => (n / 1024).toFixed(1);
console.log(`✓ vendor/anime.subset.min.js  (${kb((cabecalho + corpo).length)} KB · parse OK)`);
