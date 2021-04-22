import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TextInput, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView, StatusBar, ImageBackground  } from 'react-native';
import { Input, Button } from 'react-native-elements'
import { SafeAreaView, NavigationEvents, withNavigation } from 'react-navigation';
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
import SearchBar from '../components/SearchBar';
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

 const Settings = ({ navigation }) => {


	const { state, fetchTracks } = useContext(TrackContext);
	// const { state } = useContext(AuthContext);
		const { state: { prof } } = useContext(AuthContext);
		console.log("name", prof)
	const [photo, setPhoto] = useState(null);
	  const [image, setImage] = useState();
	  console.log("wiki", state)

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
			<ScrollView>	
			<NavigationEvents onWillFocus={fetchTracks} />
			<View style={styles.container}>
      <Text style={styles.title}>Account </Text>
		  <TouchableOpacity onPress={() => {
            // console.log("state", state[0]._id)
            navigation.navigate('Upload', {id:state._id})}
          }>
          <Text style={styles.boldTop}>Edit my profile</Text></TouchableOpacity>
      <View style={styles.line}></View>
     <TouchableOpacity onPress={() => {
            // console.log("state", state[0]._id)
            navigation.navigate('Edit', {id:state._id})}
          }>
          <Text style={styles.bold}>Edit my preferences</Text></TouchableOpacity>
     <View style={styles.line}></View>
     <TouchableOpacity><Text style={styles.bold}>Enable Notifications</Text></TouchableOpacity>
     <View style={styles.line}></View>
     <TouchableOpacity><Text style={styles.bold}>Use metric measurement system</Text></TouchableOpacity>
     <Text style={styles.small}>(g, kg, l, ml)</Text>


     <Text style={styles.title2}>About </Text>

     <TouchableOpacity onPress={() => {
            // console.log("state", state[0]._id)
            navigation.navigate('Upload', {id:state._id})}
          }>
          <Text style={styles.boldTop}>Invite your friends to Blend</Text></TouchableOpacity>
      <View style={styles.line}></View>
     <TouchableOpacity onPress={() => {
            // console.log("state", state[0]._id)
            navigation.navigate('Edit', {id:state._id})}
          }>
          <Text style={styles.bold}>Rate us</Text></TouchableOpacity>
     <View style={styles.line}></View>
     <TouchableOpacity><Text style={styles.bold}>See full list of ingredients</Text></TouchableOpacity>
     <View style={styles.line}></View>
     <TouchableOpacity><Text style={styles.bold}>Terms and Conditions</Text></TouchableOpacity>
     <View style={styles.line}></View>
     <TouchableOpacity><Text style={styles.bold}>Log out</Text></TouchableOpacity>

      
    
      </View>
      
 


    
   

    
			
		</ScrollView>

	
	);
};









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










Settings.navigationOptions = {
	title: 'Profile',
	tabBarIcon: <MaterialCommunityIcons name="account-circle-outline" size={24} color="black" backgroundColor="black" />
}

const styles = StyleSheet.create({
	button: {
		 
		justifyContent: 'center',
      alignItems: 'center'
	},
	container:{
		marginTop: 82,
		marginLeft: 19,
    marginBottom: 40
		
	},
	container1:{
		    flexDirection: 'row',
		    alignItems: 'center',
		    paddingBottom: 20
	},
	// container2:{
	// 	    flexDirection: 'row',
	// },
	title: {
		 fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
	},
    title2: {
     fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
    marginTop: 39,
    marginBottom: 22
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
  boldTop: {
  fontFamily: 'Poppins_600SemiBold',
    fontSize: 15,
    marginTop: 22,
  },
  line: {
  width: '100%',
    height: 1,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.04)",
    marginTop: 16,
    marginBottom:16
  },
   small: {
    color:'rgba(172, 172, 172, 1)',
    fontSize: 12
   }
});



	

	



export default Settings;

