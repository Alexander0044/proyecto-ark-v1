import { Link } from "react-router-dom";
import { creaturesData } from "../../data/creatures-data.js";
import CreatureCard from "../../components/creature-card/CreatureCard.jsx";
import "./Home.css";

export default function Home() {
  return (
    <div id="top" className="container">
      <section className="home-hero panel">
        <div className="home-hero-content">
          <span className="badge">ARK: Survival Ascended • proyecto fan</span>

          <h1 className="home-title">
            Planifica tu progreso.
            <span className="home-title-accent"> Sobrevive mejor.</span>
          </h1>

          <p className="home-subtitle muted">
            Explora criaturas destacadas, consejos rápidos de supervivencia y un mapa interactivo con puntos clave.
            Proyecto desarrollado con React aplicando buenas prácticas, componentes reutilizables y diseño responsive.
          </p>

          <div className="home-hero-actions">
            <a className="button" href="#featured-creatures">
              Ver criaturas destacadas
            </a>
            <Link className="button" to="/maps">
              Abrir mapa interactivo
            </Link>
          </div>

          <div className="home-stats">
            <div className="home-stat">
              <div className="home-stat-number">6</div>
              <div className="muted home-stat-label">Criaturas destacadas</div>
            </div>
            <div className="home-stat">
              <div className="home-stat-number">3</div>
              <div className="muted home-stat-label">Páginas principales</div>
            </div>
            <div className="home-stat">
              <div className="home-stat-number">1</div>
              <div className="muted home-stat-label">Mapa interactivo</div>
            </div>
          </div>
        </div>

        <div className="home-hero-card panel">
          <div className="home-hero-card-title">Consejo rápido</div>

          <p className="muted home-hero-card-text">
            En el early game céntrate en una zona segura, una cama, almacenamiento y tu primer volador.
            Un tame útil suele ser más importante que un carnívoro arriesgado.
          </p>

          <div className="home-hero-card-list">
            <div className="home-pill">Cama + fogata</div>
            <div className="home-pill">Boleadora + arco</div>
            <div className="home-pill">Primer volador</div>
            <div className="home-pill">Herramientas de metal</div>
          </div>

          <Link className="button" to="/contact">
            Contactar con la tribu
          </Link>
        </div>
      </section>

      <section id="featured-creatures" className="home-section">
        <div className="home-section-head">
          <h2 className="home-section-title">Criaturas destacadas</h2>
          <p className="muted home-section-desc">
            Información generada desde un array JSON y renderizada mediante componentes reutilizables.
          </p>
        </div>

        <div className="creatures-grid">
          {creaturesData.map((creature) => (
            <CreatureCard key={creature.id} {...creature} />
          ))}
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-head">
          <h2 className="home-section-title">Objetivos iniciales</h2>
          <p className="muted home-section-desc">
            Un plan básico para que tus primeras horas no se conviertan en un bucle infinito de respawns.
          </p>
        </div>

        <div className="objectives panel">
          <div className="objective">
            <div className="objective-title">1) Spawn seguro</div>
            <div className="muted">
              Elige una zona fácil, consigue bayas, armadura de tela y construye un refugio básico.
            </div>
          </div>

          <div className="objective">
            <div className="objective-title">2) Primeros tames</div>
            <div className="muted">
              Parasaur para explorar, Trike para bayas y después apunta a un volador de transporte.
            </div>
          </div>

          <div className="objective">
            <div className="objective-title">3) Subir de tier</div>
            <div className="muted">
              Consigue herramientas de metal, un horno y empieza rutas de farmeo dedicadas.
            </div>
          </div>
        </div>
      </section>

      <section className="home-cta panel">
        <div>
          <h2 className="home-section-title">¿Listo para explorar?</h2>
          <p className="muted">
            Accede al mapa interactivo y revisa zonas de inicio, obeliscos y áreas peligrosas.
          </p>
        </div>

        <Link className="button" to="/maps">
          Ir al mapa
        </Link>
      </section>
    </div>
  );
}
