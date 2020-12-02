import React from 'react';
import { Text, Image, StyleSheet, View, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ResultsDetailA = ({results1}) => {

	const Time = () => {
	if (results1.readyInMinutes > 60) {
		let num = results1.readyInMinutes
	const hours = Math.floor(num / 60);  
  	const minutes = num % 60;
  		return (
  		  			<Text style={styles.icon}>{`${hours}h${minutes}m`}</Text>)
	} else {
		return (<Text style={styles.icon}> {results1.readyInMinutes}mins</Text>)
	}}

	return(
		<View style= {styles.container} >
			<Image style= {styles.image} source={{ uri: `http://webknox.com/recipeImages/${results1.image}`}}/>
			<Text style={styles.name} >{results1.title}</Text>
			<View style={styles.time} >
				<MaterialIcons  name="access-time" size={15} color="gray" />
				<Time />
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
		flexWrap: 'wrap'
	
	},
	time:{
		flexDirection: "row",
		alignItems: "center",
		
		paddingBottom: 15
	},
	icon:{
		color: "gray"
	}
});

export default ResultsDetailA;

