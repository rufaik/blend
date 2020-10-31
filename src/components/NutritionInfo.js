import React, { useState, useEffect, useContext } from 'react';
import { View,StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements'
import Spacer from './Spacer';
import nutrition from '../api/nutrition'

const NutritionInfo = (showD) => {
	const [resultsd, setResultsd] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [isSelected, setSelection] = useState(false);

	
	const searchApiN = (showD) => {
		const abi = JSON.stringify(showD);
		 console.log('nutrition2', showD)
			const responsep =  nutrition.get(`${abi}/nutritionWidget.json`);
			 setResultsd(responsep)
			
			 // console.log('nutrition1', resultsd._55._55.data)
			 console.log('nutrition1', responsep)

			
		}

	 useEffect(() => {
    searchApiN()
  }, []);

	if(!resultsd) {
		return <Text style={styles.header}>Wrong!</Text>;
	}

	// console.log('nutrition2', resultsd)
	// console.log('nutrition2', showD)


 
	return(
		<View>
      		<View style={styles.card}>
				<Text style={styles.header}>Preparation Time</Text>
				
			</View>

		</View>	
		);

	
};

const styles = StyleSheet.create({
	errorMessage: {
		fontSize: 16,
		color: 'red',
		marginLeft: 15,
		marginTop: 15,
		marginBottom: 15
	},
	header: {
		fontWeight: "800",
		marginLeft: 15
	},
	subheader: {
		fontWeight: "800",
		marginLeft: 15,
		marginRight: 15
	},
	button: {
		 
		justifyContent: 'center',
      alignItems: 'center'
	}, 
	card:{
  	backgroundColor:"#F7F7F7",
  	borderRadius: 10,
    fontFamily: 'Poppins_600SemiBold',
    margin: 17,
    padding: 10,
    paddingLeft:15,

  },
	log: {
	fontSize: 14,
	fontWeight: "500",
	fontFamily: 'Poppins_600SemiBold',
	lineHeight:22
	}

});

export default NutritionInfo;