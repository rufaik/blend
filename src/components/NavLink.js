import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation'

const NavLink = ({ navigation, text, logintext, routeName }) => {
	return(
		<TouchableOpacity onPress={() => navigation.navigate(routeName)}>
			<Spacer>
				<Text style={styles.link}>
					{text}
					<Text style={styles.loglink}>
					{logintext}
				</Text>
				</Text>
			</Spacer>
		</TouchableOpacity>
		);
};

const styles = StyleSheet.create({
	link: {
		color: 'black',
		fontWeight: 'bold'
	},
	loglink: {
		color: 'orange'
	}
});

export default withNavigation(NavLink);
