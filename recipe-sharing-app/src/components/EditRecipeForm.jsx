import { useRecipeStore } from './recipeStore';
import { useState } from 'react';

const EditRecipeForm = ({ recipeId }) => {
  const { recipes, updateRecipe } = useRecipeStore((state) => state);
  const recipe = recipes.find((recipe) => recipe.id === recipeId);

  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe({ id: recipeId, title, description });
  };

  return (
    const handleSubmit = (e) => {
        e.preventDefault(); 
      };
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditRecipeForm;
