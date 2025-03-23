import React, { useState } from 'react';

function AddRecipeForm() {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const validationErrors = {};
    if (!formData.title.trim()) {
      validationErrors.title = 'Title is required.';
    }
    if (!formData.ingredients.trim()) {
      validationErrors.ingredients = 'Ingredients are required.';
    } else if (formData.ingredients.split(',').length < 2) {
      validationErrors.ingredients = 'Please provide at least two ingredients.';
    }
    if (!formData.steps.trim()) {
      validationErrors.steps = 'Preparation steps are required.';
    }
    return validationErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Recipe submitted:', formData);
      setErrors({});
      alert('Recipe successfully submitted!');
      setFormData({ title: '', ingredients: '', steps: '' });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 max-w-lg mx-auto shadow-md bg-white rounded-lg"
    >
      <h1 className="text-2xl font-bold mb-4">Add a New Recipe</h1>

      {/* Title Field */}
      <label className="block mb-2">
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="block w-full border rounded p-2 mb-1 shadow-sm"
        />
        {errors.title && <span className="text-red-500">{errors.title}</span>}
      </label>

      {/* Ingredients Field */}
      <label className="block mb-2">
        Ingredients (comma-separated):
        <textarea
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          className="block w-full border rounded p-2 mb-1 shadow-sm"
          rows="5"
        ></textarea>
        {errors.ingredients && (
          <span className="text-red-500">{errors.ingredients}</span>
        )}
      </label>

      {/* Steps Field */}
      <label className="block mb-2">
        Preparation Steps:
        <textarea
          name="steps"
          value={formData.steps}
          onChange={handleChange}
          className="block w-full border rounded p-2 mb-1 shadow-sm"
          rows="5"
        ></textarea>
        {errors.steps && (
          <span className="text-red-500">{errors.steps}</span>
        )}
      </label>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition shadow"
      >
        Submit Recipe
      </button>
    </form>
  );
}

export default AddRecipeForm;
