import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/recipes/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setRecipe(data))
      .catch(error => console.error('Fetch error:', error));
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-2xl dark:text-gray-200">{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} className="w-full h-64 object-cover mt-4 rounded-lg border-2  border-gray-300" />
      <h2 className="text-xl mt-4 dark:text-gray-200">Zutaten</h2>
      <ul className="list-disc ml-6 dark:text-gray-200">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-xl mt-4 dark:text-gray-200">Zubereitung</h2>
      <ol className="list-decimal ml-6 dark:text-gray-200">
        {recipe.steps.map((step, index) => (
          <li key={index} className="mt-2">{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetail;
