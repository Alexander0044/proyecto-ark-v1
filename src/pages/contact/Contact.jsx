import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "tribe",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid =
      formData.name.length >= 2 &&
      formData.email.includes("@") &&
      formData.message.length >= 10;

    if (!isValid) {
      setHasError(true);
      setIsSubmitted(false);
      return;
    }

    setHasError(false);
    setIsSubmitted(true);

    setFormData({
      name: "",
      email: "",
      topic: "tribe",
      message: ""
    });
  };

  return (
    <div className="container">
      <section className="contact-head panel">
        <h1 className="contact-title">Contacto</h1>
        <p className="muted contact-subtitle">
          Página de contacto con información realista y formulario con validación básica.
        </p>
      </section>

      <section className="contact-form panel">
        <h2>Enviar mensaje</h2>

        <form onSubmit={handleSubmit}>
          <label>Nombre</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label>Correo electrónico</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Motivo</label>
          <select name="topic" value={formData.topic} onChange={handleChange}>
            <option value="tribe">Reclutamiento</option>
            <option value="alliance">Solicitud de alianza</option>
            <option value="map">Sugerencia de mapa</option>
            <option value="other">Otro</option>
          </select>

          <label>Mensaje</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required />

          {hasError && (
            <p style={{ color: "red" }}>
              Revisa el formulario: nombre (mínimo 2 caracteres), correo válido y mensaje (mínimo 10 caracteres).
            </p>
          )}

          {isSubmitted && (
            <p style={{ color: "green" }}>
              Mensaje enviado correctamente (demo). Te responderemos pronto.
            </p>
          )}

          <button type="submit" className="button">
            Enviar
          </button>
        </form>
      </section>
    </div>
  );
}
