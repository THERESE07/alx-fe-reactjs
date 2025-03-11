import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import useRecipeStore from '../recipeStore'; // Import the Zustand store

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe); // Access deleteRecipe from Zustand
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleDelete = () => {
    deleteRecipe(recipeId); // Delete the recipe using Zustand
    alert('Recipe deleted successfully!'); // Provide user feedback
    navigate('/'); // Redirect to the home page after deletion
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
