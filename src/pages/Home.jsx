import { useState } from "react";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";
import RecipeModal from "../components/RecipeModal";
import useFetch from "../hooks/useFetch";

function Home() {
  const [ingredient, setIngredient] = useState("");
  const [selectedMeal, setSelectedMeal] = useState(null);

  const { data, loading, error } = useFetch(
    ingredient
      ? `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      : null
  );

  return (
    <main className="p-4 max-w-5xl mx-auto">
      {/* Search */}
      <SearchBar onSearch={setIngredient} />

      {/* Results */}
      <section className="mt-6">
        {loading && <p className="text-center text-gray-600">Loading recipes...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {!loading && !error && (data?.meals?.length === 0 || data?.meals === null) && (
          <p className="text-center text-gray-600">No recipes found.</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data?.meals?.map((meal) => (
            <RecipeCard
            key={meal.idMeal}
            title={meal.strMeal}
            image={meal.strMealThumb}
            onClick={() => setSelectedMeal(meal.idMeal)}
            />
        ))}
        </div>

      </section>

      {/* Modal */}
      {selectedMeal && (
        <RecipeModal mealId={selectedMeal} onClose={() => setSelectedMeal(null)} />
      )}
    </main>
  );
}

export default Home;
