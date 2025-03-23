import React, { useState } from 'react';

function AddRecipeForm() {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // Access target.name and target.value
    setFormData({ ...formData, [name]: value }); // Update the corresponding field in state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Recipe submitted:', formData); // Replace this with logic to save or process the form data
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add a New Recipe</h1>
      <label className="block mb-2">
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange} // Captures user input
          className="block w-full border rounded p-2 mb-4"
          required
        />
      </label>
      <label className="block mb-2">
        Ingredients:
        <textarea
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange} // Captures user input
          className="block w-full border rounded p-2 mb-4"
          rows="5"
          required
        ></textarea>
      </label>
      <label className="block mb-2">
        Preparation Steps:
        <textarea
          name="steps"
          value={formData.steps}
          onChange={handleChange} // Captures user input
          className="block w-full border rounded p-2 mb-4"
          rows="5"
          required
        ></textarea>
      </label>
      <button
        type="submit"
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        Submit Recipe
      </button>
    </form>
  );
}

export default AddRecipeForm;
