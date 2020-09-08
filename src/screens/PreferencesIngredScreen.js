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
import { Text, StyleSheet, View, Button, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import Spacer from '../components/Spacer';
// import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'
import ingred from '../api/ingred';

const TrackListScreen = ({ navigation }) => {
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

	const [ item, setResults ] = useState([]);
	const [ errorMessage, seterrorMessage ] = useState('')

	const searchApi = async (searchTerm) => {
		console.log('Hi there')
		try {
			const response = await ingred.get('/', {
				params: {
		    		number: 3,
		    		query: `${searchTerm}`
				}
			 });
			console.log(response.data)
			 setResults(response.data)
			 
		} catch (err) {
			seterrorMessage('Something went wrong')
		} 
    };

    // Only have this on to view! it costs money
	
	useEffect(() => {
		searchApi(newList,",")
		console.log(newList)
	}, [])


	return(
		<>
		<Spacer />
		<Text style={styles.subheader} h5>
       Have something specific? Search for ingredients you can’t eat or just don’t like.
      </Text>
			<SearchBar 
				placeholderText="Search for ingredients"
				term={term} 
				onTermChange={setTerm}
				onTermSubmit={() => searchApi(term)}
			/>
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			<ScrollView>
			<ResultsList 
			title="hey"
			item={item}

			/>
				
			
		
			</ScrollView>
		</>
		);
};

TrackListScreen.navigationOptions = {
	title: 'Explore'
};



const styles = StyleSheet.create({});

export default TrackListScreen;