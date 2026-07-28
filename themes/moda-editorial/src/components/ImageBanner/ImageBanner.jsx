/* Saiu daqui: os defaults de image/heading/description (agora imagens.imageBanner e
 * blocos.imageBanner). Continuam a poder ser sobrepostos por prop (ver about/page.js, que
 * passa a sua própria imagem em imagens.aboutImageBanner). Secção some se blocos.imageBanner
 * faltar. */

import Copy from "../Copy/Copy";
import { blocos, imagens, tem } from "@/theme/content";

import "./ImageBanner.css";

const ImageBanner = ({
  image = imagens.imageBanner,
  heading = blocos.imageBanner?.titulo,
  description = blocos.imageBanner?.descricao,
}) => {
  if (!tem("blocos.imageBanner")) return null;

  return (
    <section className="image-banner">
      <div className="image-banner-bg">
        <img src={image} alt="" />
      </div>

      <div className="container">
        <Copy type="lines" animateOnScroll>
          {heading.map((word, index) => (
            <h4 key={index}>{word}</h4>
          ))}
        </Copy>

        <div className="image-banner-footer">
          <Copy
            type="lines"
            trigger=".image-banner"
            start="top 50%"
            delay={0.5}
          >
            <p>{description}</p>
          </Copy>
        </div>
      </div>
    </section>
  );
};

export default ImageBanner;
