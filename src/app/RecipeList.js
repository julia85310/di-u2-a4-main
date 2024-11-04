import { recipes } from './recipes.js';

export default function RecipeList() {
  return (
    <div>
      <h1>Recetas</h1>
      {recipes.map((recipe, index) => (
        <Receta name={recipe.name} ingredients={recipe.ingredients} />
      ))}
    </div>
  );
}

function Receta({name, ingredients}) {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

