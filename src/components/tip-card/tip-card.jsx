import "./tip-card.css";

export default function TipCard({ title, category, content }) {
  return (
    <div className="tip-card">
      <h3>{title}</h3>
      <span className="tip-category">{category}</span>
      <p>{content}</p>
    </div>
  );
}