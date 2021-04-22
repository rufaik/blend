import React, { useState, useContext } from 'react';
import { ImageBackground, StyleSheet, View, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context } from '../context/AuthContext';
import NavLink from '../components/NavLink';
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer';
import GoogleLogin1 from '../components/GoogleLogin1'
import { 
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins'



const SigninScreen = ({ navigation }) => {
	const { state, signin, signin1, clearErrorMessage } = useContext(Context);
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('');
	


	



	return(
		<View style={styles.container}>
		<ImageBackground source={require('../images/one.png')} style={styles.image}>
			<NavigationEvents
				onWillFocus={clearErrorMessage}
				/>


			<Text style={styles.header}>Log in</Text>
		
			<Spacer/>
				<Text style={styles.subheader} h5>Find, cook and save recipes, see suggested ingredients, and follow your friends.</Text>

			<View style={{marginTop: 160}}>

			<Input 
			containerStyle={{
				paddingLeft: 20,
				paddingRight: 20,
				marginBottom:Platform.OS === 'ios' ? -10 : -16,
			}}
			inputStyle={{
					fontSize: Platform.OS === 'ios' ? 13 : 12,
					fontFamily: 'Poppins_500Medium'
				}}
				inputContainerStyle={{
					backgroundColor: "rgba(247, 247, 247, 0.7)",
					borderWidth: 1,
					borderStyle: "solid",
					borderColor: "rgba(0, 0, 0, 0.05)",
					borderRadius: 10,
					padding: 5,
					paddingLeft:10,
					height: Platform.OS === 'ios' ? 52 : 42
				}}
				value={email} 
				onChangeText={setEmail}
				autoCapitalize="none"
				autoCorrect={false}
				placeholder="Email"
			/>
			<Input
			containerStyle={{
				paddingLeft: 20,
				paddingRight: 20,
				marginBottom:Platform.OS === 'ios' ? -10 : -16,
			}} 
			inputStyle={{
					fontSize: Platform.OS === 'ios' ? 13 : 12,
					fontFamily: 'Poppins_500Medium'
				}}
			inputContainerStyle={{
					backgroundColor: "rgba(247, 247, 247, 0.7)",
					borderWidth: 1,
					borderStyle: "solid",
					borderColor: "rgba(0, 0, 0, 0.05)",
					borderRadius: 10,
					padding: 5,
					paddingLeft:10,
					height: Platform.OS === 'ios' ? 52 : 42
				}}
				secureTextEntry
				value={password} 
				onChangeText={setPassword}
				autoCapitalize="none"
				autoCorrect={false} 
				placeholder="Password"
			
			/>
		</View>
		<View style={styles.end}>
			<NavLink
			style={{fontFamily: 'Poppins_700Bold'}} 
			routeName="Reset"
			text="Forgot your password?"
			
			/>
		</View>	
			{state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
			<Spacer>
				<GoogleLogin1 />
			</Spacer>
			<Spacer>
			<View style={styles.button} >
				<Button 
					style={styles.button} 
					buttonStyle={{backgroundColor: 'black', fontSize: 18, padding: 15, width: 250, borderRadius: 30}} 
					titleStyle={{ fontFamily: 'Poppins_500Medium' }}
					title="Log In"
					onPress={() => signin1({ email, password })}
				/>
			</View>
			</Spacer>
		<View style={styles.log}>
			<NavLink
			routeName="Signup"
			text="New to Blend?"
			logintext=" Sign up"
			/>
		</View>
			</ImageBackground>
		</View>
		);
};


// SigninScreen.navigationOptions = () => {
// 	return {
// 		headerMode: "float",
// 		headerShown: false
// 	};
// };

const styles = StyleSheet.create({
	errorMessage: {
		fontSize: 10,
		color: 'red',
		marginLeft: 15,
		marginTop: 15,
		marginBottom: 15
	},
	header: {
		fontWeight: "800",
		fontFamily: 'Poppins_700Bold',
		fontSize: Platform.OS === 'ios' ? 35 : 22,
		position: "absolute",
	    left: "6%",
	    right: "0%",
	    top: Platform.OS === 'ios' ? "13%" : "15%",
	    bottom: "23.83%",
	},
	subheader: {
		fontWeight: "800",
		fontSize: Platform.OS === 'ios' ? 16 : 12,
		fontFamily: 'Poppins_700Bold',
		position: "absolute",
	    left: "6%",
	    right: "0%",
	    top: "23%",
	    bottom: "23.83%",
	},
	forgotheader: {
		fontWeight: "800",
		marginLeft: 15,
		marginRight: 15
	},
	button: {
		 
		justifyContent: 'center',
      alignItems: 'center'
	},
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  log: {
  	justifyContent: 'center',
  	alignItems: 'center'
  },
  end: {
  	justifyContent: 'center',
  	alignItems: 'flex-end',
	fontFamily: 'Poppins_700Bold',
	marginRight: 15
  }
});

export default SigninScreen;