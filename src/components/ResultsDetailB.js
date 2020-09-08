import React from 'react';
import { Text, Image, StyleSheet, View, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ResultsDetailB = ({results}) => {
	return(
		<View style= {styles.container} >
			<Image style= {styles.image} source={{ uri: results.image }} />
			<Text style={styles.name} >{results.title}</Text>
			<View style={styles.time} >
				<MaterialIcons  name="access-time" size={15} color="gray" />
				<Text style={styles.icon}> 20mins</Text>
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

export default ResultsDetailB;

