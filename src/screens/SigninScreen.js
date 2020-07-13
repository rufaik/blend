import React, { useContext } from 'react';
import { ImageBackground, Text, StyleSheet, View, Button } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = () => {
	const { state, signin, clearErrorMessage } = useContext(Context);

	return(
		<View style={styles.container}>
		<ImageBackground source={require('../images/one.png')} style={styles.image}>
			<NavigationEvents
				onWillFocus={clearErrorMessage}
				/>

			<AuthForm
				headerText="Log in"
				subheaderText="Find, cook and save recipes, see suggested ingredients, and follow your friends."
				errorMessage={state.errorMessage}
				submitButtonText="Log in"
				onSubmit={signin}
			/>
			<NavLink
			routeName="Signup"
			text="New to Blend?"
			logintext=" Sign up"
			/>
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

export default SigninScreen;