import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetailB from './ResultsDetailB'
import ResultsDetailA from './ResultsDetailA1'
import  { withNavigation } from 'react-navigation'
import { LogBox } from 'react-native'

LogBox.ignoreLogs([
	'VirtualizedLists should never be nested', // TODO: Remove when fixed
])
const ResultsListA1 = ({ title, results1, navigation }) => {
	const [selectedId, setSelectedId] = useState(null);
  const [itemList, setItemList] = useState([]);

  // const addToList = results => {
  //   //copy the selected item array
  //   let updatedItems = itemList;
  //   //use array.push to add it to the array
  //   updatedItems.push(results.id);

  //   setItemList(updatedItems);
  //   setSelectedId(results.id);
  //   console.log("itemList",itemList);
  // };


	// if (!results1.length){
	// 	return null;
	// }

	const formatImageUrl = (url) => `${API_URL}${url}`
	const getID = (url) => {
		const strs = url.split('recipe_');
		const id = strs[1]
		return id
	}

	return(
		<View style={styles.container}>
		{results1

		?	<FlatList
			style={{ left:10, right: 10}}
				
				showsHorizontalScrollIndicator={false}
				data={results1}
				numColumns={2}
				keyExtractor={results1 => results1.recipe.uri.toString()}
				renderItem={({item}) => {
				
					console.log("lets go ResultsListA")
				
					return (
						<TouchableOpacity onPress={() => navigation.navigate('Original', { showD: item.recipe.url })}>
							<ResultsDetailA results1={item} />
						</TouchableOpacity>
					)
				}}
			/>
		: console.log('nope ResultsListA1')
}
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
		flex:1,
		flexDirection: "row",
		justifyContent: "center",
		marginTop:15

		

	}
});

export default withNavigation(ResultsListA1);