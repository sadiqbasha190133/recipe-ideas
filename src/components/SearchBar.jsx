import { useState } from "react";

function SearchBar({ onSearch }) {
  const [ingredient, setIngredient] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ingredient.trim()) return;
    onSearch(ingredient.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 bg-white p-3 rounded-xl shadow-md"
    >
      <input
        type="text"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
        placeholder="Search recipes by ingredient (e.g. chicken)"
        className="flex-grow border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition font-semibold"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;


