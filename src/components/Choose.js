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




// import SearchBar from '../components/SearchBar';
// import useResults from '../hooks/useResults'
// import ResultsList from '../components/ResultsList'

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
  },
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

const Choose = ({ onSubmit, navigation }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [itemList, setItemList] = useState([]);

  const list = navigation.getParam('list')
  const newList = list ? list.toString() : ""
  const [ term, setTerm] = useState('');

  const [ item, setResults ] = useState([]);
  const [ errorMessage, seterrorMessage ] = useState('')



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
    // const borderColor = item.id === selectedId ? "#14D08C" : "#FFFFFF";

    return (
      <Item
        item={item}
        onPress={() => 
          // const tag = item.id
          itemList.indexOf(item.id) > -1
            ? removeFromList(item)
            : addToList(item)
        }
        style={{ backgroundColor, shadowOpacity }}
        color={color}
      />
    );
  };

  return (
    <View>
      <Entypo name="chevron-down" size={24} color="black" />

      <FlatList
        data={DATA}
        numColumns={4}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        navigation={navigation}
        style={{ marginTop: 5, marginLeft: 10, fontFamily: 'Poppins_600SemiBold'}}

      />
      <Spacer />

    
    </View>
  );
};


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
  }
});

export default withNavigation(Choose);
