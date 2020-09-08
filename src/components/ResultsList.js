import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, FlatList, TouchableOpacity } from 'react-native';
import Item from './ResultsDetail'
import  { withNavigation } from 'react-navigation'
import { YellowBox } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

YellowBox.ignoreWarnings([
	'VirtualizedLists should never be nested', // TODO: Remove when fixed
])

const ResultsList = ({ title, item, navigation }) => {

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
   					const borderColor = itemList.indexOf(item.name) > -1 ? "#14D08C" : "#F5F3F3";
   					const color = itemList.indexOf(item.name) > -1 ? "#14D08C" : "#F5F3F3";
   					const name = itemList.indexOf(item.name) > -1 ? "checkbox-marked"  : "checkbox-blank-outline";
   					console.log(borderColor)
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
		fontSize: 18,
		fontWeight: 'bold',
		marginLeft: 15,
		marginBottom: 5
	},
	container: {
		justifyContent: "center",
		
		

	}
});

export default withNavigation(ResultsList);