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
import { Text, StyleSheet, View, Image, TouchableOpacity, Button, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import Spacer from '../components/Spacer';
// import useResults from '../hooks/useResults'
import ResultsListB from '../components/ResultsListB'
import ResultsListA from '../components/ResultsListA'
import ResultsListD from '../components/ResultsListD'
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

const TrackListScreen = ({ navigation }) => {
	const list = navigation.getParam('list')
	console.log('real', list)
	const newList = list ? list.toString() : ""
	console.log(newList)
	const [ term, setTerm] = useState('');
	// const [	searchApi, results, errorMessage ] = useResults();

	// const filterResultsByPrice = (price) => {
	// 	return results.filter(result => {
	// 		return result.price === price;
	// 	});
	// };

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
			 console.log("AAAAAA", results)
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

		const searchApi2 = async (searchTerm1, list) => {
		console.log('Hi there')
		try {
			const response = await yelp.get('/search', {
				params: {
		    		number: 6,
		    		query: `${searchTerm1},`,
		    		cuisine:`${list},`
				}
			 });
			 setResults1(response.data.results)
			 console.log("AAAAAA", results1)
		} catch (err) {
			seterrorMessage('Something went wrong')
		} 
    };

    // Only have this on to view! it costs money
	
	useEffect(() => {
		searchApi2("pasta")
		// console.log(newList)
	}, [])

	// const filterResultsByLikes = (likes) => {
	// 	return results2.filter(results2 => {
	// 		return results2.likes > 1;
	// 	});
	// };

		const [ results2, setResults2 ] = useState([]);

		const searchApi3 = async (searchTerm2) => {
		console.log('Hi there')
		try {
			const response = await yelp.get('/findByIngredients', {
				params: {
		    		number: 3,
		    		ingredients: `${searchTerm2},`,
				}
			 });
			 setResults2(response.data)
			 console.log("BBBB", results2)
		} catch (err) {
			seterrorMessage('Something went wrong')
		} 
    };

    // Only have this on to view! it costs money
	
	useEffect(() => {
		searchApi3("pasta")
		// console.log(newList)
	}, [])



	return(
		<>
			<Spacer />
			<SearchBar 
				term={term} 
				onTermChange={setTerm}
				onTermSubmit={() => searchApi(term)}
				placeholderText='Search for recipes or ingredients'
			/>
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			<ScrollView>
			<ResultsListB 
			results={results}
			/>
		<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal:10}} >
			<Text style={styles.header} h1>
        		Trending recipes
        	</Text>	
        	<TouchableOpacity onPress={() => {
					
			navigation.navigate('All')}
		}>
			<Text style={styles.nextheader}>     View All </Text>
		</TouchableOpacity>
		</View>
			<ResultsListD 
			// results2={filterResultsByLikes()} 
			results2={results2} 
			/>
		
			<Image style={styles.imageline} source={require('../images/line.png')}/>
			

		<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal:10}} >


			

			<Text style={styles.header} h1>
        		Recommended for you
        	</Text>	
        	<TouchableOpacity onPress={() => {
					
			navigation.navigate('All')}
		}>
			<Text style={styles.nextheader}>     View All </Text>
		</TouchableOpacity>
		</View>

			<ResultsListA 
			results1={results1}

			/>
			
		
			</ScrollView>
		</>
		);
};

TrackListScreen.navigationOptions = {
	title: 'TrackList'
};



const styles = StyleSheet.create({
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

export default TrackListScreen;