import { useEffect, useState } from "react";
import "./News.css";

const STEAM_RSS = "https://store.steampowered.com/feeds/news/app/2399830/?l=english";
const PROXY = (url) => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;

function parseRss(xmlText) {
  const doc = new DOMParser().parseFromString(xmlText, "text/xml");
  const items = Array.from(doc.querySelectorAll("item")).slice(0, 10);

  return items.map((item) => {
    const title = item.querySelector("title")?.textContent?.trim() ?? "";
    const link = item.querySelector("link")?.textContent?.trim() ?? "";
    const rawDesc =
      item.querySelector("description")?.textContent ??
      item.querySelector("content\\:encoded")?.textContent ??
      "";

    const description = rawDesc.replace(/<[^>]*>/g, "").trim();

    return { title, link, description };
  });
}

export default function News() {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ok | error
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setStatus("loading");
      setErrorMsg("");

      try {
        const res = await fetch(PROXY(STEAM_RSS));
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const text = await res.text();
        const parsed = parseRss(text);

        if (!parsed.length) throw new Error("El RSS llegó vacío o no era XML RSS válido.");

        if (!cancelled) {
          setItems(parsed);
          setStatus("ok");
        }
      } catch (err) {
        if (!cancelled) {
          setStatus("error");
          setErrorMsg(err?.message || "Error desconocido");
        }
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="container">
      <section className="panel news-head">
        <h1 className="news-title">Noticias de ARK</h1>

        <p className="muted">
          Fuente:{" "}
          <a href={STEAM_RSS} target="_blank" rel="noreferrer">
            Steam RSS
          </a>
        </p>
      </section>

      <section className="panel news-list">
        {status === "loading" && <p className="muted">Cargando noticias...</p>}

        {status === "error" && (
          <p className="muted">
            No se pudieron cargar noticias. {errorMsg ? `(${errorMsg})` : ""}
            <br />
            Prueba recargar o revisa la consola (F12) por si el proxy está caído.
          </p>
        )}

        {status === "ok" &&
          items.map((item) => (
            <article key={item.link || item.title} className="news-item">
              <h3 className="news-item-title">
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.title || "Sin título"}
                </a>
              </h3>
              <p className="muted news-item-desc">
                {item.description.length > 220
                  ? `${item.description.slice(0, 220)}...`
                  : item.description || "Sin descripción"}
              </p>
            </article>
          ))}
      </section>
    </div>
  );
}