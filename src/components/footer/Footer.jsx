import { Link } from "react-router-dom";
import { FaDiscord, FaYoutube, FaTwitter, FaTwitch, FaGithub } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner panel">
        <div className="footer-top">
          <div className="footer-brand">
            <img
              className="footer-logo"
              src="/images/ark-logo.png"
              alt="Logo Ark ASA Hub"
            />
            <div>
              <div className="footer-title">ARK ASA HUB</div>
              <div className="footer-subtitle muted">
                Proyecto fan con mapas, criaturas y consejos de supervivencia.
              </div>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <div className="footer-col-title">Aplicación</div>
              <Link className="footer-link" to="/home">Inicio</Link>
              <Link className="footer-link" to="/maps">Mapa</Link>
              <Link className="footer-link" to="/contact">Contacto</Link>
            </div>

            <div className="footer-col">
              <div className="footer-col-title">Proyecto</div>
              <a
                className="footer-link"
                href="https://github.com/tu-usuario/ark-asa-hub"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub /> Repositorio en GitHub
              </a>

              <a
                className="footer-link"
                href="https://www.figma.com/templates/web-design-inspiration/"
                target="_blank"
                rel="noreferrer"
              >
                Inspiración Figma
              </a>

              <a
                className="footer-link"
                href="https://moosend.com/blog/"
                target="_blank"
                rel="noreferrer"
              >
                Referencia de diseño
              </a>
            </div>

            <div className="footer-col">
              <div className="footer-col-title">Comunidad</div>

              <div className="footer-social">
                <a
                  className="social-btn"
                  href="https://discord.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaDiscord />
                </a>

                <a
                  className="social-btn"
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaYoutube />
                </a>

                <a
                  className="social-btn"
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter />
                </a>

                <a
                  className="social-btn"
                  href="https://www.twitch.tv/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitch />
                </a>
              </div>

              <form
                className="footer-newsletter"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Suscripción realizada (demo)");
                }}
              >
                <label htmlFor="newsletter-email">
                  Suscríbete al boletín
                </label>

                <div className="footer-newsletter-row">
                  <input
                    id="newsletter-email"
                    className="footer-input"
                    type="email"
                    placeholder="tu@email.com"
                    required
                  />
                  <button className="button footer-btn" type="submit">
                    Unirme
                  </button>
                </div>

                <div className="muted footer-mini">
                  Sin spam. Solo actualizaciones y consejos.
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="muted footer-legal">
            © 2026 ARK ASA HUB. Todos los derechos reservados.{" "}
            <span className="footer-sep">|</span>{" "}
            <a href="#">Política de Privacidad y Cookies</a>{" "}
            <span className="footer-sep">|</span>{" "}
            <a href="#">Condiciones de Uso</a>
          </div>

          <a className="back-top" href="#top">
            Volver arriba ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
