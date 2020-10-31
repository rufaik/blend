import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, FlatList, TouchableOpacity } from 'react-native';
import Item from './ResultsDetailF'
import  { withNavigation } from 'react-navigation'
import { YellowBox } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { 
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins'

YellowBox.ignoreWarnings([
	'VirtualizedLists should never be nested', // TODO: Remove when fixed
])

const ResultsListE = ({ title, item, navigation }) => {

	const [selectedId, setSelectedId] = useState(null);
  const [itemList, setItemList] = useState([]);

  const addToList = item => {
    //copy the selected item array
    let updatedItems = itemList;
    //use array.push to add it to the array
    updatedItems.push(item.name);

    setItemList(updatedItems);
    setSelectedId(item.name);
  };

  const removeFromList = item => {
    //copy the slected item array
    let updatedItems = itemList;
    //find the current item in the array
    let itemIndexToRemove = updatedItems.indexOf(item.name);
    //use splice to remove the item from list
    //https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
    updatedItems.splice(itemIndexToRemove, 1);

    setItemList(updatedItems);
    //this is weird but it makes it work - I can't unselect, so made a non-existing id
    setSelectedId(item.name + "____");
    ;
  };

console.log("ITEM LIST",itemList)

const renderItem = ({ item }) => {
    //check if item is in the list - if so, it's selected
    const backgroundColor = itemList.indexOf(item.id) > -1 ? "white" : "#F4F4F4"
    const shadowOpacity = itemList.indexOf(item.id) > -1 ? 0.2 : 0
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
      />
    );
  };

    
	if (!item.length){
		return null;
	}

	return(
		<View style={styles.container} >


      

			<FlatList
				showsHorizontalScrollIndicator={false}
				data={item}
				numColumns={1}
				extraData={selectedId}
        		navigation={navigation}
				keyExtractor={item => item.name}
				renderItem={({ item }) => {
   					const borderColor = itemList.indexOf(item.name) > -1 ? "#14D08C" : "#D9D9D9";
   					const color = itemList.indexOf(item.name) > -1 ? "#14D08C" : "#D9D9D9";
   					const name = itemList.indexOf(item.name) > -1 ? "checkbox-marked"  : "checkbox-blank-outline";
   					console.log(item)
						return (
					      	<Item
					        	item={item}
					        	onPress={() =>
					          		itemList.indexOf(item.name) > -1
					            	? removeFromList(item)
					            	: addToList(item)
					        	}
					        	style={{ borderColor }}
					        	check= {name}
					        	box= {color}

					      	/>
					    )
				}}
			/>

		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		fontFamily: 'Poppins_700Bold',
		fontSize: 18,
		fontWeight: 'bold',
		marginLeft: 15,
		marginBottom: 5
	},
	container: {
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

export default withNavigation(ResultsListE);