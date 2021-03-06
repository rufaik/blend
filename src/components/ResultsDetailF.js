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





	



const Item = ({item, onPress, style, check, box}) => {
	console.log ("item.amount.metric.unit", item.amount.metric.unit)

	const Measure = () => {
	if (item.amount.metric.unit==="g" || item.amount.metric.unit==="ml" ||
		item.amount.metric.unit==="tsp" || item.amount.metric.unit==="tsps" || 
		item.amount.metric.unit==="tbsp" || item.amount.metric.unit==="tbsps" ||
		item.amount.metric.unit==="G" || item.amount.metric.unit==="Ml" ||
		item.amount.metric.unit==="Tsp" || item.amount.metric.unit==="Tsps" || 
		item.amount.metric.unit==="Tbsp" || item.amount.metric.unit==="Tbsps"
		) {
  		return (
  		  			<Text style={styles.logG} >{Math.round(item.amount.metric.value)}{item.amount.metric.unit} </Text>
	)} else {
		return (
			<Text style={styles.logG} >{Math.round(item.amount.metric.value)} {item.amount.metric.unit} </Text>
	)}}


	return(
		  <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
		  <View style= {styles.imagebox}>
			<Image style= {styles.image} source={{ uri: `https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}} />
		</View>
		<View>
			<Text style={styles.name} >{item.name} </Text>
			<Measure />
		</View>
			<MaterialCommunityIcons name={check} size={24} color={box} style={{ position: "absolute", right: 40}}/> 
			
			
 		 </TouchableOpacity>
		);
};



const styles = StyleSheet.create({
	logG: {
	fontSize: 14,
	fontWeight: "500",
	fontFamily: 'Poppins_600SemiBold',
	color: '#ACACAC',
	lineHeight:22,
	marginBottom: 5,
	flexWrap: 'wrap',
	marginLeft: 5,
	width: "100%",
	textTransform: "lowercase"
	},
	container:{
	
		width: "100%",
		flex: 1, 
		flexDirection: 'row',
		alignItems: 'center',
		paddingBottom: 10,
		paddingTop:10,
		fontFamily: 'Poppins_600SemiBold',
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
		fontFamily: 'Poppins_600SemiBold',
		flexWrap: 'wrap'
	
	},
	 checkbox: {
    alignSelf: "flex-end",
  },
});

export default Item;

