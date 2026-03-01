import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import database from "../../firebase/firebase";
import TipCard from "../tip-card/tip-card";
import "./TipsBoard.css";

export default function TipsBoard() {
  const [tips, setTips] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const tipsRef = ref(database, "arkTips/arkTips");

    onValue(tipsRef, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        const tipsArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));

        setTips(tipsArray);
      }
    });
  }, []);

  const filteredTips =
    selectedCategory === "all"
      ? tips
      : tips.filter((tip) => tip.category === selectedCategory);

  return (
    <section className="tips-board">
      <h2 className="tips-title">Consejos de supervivencia</h2>

      <div className="tips-filters">
        <button onClick={() => setSelectedCategory("all")}>
          Todos
        </button>
        <button onClick={() => setSelectedCategory("inicio")}>
          Inicio
        </button>
        <button onClick={() => setSelectedCategory("domesticacion")}>
          Domesticación
        </button>
        <button onClick={() => setSelectedCategory("farmeo")}>
          Farmeo
        </button>
        <button onClick={() => setSelectedCategory("bosses")}>
          Bosses
        </button>
      </div>

      <div className="tips-grid">
        {filteredTips.map((tip) => (
          <TipCard
            key={tip.id}
            title={tip.title}
            category={tip.category}
            content={tip.content}
          />
        ))}
      </div>
    </section>
  );
}