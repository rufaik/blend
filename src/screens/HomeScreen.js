import '../mockLocation';
import React, { useContext, useCallback } from 'react';
import {  View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Spacer from '../components/Spacer';


const HomeScreen = ({ isFocused }) => {
	// const { state: { recording }, addLocation } = useContext(LocationContext);
	// const callback = useCallback(location => {
	// 	addLocation(location, recording)
	// }, [recording]);
	// const [err] = useLocation(isFocused || recording, callback);
	
	return(
		<View>
			<Spacer />
			<Spacer />
			<Spacer />

			<Text style={styles.header} h3>
				Featured recipes
			</Text>

			<Text style={styles.header} h3>
				This week's stories
			</Text>

			<Text style={styles.header} h3>
				Your communities recipes
			</Text>

		</View>
		);
	
};

HomeScreen.navigationOptions = {
	title: 'Home',
	tabBarIcon: <MaterialCommunityIcons name="home-outline" size={24} color="gray" />
}

const styles = StyleSheet.create({
	header: {
		fontWeight: "800",
		marginLeft: 15
	}
});

export default withNavigationFocus(HomeScreen);