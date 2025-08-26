function RecipeCard({ title, image, onClick }) {
  return (
    <div
      onClick={onClick}
      className="p-2 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition cursor-pointer overflow-hidden"
    >
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
    </div>
  );
}

export default RecipeCard;