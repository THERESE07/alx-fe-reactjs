import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import useRecipeStore from '../recipeStore'; // Import the Zustand store

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes); // Use the filtered list from the Zustand store

  return (
    <div>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found. Try adjusting your search!</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id}>
            {/* Link wraps the recipe title to navigate to RecipeDetails */}
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
