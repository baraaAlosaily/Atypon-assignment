import axios from "axios"
import Recipe from "../model/recipe.model"
import RecipeDetails from "../model/recipeDetails.model";

// URL of api
const BASE_URL = process.env.REACT_APP_BASE_URL;
// API key that created on API website
const apiKey=process.env.REACT_APP_API_KEY ;

/*
 @function to retrive search data from api so this function accept two parameters one of 
first one query and second one is maximum number of recipes that we looking for
return array of recipes that belong to query that we search for
*/
export async function getRecipes(query, pageSize = 20) {
    return axios.get(`${BASE_URL}/complexSearch?apiKey=${apiKey}&query=${query}&number=${pageSize}`)
    .then((response) => response.data)
    .then(({results})=> {
        return results.map(item=> new Recipe(item.id, item.title, item.image))})
        .catch(e=> console.log(e))
}
/*
@function that retrive details of each recipe that we search for and it is accept id of specific recipe
return object of details of specific recipie
*/
export async function getRecipe(id) {
    return axios.get(`${BASE_URL}/${id}/information?apiKey=${apiKey}`)
    .then(({data}) => data)
    .then((results)=> {
        return new RecipeDetails(results.id,results.image,results.title,results.summary,results.sourceUrl)})
        .catch(e=> console.log(e))
}
