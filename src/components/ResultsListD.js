import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetailD from './ResultsDetailD'
import  { withNavigation } from 'react-navigation'
import { YellowBox } from 'react-native'

YellowBox.ignoreWarnings([
	'VirtualizedLists should never be nested', // TODO: Remove when fixed
])

const ResultsListD = ({ title, results2, navigation  }) => {
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


	if (!results2.length){
		return null;1
	}

	return(
		<View style={styles.container}>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={results2}
				numColumns={1}
				keyExtractor={results2 => results2.id.toString()}
				renderItem={({item}) => {
				
				console.log("lets see", item.id)

				
					return (
						<TouchableOpacity onPress={() => navigation.navigate('Original', { showD: item.id })}>
							<ResultsDetailD results2={item}  />
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
		justifyContent: "center"
		

	}
});

export default withNavigation(ResultsListD);