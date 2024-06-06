import React, { useEffect, useState } from 'react';
import CardComponent from './CardComponent';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/recipes')
      .then(response => response.json())
      .then(data => setRecipes(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {recipes.map(recipe => (
        <CardComponent
          key={recipe.id}
          imgSrc={recipe.image}
          imgAlt={recipe.name}
          title={recipe.name}
          description="Kurze Beschreibung des Rezepts"
          link={`/recipe/${recipe.id}`}
        />
      ))}
    </div>
  );
};

export default RecipeList;
