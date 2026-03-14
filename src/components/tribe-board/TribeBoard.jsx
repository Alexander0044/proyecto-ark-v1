import { useEffect, useMemo, useState } from "react";
import "./TribeBoard.css";

const STORAGE_KEY = "tribe-posts";

const emptyForm = {
  title: "",
  category: "guias",
  author: "",
  description: "",
};

export default function TribeBoard({ initialPosts }) {
  const [posts, setPosts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("all");
  const [formData, setFormData] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    setPosts(saved ? JSON.parse(saved) : initialPosts);
  }, [initialPosts]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  }, [posts]);

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchCategory = category === "all" || post.category === category;
      const search = searchText.toLowerCase();

      const matchSearch =
        post.title.toLowerCase().includes(search) ||
        post.author.toLowerCase().includes(search) ||
        post.description.toLowerCase().includes(search);

      return matchCategory && matchSearch;
    });
  }, [posts, searchText, category]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function resetForm() {
    setFormData(emptyForm);
    setEditingId(null);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (editingId) {
      setPosts((prev) =>
        prev.map((post) =>
          post.id === editingId ? { ...post, ...formData } : post
        )
      );
    } else {
      const newPost = {
        id: Date.now(),
        ...formData,
      };

      setPosts((prev) => [newPost, ...prev]);
    }

    resetForm();
  }

  function handleDelete(id) {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  }

  function handleEdit(post) {
    setEditingId(post.id);
    setFormData(post);
  }

  return (
    <section className="tribe-board">

      <h2>Tablón de la tribu</h2>
      <p>Gestión de publicaciones usando un array JSON.</p>

      <div className="tribe-layout">

        <form className="tribe-form" onSubmit={handleSubmit}>
          <h3>{editingId ? "Editar publicación" : "Crear publicación"}</h3>

          <input
            name="title"
            placeholder="Título"
            value={formData.title}
            onChange={handleChange}
          />

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="guias">Guías</option>
            <option value="criaturas">Criaturas</option>
            <option value="bases">Construcción de base</option>
            <option value="jefes">Jefes</option>
          </select>

          <input
            name="author"
            placeholder="Autor"
            value={formData.author}
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Descripción"
            value={formData.description}
            onChange={handleChange}
          />

          <button type="submit">
            {editingId ? "Actualizar publicación" : "Insertar publicación"}
          </button>

          <button type="button" onClick={resetForm}>
            Limpiar formulario
          </button>
        </form>

        <div className="tribe-posts">

          <input
            placeholder="Buscar publicación..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">Todas las categorías</option>
            <option value="guias">Guías</option>
            <option value="criaturas">Criaturas</option>
            <option value="bases">Bases</option>
            <option value="jefes">Jefes</option>
          </select>

          {filtered.map((post) => (
            <article key={post.id} className="tribe-card">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <small>{post.author}</small>

              <div>
                <button onClick={() => handleEdit(post)}>Editar</button>
                <button onClick={() => handleDelete(post.id)}>Eliminar</button>
              </div>
            </article>
          ))}

        </div>

      </div>

    </section>
  );
}