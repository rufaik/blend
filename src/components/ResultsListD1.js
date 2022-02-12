import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import ResultsDetailD from './ResultsDetailD1'
import  { withNavigation } from 'react-navigation'
import { LogBox } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

LogBox.ignoreLogs([
	'VirtualizedLists should never be nested', // TODO: Remove when fixed
])

const ResultsListD1 = ({ title, results2, navigation  }) => {
	const [selectedId, setSelectedId] = useState(null);
  const [itemList, setItemList] = useState([]);
  // console.log("ResultsListD111s1111 unfiltered", results2)

  // const addToList = results => {
  //   //copy the selected item array
  //   let updatedItems = itemList;
  //   //use array.push to add it to the array
  //   updatedItems.push(results.id);

  //   setItemList(updatedItems);
  //   setSelectedId(results.id);
  //   console.log("itemList",itemList);
  // };


	// if (!results2.length){
	// 	return null;1
	// }






	return(
		<View style={styles.container1}>
				

{results2 
	?
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={results2}
				numColumns={1}
				keyExtractor={results2 => results2.recipe.uri.toString()}
				renderItem={({item}) => {
				
				// console.log("lets seeeeeeee")

				
					return (
						<TouchableOpacity onPress={() => navigation.navigate('Original', { showD: item.recipe.url  })}>
						<ResultsDetailD results2={item}  />
						</TouchableOpacity>
					)
				}}
			/>
		: console.log('nope ResultsListD1')
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
	container1: {
		justifyContent: "center"
		

	},
	container:{
		borderRadius: 20,
    	marginVertical: 8,
    	marginHorizontal: 16,
		marginLeft: 15,
		width: 289,
		fontFamily: 'Poppins_600SemiBold',
		},
	image: {
    	opacity: 1.9,
		width: 289,
		height: 151,
		borderRadius: 14,
		marginBottom: 5
	},
	name: {
		fontWeight: 'bold',
		flexWrap: 'wrap',
		fontFamily: 'Poppins_600SemiBold',
	},
	child: {
    flex: 1,
    width: 289,
	height: 151,
	borderRadius: 14,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  icon:{
  	color: "white",
  	paddingTop: 2,
  	fontFamily: 'Poppins_500Medium',
  	fontSize: 12
  },
  time:{
		flexDirection: "row",
		alignItems: "center",
		paddingTop: 5,
		flexWrap: 'wrap',
		paddingRight: 2,
		fontFamily: 'Poppins_600SemiBold',
	},
	box:{
		flexDirection: "row",
	}
});

export default withNavigation(ResultsListD1);