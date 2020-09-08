import axios from 'axios';

export default axios.create({
	baseURL: "https://webknox-recipes.p.rapidapi.com/recipes",
	headers: {
		 "content-type":"application/octet-stream",
    "x-rapidapi-host":"webknox-recipes.p.rapidapi.com",
    "x-rapidapi-key":"30459b3a1fmshe9350dda133dde9p1e5667jsne0dd8edc91e5",
    "useQueryString":true
	}
})
