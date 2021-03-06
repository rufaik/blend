import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetailB from './ResultsDetailB'
import ResultsDetailA from './ResultsDetailA'
import  { withNavigation } from 'react-navigation'
import { YellowBox } from 'react-native'

YellowBox.ignoreWarnings([
	'VirtualizedLists should never be nested', // TODO: Remove when fixed
])

const ResultsListF = ({ title, results1, navigation }) => {
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


	if (!results1.length){
		return null;
	}

	return(
		<View style={styles.container}>
			<FlatList
			style={{ left:10, right: 10}}
				
				showsHorizontalScrollIndicator={false}
				data={results1}
				numColumns={1}
				keyExtractor={results1 => results1.id.toString()}
				renderItem={({item}) => {
				
				
				
					return (
						<TouchableOpacity onPress={() => navigation.navigate('Original', { showD: item.id })}>
							<ResultsDetailA results1={item} />
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
		width: '50%',
		// flex:1,
		// flexDirection: "row",
		// justifyContent: "center",
		marginTop:15

		

	}
});

export default withNavigation(ResultsListF);