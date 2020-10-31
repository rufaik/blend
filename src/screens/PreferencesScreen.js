import React, { useState } from "react";
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
import { 
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins'
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

// jewish, , southern , nordic, eastern european

const DATA = [
  {
    id: "American",
    title: "american",
    imageUrl: "https://source.unsplash.com/featured/?American,dinner,food"
  },
  {
    id: "African",
    title: "african",
    imageUrl: "https://source.unsplash.com/featured/?African,dinner,food"
  },
  {
    id: "British",
    title: "british",
    imageUrl: "https://source.unsplash.com/featured/?British,dinner,food"
  },
  {
    id: "Cajun",
    title: "cajun",
    imageUrl: "https://source.unsplash.com/featured/?cajun,dinner,food"
  },
  {
    id: "Caribbean",
    title: "caribbean",
    imageUrl: "https://source.unsplash.com/featured/?Caribbean,dinner,food"
  },
  {
    id: "Chinese",
    title: "chinese",
    imageUrl: "https://source.unsplash.com/featured/?Chinese,dinner,food"
  },
  {
    id: "Eastern European",
    title: "eastern european",
    imageUrl: "https://source.unsplash.com/featured/?Eastern European,dinner,food"
  },
  {
    id: "French",
    title: "french",
    imageUrl: "https://source.unsplash.com/featured/?French,dinner,food"
  },
  {
    id: "German",
    title: "german",
    imageUrl: "https://source.unsplash.com/featured/?German,dinner,food"
  },
  {
    id: "Greek",
    title: "greek",
    imageUrl: "https://source.unsplash.com/featured/?Greek,dinner,food"
  },
  {
    id: "Indian",
    title: "indian",
    imageUrl: "https://source.unsplash.com/featured/?Indian,dinner,food"
  },
  {
    id: "Italian",
    title: "italian",
    imageUrl: "https://source.unsplash.com/featured/?Italian,dinner,food"
  },
  {
    id: "Irish",
    title: "irish",
    imageUrl: "https://source.unsplash.com/featured/?Irish,dinner,food"
  },
  {
    id: "Japanese",
    title: "japanese",
    imageUrl: "https://source.unsplash.com/featured/?Japanese,dinner,food"
  },
  {
    id: "Jewish",
    title: "jewish",
    imageUrl: "https://source.unsplash.com/featured/?Jewish,dinner,food"
  },
  {
    id: "Korean",
    title: "korean",
    imageUrl: "https://source.unsplash.com/featured/?Korean,dinner,food"
  },
  {
    id: "Latin American",
    title: "latin american",
    imageUrl: "https://source.unsplash.com/featured/?Latin American,dinner,food"
  },
  {
    id: "Mexican",
    title: "mexican",
    imageUrl: "https://source.unsplash.com/featured/?Mexican,dinner,food"
  },
  {
    id: "Middle Eastern",
    title: "middle eastern,",
    imageUrl: "https://source.unsplash.com/featured/?Middle Eastern,dinner,food"
  },
  {
    id: "Nordic",
    title: "nordic",
    imageUrl: "https://source.unsplash.com/featured/?nordic,dinner,food"
  },
  {
    id: "Spanish",
    title: "spanish",
    imageUrl: "https://source.unsplash.com/featured/?Spanish,dinner,food"
  },
  {
    id: "Southern",
    title: "southern",
    imageUrl: "https://source.unsplash.com/featured/?Southern,dinner,food"
  },
  {
    id: "Thai",
    title: "thai",
    imageUrl: "https://source.unsplash.com/featured/?Thai,dinner,food"
  },
  {
    id: "Vietnamese",
    title: "vietnamese",
    imageUrl: "https://source.unsplash.com/featured/?Vietnamese,dinner,food"
  }
];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>

    <ImageBackground 
    	source={{ uri: item.imageUrl }} 
    	style={styles.image} 
    	imageStyle={{ borderRadius: 14}}
    /> 
    <View style={styles.child}>

          </View>
     
    <View style={{ position: 'absolute', bottom: 10, left: 10 }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "600",
                color: 'white',
                
              }}>
              {item.id}
            </Text>
          </View>
  </TouchableOpacity>
);

const PreferencesScreen = ({ onSubmit, navigation }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [itemList, setItemList] = useState([]);

  const addToList = item => {
    //copy the selected item array
    let updatedItems = itemList;
    //use array.push to add it to the array
    updatedItems.push(item.title);
    setItemList(updatedItems);
    setSelectedId(item.title);
    // console.log(itemList);
  };

  const removeFromList = item => {
    //copy the slected item array
    let updatedItems = itemList;
    //find the current item in the array
    let itemIndexToRemove = updatedItems.indexOf(item.title);
    //use splice to remove the item from list
    //https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
    updatedItems.splice(itemIndexToRemove, 1);
    setItemList(updatedItems);
    //this is weird but it makes it work - I can't unselect, so made a non-existing id
    setSelectedId(item.title + "____");
    // console.log(itemList);
  };

  const renderItem = ({ item }) => {
    //check if item is in the list - if so, it's selected
    const borderColor = itemList.indexOf(item.title) > -1 ? "#14D08C" : "#F5F3F3";

    return (
      <Item
        item={item}
        onPress={() =>
          itemList.indexOf(item.title) > -1
            ? removeFromList(item)
            : addToList(item)
        }
        style={{ borderColor }}
      />
    );
  };

  return (
    <>
    	<Spacer />
    	<Spacer />
     <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%'}} >
		<Text style={styles.header} h1>
        Set your preferences</Text>	
		<TouchableOpacity onPress={() => {
					
			navigation.navigate('Diet', {list1:itemList})}
		}>
			<Text style={styles.nextheader}>     Next </Text>
		</TouchableOpacity>
		
		</View>


      <Spacer />
      <ScrollView>
      <Text style={styles.subheader} >
        Choose your favourite cuisines  and dish types.
      </Text>

      <FlatList
        data={DATA}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.title}
        extraData={selectedId}
        navigation={navigation}
        style={{ marginTop: 5}}
        contentContainerStyle={{ alignItems: "center" }}
      />
      <Button
        style={styles.button}
        buttonStyle={{
          backgroundColor: "black",
          fontSize: 18,
          padding: 15,
          width: 250,
          borderRadius: 30
        }}
        title="Next"
		// onPress={() => onSubmit(itemList)}
		onPress={() => {
					
			navigation.navigate('Diet', {list1:itemList})}
		}
      />
      <Spacer />
    <View style={styles.dots}>
      <Fontisto name="ellipse" size={15} color="black" style={{marginRight:5}}/>
      <Fontisto name="ellipse" size={10} color="#F4F4F4" style={{marginLeft:5}} />
    </View>
    <Spacer />
    </ScrollView>
    </>
  ); 
};

const styles = StyleSheet.create({
  dots: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'center'

  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  item: {
    borderRadius: 20,
    marginVertical: 8,
    marginHorizontal: 10,
    borderWidth: 5
  },
  title: {
    fontSize: 32
  },
  image: {
    width: 170,
    height: 120,
    borderRadius: 14,
    opacity: 1.9
  },
  header: {
    fontSize: 24,
    fontWeight: "800",
    marginLeft: 75,
    fontFamily: 'Poppins_700Bold',
     
  },
  subheader: {
    fontSize: 16,
    marginLeft: 15,
    marginBottom: 10,
    fontFamily: 'Poppins_700Bold',

  },
  nextheader: {
    fontSize: 17,
    fontWeight: "700",
    marginLeft: 10,
    color: '#F68951',
    fontFamily: 'Poppins_600SemiBold',
  },
button: {
	marginTop: 10,
	justifyContent: 'center',
    alignItems: 'center'
	},
  child: {
    flex: 1,
   width: 170,
    height: 120,
   borderRadius: 14,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.3)'
  }
});

export default withNavigation(PreferencesScreen);
