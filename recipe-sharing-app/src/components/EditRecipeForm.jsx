import React, { useState } from 'react';
import useRecipeStore from '../recipeStore'; // Import the Zustand store

const EditRecipeForm = ({ recipe }) => {
  // Manage local state for form fields
  const [title, setTitle] = useState(recipe.title || '');
  const [description, setDescription] = useState(recipe.description || '');

  // Fetch the updateRecipe function from the Zustand store
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Simple validation to ensure both fields are filled
    if (title.trim() && description.trim()) {
      // Update the recipe in the Zustand store
      updateRecipe({ ...recipe, title, description });
      alert('Recipe updated successfully!');
    } else {
      alert('Both title and description fields are required!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)} // Update title in local state
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)} // Update description in local state
        />
      </label>
      <br />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditRecipeForm;
