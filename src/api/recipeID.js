import axios from 'axios';

export default axios.create({
	
	baseURL: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes",
	headers: {
		 "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
	"x-rapidapi-key": "30459b3a1fmshe9350dda133dde9p1e5667jsne0dd8edc91e5",
	"useQueryString": true
	}
})

