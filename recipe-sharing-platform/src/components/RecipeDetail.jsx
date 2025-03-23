import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetail() {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch recipe data from the mock JSON file
    const fetchRecipe = async () => {
      const response = await fetch('/data.json');
      const data = await response.json();
      const recipeData = data.find((recipe) => recipe.id === parseInt(id));
      setRecipe(recipeData);
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <div className="p-4 text-center">Loading recipe...</div>;
  }

  return (
    <div className="p-4 max-w-4xl mx-auto shadow-lg rounded-lg bg-white">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
      />
      <p className="text-gray-600 mb-4 shadow-sm p-2 rounded">{recipe.summary}</p>
      <div className="shadow-md rounded-lg p-4 bg-gray-100 mb-4">
        <h2 className="text-xl font-semibold">Ingredients</h2>
        <ul className="list-disc ml-5">
          <li>Example Ingredient 1</li>
          <li>Example Ingredient 2</li>
        </ul>
      </div>
      <div className="shadow-md rounded-lg p-4 bg-gray-100">
        <h2 className="text-xl font-semibold">Cooking Instructions</h2>
        <p>Instructions on how to cook this recipe.</p>
      </div>
    </div>
  );
}

export default RecipeDetail;
