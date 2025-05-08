import React from 'react';

const RecipeCard = ({recipeObj}) => {
    return (
        <div class="recipe-container">
        <h2 class="recipe-title">{recipeObj.title}</h2>
        <p class="recipe-instructions">{recipeObj.instructions}</p>
        <p class="recipe-favs"><strong>Favoritos:</strong> {recipeObj.numOfFavs} </p>
        <h3>Ingredientes:</h3>
        <ul class="recipe-ingredients">
            {recipeObj.ingredients.map((ingredient) => 
                <li>{ingredient}</li>
            )}
        </ul>
        <h3>Categorías:</h3>
        <ul class="recipe-tags">
            <li>Italiana</li>
            <li>Almuerzo</li>
        </ul>
    </div>
    );
}

export default RecipeCard;
