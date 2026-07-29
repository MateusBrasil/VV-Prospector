import "./Dobra.css";

/** Porte fiel do Atlas Button: o texto estático cede lugar ao marquee no hover. */
export default function AtlasReserva({ href, children }) {
  if (!href || !children) return null;
  return (
    <a className="atlas-reserva" href={href}>
      <span className="atlas-reserva__label">{children}</span>
      <span className="atlas-reserva__marquee" aria-hidden="true">
        <span className="atlas-reserva__track">
          {[0, 1, 2, 3].map(indice => <span key={indice}>{children}</span>)}
        </span>
      </span>
    </a>
  );
}
