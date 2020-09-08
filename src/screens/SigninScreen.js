import React, { useState, useContext } from 'react';
import { ImageBackground, StyleSheet, View, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context } from '../context/AuthContext';
import NavLink from '../components/NavLink';
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer';
import GoogleLogin from '../components/GoogleLogin'


const SigninScreen = ({ navigation }) => {
	const { state, signin, clearErrorMessage } = useContext(Context);
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('');


	



	return(
		<View style={styles.container}>
		<ImageBackground source={require('../images/one.png')} style={styles.image}>
			<NavigationEvents
				onWillFocus={clearErrorMessage}
				/>


			<Text style={styles.header} h3>Log in</Text>
		
			<Spacer/>
				<Text style={styles.subheader} h5>Find, cook and save recipes, see suggested ingredients, and follow your friends.</Text>

			

			<Spacer />
			<Input 
			containerStyle={{
				paddingLeft: 20,
				paddingRight: 20,
				marginBottom:-10
			}}
			inputStyle={{
				fontSize: 14,
				fontWeight: "500"
			}}
				inputContainerStyle={{
					backgroundColor: "rgba(247, 247, 247, 0.7)",
					borderWidth: 1,
					borderStyle: "solid",
					borderColor: "rgba(0, 0, 0, 0.05)",
					borderRadius: 10,
					padding: 5,
					paddingLeft:10
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
				marginBottom:-10
			}} 
			inputStyle={{
				fontSize: 14,
				fontWeight: "500"
			}}
			inputContainerStyle={{
					backgroundColor: "rgba(247, 247, 247, 0.7)",
					borderWidth: 1,
					borderStyle: "solid",
					borderColor: "rgba(0, 0, 0, 0.05)",
					borderRadius: 10,
					padding: 5,
					paddingLeft:10
				}}
				secureTextEntry
				value={password} 
				onChangeText={setPassword}
				autoCapitalize="none"
				autoCorrect={false} 
				placeholder="Password"
			
			/>
		<View style={styles.end}>
			<NavLink
			routeName="Reset"
			text="Forgot your"
			logintext=" Password?"
			/>
		</View>	
			{state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
			<Spacer>
				<GoogleLogin />
			</Spacer>
			<Spacer>
				<Button 
					style={styles.button} 
					buttonStyle={{backgroundColor: 'black', fontSize: 18, padding: 15, width: 250, borderRadius: 30}} 
					title="Log in"
					onPress={() => signin({ email, password })}
				/>
			</Spacer>
		<View style={styles.log}>
			<NavLink
			routeName="Signup"
			text="New to Blend?"
			logintext="Sign up"
			/>
		</View>
			</ImageBackground>
		</View>
		);
};


SigninScreen.navigationOptions = () => {
	return {
		headerShown: false
	};
};

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
		marginLeft: 15
	},
	subheader: {
		fontWeight: "800",
		marginLeft: 15,
		marginRight: 15
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
  	alignItems: 'flex-end'
  }
});

export default SigninScreen;