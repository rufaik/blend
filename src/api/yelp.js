import axios from 'axios';

export default axios.create({
	baseURL: "https://webknox-recipes.p.rapidapi.com/recipes",
	headers: {
		 "content-type":"application/octet-stream",
    "x-rapidapi-host":"webknox-recipes.p.rapidapi.com",
    "x-rapidapi-key":"55de7a5763mshd8c8df133f4f401p194ef9jsn40ddcd70b833",
    "useQueryString":true
	}
})

