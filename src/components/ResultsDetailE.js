import React, { useState } from 'react';
import { Text, Image, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
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


const ItemE = ({item, onPress, style, check, box}) => {


	return(
		  <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
			<Text style={styles.name} >{item} </Text>
			<MaterialCommunityIcons name={check} size={24} color={box} style={{ position: "absolute", right: 40}}/> 
			
			
 		 </TouchableOpacity>
		);
};



const styles = StyleSheet.create({
	container:{
		marginLeft: 15,
		width: "100%",
		backgroundColor:"white",
		flex: 1, 
		flexDirection: 'row',
		alignItems: 'center',
		paddingBottom: 10,
		paddingTop:10,
		fontFamily: 'Poppins_700Bold',
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
		width: "100%",
		fontFamily: 'Poppins_500Medium',
	
	},
	 checkbox: {
    alignSelf: "flex-end",
  },
});

export default ItemE;

