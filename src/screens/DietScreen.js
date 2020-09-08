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
import ResultsList from '../components/ResultsList'
import ingred from '../api/ingred';
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';



// import SearchBar from '../components/SearchBar';
// import useResults from '../hooks/useResults'
// import ResultsList from '../components/ResultsList'

const DATA = [
  {
    id: "Vegetarian",
    title: "First Item",
    imageUrl: "https://source.unsplash.com/featured/?American,dinner,food"
  },
  {
    id: "Dairy Free",
    title: "Second Item",
    imageUrl: "https://source.unsplash.com/featured/?Asian,dinner,food"
  },
  {
    id: "Vegan",
    title: "First Item",
    imageUrl: "https://source.unsplash.com/featured/?British,dinner,food"
  },
  {
    id: "Nut Free",
    title: "Second Item",
    imageUrl: "https://source.unsplash.com/featured/?Caribbean,dinner,food"
  },
  {
    id: "Low Carb",
    title: "Third Item",
    imageUrl: "https://source.unsplash.com/featured/?Chinese,dinner,food"
  },
  {
    id: "SIBO",
    title: "Fourth Item",
    imageUrl: "https://source.unsplash.com/featured/?Gelato,food"
  },
  {
    id: "Pescatarian",
    title: "First Item",
    imageUrl: "https://source.unsplash.com/featured/?Ethiopian,dinner,food"
  },
  {
    id: "Keto",
    title: "Second Item",
    imageUrl: "https://source.unsplash.com/featured/?Healthy,dinner,food"
  },
  {
    id: "Gluten Free",
    title: "Third Item",
    imageUrl: "https://source.unsplash.com/featured/?Indian,dinner,food"
  },
  {
    id: "Wheat Free",
    title: "Fourth Item",
    imageUrl: "https://source.unsplash.com/featured/?Italian,dinner,food"
  },
  {
    id: "Soy Free",
    title: "Fourth Item",
    imageUrl: "https://source.unsplash.com/featured/?Italian,dinner,food"
  }
];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>

     
    <View >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "600",
                padding: 10,
                
                
              }}>
              {item.id}
            </Text>
          </View>
    
  </TouchableOpacity>
);

const DietScreen = ({ onSubmit, navigation }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [itemList, setItemList] = useState([]);

  const list = navigation.getParam('list')
  const newList = list ? list.toString() : ""
  const [ term, setTerm] = useState('');

  const [ item, setResults ] = useState([]);
  const [ errorMessage, seterrorMessage ] = useState('')

  const searchApi = async (searchTerm) => {
    try {
      const response = await ingred.get('/', {
        params: {
            number: 3,
            query: `${searchTerm}`
        }
       });
       setResults(response.data)
       
    } catch (err) {
      seterrorMessage('Something went wrong')
    } 
    };

      useEffect(() => {
    searchApi(newList,",")
  }, [])

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

  const renderItem = ({ item }) => {
    //check if item is in the list - if so, it's selected
    const backgroundColor = itemList.indexOf(item.id) > -1 ? "white" : "#F4F4F4"
    // const borderColor = item.id === selectedId ? "#14D08C" : "#FFFFFF";

    return (
      <Item
        item={item}
        onPress={() =>
          itemList.indexOf(item.id) > -1
            ? removeFromList(item)
            : addToList(item)
        }
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <>
  
    	<Spacer />
    	<Spacer />
     <View style={{ flexDirection: 'row', alignItems: 'center',}} >
		<Text style={styles.header} h1>
        Set your preferences</Text>	
		<TouchableOpacity onPress={() => {
					
			navigation.navigate('TrackList', {list:itemList})}
		}>
			<Text style={styles.nextheader}>     Done </Text>
		</TouchableOpacity>
		
		</View>


      <Spacer />
      <ScrollView>
      <Text style={styles.subheader} h5>
        Do you have any diet preferences or intolerances?
      </Text>

      <FlatList
        data={DATA}
        numColumns={4}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        navigation={navigation}
        style={{ marginTop: 5}}
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
      <ResultsList 
      title="hey"
      item={item}

      />
        
    
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
          
      navigation.navigate('TrackList', {list:itemList})}
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
    marginVertical: 5,
    marginHorizontal: 5,
    borderWidth: 5,
    borderColor: "white",
    color: "yellow"
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
  imageline: {
    width: '80%',
    flex: 1,
    flexDirection: 'row',
   alignSelf: 'center',
 
   
  },
  header: {
    fontSize: 24,
    fontWeight: "800",
    marginLeft: 75,
    
  },
  subheader: {
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 15,
    marginBottom: 10
  },
  nextheader: {
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 10,
    color: '#F68951'
   
  },
  subheader: {
		fontWeight: "800",
		marginLeft: 15,
		fontSize: 17,
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

export default withNavigation(DietScreen);
