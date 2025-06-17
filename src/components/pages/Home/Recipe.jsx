import React, { useEffect, useState } from "react";
import Error from "../Error";
import { AiOutlineCaretUp } from "react-icons/ai";
function Recipe() {
  const [recipeData, setRecipeData] = useState([]);
  const [login, setLogin] = useState(true);
  const [error, setError] = useState(null);
  const [visibleIngredients, setVisibleIngredients] = useState({});

  useEffect(() => {
    const recipesData = async () => {
      try {
        const reData = await fetch("recipes.json");
        if (!reData.ok) throw new Error("try data");
        const reJson = await reData.json();
        setRecipeData(reJson);
      } catch (error) {
        console.error("Error:", error);
        setError(error.message); // 🔧 was `massage`, corrected to `message`
      } finally {
        setLogin(false);
      }
    };
    recipesData();
  }, []);

  // Loading Spinner
  if (login)
    return (
      <h1>
        <span className="loading loading-spinner text-secondary"></span>
      </h1>
    );

  // Error Handling
  if (error) return <Error />;

  // Toggle Ingredients for specific card
  const toggleIngredients = (id) => {
    setVisibleIngredients((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 container m-auto">
        {recipeData.map((card) => (
          <div key={card.id} className="card bg-base-100 shadow-sm">
            <figure>
              <img
                src={card.image}
                alt={card.title}
                className="max-h-[200px] object-cover p-3 rounded-3xl"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Title: {card.title}</h2>
              <p>{card.instructions}</p>

              {/* Toggle Button */}
              <div className="card-actions">
                <button
                  className="btn btn-primary w-full"
                  onClick={() => toggleIngredients(card.id)}
                >
                  {visibleIngredients[card.id]
                    ? "Hide Ingredients"
                    : "Show Ingredients"}
                </button>
              </div>
              {/* Ingredients */}
              {visibleIngredients[card.id] && (
                <ul className="mt-2 list-disc list-inside text-sm text-gray-700">
                  {card.ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipe;
