#!/usr/bin/env node
/** Injeta uma camada local de edição visual, sem reescrever a página de origem. */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, basename } from 'node:path';
import { pathToFileURL } from 'node:url';

/** URLs de imagem aceites: HTTP(S) e caminhos relativos do próprio site. */
export function validarUrlEditor(valor) {
  if (typeof valor !== 'string') return { ok: false, erro: 'URL ausente' };
  const url = valor.trim();
  if (!url || /[\u0000-\u001f\u007f]/.test(url) || url.startsWith('//')) return { ok: false, erro: 'URL inválida' };
  try {
    const resolvida = new URL(url, 'https://pp-editor.invalid/');
    return ['http:', 'https:'].includes(resolvida.protocol) ? { ok: true, valor: url } : { ok: false, erro: 'protocolo não permitido' };
  } catch { return { ok: false, erro: 'URL inválida' }; }
}

const LAYER = String.raw`
<style id="pp-editor-css">
  [data-pp-edit]{outline:1px dashed rgba(120,120,120,.45);outline-offset:3px;transition:outline-color .15s}
  [data-pp-edit]:hover{outline-color:var(--brand-cta,#888)}
  #pp-bar{position:fixed;top:0;left:0;right:0;z-index:9999;display:flex;gap:.75rem;align-items:center;padding:.6rem 1rem;background:#111;color:#fff;font:500 13px/1.2 system-ui;box-shadow:0 1px 12px rgba(0,0,0,.25)}
  #pp-bar button{all:unset;cursor:pointer;padding:.45rem .9rem;border-radius:6px;background:#fff;color:#111;font-weight:600}
  #pp-bar button.ghost{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.3)}
  #pp-bar .sp{flex:1} body{padding-top:44px}
</style>
<div id="pp-bar"><strong>Editor</strong><span style="opacity:.6">clique em qualquer texto ou imagem para editar</span><span class="sp"></span><button class="ghost" id="pp-reset">Repor</button><button id="pp-save">Guardar HTML</button></div>
<script id="pp-editor-js">
(function(){
  var SEL='h1,h2,h3,h4,p,li,a,span,button,figcaption,dd,dt',KEY='pp-edit-'+location.pathname;
  function urlSegura(valor){
    if(typeof valor!=='string')return null;
    var url=valor.trim();
    if(!url||/[\u0000-\u001f\u007f]/.test(url)||url.indexOf('//')===0)return null;
    try{var resolvida=new URL(url,'https://pp-editor.invalid/');return /^(https?):$/.test(resolvida.protocol)?url:null}catch(e){return null}
  }
  function persist(){try{var snap={};document.querySelectorAll('[data-pp-edit]').forEach(function(el,i){snap[i]=el.tagName==='IMG'?(el.getAttribute('src')||''):el.textContent});localStorage.setItem(KEY,JSON.stringify(snap))}catch(e){}}
  document.querySelectorAll(SEL).forEach(function(el){if(el.closest('#pp-bar'))return;if(!el.children.length&&el.textContent.trim()){el.setAttribute('data-pp-edit','');el.contentEditable='true'}});
  document.querySelectorAll('img').forEach(function(img){img.setAttribute('data-pp-edit','');img.style.cursor='pointer';img.addEventListener('click',function(e){e.preventDefault();var url=prompt('URL da nova imagem:',img.src);if(url){var segura=urlSegura(url);if(!segura){alert('Use uma URL http(s) ou um caminho relativo do site.');return}img.setAttribute('src',segura);persist()}})});
  document.addEventListener('input',function(e){if(e.target.closest('[data-pp-edit]'))persist()});
  try{var s=JSON.parse(localStorage.getItem(KEY)||'{}');document.querySelectorAll('[data-pp-edit]').forEach(function(el,i){if(typeof s[i]!=='string')return;if(el.tagName==='IMG'){var segura=urlSegura(s[i]);if(segura)el.setAttribute('src',segura)}else el.textContent=s[i]})}catch(e){}
  document.getElementById('pp-reset').onclick=function(){localStorage.removeItem(KEY);location.reload()};
  document.getElementById('pp-save').onclick=function(){var d=document.documentElement.cloneNode(true);d.querySelectorAll('#pp-bar,#pp-editor-css,#pp-editor-js').forEach(function(n){n.remove()});d.querySelectorAll('[data-pp-edit]').forEach(function(n){n.removeAttribute('data-pp-edit');n.removeAttribute('contenteditable');n.style.cursor=''});var blob=new Blob(['<!doctype html>\n'+d.outerHTML],{type:'text/html'}),a=document.createElement('a'),url=URL.createObjectURL(blob);a.href=url;a.download='index.html';a.click();setTimeout(function(){URL.revokeObjectURL(url)},0)};
})();
</script>`;

export function injetarEditor(html) {
  if (!/<\/body\s*>/i.test(html)) throw new Error('HTML sem </body>; não é seguro injetar o editor');
  return html.replace(/<\/body\s*>/i, LAYER + '\n</body>');
}

export function criarEditor(src) {
  const html = readFileSync(src, 'utf8');
  const out = join(dirname(src), basename(src).replace(/\.html$/, '-editor.html'));
  writeFileSync(out, injetarEditor(html), 'utf8');
  return out;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const src = process.argv[2];
  if (!src) { console.error('uso: node editor.mjs <index.html>'); process.exit(1); }
  console.log(`✓ ${criarEditor(src)} (injetado por script — zero tokens de LLM)`);
}
