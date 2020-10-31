import '../mockLocation';
import React, { useContext, useCallback } from 'react';
import {  StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Spacer from '../components/Spacer';


const TrackCreateScreen = ({ isFocused }) => {
	const { state: { recording }, addLocation } = useContext(LocationContext);
	const callback = useCallback(location => {
		addLocation(location, recording)
	}, [recording]);
	const [err] = useLocation(isFocused || recording, callback);
	
	return(
		<SafeAreaView forceInset={{ top: 'always' }}>
			<Spacer />
			<Text style={styles.header} h3>Cooking</Text>
			<Text style={styles.header} h5>Choose your cuisine or dish type so Blend can suggest the best ingredients and flavours.</Text>
			<Spacer />
			<TrackForm />
		</SafeAreaView>
		);
};

// TrackCreateScreen.navigationOptions = {
//   title: 'Cook',
//   tabBarIcon: <MaterialCommunityIcons name="pot-mix" size={24} color="gray" />

// }

const styles = StyleSheet.create({
	header: {
		fontWeight: "800",
		marginLeft: 15
	}
});

export default withNavigationFocus(TrackCreateScreen);