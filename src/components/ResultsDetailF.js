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
	console.log ("item.metric.unit", item.measures.metric.unitShort)
	const [measurement, setMeasurement] = useState('metric');

	const Measure = () => {

	if (item.measures.metric.unitShort==="g" || item.measures.metric.unitShort==="ml" ||
		item.measures.metric.unitShort==="tsp" || item.measures.metric.unitShort==="tsps" || 
		item.measures.metric.unitShort==="tbsp" || item.measures.metric.unitShort==="tbsps" ||
		item.measures.metric.unitShort==="G" || item.measures.metric.unitShort==="Ml" ||
		item.measures.metric.unitShort==="Tsp" || item.measures.metric.unitShort==="Tsps" || 
		item.measures.metric.unitShort==="Tbsp" || item.measures.metric.unitShort==="Tbsps"
		) {
  		return (
  		  			<Text style={styles.logG} >{Math.round(item.measures.metric.amount)}{item.measures.metric.unitShort} </Text>
	)} else {
		return (
			<Text style={styles.logG} >{Math.round(item.measures.metric.amount)} {item.measures.metric.unitShort} </Text>
	)}}

	const MeasureUS = () => {

	if (item.measures.us.unitShort==="g" || item.measures.us.unitShort==="ml" ||
		item.measures.us.unitShort==="tsp" || item.measures.us.unitShort==="tsps" || 
		item.measures.us.unitShort==="tbsp" || item.measures.us.unitShort==="tbsps" ||
		item.measures.us.unitShort==="G" || item.measures.us.unitShort==="Ml" ||
		item.measures.us.unitShort==="Tsp" || item.measures.us.unitShort==="Tsps" || 
		item.measures.us.unitShort==="Tbsp" || item.measures.us.unitShort==="Tbsps"
		) {
  		return (
  		  			<Text style={styles.logG} >{Math.round(item.measures.us.amount)}{item.measures.us.unitShort} </Text>
	)} else {
		return (
			<Text style={styles.logG} >{Math.round(item.measures.us.amount)} {item.measures.us.unitShort} </Text>
	)}}


	return(
		  <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
		  <View style= {styles.imagebox}>
			<Image style= {styles.image} source={{ uri: `https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}} />
		</View>
		<View>
			<Text style={styles.name} >{item.name} </Text>
			{measurement === 'metric' ? <Measure /> : <MeasureUS />}
		
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

