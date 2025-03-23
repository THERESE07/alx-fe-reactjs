
import React, { useState, useEffect } from 'react';

function HomePage() {
    const [recipes, setRecipes] = useState([]);
  
    useEffect(() => {
      fetch('data.json') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data) => setRecipes(data))
      .catch((error) => console.error('Error fetching data:', error));
    }, []);
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="card hover:shadow-lg p-4 border rounded-md">
            <img src={recipe.image} alt={recipe.title} className="rounded-md mb-2" />
            <h2 className="text-lg font-bold">{recipe.title}</h2>
            <p className="text-sm text-gray-600">{recipe.summary}</p>
          </div>
        ))}
      </div>
    );
  }

export default HomePage
