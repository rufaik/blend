import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetailB from './ResultsDetailB'
import  { withNavigation } from 'react-navigation'
import { YellowBox } from 'react-native'

YellowBox.ignoreWarnings([
	'VirtualizedLists should never be nested', // TODO: Remove when fixed
])

const ResultsListC = ({ title, results, navigation }) => {
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


	if (!results.length){
		return null; 
	}

	return(
		<View style={styles.container}>
			<FlatList
				
				showsHorizontalScrollIndicator={false}
				data={results}
				numColumns={2}
				style ={{ marginLeft: 10, marginTop: 5}}
				keyExtractor={results => results.id.toString()}
				renderItem={({item}) => {
					// addToList(item)
				
					return (
						<TouchableOpacity onPress={() => navigation.navigate('Original', { showD: item.id})}>
							<ResultsDetailB results={item} />
						</TouchableOpacity>
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
		flex:1,
		flexDirection: "row",
		justifyContent: "center",

		

	}
});

export default withNavigation(ResultsListC);