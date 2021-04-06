import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, FlatList, TouchableOpacity  } from 'react-native';
import { Input, Button } from 'react-native-elements'
import { SafeAreaView, NavigationEvents } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context  as AuthContext } from '../context/AuthContext'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ListItem } from 'react-native-elements';
import { Context as TrackContext } from '../context/TrackContext';

const AccountScreen = ({ navigation }) => {
	const { state, fetchTracks } = useContext(TrackContext);
	const [photo, setPhoto] = useState(null);
console.log(state)
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
						
						<Text style={{ fontSize: 28}}>{item.itemList}</Text>
						<Text style={{ fontSize: 28}}>{item.itemList1}</Text>
						<Text style={{ fontSize: 28}}>{item.itemList4}</Text>
						<Text style={{ fontSize: 28}}>{item.list1}</Text>
					</TouchableOpacity>
					);
				}}
			/>
			
			<Button 
				style={styles.button} 
				title="Sign Out" 
				buttonStyle={{backgroundColor: 'black', fontSize: 18, padding: 15, width: 250, borderRadius: 30}} 
			    onPress={() => {
			    	// console.log("state", state[0]._id)
			      navigation.navigate('Edit', {id:state[0]._id})}
			    } />


    
   

    

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
	}
});



	

	



export default AccountScreen;

