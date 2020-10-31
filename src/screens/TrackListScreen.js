


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



import React, { useState, useEffect } from 'react';
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
import ResultsListD from '../components/ResultsListD'
import Choose from '../components/Choose'
import { withNavigation } from 'react-navigation';
import yelp from '../api/yelp';
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
	const list = navigation.getParam('list')
	const alist = navigation.getParam('list1')
	const blist = navigation.getParam('list2')
	console.log('real', list)
	console.log('areal', alist)
	console.log('breal', blist)

	const cuisine = list ? list.toString() : ""
	const diet = alist ? alist.toString() : ""
	const specific = blist ? blist.toString() : ""

	console.log('cuisine', cuisine)
	console.log('diet', diet)
	console.log('specific', specific)

	const [ term, setTerm] = useState('');
	const [ dog, setDog] = useState('');
	

 const [prompt, setPrompt] = useState(false);


const [selectedId, setSelectedId] = useState(null);
  const [itemList, setItemList] = useState([]);

  const [ item, setItem ] = useState([]);
  const [ errorMessage, seterrorMessage ] = useState('')

  	


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

        }}
        style={{ backgroundColor, shadowOpacity, marginRight, marginTop }}
        color={color}
      />
    );
  };




	// const [	searchApi, results, errorMessage ] = useResults();

	// const filterResultsByPrice = (price) => {
	// 	return results.filter(result => {
	// 		return result.price === price;
	// 	});
	// };

	const [ results, setResults ] = useState([]);

	const searchApi = async (searchTerm) => {
		try {
			const response = await yelp.get('/findByIngredients', {
				params: {
		    		number: 2,
		    		ingredients: `${searchTerm},`
		    		
				}
			 });
			 setResults(response.data)
			 // console.log("onnnnne", response.data)
		} catch (err) {
			seterrorMessage('Something went wrong')
		} 
    };


    const searchApiK = async (searchTerm) => {
		try {
			const response = await yelp.get('/search', {
				params: {
		    		number: 2,
		    		query: `${searchTerm}`,

				}
			 });
			 setResults(response.data.results)
			 
		} catch (err) {
			seterrorMessage('Something went wrong')
		} 
    };

    // Only have this on to view! it costs money

	
	useEffect(() => {
		searchApi()
		// console.log(newList)
	}, [])


 		const [ results1, setResults1 ] = useState([]);


// RECOMMENDED FOR YOU


		const searchApi2 = async (searchTerm1, list) => {
		try {
			const response = await yelp.get('/search', {
				params: {
		    		number: 6,
		    		query: `${searchTerm1},`,
		    		cuisine: `${cuisine}`,
		    		diet: `${diet}`,
		    		excludeIngredients: `${specific}`
				}
			 });
			 setResults1(response.data.results)
			 // console.log("AAAAAA", response.data.results)
		} catch (err) {
			seterrorMessage('Something went wrong')
		} 
    };

    // Only have this on to view! it costs money
	
	useEffect(() => {
		searchApi2("burger")
		// console.log(newList)
	}, [])

	const filterResultsByLikes = (likes) => {
		return results2.filter(results2 => {
			return results2.likes > 1;
		});
	};

		const [ results2, setResults2 ] = useState([]);

		const searchApi3 = async (searchTerm2) => {
		try {
			const response = await yelp.get('/findByIngredients', {
				params: {
		    		number: 3,
		    		ingredients: `${searchTerm2},`,
				}
			 });
			 setResults2(response.data)
			 // console.log("BBBB", results2)
			 // console.log("BBBB1", response.data)
		} catch (err) {
			seterrorMessage('Something went wrong')
		} 
    };

    // Only have this on to view! it costs money
	
	useEffect(() => {
		searchApi3("milk")
		// console.log(newList)
	}, [])






	const sugar = 3

const chevron = prompt===false ? "chevron-down" : "chevron-up"

	return(
		<>
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
			<ResultsListD 
			results2={filterResultsByLikes()} 
			// results2={results2} 
			
			/>
		
			<Image style={styles.imageline} source={require('../images/line.png')}/>
			

		<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal:10}} >

			<Text style={styles.header} h1>
        		Recommended for you
        	</Text>	
        	<TouchableOpacity onPress={() => {
					
			navigation.navigate('ForYou', {cuisine: cuisine, diet:diet, specific:specific})}
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
	    
		

			<ResultsListA 
			results1={results1}


			/>
			
		
			</ScrollView>
		</>
		);
};

// TrackListScreen.navigationOptions = {
// 	title: 'TrackList',
// 	headerShown: true
// };




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