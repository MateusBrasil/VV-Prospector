"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/webgl-threejs/efeitos-webgl-7/vfx-js-text-shadow-effect/dist
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
  //   // Built with VFX-JS
  //   // https://amagi.dev/vfx-js
  //   import { VFX } from "https://esm.sh/@vfx-js/core@0.6.0";
  //   
  //   const shader = `
  //   precision highp float;
  //   uniform vec2 resolution;
  //   uniform vec2 offset;
  //   uniform vec2 mouse;
  //   uniform float time;
  //   uniform sampler2D src;
  //   
  //   #define PI 3.141593
  //   #define SAMPLES 64.
  //   
  //   float hash(vec2 p) {
  //     return fract(sin(dot(p, vec2(489., 589.))) * 492.) * 2. - 1.;
  //   }
  //   float hash(vec3 p) {
  //     return fract(sin(dot(p, vec3(489., 589., 58.))) * 492.) * 2. - 1.;
  //   }
  //   vec2 hash2(vec3 p) {
  //     return vec2(hash(p), hash(p + 1.));
  //   }
  //   vec4 readTex(vec2 uv) {
  //     if (uv.x < 0. || uv.x > 1. || uv.y < 0. || uv.y > 1.) { return vec4(0); }
  //     return texture2D(src, uv);
  //   }
  //   vec3 spectrum(float x) {
  //       return cos((x - vec3(0, .5, 1)) * vec3(.6, 1., .5) * PI);
  //   }
  //   
  //   void main() {
  //     vec2 uv = (gl_FragCoord.xy - offset) / resolution;  
  //     if (readTex(uv).r > 0.) { discard; }
  //     
  //     vec2 p = uv * 2. - 1.;
  //     p.x *= resolution.x / resolution.y;
  //     
  //     // Determine light position
  //     vec2 mp = (mouse - offset) / resolution;
  //     mp = mp * 2. - 1.;
  //     mp.x *= resolution.x / resolution.y;
  //     
  //     vec2 rp = p;
  //     vec2 d = (mp - p) / SAMPLES;
  //     float acc = 0.;
  //     
  //     for (float i = 0.; i < SAMPLES; i++) {
  //       rp += d;
  //       rp += hash2(vec3(rp, i)) * 0.5 / SAMPLES;
  //       
  //       vec2 uv2 = rp;
  //       uv2.x /= resolution.x / resolution.y;
  //       uv2 = uv2 * 0.5 + 0.5;    
  //       acc += readTex(uv2).r / SAMPLES;
  //     }
  //   
  //     // Light
  //     float lm = length(p - mp);
  //     vec4 c = vec4(smoothstep(0., 1., pow(.1 / lm, .2)));
  //     
  //     c -= acc; // shadow
  //     c += vec4((spectrum(cos(acc * 3.5))), 1) * acc * 2.5; // rainbow
  //     
  //     c -= hash(vec3(uv.xyy)) * 0.01; // dither   
  //     gl_FragColor = c;  
  //   }
  //   `;
  //   
  //   const vfx = new VFX();
  //   vfx.add(document.querySelector('h1'), { shader, overflow: true, overlay: true });
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="destaque-webgl-7" ref={raiz}>
      <h1>{s.titulo}</h1>
    </section>
  );
}