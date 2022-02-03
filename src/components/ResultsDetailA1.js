import React from 'react';
import { Text, Image, StyleSheet, View, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { 
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins'

const ResultsDetailA = ({results1}) => {
	console.log("ResultsDetailA1")
	// const Time = () => {
	// if (results1.readyInMinutes > 60) {
	// 	let num = results1.readyInMinutes
	// const hours = Math.floor(num / 60);  
 //  	const minutes = num % 60;
 //  		return (
 //  		  			<Text style={styles.icon}>{`${hours}h${minutes}m`}</Text>)
	// } else {
	// 	return (<Text style={styles.icon}> {results1.readyInMinutes}mins</Text>)
	// }}

	return(
		<View style= {styles.container} >
			<Image 
				style= {styles.image} 
				source={{ uri: results1.recipe.image }}
				/>
			<Text style={styles.name} >{results1.recipe.label}</Text>
			<View style={styles.time} >
				<MaterialIcons  name="access-time" size={15} color="gray" />
			</View>
		</View>
		);
};

const styles = StyleSheet.create({
	container:{
		marginLeft: 9,
		width: 190
			},
	image: {
		width: 180,
		height: 120,
		borderRadius: 14,
		marginBottom: 5
	},
	name: {
		fontWeight: 'bold',
		flexWrap: 'wrap',
		fontFamily: 'Poppins_600SemiBold',
	
	},
	time:{
		flexDirection: "row",
		alignItems: "center",
		
		paddingBottom: 15
	},
	icon:{
		color: "gray",
		fontFamily: 'Poppins_500Medium',
	}
});

export default ResultsDetailA;

