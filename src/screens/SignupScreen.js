import React, { useState, useContext } from 'react';
import { ImageBackground,TextInput, StyleSheet, View, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context  as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import Spacer from '../components/Spacer';
import { Text, Input, Button } from 'react-native-elements'
import GoogleLogin from '../components/GoogleLogin'
import { 
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins'



const SignupScreen = ({ navigation }) => {
	const { state, addname, signup, clearErrorMessage } = useContext(AuthContext);
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('');
	const [prof, setProf] = useState('');
	const [confirm, setConfirm] = useState('');

		
	return( 
		<View style={styles.container}>
		<ImageBackground source={require('../images/one.png')} style={styles.image}>
			<NavigationEvents
				onWillFocus={clearErrorMessage}
			/>
			<Spacer/>
			<Text style={styles.header}>Sign up</Text>


			<Spacer />
			<Spacer />
			<Spacer />
			<Input 
			containerStyle={{
				paddingLeft: 20,
				paddingRight: 20,
				marginBottom:Platform.OS === 'ios' ? -10 : -16,
				

			}}
			inputStyle={{
				fontSize: Platform.OS === 'ios' ? 14 : 12,
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
				value={prof} 
				onChangeText={setProf}
				autoCapitalize="none"
				autoCorrect={false}
				placeholder="Name"
			/>
			<Input 
			containerStyle={{
				paddingLeft: 20,
				paddingRight: 20,
				marginBottom:Platform.OS === 'ios' ? -10 : -16
			}}
			inputStyle={{
				fontSize: Platform.OS === 'ios' ? 14 : 12,
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
				marginBottom:Platform.OS === 'ios' ? -10 : -16
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
			<Input 
			containerStyle={{
				paddingLeft: 20,
				paddingRight: 20,
				marginBottom:Platform.OS === 'ios' ? -10 : -16
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
				 
				value={confirm} 
				onChangeText={setConfirm}
				autoCapitalize="none"
				autoCorrect={false} 
				placeholder="Confirm Password"
				placeholderStyle={{ fontSize: 20 }}
				
			/>

			{state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
			
			<GoogleLogin />
			<Spacer/>
			<Spacer>
			<View style={styles.button} >
				<Button 
					style={styles.button} 
					buttonStyle={{backgroundColor: 'black', fontSize: 18, padding: 15, width: 250, borderRadius: 30}} 
          			titleStyle={{ fontFamily: 'Poppins_500Medium' }}
					title="Sign Up"
					onPress={() => {
						if (password !== confirm) {
       						 alert("Passwords don't match");
    					} else {signup({ email, prof, password })
    							addname({ prof })}
    							
    				}}
				/>
				</View>
			</Spacer>
      			
    		
		

		<View style={styles.log}>
			<NavLink
			
			routeName="Signin"
			text="Already signed up?"
			logintext=" Log in"

			/>
		</View>
		</ImageBackground>
		</View>
	);
};

// SignupScreen.navigationOptions = () => {
// 	return {
// 		headerShown: true
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
		marginLeft: 15,
		fontSize: 17,
		width: "35%",
		fontFamily: 'Poppins_700Bold'
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
  }
});

export default SignupScreen;