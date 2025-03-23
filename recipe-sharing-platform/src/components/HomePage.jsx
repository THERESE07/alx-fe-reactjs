import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('../data.json'); // Simulate fetching data
      const data = await response.json();
      setRecipes(data);
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="card border rounded-lg shadow-md hover:shadow-xl transition-shadow p-4"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-32 object-cover rounded-t-lg"
            />
            <div className="mt-2">
              <h2 className="text-lg font-semibold">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.summary}</p>
              {/* Add Link for navigation */}
              <Link
                to={`/recipe/${recipe.id}`}
                className="text-blue-500 hover:underline mt-2 block"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
