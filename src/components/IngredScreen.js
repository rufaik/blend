import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity, Button,FlatList, Image } from 'react-native';
import recipe from '../api/recipe'
import Spacer from '../components/Spacer';
import { FontAwesome } from '@expo/vector-icons'; 
import { 
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins'

const IngredScreen = ({ navigation }) => {
  const showD = navigation.getParam('showD');
  const [resultsd, setResultsd] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSelected, setSelection] = useState(false);

  
  const searchApii = async (showD) => {
      const responsep = await recipe.get('/', {
        params: {
            ids: `${showD}`
        }
       });
       setResultsd(responsep.data[0])
      
    }

 

   useEffect(() => {
    searchApii(showD)
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
    // resultsd.title
    <View>
      <View style={styles.item}>
          <ImageBackground 
            source={{ uri: resultsd.image }} 
            style={styles.image} 
            imageStyle={{ borderRadius: 14}}
          /> 
      </View>
      <Image style={styles.imageline} source={require('../images/line.png')}/>
      <View style={styles.card}>
        <Text style={styles.log}>Nutritional Info (per 100g)</Text>
        <Text style={styles.logG}>Calories</Text>
        <Text style={styles.logG}>Fat</Text>
        <Text style={styles.logG}>Fibre</Text>
        <Text style={styles.logG}>Protein</Text>
      </View>
      <Text style={styles.header} h1>Substitute ingredients</Text>
</View>
    );

  
};
ResultsShowScreen.navigationOptions = () => {
  return {
    headerShown: true
  };
};

const styles = StyleSheet.create({
  imageline: {
    width: '80%',
    flex: 1,
    flexDirection: 'row',
   alignSelf: 'center',   
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
  },
  logG: {
  fontSize: 14,
  fontWeight: "500",
  fontFamily: 'Poppins_600SemiBold',
  color: '#ACACAC',
  lineHeight:22,
  marginBottom: 5
  },
 child: {
    flex: 1,
   width: "100%",
    height: 210,
   borderRadius: 14,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.3)',
    fontFamily: 'Poppins_600SemiBold',

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
    fontFamily: 'Poppins_600SemiBold',
  },
  balcony: {
    fontFamily: 'Poppins_600SemiBold',
    flexDirection: "row",
     justifyContent: 'space-between',
     margin:10,
     paddingRight:20,
     paddingBottom: 11,
     borderBottomColor: "#E5E5E5",
     borderBottomWidth: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: "800",
    marginLeft: 17,
    marginTop:10,
    fontFamily: 'Poppins_700Bold',
  },
});

export default ResultsShowScreen;