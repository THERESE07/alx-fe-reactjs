import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetail() {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch recipe data from the mock JSON file
    const fetchRecipe = async () => {
      const response = await fetch('../data.json');
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
    <div className="p-4">
      <h1 className="text-3xl font-bold">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover my-4 rounded-lg"
      />
      <p className="text-gray-600 mb-4">{recipe.summary}</p>
      {/* Additional sections for ingredients and cooking instructions */}
      <div>
        <h2 className="text-xl font-semibold">Ingredients</h2>
        <ul className="list-disc ml-5">
          <li>Example Ingredient 1</li>
          <li>Example Ingredient 2</li>
          {/* Replace these with real ingredients */}
        </ul>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Cooking Instructions</h2>
        <p>Instructions on how to cook this recipe.</p>
        {/* Replace with actual instructions */}
      </div>
    </div>
  );
}

export default RecipeDetail;
