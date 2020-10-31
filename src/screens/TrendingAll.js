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
import ResultsListC from '../components/ResultsListC'
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
    id: "pasta",
    title: "First Item",
    imageUrl: "https://source.unsplash.com/featured/?American,dinner,food"
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


const TrendingAll = ({ navigation }) => {
	const list = navigation.getParam('list')
	console.log('real', list)
	const newList = list ? list.toString() : ""
	console.log(newList)
	const [ term, setTerm] = useState('milk');


const [selectedId, setSelectedId] = useState(null);
  const [itemList, setItemList] = useState([]);

  const [ item, setItem ] = useState([]);
  const [ errorMessage, seterrorMessage ] = useState('')


	const filterResultsByLikes = (likes) => {
		return results2.filter(results2 => {
			return results2.likes > 1;
		});
	};

		const [ results2, setResults2 ] = useState([]);

		const searchApi3 = async (searchTerm2) => {
		console.log('Hi there')
		try {
			const response = await yelp.get('/findByIngredients', {
				params: {
		    		
		    		ingredients: `${searchTerm2},`,
				}
			 });
			 setResults2(response.data)
			 console.log("BBBB", results2)
			 console.log("BBBB1", response.data)
		} catch (err) {
			seterrorMessage('Something went wrong')
		} 
    };

    // Only have this on to view! it costs money
	
	useEffect(() => {
		searchApi3("milk")
		// console.log(newList)
	}, [])



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
           searchApi3(itemList)

        }}
        style={{ backgroundColor, shadowOpacity, marginTop, marginRight }}
        color={color}
      />
    );
  };







	return(
		<>
			 <View style={styles.navHeader}>
      	<Entypo style={styles.leftIcon} name="chevron-left" size={24} color="black" onPress={() => {
					
			navigation.navigate('TrackList')}
		} />
      	<Text style={styles.titleHeader}> Trending recipes </Text>
      </View>
      <View>
		<FlatList
	        data={DATA}
	        numColumns={4}
	        renderItem={renderItem}
	        keyExtractor={item => item.id}
	        extraData={selectedId}
	        navigation={navigation}
	        style={{ marginTop: 10, marginLeft: 10, fontFamily: 'Poppins_600SemiBold'}}
	      />
			<SearchBar 
				term={term} 
				onTermChange={setTerm}
				onTermSubmit={() => searchApi3(term)}
			/>
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			</View>
			<ScrollView>
			
	
			<ResultsListC 
			results={filterResultsByLikes()} 
			// results2={results2} 
			
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
	leftIcon:{
		position: 'absolute',
		left:20,
		paddingTop:38,
	},
	navHeader: {
		flexDirection: 'row',
		justifyContent: 'center',
		paddingTop:35,
	},
	titleHeader:{
	fontSize: 20,
	fontWeight: "500",
	fontFamily: 'Poppins_700Bold',
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

export default withNavigation(TrendingAll);