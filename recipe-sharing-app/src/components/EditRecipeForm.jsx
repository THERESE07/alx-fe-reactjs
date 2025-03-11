import React, { useState } from 'react';
import useRecipeStore from '../recipeStore'; // Import the Zustand store

const EditRecipeForm = ({ recipe }) => {
  // Local state for form inputs
  const [title, setTitle] = useState(recipe.title || '');
  const [description, setDescription] = useState(recipe.description || '');

  // Access the updateRecipe action from Zustand
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    if (title.trim() === '' || description.trim() === '') {
      alert('Both title and description fields are required!');
      return;
    }

    // Update the recipe in the Zustand store
    updateRecipe({ ...recipe, title, description });
    alert('Recipe updated successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)} // Update the title state
          placeholder="Enter the recipe title"
          required
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)} // Update the description state
          placeholder="Enter the recipe description"
          required
        />
      </label>
      <br />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditRecipeForm;
