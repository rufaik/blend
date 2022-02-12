import axios from 'axios';

export default axios.create({
	baseURL: "https://api.spoonacular.com/recipes/extract",
	headers: {
		 "content-type":"application/json",
	}
})

