import React from 'react';
import { Text, Image, StyleSheet, View, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ResultsDetailC = ({results}) => {
	return(
		<View style= {styles.container} >
			<Image style= {styles.image} source={{ uri: results.image }} />
			<Text style={styles.name} >{results.title}</Text>
			
				<MaterialIcons  name="access-time" size={24} color="gray" />
				<Text style={styles.icon}> 20mins</Text>
			
		</View>
		);
};

const styles = StyleSheet.create({
	container:{
		marginLeft: 15,
		width: 170
			},
	image: {
		width: 170,
		height: 120,
		borderRadius: 14,
		marginBottom: 5
	},
	name: {
		fontWeight: 'bold',
		flexWrap: 'wrap'
	
	}
});

export default ResultsDetailC;

