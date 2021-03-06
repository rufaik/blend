import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TextInput, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView, StatusBar, ImageBackground  } from 'react-native';
import { Input, Button } from 'react-native-elements'
import { NavigationEvents, withNavigation, StackNavigator } from 'react-navigation';
import Spacer from '../components/Spacer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ListItem } from 'react-native-elements';
import { Context as TrackContext } from '../context/TrackContext';
import { Context  as AuthContext } from '../context/AuthContext'
import { 
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins'
import SearchBar from '../components/SearchBarTwo';
// import useResults from '../hooks/useResults'
import ResultsListB from '../components/ResultsListB'
import ResultsListA from '../components/ResultsListA'
import ResultsListD from '../components/ResultsListD'
import Choose from '../components/Choose'
import yelp from '../api/yelp';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';








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




export const ScreenOne = ({ navigation }) => {


	const { state, fetchTracks } = useContext(TrackContext);
	// const { state } = useContext(AuthContext);
		const { state: { prof } } = useContext(AuthContext);
		console.log("name", prof)
	const [photo, setPhoto] = useState(null);
	  const [image, setImage] = useState();
	  console.log("wiki", state)

  const [ term, setTerm] = useState('');


const [selectedId, setSelectedId] = useState(null);
  const [itemList, setItemList] = useState([]);

  const [ item, setItem ] = useState([]);
  const [ errorMessage, seterrorMessage ] = useState('')




    const [ results1, setResults1 ] = useState([]);


// RECOMMENDED FOR YOU



    const searchApi2 = async (searchTerm1, list) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          
            query: `${searchTerm1},`,
            cuisine: `${state.cuisine}`,
            diet: `${state.diet}`,
            excludeIngredients: `${state.avoid}`
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
    searchApi2(itemList1)
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
           searchApi2(itemList)

        }}
        style={{ backgroundColor, shadowOpacity, marginTop, marginRight }}
        color={color}
      />
    );
  };

const [selectedId1, setSelectedId1] = useState(null);
  const [itemList1, setItemList1] = useState(["sugar"]);

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



	return (
		
      <ScrollView>
      
  
      <ResultsListA
      results1={results1}
      
      />
    
    
      </ScrollView>  
	
	);
};





const AccountScreen = ({ props }) => {


	const { state, fetchTracks } = useContext(TrackContext);
	// const { state } = useContext(AuthContext);
		const { state: { prof } } = useContext(AuthContext);
		console.log("name", prof)
	const [photo, setPhoto] = useState(null);
	  const [image, setImage] = useState();
	  console.log("wiki", state)

	  console.log("navvy1", props)
	  // console.log("navvy2", this.props)

// console.log(state)
  // const handleChoosePhoto = () => {
  //   const options = {
  //     noData: true,
  //   }
  //   ImagePicker.launchImageLibrary(options, response => {
  //     if (response.uri) {
  //       setPhoto(response)
  //     }
  //   })
  // }


 

	

	// console.log(state)




	// const clist = navigation.getParam('clist')
 //  const cuisine = navigation.getParam('cuisine')
 //  const diet = navigation.getParam('diet')
 //  const specific = navigation.getParam('specific')
  // const list = navigation.getParam('list')
  // const newList = list ? list.toString() : ""
  // console.log(newList)
  const [ term, setTerm] = useState('');


const [selectedId, setSelectedId] = useState(null);
  const [itemList, setItemList] = useState([]);

  const [ item, setItem ] = useState([]);
  const [ errorMessage, seterrorMessage ] = useState('')




    const [ results1, setResults1 ] = useState([]);


// RECOMMENDED FOR YOU



    const searchApi2 = async (searchTerm1, list) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          
            query: `${searchTerm1},`,
            cuisine: `${state.cuisine}`,
            diet: `${state.diet}`,
            excludeIngredients: `${state.avoid}`
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
    searchApi2(itemList1)
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
           searchApi2(itemList)

        }}
        style={{ backgroundColor, shadowOpacity, marginTop, marginRight }}
        color={color}
      />
    );
  };

const [selectedId1, setSelectedId1] = useState(null);
  const [itemList1, setItemList1] = useState(["sugar"]);

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



	return (
			<>	
			<NavigationEvents onWillFocus={fetchTracks} />
			<View style={styles.container}>
			<View style={styles.container1}>
						<Image source={{ uri: image }} style={{ width:58,  height: 58, borderRadius: 250, borderWidth: 1, borderColor: 'black'}} />
						<Text style={styles.title}> Andrew Rubio{prof} </Text>
			
			</View>

			<Text style={styles.bold}>Cuisines: <Text style={{fontFamily: 'Poppins_400Regular'}}>{state.cuisine[0] ? state.cuisine : "N/A" }</Text></Text>

			<Text style={styles.bold}>Diet: <Text style={{fontFamily: 'Poppins_400Regular'}}>{state.diet[0] ? state.diet : "N/A" }</Text></Text>
			<Text style={styles.bold}>Allergens: <Text style={{fontFamily: 'Poppins_400Regular'}}>{state.allergies[0] ? state.allergies : "N/A" }</Text></Text>
			<Text style={styles.bold}>Avoid Ingredients: <Text style={{fontFamily: 'Poppins_400Regular'}}>{state.avoid[0] ? state.avoid : "N/A" }</Text></Text>
			<FlatList
				numColumns={1}
				data={state}
				keyExtractor={item => item._id}
				renderItem={({ item }) => {
					return(
						<TouchableOpacity onPress={() => 
							navigation.navigate('TrackDetail', { _id: item._id })
							}
						>
						<Text style={styles.bold}>Cuisines: <Text style={{fontFamily: 'Poppins_400Regular'}}>{diet}</Text></Text>
						<Text style={styles.bold}>Diet: <Text style={{fontFamily: 'Poppins_400Regular'}}>{item.list1}</Text></Text>
						<Text style={styles.boldlast}>Avoid Ingredients: <Text style={{fontFamily: 'Poppins_400Regular', }}>{item.itemList4}</Text></Text>
						
					</TouchableOpacity>
					);
				}}
			/>
			
		

			    <>
      
      <View>
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
           searchApi2(itemList1) 
           console.log("123",itemList1)
           setTerm('')
           } else null

        }}
        placeholderText="search my recipes"

        // onTermSubmit={() => {
        //  searchApi(term)
        //  // addToList(results)
        // }}
      />
      
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      </View>
      
    </>


    
   

    
			    </View>
		</>

	
	);
};













AccountScreen.navigationOptions = {
	title: 'Profile',
	tabBarIcon: <MaterialCommunityIcons name="account-circle-outline" size={24} color="black" backgroundColor="black" />
}

const styles = StyleSheet.create({
	button: {
		 
		justifyContent: 'center',
      alignItems: 'center'
	},
	container:{
		marginTop: -26,
		marginLeft: 20,
		 position: "relative",
		    zIndex:-1
		
	},
	container1:{
		    flexDirection: 'row',
		    alignItems: 'center',
		    paddingBottom: 20,
		    position: "relative",
		    zIndex:-1

	},
	// container2:{
	// 	    flexDirection: 'row',
	// },
	title: {
		 fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
    width: 110,
    marginLeft: 19,
    justifyContent:"flex-end",
    alignItems: "flex-end"
	},
	sub: {
	fontFamily: 'Poppins_600SemiBold',
    fontSize: 15,
    fontWeight: "700",
    marginLeft:130,
    color: '#F68951'
	},
	bold: {
	fontFamily: 'Poppins_600SemiBold',
    fontSize: 15,
	},
	boldlast: {
	fontFamily: 'Poppins_600SemiBold',
    fontSize: 15,

	}
});



	

	



export default AccountScreen;

