import "./News.css";
import { Link } from "react-router-dom";
import { newsData } from "../../data/news-data";

export default function News() {
  return (
    <div className="container">
      <section className="panel news-head">
        <p className="news-eyebrow">RSS y noticias internas</p>
        <h1 className="news-title">Noticias de ARK</h1>

        <p className="muted">
          Esta página contiene noticias internas del proyecto. El archivo RSS
          apunta a estas mismas URLs de noticias dentro de la aplicación.
        </p>

        <a
          href="/rss/ark-news.xml"
          target="_blank"
          rel="noreferrer"
          className="news-rss-link"
        >
          Abrir archivo RSS
        </a>
      </section>

      <section className="panel news-list">
        {newsData.map((item) => (
          <article key={item.id} className="news-item">
            <p className="muted news-date">{item.date}</p>

            <h3 className="news-item-title">{item.title}</h3>

            <p className="muted news-item-desc">{item.summary}</p>

            <Link to={`/news/${item.slug}`} className="news-read-more">
              Leer noticia completa
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}