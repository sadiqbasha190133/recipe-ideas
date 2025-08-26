
import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

const SearchBar = ({ onSearch }) => {
  const [searchMode, setSearchMode] = useState("ingredient"); // default mode
  const [query, setQuery] = useState("");
  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);

  // Fetch categories and areas for dropdowns
  useEffect(() => {
    if (searchMode === "category") {
      fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
        .then((res) => res.json())
        .then((data) => setCategories(data.meals || []));
    }
    if (searchMode === "area") {
      fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
        .then((res) => res.json())
        .then((data) => setAreas(data.meals || []));
    }
  }, [searchMode]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    let apiUrl = "";

    switch (searchMode) {
      case "ingredient":
        apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`;
        break;
      case "category":
        console.log(query);
        apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${query}`;
        break;
      case "area":
        apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${query}`;
        break;
      case "random":
        apiUrl = `https://www.themealdb.com/api/json/v1/1/random.php`;
        break;
      case "random10":
        apiUrl = `https://www.themealdb.com/api/json/v1/1/randomselection.php`;
        break;
      default:
        apiUrl = "";
    }

    if (apiUrl) onSearch(apiUrl);
  };

  return (
    <div className="w-full max-w-xl mx-auto my-6 p-4 bg-white rounded-2xl shadow-lg">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Search Mode Dropdown */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            What are you in the mood for?
          </label>
          <select
            value={searchMode}
            onChange={(e) => {
              setSearchMode(e.target.value);
              setQuery(""); // reset query when mode changes
            }}
            className="w-full border p-2 rounded-lg"
          >
            <option value="ingredient">Search by Ingredient</option>
            <option value="category">Search by Category</option>
            <option value="area">Search by Area (Cuisine)</option>
            <option value="random">Surprise Me (1 Random Recipe)</option>
          </select>
        </div>

        {/* Conditional Inputs */}
        {searchMode === "ingredient" && (
          <input
            type="text"
            placeholder="Enter an ingredient (e.g., chicken)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full border p-2 rounded-lg"
            required
          />
        )}

        {searchMode === "category" && (
          <select
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full border p-2 rounded-lg"
            required
          >
            <option value="">-- Select a Category --</option>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat.strCategory}>
                {cat.strCategory}
              </option>
            ))}
          </select>
        )}

        {searchMode === "area" && (
          <select
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full border p-2 rounded-lg"
            required
          >
            <option value="">-- Select a Cuisine --</option>
            {areas.map((area, idx) => (
              <option key={idx} value={area.strArea}>
                {area.strArea}
              </option>
            ))}
          </select>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition duration-200"
        >
          Search Recipes
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
