import React, { useState, useContext } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements'
import Spacer from './Spacer';

const AuthForm = ({ headerText, subheaderText, errorMessage, onSubmit, submitButtonText }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('');

	return (
		<>
				<Text style={styles.header} h3>{headerText}</Text>
			<Spacer/>
			<Spacer/>
				<Text style={styles.subheader} h5>{subheaderText}</Text>

			<Spacer />
			<Input 
				inputContainerStyle={{
					backgroundColor: "rgba(247, 247, 247, 0.7)",
					borderWidth: 1,
					borderStyle: "solid",
					borderColor: "rgba(0, 0, 0, 0.05)",
					borderRadius: 10
				}}
				label = "Email" 
				value={email} 
				onChangeText={setEmail}
				autoCapitalize="none"
				autoCorrect={false}
				placeholder="Email"
			/>
			<Spacer />
			<Input 
			inputContainerStyle={{
					backgroundColor: "rgba(247, 247, 247, 0.7)",
					borderWidth: 1,
					borderStyle: "solid",
					borderColor: "rgba(0, 0, 0, 0.05)",
					borderRadius: 10,
					fontSize: 18
				}}
				secureTextEntry
				label = "Password"
				value={password} 
				onChangeText={setPassword}
				autoCapitalize="none"
				autoCorrect={false} 
				placeholder="Password"
				style={{ fontSize: 5 }}
			/>
			{errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
			<Spacer>
				<Button style={styles.button} buttonStyle={{backgroundColor: 'black', fontSize: 18, padding: 15, width: 250, borderRadius: 30}} title={submitButtonText} onPress={() => onSubmit({ email, password })} />
			</Spacer>
			
		</>
		)
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
	

});

export default AuthForm;