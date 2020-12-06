import React, { useState, useEffect } from "react";
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
import { withNavigation } from 'react-navigation';
import { Button } from 'react-native-elements'
import Spacer from '../components/Spacer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TrackListScreen from './TrackListScreen';
import SearchBar from '../components/SearchBar';
import ingred from '../api/ingred';
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { 
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins'
import { Item1 } from '../components/ResultsDetail'
import { YellowBox } from 'react-native'





// import SearchBar from '../components/SearchBar';
// import useResults from '../hooks/useResults'
// import ResultsList from '../components/ResultsList'
 // pescetarian, lacto vegetarian, ovo vegetarian, vegan, and vegetarian



const DATA = [
 {
    id: "Laco Vegetarian",
    title: "lacto vegetarian",
    imageUrl: "https://source.unsplash.com/featured/?Asian,dinner,food"
  },
  {
    id: "Vegan",
    title: "vegan",
    imageUrl: "https://source.unsplash.com/featured/?British,dinner,food"
  },
  {
    id: "Vegetarian",
    title: "vegetarian",
    imageUrl: "https://source.unsplash.com/featured/?American,dinner,food"
  },
  
  {
    id: "OVO Vegetarian",
    title: "ovo vegetarian",
    imageUrl: "https://source.unsplash.com/featured/?Gelato,food"
  },
  {
    id: "Pescatarian",
    title: "pescetarian",
    imageUrl: "https://source.unsplash.com/featured/?Ethiopian,dinner,food"
  }
 
];

const DATA4 = [
  {
    id: "Seafood",
    title: "seafood",
    imageUrl: "https://source.unsplash.com/featured/?Healthy,dinner,food"
  },
  {
    id: "Gluten",
    title: "gluten",
    imageUrl: "https://source.unsplash.com/featured/?Indian,dinner,food"
  },
  {
    id: "Nut",
    title: "nut",
    imageUrl: "https://source.unsplash.com/featured/?Caribbean,dinner,food"
  },
  {
    id: "Dairy Free",
    title: "dairy",
    imageUrl: "https://source.unsplash.com/featured/?Indian,dinner,food"
  },
  {
    id: "Wheat Free",
    title: "wheat",
    imageUrl: "https://source.unsplash.com/featured/?Italian,dinner,food"
  },
  {
    id: "Peanut",
    title: "peanut",
    imageUrl: "https://source.unsplash.com/featured/?Italian,dinner,food"
  },
  {
    id: "Tree nut",
    title: "tree nut",
    imageUrl: "https://source.unsplash.com/featured/?Italian,dinner,food"
  },
  {
    id: "Sesame",
    title: "sesame",
    imageUrl: "https://source.unsplash.com/featured/?Italian,dinner,food"
  },
  {
    id: "Soy Free",
    title: "soy",
    imageUrl: "https://source.unsplash.com/featured/?Italian,dinner,food"
  },
  {
    id: "Sulphite",
    title: "sulphite",
    imageUrl: "https://source.unsplash.com/featured/?Italian,dinner,food"
  },
  {
    id: "Shellfish",
    title: "shellfish",
    imageUrl: "https://source.unsplash.com/featured/?Italian,dinner,food"
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

const DietScreen = ({ onSubmit, navigation }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedId4, setSelectedId4] = useState(null);
  const [itemList, setItemList] = useState([]);
  const [itemList4, setItemList4] = useState([]);
  // console.log("plow",itemList1)
  // console.log("WOLF", updatedItems)

  const list1 = navigation.getParam('list1')
  const word1 = navigation.getParam('word1')
  console.log("word", word1)

  // console.log("babe", list1)
  // const newList = list ? list.toString() : ""
  const [ term, setTerm] = useState('');

  const [ item, setResults ] = useState([]);
  const [ errorMessage, seterrorMessage ] = useState('')
  console.log("word1", itemList)
  console.log("word2", list1)
  console.log("word3", itemList1)



  const searchApi = async (searchTerm) => {
    try {
      const response = await ingred.get('/', {
        params: {
            number: 20,
            query: `${searchTerm}`
        }
       });
       setResults(response.data)
       
    } catch (err) {
      seterrorMessage('Something went wrong')
    } 
    };

  //     useEffect(() => {
  //   searchApi(newList,",")
  // }, [])

    useEffect(() => {
    searchApi('tomato')
  }, []);


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

    const addToList4 = item => {
    //copy the selected item array
    let updatedItems4 = itemList4;
    //use array.push to add it to the array
    updatedItems4.push(item.id);

    setItemList4(updatedItems4);
    setSelectedId4(item.id);
  };

  const removeFromList4 = item => {
    //copy the slected item array
    let updatedItems4 = itemList4;
    //find the current item in the array
    let itemIndexToRemove4 = updatedItems4.indexOf(item.id);
    //use splice to remove the item from list
    //https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
    updatedItems4.splice(itemIndexToRemove4, 1);

    setItemList4(updatedItems4);
    //this is weird but it makes it work - I can't unselect, so made a non-existing id
    setSelectedId4(item.id + "____");
  };



  const renderItem = ({ item }) => {
    //check if item is in the list - if so, it's selected
    const backgroundColor = itemList.indexOf(item.id) > -1 ? "white" : "#F4F4F4"
    const shadowOpacity = itemList.indexOf(item.id) > -1 ? 0.2 : 0
    const color = itemList.indexOf(item.id) > -1 ? "black" : '#ACACAC'
    // const borderColor = item.id === selectedId ? "#14D08C" : "#FFFFFF";

    return (
      <Item
        item={item}
        onPress={() =>
          itemList.indexOf(item.id) > -1
            ? removeFromList(item)
            : addToList(item)
        }
        style={{ backgroundColor, shadowOpacity }}
        color={color}
      />
    );
  };


  const renderItem4 = ({ item }) => {
    //check if item is in the list - if so, it's selected
    const backgroundColor = itemList4.indexOf(item.id) > -1 ? "white" : "#F4F4F4"
    const shadowOpacity = itemList4.indexOf(item.id) > -1 ? 0.2 : 0
    const color = itemList4.indexOf(item.id) > -1 ? "black" : '#ACACAC'
    // const borderColor = item.id === selectedId ? "#14D08C" : "#FFFFFF";

    return (
      <Item
        item={item}
        onPress={() =>
          itemList4.indexOf(item.id) > -1
            ? removeFromList4(item)
            : addToList4(item)
        }
        style={{ backgroundColor, shadowOpacity }}
        color={color}
      />
    );
  };

  // console.log("plow",itemList1)


const [selectedId1, setSelectedId1] = useState(null);
  const [itemList1, setItemList1] = useState([]);

  const addToList1 = item => {
    //copy the selected item array
    let updatedItems = itemList1;
    //use array.push to add it to the array
    updatedItems.push(item.name);

    setItemList1(updatedItems);
    setSelectedId1(item.name);
  };

  const removeFromList1 = item => {
    //copy the slected item array
    let updatedItems = itemList1;
    //find the current item in the array
    let itemIndexToRemove = updatedItems.indexOf(item.name);
    //use splice to remove the item from list
    //https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
    updatedItems.splice(itemIndexToRemove, 1);

    setItemList1(updatedItems);
    //this is weird but it makes it work - I can't unselect, so made a non-existing id
    setSelectedId1(item.name + "____");
    ;
  };



 console.log("plow",itemList4)


  return (
    <>
  
      <Spacer />
      <Spacer />
     <View style={{ flexDirection: 'row', alignItems: 'center',}} >
     <Entypo style={styles.leftIcon} name="chevron-left" size={24} color="black" onPress={() => {
          navigation.navigate('Home')}
    } />
    <Text style={styles.header} h1>
        Set your preferences</Text> 
    <TouchableOpacity onPress={() => {
          
      navigation.navigate('TrackList', {list:itemList, list1: list1, list2:itemList1, word1: word1, list4:itemList4})
      // console.log("preferences", list)}
    }}>
      <Text style={styles.nextheader}>   Done </Text>
    </TouchableOpacity>
    
    </View>


      <Spacer />
      <ScrollView>
      <Text style={styles.subheader} h5>
        Do you have any diet preferences or intolerances?
      </Text>

      <FlatList
        data={DATA}
        numColumns={3}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        navigation={navigation}
        style={{ marginTop: 5, marginLeft: 10, fontFamily: 'Poppins_600SemiBold'}}
      />
       <FlatList
        data={DATA4}
        numColumns={4}
        renderItem={renderItem4}
        keyExtractor={item => item.id}
        extraData={selectedId4}
        navigation={navigation}
        style={{ marginTop: 5, marginLeft: 10, fontFamily: 'Poppins_600SemiBold'}}
      />
      <Spacer />
      <Image style={styles.imageline} source={require('../images/line.png')}/>


      <Spacer />
      <Text style={styles.subheader} h5>
       Have something specific? Search for ingredients you can’t eat or just don’t like.
      </Text>


      <SearchBar 
        placeholderText="Search for ingredients"
        term={term} 
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
        style={styles.search}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      
      <ScrollView>
      <View style={styles.container1} >
  
    <FlatList
        data={itemList1}
        numColumns={3}
        keyExtractor={(listItem) => listItem}
        style={{ marginLeft:10, backgroundColor:'white', borderRadius: 20}}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
            style={styles.boxlist}
            onPress={() =>
              itemList1.indexOf(item) > -1
                ? removeFromList1(item)
                : addToList1(item)
        }>
          <Text style={styles.list} >{item}</Text> 
        </TouchableOpacity>

        )}}
      
      />
      

      <FlatList
        showsHorizontalScrollIndicator={false}
        data={item}
        numColumns={1}
        extraData={selectedId1}
            navigation={navigation}
        keyExtractor={item => item.name}
        renderItem={({ item }) => {
            const borderColor = itemList1.indexOf(item.name) > -1 ? "#14D08C" : "#F5F3F3";
            const color = itemList1.indexOf(item.name) > -1 ? "#14D08C" : "#F5F3F3";
            const name = itemList1.indexOf(item.name) > -1 ? "checkbox-marked"  : "checkbox-blank-outline";
            // console.log(item)
            return (
                  <Item1
                    item={item}
                    onPress={() =>
                        itemList1.indexOf(item.name) > -1
                        ? removeFromList1(item)
                        : addToList1(item)
                    }
                    style={{ borderColor }}
                    check= {name}
                    box= {color}

                  />
              )
        }}
      />

    </View>
        
    
      </ScrollView>

      <Button
        style={styles.button}
        buttonStyle={{
          backgroundColor: "black",
          fontSize: 18,
          padding: 15,
          width: 250,
          borderRadius: 30
        }}
        title="Get Started"
    // onPress={() => onSubmit(itemList)}
    onPress={() => {
          
      navigation.navigate('TrackList', {list:itemList, list1: list1, list2:itemList1, word1: word1, list4:itemList4})}
    }
      />
     <Spacer />
    <View style={styles.dots}>
      <Fontisto name="ellipse" size={10} color="#F4F4F4" style={{marginRight:5}} />
      <Fontisto name="ellipse" size={15} color="black" style={{marginLeft:5}}/>
    </View>
    <Spacer />
    </ScrollView>

    
    </>
  );
};

DietScreen.navigationOptions = {
  title: 'Diet',
  tabBarIcon: <MaterialCommunityIcons name="pot-mix" size={24} color="gray" />

}

const styles = StyleSheet.create({
  leftIcon:{
    position: 'absolute',
    left:12,
    top:6,
  },
  dots: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'center',
    fontFamily: 'Poppins_700Bold',

  },
  container: {
    fontFamily: 'Poppins_700Bold',
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  item: {
    fontFamily: 'Poppins_600SemiBold',
    borderRadius: 20,
    marginVertical: 2,
    marginHorizontal: 1,
    borderWidth: 5,
    borderColor: "white",
   
  },
  title: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 32
  },
  image: {
    fontFamily: 'Poppins_700Bold',
    width: 170,
    height: 120,
    borderRadius: 14,
    opacity: 1.9
  },
  imageline: {
    width: '80%',
    flex: 1,
    flexDirection: 'row',
   alignSelf: 'center',
 
   
  },
  header: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 24,
    fontWeight: "800",
    marginLeft: 75,
    
  },
  nextheader: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 10,
    color: '#F68951'
   
  },
  subheader: {
    fontFamily: 'Poppins_600SemiBold',
    fontWeight: "800",
    marginLeft: 15,
    fontSize: 17,
  },
button: {
  fontFamily: 'Poppins_700Bold',
  marginTop: 10,
  justifyContent: 'center',
    alignItems: 'center'
  },
  child: {
    fontFamily: 'Poppins_700Bold',
    flex: 1,
   width: 170,
    height: 120,
   borderRadius: 14,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  title: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5
  },
  container1: {
    fontFamily: 'Poppins_700Bold',
    justifyContent: "center",
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
  list:{
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 14,
    fontWeight: "600",
   padding:10,
    textTransform: 'capitalize',
  }
});

export default withNavigation(DietScreen);
