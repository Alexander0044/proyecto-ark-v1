import { Link, useParams } from "react-router-dom";
import { newsData } from "../../data/news-data";

export default function NewsDetail() {
  const { slug } = useParams();

  const article = newsData.find((item) => item.slug === slug);

  if (!article) {
    return (
      <main className="container">
        <section className="panel">
          <h1>Noticia no encontrada</h1>
          <Link to="/news">Volver a noticias</Link>
        </section>
      </main>
    );
  }

  return (
    <main className="container">
      <section className="panel">
        <p className="muted">{article.date}</p>
        <h1>{article.title}</h1>
        <p>{article.content}</p>
        <Link to="/news">Volver a noticias</Link>
      </section>
    </main>
  );
}