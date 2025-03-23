import React, { useState } from 'react';

function AddRecipeForm() {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // Properly access target.name and target.value
    setFormData({ ...formData, [name]: value }); // Dynamically update form data based on user input
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Recipe submitted:', formData); // Placeholder for actual form submission logic
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add a New Recipe</h1>

      {/* Title Input Field */}
      <label className="block mb-2">
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange} // Captures input using target.value
          className="block w-full border rounded p-2 mb-4"
          required
        />
      </label>

      {/* Ingredients Textarea */}
      <label className="block mb-2">
        Ingredients:
        <textarea
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange} // Captures input using target.value
          className="block w-full border rounded p-2 mb-4"
          rows="5"
          required
        ></textarea>
      </label>

      {/* Preparation Steps Textarea */}
      <label className="block mb-2">
        Preparation Steps:
        <textarea
          name="steps"
          value={formData.steps}
          onChange={handleChange} // Captures input using target.value
          className="block w-full border rounded p-2 mb-4"
          rows="5"
          required
        ></textarea>
      </label>

      {/* Submit Button */}
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
