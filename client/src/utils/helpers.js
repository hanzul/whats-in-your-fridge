// Spoonacular API calls
const apiKey = '5bb17ff8de4a4ac48777208734e43797';


// gets passed array of ingredients
export const getRecipes = async (ingredients) => {

    for (let i = 1; i < ingredients.length; i++) {
        ingredients[i] = '+' + ingredients[i];
    }
    const ingredientsString = ingredients.join(',');

    return await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientsString}&number=10&ignorePatry=true&apiKey=${apiKey}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            return data
        })
        .catch(err => console.log(err));

}

export const getSingleRecipe = async (id) => {
    return await fetch(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${apiKey}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            return data
        })
        .catch(err => console.log(err));
}

//gets passed array of recipe IDs
//haven't tested if this will work
export const getFavorites = async (recipeIds) => {
    const recipeIdString = recipeIds.join(',');

    return await fetch(`https://api.spoonacular.com/recipes/informationBulk?ids=${recipeIdString}&includeNutrition=false&apiKey=${apiKey}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            return data
        })
        .catch(err => console.log(err));
}



