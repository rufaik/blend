import React, { useContext } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context  as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import Spacer from '../components/Spacer';


const SignupScreen = ({ navigation }) => {
	const { state, signup, clearErrorMessage } = useContext(AuthContext);

		
	return( 
		<View style={styles.container}>
		<ImageBackground source={require('../images/one.png')} style={styles.image}>
			<NavigationEvents
				onWillFocus={clearErrorMessage}
			/>
			
      			
    		
			<AuthForm
				headerText="Sign up"
				errorMessage={state.errorMessage}
				submitButtonText="Sign Up"
				onSubmit={signup}
			/>
			<NavLink
			routeName="Signin"
			text="Already signed up?"
			logintext=" Log in"
			/>
		</ImageBackground>
		</View>
	);
};

SignupScreen.navigationOptions = () => {
	return {
		headerShown: false
	};
};

const styles = StyleSheet.create({
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

export default SignupScreen;