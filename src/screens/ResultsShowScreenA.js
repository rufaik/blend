import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity, Button,FlatList, Image } from 'react-native';
import recipe from '../api/recipe'
import Spacer from '../components/Spacer';
import { FontAwesome } from '@expo/vector-icons'; 


const ResultsShowScreen = ({ navigation }) => {
	const showA = navigation.getParam('showA');
	const [resultsd, setResultsd] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [isSelected, setSelection] = useState(false);

	
	const searchApii = async (showA) => {
			const responsep = await recipe.get('/', {
				params: {
		    		ids: `${showA}`
				}
			 });
			 setResultsd(responsep.data[0])
			
		}

 

	 useEffect(() => {
    searchApii(showA)
  }, []);

	if(!resultsd) {
		return null;
	}


	console.log("hey5", resultsd)

	var filters = [{
  name: "MAKE",
  values: [{
    Volkswagen: {
      active: true,
      make: "Volkswagen"
    },
    Skoda: {
      active: true,
      make: "Skoda"
    }
  }]
}];



 
	return(
		<View>
		<View style={styles.item}>
				<ImageBackground 
		    	source={{ uri: resultsd.image }} 
		    	style={styles.image} 
		    	imageStyle={{ borderRadius: 14}}
		    /> 
		    <View style={styles.child}>

		          </View>
		     
		    <View style={{ position: 'absolute', bottom: 10, left: 10 }}>
		            <Text
		              style={{
		                fontSize: 20,
		                fontWeight: "600",
		                color: 'white',
		                
		              }}>
		             {resultsd.title}
		            </Text>
		          </View>
		    
          </View>
          <TouchableOpacity style={styles.balcony}
		    value={isSelected}
          onPress={setSelection}>
			   <Text> by: {resultsd.sourceName}</Text>
			   {isSelected 
			   	? <FontAwesome name="heart" size={24} color="black" />
			   	: <FontAwesome name="heart-o" size={24} color="black" />}

			 
			</TouchableOpacity>

			<Image style={styles.imageline} source={require('../images/line.png')}/>
			<Text style={styles.log}>{resultsd.title}</Text>
			<Text style={styles.log}>Preparation Time: {resultsd.preparationMinutes} Minutes</Text>
			<Text style={styles.log}>Cooking Time: {resultsd.readyInMinutes} Minutes</Text>
			<Text style={styles.log}>Number of Servings: {resultsd.servings}</Text>
			<Spacer />
			<Text style={styles.log}>INSTRUCTIONS</Text>
					<Text style={styles.log}> Step {resultsd.analyzedInstructions[0].steps[0].number}:{resultsd.analyzedInstructions[0].steps[0].step} </Text>
						<Text style={styles.log}> Step {resultsd.analyzedInstructions[0].steps[1].number}:{resultsd.analyzedInstructions[0].steps[1].step} </Text>
				 
	

</View>
		);

	
};

const styles = StyleSheet.create({
	log: {
		fontSize: 14,
				fontWeight: "500"
	},
 child: {
    flex: 1,
   width: "100%",
    height: 210,
   borderRadius: 14,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  image: {
    width: "100%",
    height: 210,
    borderRadius: 14,
    opacity: 1.9
  },
  item: {
    borderRadius: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  balcony: {
  
  	flexDirection: "row",
  	 justifyContent: 'space-between',
  	 padding:10,
  	 paddingRight:20
  }
});

export default ResultsShowScreen;