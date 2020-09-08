// import * as Google from 'expo-google-app-auth';

// const { type, accessToken, user } = await Google.logInAsync({
//   iosClientId: `<YOUR_IOS_CLIENT_ID_FOR_EXPO>`,
//   androidClientId: `<YOUR_ANDROID_CLIENT_ID_FOR_EXPO>`,
//   iosStandaloneAppClientId: `<YOUR_IOS_CLIENT_ID>`,
//   androidStandaloneAppClientId: `<YOUR_ANDROID_CLIENT_ID>`,
// });

// if (type === 'success') {
//   /* `accessToken` is now valid and can be used to get data from the Google API with HTTP requests */
//   console.log(user);
// }


// client Id

// 685019101843-oep14jg11h5qpnv2qrqrpqq1jlnl0e7f.apps.googleusercontent.com



import React, { useContext } from 'react';
import { Text, View, AsyncStorage, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Input, Button } from 'react-native-elements';
import { Context } from '../context/AuthContext'
import Spacer from './Spacer';
import useSaveTrack from '../hooks/useSaveTrack';
import * as Google from 'expo-google-app-auth';
import createDataContext from '../context/createDataContext';


const authReducer = (state, action) => {
	switch (action.type) {
		case 'add_error':
			return { ...state, errorMessage: action.payload};
		case 'signin':
			return { errorMessage: '', token: action.payload };
		default:
		return state;
	}
};


const GoogleLogin = ({ navigation }) => {
	// const { googlesign } = useContext(Context)

async function signInWithGoogleAsync() {
  try {
    const result = await Google.logInAsync({
      // androidClientId: YOUR_CLIENT_ID_HERE,
      iosClientId:'685019101843-oep14jg11h5qpnv2qrqrpqq1jlnl0e7f.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
    });
      await AsyncStorage.setItem('token', result.user.id);
      // dispatch({ type: 'signin', payload: response.data.token});
      console.log(result.user.id)
    if (result.type === 'success') {
    	navigation.navigate('Home')
      return response.data.token;
    } else {
      return { cancelled: true };
    }
  } catch (e) {
    return { error: true };
  }
}

	return( 
		<View>
			<Text style={styles.subheader}>Or:</Text>	
			<Spacer />
			
			<View style={{height: 80, flexDirection: 'row', justifyContent: 'center'}} >
			<View style={styles.facebookimage1}>
			<Image source={require('../images/face.png')} style={styles.facebookimage} />
			</View>
			<TouchableOpacity onPress={() => signInWithGoogleAsync()}>
				<Image source={require('../images/gog.png')} style={styles.image}/>
			</TouchableOpacity>
			<View style={styles.twitterimage1}>
			<Image source={require('../images/twi.png')} style={styles.twitterimage}/>
			</View>
			
			</View>
		</View>
		);

};

const styles = StyleSheet.create({
	subheader: {
		fontWeight: "800",
		marginLeft: 15,
		fontSize: 17,
	}, 
	image: {
    width: 90,
    height: 40,
 
  },
  image1: {
    width: 20,
    height: 20,
    
  },
    facebookimage: {
    width: 40,
    height: 40,
       
  },
    facebookimage1: {
    width: 80,
    height: 60,
    shadowRadius:10,
    backgroundColor:"white",
    shadowOpacity: 0.2,
    borderRadius: 8,
    padding: 0,
    paddingTop: 5    
  },
    twitterimage: {
    width: 40,
    height: 40,
       
  },
    twitterimage1: {
    width: 80,
    height: 60,
    shadowRadius:10,
    backgroundColor:"white",
    shadowOpacity: 0.2,
    borderRadius: 8,
    padding: 0,
    paddingTop: 5    
  }
});


export default withNavigation(GoogleLogin);