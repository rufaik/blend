import React, { useEffect, useState } from 'react';
import { Text, Image, ImageBackground, StyleSheet, View, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import recipe from '../api/recipe';

const ResultsDetailB = ({results}) => {
	const [resultsB, setResultsB] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	 const id = results.id
	
	const searchApii = async (id) => {

			const responsep = await recipe.get('/', {
				params: {
		    		ids: `${id}`
				}
			 });
			 setResultsB(responsep.data[0])
		
		}

 

	 useEffect(() => {
    searchApii(id)
  }, []);

	if(!resultsB) {
		return null;
	}


	return(
		<View style= {styles.container} >
			<Image style= {styles.image} source={{ uri: results.image }} />
			<Text style={styles.name} >{results.title}</Text>
			<View style={styles.time} >
				<MaterialIcons  name="access-time" size={15} color="gray" />
				<Text style={styles.icon}> {resultsB.readyInMinutes}mins</Text>
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

