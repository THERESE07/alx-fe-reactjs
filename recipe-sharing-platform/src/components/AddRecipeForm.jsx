import React, { useState } from 'react';

function AddRecipeForm() {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: ''
  });
  const [errors, setErrors] = useState({}); // State for validation errors

  // Validation function
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
    setFormData({ ...formData, [name]: value }); // Update form data dynamically
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(); // Run validation
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Display errors if validation fails
    } else {
      console.log('Recipe submitted:', formData); // Simulate successful submission
      setErrors({});
      alert('Recipe successfully submitted!');
      setFormData({ title: '', ingredients: '', steps: '' }); // Clear the form
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add a New Recipe</h1>

      {/* Title Field */}
      <label className="block mb-2">
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="block w-full border rounded p-2 mb-1"
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
          className="block w-full border rounded p-2 mb-1"
          rows="5"
        ></textarea>
        {errors.ingredients && <span className="text-red-500">{errors.ingredients}</span>}
      </label>

      {/* Preparation Steps Field */}
      <label className="block mb-2">
        Preparation Steps:
        <textarea
          name="steps"
          value={formData.steps}
          onChange={handleChange}
          className="block w-full border rounded p-2 mb-1"
          rows="5"
        ></textarea>
        {errors.steps && <span className="text-red-500">{errors.steps}</span>}
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
