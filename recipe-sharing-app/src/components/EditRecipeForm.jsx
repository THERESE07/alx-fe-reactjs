import React, { useState } from 'react';
import { useRecipeStore } from '../recipeStore'; // Import your Zustand store

const EditRecipeForm = ({ recipe }) => {
  // Local state for title and description fields
  const [title, setTitle] = useState(recipe.title || '');
  const [description, setDescription] = useState(recipe.description || '');

  // Zustand store action for updating recipes
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (title.trim() === '' || description.trim() === '') {
      alert('Both fields are required.');
      return; // Ensure title and description are not empty
    }

    // Call the updateRecipe function with updated data
    updateRecipe({ ...recipe, title, description });

    // Optional: Display success or reset the form (if needed)
    alert('Recipe updated successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)} // Update title state
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)} // Update description state
        />
      </label>
      <br />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditRecipeForm;
