import React, { useContext, useState, useEffect } from 'react';
import { Text, StyleSheet, View, Button, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import Spacer from '../components/Spacer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ResultsListC from '../components/ResultsListC'
import recipeID from '../api/recipeID';

const All = ({ navigation }) => {
	// const list = navigation.getParam('list')
	// console.log('real', list)
	// const newList = list ? list.toString() : ""
	// console.log(newList)
	const [ term, setTerm] = useState('');
	 const [itemList, setItemList] = useState([]);
  const [selectedId, setSelectedId] = useState(null);


	// const [	searchApi, results, errorMessage ] = useResults();

	const filterResultsByLikes = (likes) => {
		return results.filter(result => {
			return result.likes > 10;
		});
	};

	const [ results, setResults ] = useState([]);
	const [ errorMessage, seterrorMessage ] = useState('')

	const searchApi = async (searchTerm) => {
		console.log('Hi there')
		try {
			const response = await recipeID.get('/findByIngredients', {
				params: {
		    		number: 20,
		    		ingredients: `${searchTerm}`
				}
			 });
			 setResults(response.data)
		} catch (err) {
			seterrorMessage('Something went wrong')
		} 
    };

    // Only have this on to view! it costs money
	
	// useEffect(() => {
	// 	searchApi(newList,",")
	// 	// console.log(newList)
	// }, [])

	 useEffect(() => {
    searchApi('chicken')
  }, []);




	 //   const addToList = item => {
  //   //copy the selected item array
  //   let updatedItems = itemList;
  //   //use array.push to add it to the array
  //   updatedItems.push(item.id);

  //   setItemList(updatedItems);
  //   setSelectedId(item.id);
  //   console.log("lissss",itemList);
  // };


	return(
		<>
			<Spacer />

			<SearchBar 
				term={term} 
				onTermChange={setTerm}
				onTermSubmit={() => {
					searchApi(term)
					// addToList(results)
				}}
			/>
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			<ScrollView>
			<Text style={styles.header} h1>
        		Recipes for you
        	</Text>	
			<ResultsListC 
			results={filterResultsByLikes()} 

			/>
				
			
		
			</ScrollView>
		</>
		)
};

All.navigationOptions = {
	title: 'Profile',
	tabBarIcon: <MaterialCommunityIcons name="account-circle-outline" size={24} color="black" backgroundColor="black" />
}

const styles = StyleSheet.create({
	button: {
		 
		justifyContent: 'center',
      alignItems: 'center'
	},
	header: {
    fontSize: 24,
    fontFamily:"Poppins_700Bold",
    margin: 10,
    
  },
});

export default All;

