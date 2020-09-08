import React, { useState, useContext } from 'react';
import { ImageBackground,TextInput, StyleSheet, View, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context  as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import Spacer from '../components/Spacer';
import { Text, Input, Button } from 'react-native-elements'
import GoogleLogin from '../components/GoogleLogin'


const ResetScreen = ({ navigation }) => {
	const { state, signup, clearErrorMessage } = useContext(AuthContext);
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [newpassword, setNewpassword] = useState('');

		
	return( 
		<View style={styles.container}>
		<ImageBackground source={require('../images/one.png')} style={styles.image}>
			<NavigationEvents
				onWillFocus={clearErrorMessage}
			/>
			<Spacer/>
			<Spacer/>
			
		
			<Text style={styles.header} h3>Reset password</Text>


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
				placeholder="Old Password"
			
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
				 
				value={newpassword} 
				onChangeText={setNewpassword}
				autoCapitalize="none"
				autoCorrect={false} 
				placeholder="New Password"
				placeholderStyle={{ fontSize: 20 }}
				
			/>

			{state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
			
		
			<Spacer/>
			<Spacer>
				<Button 
					style={styles.button} 
					buttonStyle={{backgroundColor: 'black', fontSize: 18, padding: 15, width: 250, borderRadius: 30}} 
					title="Reset Password"
					onPress={() => {
						if (password === newpassword) {
       						 alert("Choose something new");
    					} else navigation.navigate('Signin')}}
    					// use email to find user id and update the password
				/>
			</Spacer>
      			
    		
		

		<View style={styles.log}>
			<NavLink
			style={{
				justifyContent: 'center',
      			alignItems: 'center'
      		}}
			routeName="Signin"
			text="Remembered your password?"
			logintext=" Log in"
			/>
		</View>
		</ImageBackground>
		</View>
	);
};

ResetScreen.navigationOptions = () => {
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
		marginLeft: 15,
	},
	subheader: {
		fontWeight: "800",
		marginLeft: 15,
		fontSize: 17,
		width: "35%"
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
  }
});

export default ResetScreen;