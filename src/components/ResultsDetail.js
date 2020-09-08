import React, { useState } from 'react';
import { Text, Image, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Item = ({item, onPress, style, check, box}) => {


	return(
		  <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
		  <View style= {styles.imagebox}>
			<Image style= {styles.image} source={{ uri: `https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}} />
		</View>
			<Text style={styles.name} >{item.name} </Text>
			<MaterialCommunityIcons name={check} size={24} color={box} style={{marginLeft: 130}}/> 
			
			
 		 </TouchableOpacity>
		);
};

const styles = StyleSheet.create({
	container:{
		marginLeft: 15,
		width: 170,
		backgroundColor:"white",
		flex: 1, 
		flexDirection: 'row',
		alignItems: 'center',
		paddingBottom: 10,
		paddingTop:10,
		// borderWidth: 5
			},
	image: {
		width: 30,
		height: 30,		
		backgroundColor:"white",
		margin:5,
	},
	imagebox: {
		width: 45,
		height: 45,
		
		borderColor: '#F4F4F4',
		borderWidth: 1,
		backgroundColor:"white",
    // shadowOpacity: 0.1,
    borderRadius: 8,
	},
	name: {
		fontWeight: 'bold',
		flexWrap: 'wrap',
		marginLeft: 5,
		textTransform: 'capitalize',
		width: "100%"
	
	},
	 checkbox: {
    alignSelf: "flex-end",
  },
});

export default Item;

