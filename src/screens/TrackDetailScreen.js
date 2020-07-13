import React, { useContext } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';

const TrackDetailScreen = ({ navigation }) => {
	const { state } = useContext(TrackContext);
	const _id = navigation.getParam('_id');

	const track = state.find(t => t._id === _id);
	const intialCoords = track.locations[0].coords

	return(
		<View>
			<Text style={{ fontSize: 48}}>{track.name}</Text>
			<MapView
				initialRegion={{
					longitudeDelta: 0.01,
					latitudeDelta: 0.01,
					...intialCoords
				}}
				style={styles.map}
			>
				<Polyline coordinates={track.locations.map(loc => loc.coords)} />
			</MapView>
		</View>
		);
};

const styles = StyleSheet.create({
	map:{
		height: 300
	}
});

export default TrackDetailScreen;