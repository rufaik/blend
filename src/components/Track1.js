

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
import ResultsListA1 from '../components/ResultsListA1'
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
import { appID, appKey } from '../api/keys';
import spoon from '../api/spoon';
import edamam from '../api/edamam';



const Track1 = ({ navigation, word, alist }) => {
	console.log("TRACK11")
	


  const [ errorMessage, seterrorMessage ] = useState('')




  //-----------------------------------------------------------------------------------------------------------------------


	const [ resultsH1, setResultsH1 ] = useState([]);


	const searchApiH1 = async (searchTermH) => {
		try {
			const responseH1 = await edamam.get('/api/recipes/v2', {
				params: {
		    		q: `${searchTermH},`,
		    		cuisineType: `${alist[0]}`,
		    		app_id: appID,
   					app_key: appKey
				}
			 });
			 setResultsH1(responseH1.data.results)
			 // console.log("responseH1", responseH1.data.results)
		} catch (err) {
			seterrorMessage('Something went wrongH')
		} 
    };

    // Only have this on to view! it costs money
	
	useEffect(() => {
		try{
		searchApiH1(word[0][0])
		// console.log(newList)
	} catch (err) {
			seterrorMessage('Something went wrongH1')
		} 
	}, [])



  //-----------------------------------------------------------------------------------------------------------------------

	const [ resultsH2, setResultsH2 ] = useState([]);


	const searchApiH2 = async (searchTermH2) => {
		try {
			const responseH2 = await edamam.get('/api/recipes/v2', {
				params: {
		    		number: 1,
		    		q: `${searchTermH2},`,
		    		cuisineType: `${alist[0]}`,
		    		app_id: appID,
   					app_key: appKey
				}
			 });
			 setResultsH2(responseH2.data.results)
			 // console.log("responseH2", responseH2.data.results)
		} catch (err) {
			seterrorMessage('Something went wrongH2')
		} 
    };

    // Only have this on to view! it costs money
	
	useEffect(() => {
		try{
		searchApiH2(word[0][1])
		// console.log(newList)
	} catch (err) {
			seterrorMessage('Something went wrongH2')
		} 
	}, [])

  //-----------------------------------------------------------------------------------------------------------------------

const [ resultsH3, setResultsH3 ] = useState([]);


	const searchApiH3 = async (searchTermH3) => {
		try {
			const responseH3 = await edamam.get('/api/recipes/v2', {
				params: {
		    		number: 1,
		    		q: `${searchTermH3},`,
		    		cuisineType: `${alist[0]}`,
		    		app_id: appID,
   					app_key: appKey
				}
			 });
			 setResultsH3(responseH3.data.results)
			 // console.log("responseH3", responseH3.data.results)
		} catch (err) {
			seterrorMessage('Something went wrongH3')
		} 
    };

    // Only have this on to view! it costs money
	
	useEffect(() => {
		try{
		searchApiH3(word[0][2])
		// console.log(newList)
	} catch (err) {
			seterrorMessage('Something went wrongH3')
		} 
	}, [])

  //-----------------------------------------------------------------------------------------------------------------------

const [ resultsH4, setResultsH4 ] = useState([]);


	const searchApiH4 = async (searchTermH4) => {
		try {
			const responseH4 = await edamam.get('/api/recipes/v2', {
				params: {
		    		number: 1,
		    		q: `${searchTermH4},`,
		    		cuisineType: `${alist[0]}`,
		    		app_id: appID,
   					app_key: appKey
				}
			 });
			 setResultsH4(responseH4.data.results)
			 // console.log("responseH4", responseH4.data.results)
		} catch (err) {
			seterrorMessage('Something went wrongH4')
		} 
    };

    // Only have this on to view! it costs money
	
	useEffect(() => {
		try{
		searchApiH4(word[0][3])
		// console.log(newList)
	} catch (err) {
			seterrorMessage('Something went wrongH2')
		} 
	}, [])

  //-----------------------------------------------------------------------------------------------------------------------

const [ resultsH5, setResultsH5 ] = useState([]);


	const searchApiH5 = async (searchTermH5) => {
		try {
			const responseH5 = await edamam.get('/api/recipes/v2', {
				params: {
		    		number: 1,
		    		query: `${searchTermH5},`,
		    		cuisineType: `${alist[0]}`,
		    		app_id: appID,
   					app_key: appKey
				}
			 });
			 setResultsH5(responseH5.data.results)
			 // console.log("responseH5", responseH5.data.results)
		} catch (err) {
			seterrorMessage('Something went wrongH5')
		} 
    };

    // Only have this on to view! it costs money
	
	useEffect(() => {
		try{
		searchApiH5(word[0][4])
		// console.log(newList)
	} catch (err) {
			seterrorMessage('Something went wrongH5')
		} 
	}, [])

  //-----------------------------------------------------------------------------------------------------------------------

const [ resultsH6, setResultsH6 ] = useState([]);


	const searchApiH6 = async (searchTermH6) => {
		try {
			const responseH6 = await edamam.get('/api/recipes/v2', {
				params: {
		    		number: 1,
		    		query: `${searchTermH6},`,
		    		cuisineType: `${alist[0]}`,
		    		app_id: appID,
   					app_key: appKey
				}
			 });
			 setResultsH6(responseH6.data.results)
			 // console.log("responseH6", responseH6.data.results)
		} catch (err) {
			seterrorMessage('Something went wrongH6')
		} 
    };

    // Only have this on to view! it costs money
	
	useEffect(() => {
		try{
		searchApiH6(word[0][5])
		// console.log(newList)
	} catch (err) {
			seterrorMessage('Something went wrongH6')
		} 
	}, [])

  //-----------------------------------------------------------------------------------------------------------------------

const [ resultsH7, setResultsH7 ] = useState([]);


	const searchApiH7 = async (searchTermH7) => {
		try {
			const responseH7 = await edamam.get('/api/recipes/v2', {
				params: {
		    		number: 1,
		    		query: `${searchTermH7},`,
		    		cuisineType: `${alist[0]}`,
				}
			 });
			 setResultsH7(responseH7.data.results)
			 // console.log("responseH7", responseH7.data.results)
		} catch (err) {
			seterrorMessage('Something went wrongH7')
		} 
    };

    // Only have this on to view! it costs money
	
	useEffect(() => {
		try{
		searchApiH7(word[0][6])
		// console.log(newList)
	} catch (err) {
			seterrorMessage('Something went wrongH7')
		} 
	}, [])

  //-----------------------------------------------------------------------------------------------------------------------

const [ resultsH8, setResultsH8 ] = useState([]);


	const searchApiH8 = async (searchTermH8) => {
		try {
			const responseH8 = await edamam.get('/api/recipes/v2', {
				params: {
		    		number: 1,
		    		query: `${searchTermH8},`,
		    		cuisineType: `${alist[0]}`,
		    		app_id: appID,
   					app_key: appKey
				}
			 });
			 setResultsH8(responseH8.data.results)
			 // console.log("responseH8", responseH8.data.results)
		} catch (err) {
			seterrorMessage('Something went wrongH8')
		} 
    };

    // Only have this on to view! it costs money
	
	useEffect(() => {
		try{
		searchApiH8(word[0][7])
		// console.log(newList)
	} catch (err) {
			seterrorMessage('Something went wrongH8')
		} 
	}, [])

  //-----------------------------------------------------------------------------------------------------------------------





	return(
		<>
		<View style={styles.container}>
			<ResultsListA1
				results1={resultsH1} 
			/>
			<ResultsListA1
				results1={resultsH2} 
			/>
		</View>

		<View style={styles.container}>
			<ResultsListA1
				results1={resultsH3} 
			/>
			<ResultsListA1
				results1={resultsH4} 
			/>
		</View>

		<View style={styles.container}>
			<ResultsListA1
				results1={resultsH5} 
			/>
			<ResultsListA1
				results1={resultsH6} 
			/>
		</View>

		<View style={styles.container}>
			<ResultsListA1
				results1={resultsH7} 
			/>
			<ResultsListA1
				results1={resultsH8} 
			/>
		</View>

</>
		);
};

// TrackListScreen.navigationOptions = {
// 	title: 'TrackList',
// 	headerShown: true
// };




const styles = StyleSheet.create({
	 container:{
	 	flex:1,
	 	flexDirection: 'row',
	 },
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

export default withNavigation(Track1);