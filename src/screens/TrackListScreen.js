


// import React, { useContext } from 'react';
// import { Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
// import { NavigationEvents } from 'react-navigation';
// import { ListItem } from 'react-native-elements';
// import { Context as TrackContext } from '../context/TrackContext';


// const TrackListScreen = ({ navigation }) => {
// 	const { state, fetchTracks } = useContext(TrackContext);

// 	console.log(state)
// 	return(
// 		<>	
// 			<NavigationEvents onWillFocus={fetchTracks} />
// 			<FlatList
// 				data={state}
// 				keyExtractor={item => item._id}
// 				renderItem={({ item }) => {
// 					return(
// 						<TouchableOpacity onPress={() => 
// 							navigation.navigate('TrackDetail', { _id: item._id })
// 							}
// 						>
// 						<ListItem chevron title={item.name}/>
// 					</TouchableOpacity>
// 					);
// 				}}
// 			/>
// 		</>
// 		)
		
// };

// TrackListScreen.navigationOptions = {
// 	title: 'Explore'
// };

// const styles = StyleSheet.create({});

// export default TrackListScreen;


import React, { useState, useEffect, useContext } from 'react';
import {
  FlatList,
  ScrollView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { Button } from 'react-native-elements'
import SearchBar from '../components/SearchBar';
import Spacer from '../components/Spacer';
// import useResults from '../hooks/useResults'
import ResultsListB from '../components/ResultsListB'
import ResultsListA from '../components/ResultsListA'
import ResultsListA1 from '../components/ResultsListA1'
import ResultsListD from '../components/ResultsListD'
import ResultsListD1 from '../components/ResultsListD1'
import Track1 from '../components/Track1'
import Track2 from '../components/Track2'
import Track3 from '../components/Track3'
import Track4 from '../components/Track4'
import Track5 from '../components/Track5'
import Track6 from '../components/Track6'
import Track7 from '../components/Track7'
import Track8 from '../components/Track8'
import Choose from '../components/Choose'
import { withNavigation, NavigationEvents } from 'react-navigation';
import { appID, appKey } from '../api/keys';
import yelp from '../api/yelp';
import edamam from '../api/edamam';
import { 
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins'
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Context as TrackContext } from '../context/TrackContext';


import axios from "axios";




const DATA = [
  {
    id: "Easy",
    title: "First Item",
    imageUrl: "https://source.unsplash.com/featured/?American,dinner,food"
  },
  {
    id: "Roasted",
    title: "Second Item",
    imageUrl: "https://source.unsplash.com/featured/?Asian,dinner,food"
  },
  {
    id: "Dinner",
    title: "First Item",
    imageUrl: "https://source.unsplash.com/featured/?British,dinner,food"
  }
];

const DATA1 = [
  {
    id: "5 mins",
    title: "Second Item",
    imageUrl: "https://source.unsplash.com/featured/?Caribbean,dinner,food"
  },
  {
    id: "Breakfast",
    title: "Third Item",
    imageUrl: "https://source.unsplash.com/featured/?Chinese,dinner,food"
  },
  {
    id: "Lunch",
    title: "Fourth Item",
    imageUrl: "https://source.unsplash.com/featured/?Gelato,food"
  },
  {
    id: "Chinese",
    title: "First Item",
    imageUrl: "https://source.unsplash.com/featured/?Ethiopian,dinner,food"
  }
];

const Item = ({ item, onPress, style, color }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>

     
    <View >
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



const TrackListScreen = ({ navigation }) => {
	  const fetch = navigation.getParam('fetch');
	  console.log("FETCH", fetch)
	const { state, fetchTracks } = useContext(TrackContext);
	const list = state.diet
	const [alist, setAlist] = useState(state.cusine)
	const blist = state.avoid
	const dlist = state.allergies
	const Xlist = state.word
	const [ clist, setClist ] = useState(Xlist);
	console.log("kems", appID)

	// const list = navigation.getParam('list')
	// const alist = navigation.getParam('list1')
	// const blist = navigation.getParam('list2')
	// const dlist = navigation.getParam('list4')
	// const Xlist = navigation.getParam('word1')
	// const [ clist, setClist ] = useState(Xlist);

	  

// list1 = cuisine = list1
// itemList = diet = list
// itemList4 = allergies =list4
// itemList1 = avoid = list2


	// console.log('creal', state)

	const diet = list ? list.toString() : ""
	const cuisine = alist ? alist.toString() : ""
	const specific = blist ? blist.toString() : ""
	const intolerances = dlist ? dlist.toString() : ""

	// console.log('cuisine', cuisine)
	// console.log('diet', diet)
	// console.log('specific', specific)

	const [ term, setTerm] = useState('');
	const [ dog, setDog] = useState('');
	

 const [prompt, setPrompt] = useState(false);


const [selectedId, setSelectedId] = useState(null);
  const [itemList, setItemList] = useState(["salt"]);
  	const itX = itemList ? itemList.toString() : ""


  const [ all, setAll ] = useState([]);
  const [ item, setItem ] = useState([]);
  const [ errorMessage, seterrorMessage ] = useState('')
	// const { email } = useContext(AuthContext);
	// console.log("194", token)


// 	const apiURL = "https://api.edamam.com/search?q=";
// const apiKey = "d6fb195201baeebd8aec7b27fbefafef";
// const apiId = "242794b7";
// const maxTime = "&time=30";
// const maxIngreds = `&ingr=10`;

// const fetchRecipes = async (...ingredients) => {
//   const mappedIngreds = ingredients
//     .map((ingredient, idx) => {
//       if (idx < ingredients.length - 1) {
//         return ingredient + "+";
//       } else {
//         return ingredient;
//       }
//     })
//     .join("");

//   const url = `${apiURL}${mappedIngreds}${maxIngreds}${maxTime}${apiId}${apiKey}`;
//   const res = await axios.get(url);
//   const recipes = res.data;
//   console.log("recipes",recipes);
//   addToList(recipes)
// };


// useEffect(() => {
// 		fetchRecipes("zucchini", "broccoli", "carrots");
// 	}, [])
  


  	


const InputPrompt = (props) => {
    const [name, setName] = useState('');

    return(
        <FlatList
	        data={DATA1}
	        numColumns={4}
	        renderItem={renderItem}
	        keyExtractor={item => item.id}
	        extraData={selectedId}
	        navigation={navigation}
	        style={{ marginTop: 5, marginLeft: 10, fontFamily: 'Poppins_600SemiBold'}}
	      />
    );
}

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
    // const borderColor = item.id === selectedId ? "#14D08C" : "#FFFFFF";

    return (
      <Item
        item={item}
        onPress={() => {
        	
          itemList.indexOf(item.id) > -1
            ? removeFromList(item)
            : addToList(item)
           searchApi2(itemList)
           console.log(itemList)

        }}
        style={{ backgroundColor, shadowOpacity, marginRight, marginTop }}
        color={color}
      />
    );
  };


  //-----------------------------------------------------------------------------------------------------------------------

//EDAMAM RECIPES




	// const searchApiE3 = async () => {
	// 	try {

	// 		const response = await edamam.get('/api/recipes/v2', {
	// 			params: {
	// 				type:"public",
	// 	    		q: "bacon",
	// 	    		health: "sugar-conscious",
	// 	    		app_id: appID,
 //   					app_key: appKey
	// 			}
	// 		 });
	// 		 console.log("edam", response.data.hits)

	// 		 // console.log("BBBB", results2)
	// 		 // console.log("BBBB1", response.data)
	// 	} catch (err) {
	// 		seterrorMessage('Something went wrong')
	// 	} 
 //    };

 //    // Only have this on to view! it costs money
	
	// useEffect(() => {
	// 	searchApiE3()
	// 	// console.log(newList)
	// }, [])

  //-----------------------------------------------------------------------------------------------------------------------

// EDAMAM TRENDING RECIPES

	const [ results3, setResults3 ] = useState([]);

  const searchApiE3 = async () => {
		try {

			const response = await edamam.get('/api/recipes/v2', {
				params: {
					type:"public",
		    		q: "bacon",
		    		app_id: appID,
   					app_key: appKey
				}
			 });
			setResults3(response.data.hits)
			 // console.log("edam13", response.data.hits)

			 // console.log("BBBB", results2)
			 // console.log("BBBB1", response.data)
		} catch (err) {
			seterrorMessage('Something went wrong')
		} 
    };

    // Only have this on to view! it costs money
	
	useEffect(() => {
		searchApiE3()
		// console.log(newList)
	}, [])


  //-----------------------------------------------------------------------------------------------------------------------

// TRENDING RECIPES

	// const filterResultsByLikes = (likes) => {
	// 	return results2.filter(results2 => {
	// 		return results2.likes > 1;
	// 	});
	// };

	// const [ results2, setResults2 ] = useState([]);

	// const searchApi3 = async (searchTerm2) => {
	// 	try {
	// 		const response = await yelp.get('/findByIngredients', {
	// 			params: {
	// 	    		number: 3,
	// 	    		ingredients: `${searchTerm2},`,
	// 			}
	// 		 });
	// 		 setResults2(response.data)
	// 		 console.log('res', response.data)

	// 		 // console.log("BBBB", results2)
	// 		 // console.log("BBBB1", response.data)
	// 	} catch (err) {
	// 		seterrorMessage('Something went wrong')
	// 	} 
 //    };

 //    // Only have this on to view! it costs money
	
	// useEffect(() => {
	// 	searchApi3("bacon")
	// 	// console.log(newList)
	// }, [])

  //-----------------------------------------------------------------------------------------------------------------------



 		


// RECOMMENDED FOR YOU

	const [ results1, setResults1 ] = useState([]);


	const searchApi2 = async (searchTerm1) => {
		console.log("searchTerm1", searchTerm1)
		console.log("searchTerm12", state)
		try {
			const response = await yelp.get('/search', {
				params: {
		    		number: 8,
		    		query: `${state.word[0][0]},`,
		    		cuisine: `${state.cuisine}`,
		    		diet: `${state.diet}`,
		    		intolerances: `${state.allergies}`,
		    		excludeIngredients: `${state.avoid}`
				}
			 });
			 setResults1(response.data.results)
			 console.log("AAAAAA", response.data.results)
		} catch (err) {
			seterrorMessage('Something went wrong')
		} 
    };

    // Only have this on to view! it costs money


	useEffect(() => {
		
		{!fetch ? fetchTracks() : null}

	}, [fetch])

	
	useEffect(() => {
		searchApi2('salt')
		console.log("newList", state)
	}, [state])


// console.log("dayy", results1.length)
// console.log("alist", state.cuisine)
// console.log("alist1", state.cuisine[0])
// console.log("clist", clist)

// console.log("workkkkk", state)


  //-----------------------------------------------------------------------------------------------------------------------

	const [ results4, setResults4 ] = useState([]);
	const [ newDiet, setNewDiet ] = useState([]);

  const searchApiE2 = async () => {
  	console.log("searchApiE2 EDAMAM", state)
  	// paramEdit()
		try {

			const response = await edamam.get(`/api/recipes/v2?${newDiet}`)
			// , { 
			// 	params: {
			// 		type:"public",
		 //    		app_id: appID,
   // 					app_key: appKey,
   // 					q: "potatoes",
		 //    		// cuisineType: "Caribbean",
		 //    		// health: "vegan",
		 //    		// // intolerances: `${state.allergies}`,
		 //    		// excluded: "soy"
			// 	}
			// 	});
			 
			setResults4(response.data.hits)
			 console.log("edam13 EDAMAM", response.data.hits)

			 // console.log("BBBB", results2)
			 // console.log("BBBB1", response.data)
		} catch (err) {
			seterrorMessage('Something went wrong')
		} 
    };
const [ edamamDiet, setEdamamDiet ] = useState({});
const paramEdit = () => {
	console.log("state.diet", state.diet)
	const params = new URLSearchParams();
	state.diet.map((type, i) => {
		return(
			params.append('health', type)
			
			)
	})
	state.avoid.map((type1, i) => {
		return(
			params.append('excluded', type1)
			
			)
	})
	state.cuisine.map((type2, i) => {
		return(
			params.append('cuisineType', type2)
			
			)
	})
	state.allergies.map((type3, i) => {
		return(
			params.append('health', type3)
			
			)
	})
	params.append('type', "public")
	params.append('app_id', appID)
	params.append('app_key', appKey)
	params.append('q', state.word[0][0])


	setNewDiet(params.toString())
	// console.log("edamamDiet",params1)
	console.log("newDiet", newDiet)
}


//     cuisine: `${state.cuisine}`,
// 		    		diet: `${state.diet}`,
// 		    		intolerances: `${state.allergies}`,
// 		    		excludeIngredients: `${state.avoid}`

// 	state.diet.map	    		


// const params = new URLSearchParams();
// params.append('param1', 'value1');
// params.append('param2', 'value2');
// axios.post('/foo', params);


//   const removeFromList = item => {
//     //copy the slected item array
//     let updatedItems = itemList;
//     //find the current item in the array
//     let itemIndexToRemove = updatedItems.indexOf(item.id);
//     //use splice to remove the item from list
//     //https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
//     updatedItems.splice(itemIndexToRemove, 1);

//     setItemList(updatedItems);
//     //this is weird but it makes it work - I can't unselect, so made a non-existing id
//     setSelectedId(item.id + "____");
//   };


useEffect(() => {
		searchApiE2()
		console.log("newList EDAMAM", state)
	}, [newDiet, state])

useEffect(() => {
		{state.diet[0] ? paramEdit() : console.log("nope newDiet")}
	}, [state])


    // Only have this on to view! it costs money
	
	// useEffect(() => {
	// 	searchApiE3()
	// 	// console.log(newList)
	// }, [])


  //-----------------------------------------------------------------------------------------------------------------------


const chevron = prompt===false ? "chevron-down" : "chevron-up"
console.log("newDiet LAST",newDiet)

// var params = new URLSearchParams();
// params.append("foo", 5);
// params.append("foo", 2);
// params.append("foo", 11);
// var request = {
//   params: params
// };

// console.log("request", request)

const url = "http://www.site.comrec/234234234"
const strs = url.split('rec/');
const id = strs[1]
console.log(id)

	return(
		<>
		    	<NavigationEvents onWillFocus={fetchTracks} />

			<Spacer />
			<SearchBar 
				term={term} 
				onTermChange={setTerm}
				onTermSubmit={() => {	
			navigation.navigate('All', {term:term})}}

				placeholderText='Search for recipes or ingredients'
			/>
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			<ScrollView>



{/*			//////
*/}			


{/*		<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal:10}} >
			<Text style={styles.header} h1>
        		Trending recipes
        	</Text>	
        	<TouchableOpacity onPress={() => {
					
			navigation.navigate('TrendingAll')}
		}>
			<Text style={styles.nextheader}>     View all </Text>
		</TouchableOpacity>
		</View>
		 <ResultsListD 
			// results2={filterResultsByLikes()} 
			results2={results2} 
			
			/>

	
			<Image style={styles.imageline} source={require('../images/line.png')}/>

*/}

{/*//////
*/}



			
		<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal:10}} >
			<Text style={styles.header} h1>
        		Trending recipes
        	</Text>	
        	<TouchableOpacity onPress={() => {
					
			navigation.navigate('TrendingAll')}
		}>
			<Text style={styles.nextheader}>     View all </Text>
		</TouchableOpacity>
		</View>

		 <ResultsListD1 
			// results2={filterResultsByLikes()} 
			results2={results3} 
			
			/>

	
			<Image style={styles.imageline} source={require('../images/line.png')}/>




			

		<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal:10}} >

			<Text style={styles.header} h1>
        		Recommended for you
        	</Text>	
        	<TouchableOpacity onPress={() => {

        	
					
			navigation.navigate('ForYou', {cuisine: cuisine, diet:diet, specific:specific, clist:all})}
		}>
			<Text style={styles.nextheader}>     View all </Text>
		</TouchableOpacity>
		</View>

		<View style={styles.section1}>
	      <Entypo 

	      	name={chevron}
	      	size={24} color="#F68951" 
	      	style={styles.down} 
	      	onPress={() =>
	      	
	      		prompt===false ? setPrompt(true) : setPrompt(false)} />
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

	   

	  

	      {prompt && <InputPrompt />}
	    
{/*		{state && state.length > 1 ? searchApi2('salt') (<Text>pop</Text>) : console.log("newList0", state)}
*/}
{/*			<ResultsListA 
			results1={results1}

			/>*/}

			{<ResultsListA1 
			results1={results4}

			/>}

			{ results1.length===0 && state.cuisine && state.cuisine[0] && !state.cuisine[1]

				? <>
					<Track1 
						word={state.word}
						alist={state.cuisine}

					/>
				 </> 
				: null 
			}

			{ results1.length===0 && state.cuisine && state.cuisine[1] && !state.cuisine[2]

				? <> 
					<Track2 
						word={clist}
						alist={state.cuisine}
					/>
				 </> 
				: null
			}

			{ results1.length===0 && state.cuisine && state.cuisine[2] && !state.cuisine[3]

				? <> 
					<Track3
						word={clist}
						alist={state.cuisine}
					/>
				 </> 
				: null
			}
			{ results1.length===0 && state.cuisine && state.cuisine[3] && !state.cuisine[4]

				? <> 
					<Track4
						word={clist}
						alist={state.cuisine}
					/>
					</>
				: null
			}
			{ results1.length===0 && state.cuisine && state.cuisine[4] && !state.cuisine[5]

				? <> 
					<Track5 
						word={clist}
						alist={state.cuisine}
					/>
					</>
				: null
			}
			{ results1.length===0 && state.cuisine && state.cuisine[5] && !state.cuisine[6]

				? <> 
					<Track6
						word={clist}
						alist={state.cuisine}
					/>
					</>
				: null
			}
			{ results1.length===0 && state.cuisine && state.cuisine[6] && !state.cuisine[7]

				? <> 
					<Track7
						word={clist}
						alist={state.cuisine}
					/>
					</>
				: null
			}
			{ results1.length===0 && state.cuisine && state.cuisine[7] 

				? <> 
					<Track8 
						word={clist}
						alist={state.cuisine}
					/>
					</>
				: null
			}



			
		
			</ScrollView>
		</>
		);
};

TrackListScreen.navigationOptions = {
	title: 'TrackList',
	headerShown: true
};




const styles = StyleSheet.create({
	section1:{
	flexDirection: 'row',

	},
	down:{
		width: 40,
		height: 40,
		marginLeft:15,
		paddingLeft:5,
		paddingTop:4,
		marginTop:13,
		borderWidth: 3,
		borderColor: "#F8F8F8",
		// borderColor: "grey",
		borderRadius: 10,
	},
	item: {
    fontFamily: 'Poppins_600SemiBold',
    borderRadius: 20,
    marginVertical: 2,
    marginLeft: -3,
    borderWidth: 5,
    borderColor: "white",
   
  },
	header: {
    fontSize: 24,
    fontFamily:"Poppins_700Bold",
    margin: 10,
    
  },
  nextheader: {
    fontSize: 15,
    fontWeight: "700",
    marginLeft: 10,
    color: '#F68951',
    fontFamily: 'Poppins_600SemiBold',
  },
  imageline: {
    width: '80%',
    flex: 1,
    flexDirection: 'row',
   alignSelf: 'center',
   marginVertical: 10
 
   
  },
});

export default withNavigation(TrackListScreen);