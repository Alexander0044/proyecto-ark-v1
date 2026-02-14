import "./CreatureCard.css";

export default function CreatureCard({
  name,
  diet,
  danger,
  biome,
  img,
  description
}) {
  const dangerLabel =
    danger >= 5
      ? "Extremo"
      : danger >= 4
      ? "Alto"
      : danger >= 3
      ? "Medio"
      : "Bajo";

  return (
    <article className="creature-card panel">
      <div className="creature-image-wrap">
        <img
          className="creature-image"
          src={img}
          alt={name}
          loading="lazy"
        />
      </div>

      <div className="creature-content">
        <div className="creature-top">
          <h3 className="creature-name">{name}</h3>
          <span className="badge">{dangerLabel} peligro</span>
        </div>

        <div className="creature-meta">
          <span className="creature-meta-item">
            <span className="muted">Dieta:</span> {diet}
          </span>

          <span className="creature-meta-item">
            <span className="muted">Bioma:</span> {biome}
          </span>
        </div>

        <p className="creature-desc muted">
          {description}
        </p>
      </div>
    </article>
  );
}
