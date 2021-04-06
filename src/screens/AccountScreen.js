import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, FlatList, TouchableOpacity  } from 'react-native';
import { Input, Button } from 'react-native-elements'
import { SafeAreaView, NavigationEvents } from 'react-navigation';
import Spacer from '../components/Spacer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ListItem } from 'react-native-elements';
import { Context as TrackContext } from '../context/TrackContext';
import { Context  as AuthContext } from '../context/AuthContext'
import { 
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins'

const AccountScreen = ({ navigation }) => {
	const { state, fetchTracks } = useContext(TrackContext);
	// const { state } = useContext(AuthContext);
		const { state: { prof } } = useContext(AuthContext);
		console.log("name", prof)
	const [photo, setPhoto] = useState(null);
	  const [image, setImage] = useState();
	  console.log("wiki", state)

// console.log(state)
  // const handleChoosePhoto = () => {
  //   const options = {
  //     noData: true,
  //   }
  //   ImagePicker.launchImageLibrary(options, response => {
  //     if (response.uri) {
  //       setPhoto(response)
  //     }
  //   })
  // }


 

	

	// console.log(state)


	return (
			<>	
			<NavigationEvents onWillFocus={fetchTracks} />
			<View style={styles.container}>
			<View style={styles.container1}>
						<Image source={{ uri: image }} style={{ width:58, marginTop:25,  height: 58, borderRadius: 250, borderWidth: 1, borderColor: 'black'}} />
						<Text style={styles.title}> {prof} </Text>
			<Text style={styles.sub}> Settings </Text>
			</View>
	
			<Text style={styles.bold}>Cuisines: <Text style={{fontFamily: 'Poppins_400Regular'}}>{state.cuisine}</Text></Text>
			<Text style={styles.bold}>Diet: <Text style={{fontFamily: 'Poppins_400Regular'}}>{state.diet ? state.diet : "N/A" }</Text></Text>
			<Text style={styles.bold}>Allergens: <Text style={{fontFamily: 'Poppins_400Regular'}}>{state.allergies ? state.allergies : "N/A" }</Text></Text>
			<Text style={styles.bold}>Avoid Ingredients: <Text style={{fontFamily: 'Poppins_400Regular'}}>{state.avoid ? state.avoid : "N/A" }</Text></Text>
			<FlatList
				numColumns={1}
				data={state}
				keyExtractor={item => item._id}
				renderItem={({ item }) => {
					return(
						<TouchableOpacity onPress={() => 
							navigation.navigate('TrackDetail', { _id: item._id })
							}
						>
						<Text style={styles.bold}>Cuisines: <Text style={{fontFamily: 'Poppins_400Regular'}}>{diet}</Text></Text>
						<Text style={styles.bold}>Diet: <Text style={{fontFamily: 'Poppins_400Regular'}}>{item.list1}</Text></Text>
						<Text style={styles.bold}>Avoid Ingredients: <Text style={{fontFamily: 'Poppins_400Regular'}}>{item.itemList4}</Text></Text>
						<Text style={{ fontSize: 28}}>{item.itemList}</Text>
						<Text style={{ fontSize: 28}}>{item.itemList1}</Text>
						
					</TouchableOpacity>
					);
				}}
			/>
			
			<Button 
				style={styles.button} 
				title="CHANGE IT!" 
				buttonStyle={{backgroundColor: 'black', fontSize: 18, padding: 15, width: 250, borderRadius: 30}} 
			    onPress={() => {
			    	// console.log("state", state[0]._id)
			      navigation.navigate('Edit', {id:state._id})}
			    } />


    
   

    
			    </View>
		</>

	
	);
};

AccountScreen.navigationOptions = {
	title: 'Profile',
	tabBarIcon: <MaterialCommunityIcons name="account-circle-outline" size={24} color="black" backgroundColor="black" />
}

const styles = StyleSheet.create({
	button: {
		 
		justifyContent: 'center',
      alignItems: 'center'
	},
	container:{
		marginTop: 51,
		marginLeft: 20,
		
	},
	container1:{
		    flexDirection: 'row',
		    alignItems: 'center',
		    paddingBottom: 20
	},
	// container2:{
	// 	    flexDirection: 'row',
	// },
	title: {
		 fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
    width: 80,
    marginLeft: 19
	},
	sub: {
	fontFamily: 'Poppins_600SemiBold',
    fontSize: 15,
    fontWeight: "700",
    marginLeft:130,
    color: '#F68951'
	},
	bold: {
	fontFamily: 'Poppins_600SemiBold',
    fontSize: 15,
	}
});



	

	



export default AccountScreen;

