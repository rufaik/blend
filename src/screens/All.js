import React, { useContext, useState, useEffect } from 'react';
import { Text, StyleSheet, View, Button, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import SearchBar from '../components/SearchBar';
import Spacer from '../components/Spacer';
import Header from '../components/Header';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ResultsListC from '../components/ResultsListC'
import recipeID from '../api/recipeID';

const DATA = [
  {
    id: "Italian",
    title: "First Item",
    imageUrl: "https://source.unsplash.com/featured/?American,dinner,food"
  },
  {
    id: "Garlic",
    title: "Second Item",
    imageUrl: "https://source.unsplash.com/featured/?Asian,dinner,food"
  },
  {
    id: "Roasted",
    title: "Second Item",
    imageUrl: "https://source.unsplash.com/featured/?Asian,dinner,food"
  },
  {
    id: "chocolate",
    title: "First Item",
    imageUrl: "https://source.unsplash.com/featured/?British,dinner,food"
  }
];


const Item = ({ item, onPress, style, color }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>

     
    <View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "600",
                padding: 10,
                fontFamily: 'Poppins_600SemiBold',
                color
                
              }}>
              {item.id}
            </Text>
          </View>
    
  </TouchableOpacity>
);


const All = ({ navigation }) => {
	// const list = navigation.getParam('list')
	// console.log('real', list)
	// const newList = list ? list.toString() : ""
	// console.log(newList)
	const pass = navigation.getParam('term');
	const [ term, setTerm] = useState(pass);
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
    searchApi(pass)
  }, []);

	 const searchApiK = async (searchTerm) => {
		console.log('Hi there')
		try {
			const response = await yelp.get('/search', {
				params: {
		    		
		    		query: `${searchTerm}`
				}
			 });
			 setResults(response.data.results)
			 
		} catch (err) {
			seterrorMessage('Something went wrong')
		} 
    };




	 //   const addToList = item => {
  //   //copy the selected item array
  //   let updatedItems = itemList;
  //   //use array.push to add it to the array
  //   updatedItems.push(item.id);

  //   setItemList(updatedItems);
  //   setSelectedId(item.id);
  //   console.log("lissss",itemList);
  // };

  const addToList = item => {
    //copy the selected item array
    let updatedItems = itemList;
    //use array.push to add it to the array
    updatedItems.push(item.id);

    setItemList(updatedItems);
    setSelectedId(item.id);
  };

  const removeFromList = item => {
    //copy the slected item array
    let updatedItems = itemList;
    //find the current item in the array
    let itemIndexToRemove = updatedItems.indexOf(item.id);
    //use splice to remove the item from list
    //https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
    updatedItems.splice(itemIndexToRemove, 1);

    setItemList(updatedItems);
    //this is weird but it makes it work - I can't unselect, so made a non-existing id
    setSelectedId(item.id + "____");
  };

  const renderItem = ({ item }) => {
    //check if item is in the list - if so, it's selected
    const backgroundColor = itemList.indexOf(item.id) > -1 ? "white" : "#F4F4F4"
    const shadowOpacity = itemList.indexOf(item.id) > -1 ? 0.2 : 0
    const color = itemList.indexOf(item.id) > -1 ? "black" : '#ACACAC'
	const marginRight = itemList.indexOf(item.id) > -1 ? 5 : 0
    const marginTop = itemList.indexOf(item.id) > -1 ? 5 : 0
    return (
      <Item
        item={item}
        onPress={() => {
        	
          itemList.indexOf(item.id) > -1
            ? removeFromList(item)
            : addToList(item)
           searchApi(itemList) === null ? () => searchApiK(itemList) : () => searchApi(itemList)

        }}
        style={{ backgroundColor, shadowOpacity, marginTop, marginRight }}
        color={color}
      />
    );
  };




	return(
		<>
			<Header 
				titleHeader="Search Results"
				miniHeader ="Refresh"
				/>
			<View >
			<FlatList
	        data={DATA}
	        numColumns={4}
	        renderItem={renderItem}
	        keyExtractor={item => item.id}
	        extraData={selectedId}
	        navigation={navigation}
	        style={{ marginTop: 5, marginLeft: 10, fontFamily: 'Poppins_600SemiBold'}}
	      />
	      </View>

			<SearchBar 
				term={term} 
				onTermChange={setTerm}
				onTermSubmit={() => searchApi(term) === null ? () => searchApiK(term) : () => searchApi(term) }
				placeholderText="add ingredient to search filters"

				// onTermSubmit={() => {
				// 	searchApi(term)
				// 	// addToList(results)
				// }}
			/>
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			<ScrollView>
			
			<ResultsListC 
			results={results} 

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
  item: {
    fontFamily: 'Poppins_600SemiBold',
    borderRadius: 20,
    marginVertical: 2,
    marginLeft: -3,
    borderWidth: 5,
    borderColor: "white",
   
  },
});

export default All;

