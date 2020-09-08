import React, { useState, useEffect } from 'react';

import yelp from '../api/yelp';

export default () => {
	const [ results, setResults ] = useState([]);
	const [ errorMessage, seterrorMessage ] = useState('')

	const searchApi = async (searchTerm) => {
		console.log('Hi there')
		try {
			const response = await yelp.get('/findByIngredients', {
				params: {
		    		number: 2,
		    		ingredients: `${searchTerm},`
				}
			 });
			 setResults(response.data)
		} catch (err) {
			seterrorMessage('Something went wrong')
		} 
    };

    // Only have this on to view! it costs money
	
	useEffect(() => {
		searchApi('bread')
	}, [])

	return [searchApi, results, errorMessage];

};