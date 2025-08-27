import useFetch from "../hooks/useFetch";

function RecipeModal({ mealId, onClose }) {
  const { data, loading, error } = useFetch(
    mealId
      ? `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
      : null
  );

  const meal = data?.meals?.[0];

  return (
    
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
        <div className="bg-white w-full max-w-3xl p-6 rounded-2xl shadow-xl relative overflow-y-auto max-h-[90vh]">
            {/* Close button */}
            <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600"
            >
            ✕
            </button>

            {loading && <div className="flex justify-center p-8"><div className="loader"></div></div>}
            {error && <p className="text-red-500">{error}</p>}

            {meal && (
            <div>
                <h2 className="text-2xl font-bold mb-3 text-green-700">{meal.strMeal} 😋</h2>
                <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="rounded-lg mb-4 shadow"
                />
                <h3 className="font-semibold text-lg mb-2 text-gray-700">Instructions:</h3>
                <p className="text-gray-700 mb-6 whitespace-pre-line leading-relaxed max-h-40 overflow-y-auto border p-3 rounded-lg bg-gray-50">
                {meal.strInstructions}
                </p>

                <h3 className="font-semibold text-lg mb-2 text-gray-700">Ingredients:</h3>
                <ul className="list-none list-inside space-y-1 text-gray-800">
                {Array.from({ length: 20 }).map((_, i) => {
                    const ingredient = meal[`strIngredient${i + 1}`];
                    const measure = meal[`strMeasure${i + 1}`];
                    return (
                    ingredient &&
                    ingredient.trim() && (
                      
                        <li key={i} >
                        👉 <span className="font-medium">{ingredient}</span> — {measure}
                        </li>
                    )
                    );
                })}
                </ul>
                <h3 className="text-xl text-center font-semibold mb-3 mt-2 text-green-700">Happy Cooking..! 😊</h3>
            </div>
            )}
        </div>
    </div>
  );
}

export default RecipeModal;





