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
	const [ term, setTerm] = useState();
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


const [selectedId1, setSelectedId1] = useState(null);
  const [itemList1, setItemList1] = useState([pass]);

  const addToList1 = item => {
    //copy the selected item array
    let updatedItems = itemList1;
    //use array.push to add it to the array
    updatedItems.push(item);

    setItemList1(updatedItems);
    setSelectedId1(item);
  };

  const removeFromList1 = item => {
    //copy the slected item array
    let updatedItems = itemList1;
    //find the current item in the array
    let itemIndexToRemove = updatedItems.indexOf(item);
    //use splice to remove the item from list
    //https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
    updatedItems.splice(itemIndexToRemove, 1);

    setItemList1(updatedItems);
    //this is weird but it makes it work - I can't unselect, so made a non-existing id
    setSelectedId1(item + "____");
    ;
  };


	return(
		<>
			<Header 
				titleHeader="Search Results"
				miniHeader ="Refresh"
				/>

    <FlatList
        data={itemList1}
        numColumns={3}
        keyExtractor={(listItem) => listItem}
        style={{ marginLeft:10, backgroundColor:'white', borderRadius: 20, flexShrink: 0, flexGrow:0}}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
            style={styles.boxlist}
            onPress={() =>{
              itemList1.indexOf(item) > -1
                ? removeFromList1(item) 
                : addToList1(item)
              searchApi(itemList1) === null ? () => searchApiK(itemList1) : () => searchApi(itemList1)
        }}>
          <Text style={styles.list} >{item}</Text> 
        </TouchableOpacity>

        )}}
      
      />
      

			<SearchBar 
				term={term} 
				onTermChange={setTerm}
        onTermSubmit={() => {
          if (term.length > 0){
          let item = term;
          console.log("item1", item)
           console.log("term1", term.length)
          itemList1.indexOf(item) > -1 
            ? null
            : addToList1(item)
           searchApi(itemList1) === null ? () => searchApiK(itemList1) : () => searchApi(itemList1)
           console.log(itemList1)
           setTerm('')
           } else null

        }}
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
  list:{
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 14,
    fontWeight: "600",
   padding:10,
    textTransform: 'capitalize',
  },
  boxlist: {
    fontFamily: 'Poppins_700Bold',
    borderRadius: 20,
    marginVertical: 5,
    marginHorizontal: 5,
    borderWidth: 5,
    borderColor: "white",
    fontSize: 15,
    fontWeight: "600",
   shadowOpacity: 0.2,
    textTransform: 'capitalize',
    backgroundColor: "white"
  },
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

