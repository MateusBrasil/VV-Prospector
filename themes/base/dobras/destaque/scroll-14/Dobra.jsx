"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/scroll/scroll-14/vfx-js-scroll-animation/dist
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import './Dobra.css';
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* ⚠ REVER: o JS de origem está abaixo em bruto (categoria: modulo-es).
   * A esteira NÃO o converte sozinha, e nesta categoria escopar ao `raiz.current` NÃO
   * chega: o código assume que é dono da página (window/document.body/listeners de
   * load|resize|scroll), ou traz import/export, ou monta um canvas WebGL. Converter às
   * cegas produz animação que corre no elemento errado, que é pior que animação
   * nenhuma. Precisa de reescrita, não de troca de prefixo. */
  // useEffect(() => {
  //   // Using VFX-JS
  //   // https://amagi.dev/vfx-js/
  //   import { VFX } from "https://esm.sh/@vfx-js/core@0.6.0";
  //   const vfx = new VFX();
  //   
  //   const lerp = (a, b, t) => a * (1 - t) + b * t;
  //   
  //   const shaderH = `
  //   precision highp float;
  //   uniform vec2 resolution;
  //   uniform vec2 offset;
  //   uniform float time;
  //   uniform sampler2D src;
  //   uniform float scroll;
  //   
  //   float inside(vec2 uv) {
  //     return step(abs(uv.x - 0.5), 0.5) * step(abs(uv.y - 0.5), 0.5);
  //   }
  //   vec4 readTex(vec2 uv) {
  //     return texture2D(src, uv) * inside(uv);
  //   }
  //   
  //   void main() {
  //     vec2 uv = (gl_FragCoord.xy - offset) / resolution;
  //     
  //     float d = scroll;
  //     
  //     // Shift by x position
  //     d *= abs(
  //       sin(floor(gl_FragCoord.x / 17.) * 7. + time * 2.) + 
  //       sin(floor(gl_FragCoord.x / 19.) * 19. - time * 3.)
  //     );
  //     
  //     vec4 cr = readTex(uv + vec2(0, d));
  //     vec4 cg = readTex(uv + vec2(0, d * 2.));
  //     vec4 cb = readTex(uv + vec2(0, d * 3.));
  //     
  //     gl_FragColor = vec4(
  //       cr.r, cg.g, cb.b, (cr.a + cg.a + cb.a)
  //     );
  //    }
  //   `;
  //   
  //   let scroll = 0;
  //   
  //   for (const e of document.
  //   querySelectorAll('h2')) {
  //     vfx.add(e, { 
  //       shader: shaderH, 
  //       overflow: 500, 
  //       uniforms: {
  //         scroll: () => {
  //           const diff = window.scrollY - scroll;
  //           scroll = lerp(scroll, window.scrollY, 0.03);        
  //           return diff / window.innerHeight;
  //         }
  //       }});  
  //   }
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="destaque-scroll-14" ref={raiz}>
      <img src={s.imagem} />
      
      <section>
        <h2>{s.titulo}</h2>  
      </section>
      <section>
        <h2>{s.titulo2}</h2>  
      </section>
      <section>
        <h2>{s.titulo3}</h2>  
      </section>
    </section>
  );
}