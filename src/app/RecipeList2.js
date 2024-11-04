import { recipes } from './recipes.js';

export default function RecipeList2() {
  return (
    <div>
      <h1>Recetas</h1>
      {recipes.map(recipe => (
        <Recipe 
          key={recipe.id} // Key exterior, siempre la misma
          name={recipe.name} 
          ingredients={recipe.ingredients} 
        />
      ))}
    </div>
  );
}

function Recipe({ name, ingredients }) {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {ingredients.map(ingredient => (
          <li>
            {ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
}