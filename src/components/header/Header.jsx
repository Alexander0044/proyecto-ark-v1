import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const getNavClass = ({ isActive }) =>
    isActive ? "nav-link nav-link-active" : "nav-link";

  return (
    <header className="header">
      <div className="container header-inner">
        <NavLink to="/home" className="brand">
          <img
            className="brand-logo"
            src="/images/ark-logo.png"
            alt="Logo Ark ASA Hub"
          />
          <div className="brand-text">
            <span className="brand-name">ARK ASA HUB</span>
            <span className="brand-tagline">
              Guías • Criaturas • Mapas
            </span>
          </div>
        </NavLink>

        <nav className="nav">
          <NavLink to="/home" className={getNavClass}>
            Inicio
          </NavLink>

          <NavLink to="/maps" className={getNavClass}>
            Mapa
          </NavLink>

          <NavLink to="/contact" className={getNavClass}>
            Contacto
          </NavLink>
        </nav>

        <a className="button header-cta" href="#featured-creatures">
          Criaturas destacadas
        </a>
      </div>
    </header>
  );
}
