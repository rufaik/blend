import React, { useContext } from 'react';
import { Text, TextInput, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context  as AuthContext } from '../context/AuthContext'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const AccountScreen = () => {
	const { signout } = useContext(AuthContext)

	return (
		<SafeAreaView forceInset={{ top: 'always' }}>
			<Text style={{ fontSize: 48}}></Text>
			<Spacer/>
			<Spacer/>
			<Spacer/>
			<Spacer>
				<Button style={styles.button} title="Sign Out" buttonStyle={{backgroundColor: 'black', fontSize: 18, padding: 15, width: 250, borderRadius: 30}} onPress={signout} />
			</Spacer>

		</SafeAreaView>
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

