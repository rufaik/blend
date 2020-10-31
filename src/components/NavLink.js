import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation'
import { 
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins'


const NavLink = ({ navigation, text, logintext, routeName }) => {
	return(
		<TouchableOpacity style={{fontFamily: 'Poppins_700Bold'}} onPress={() => navigation.navigate(routeName)}>

				<Text style={styles.link}>
					{text}
					<Text style={styles.loglink}>
					{logintext}
				</Text>
				</Text>
			
		</TouchableOpacity>
		);
};

const styles = StyleSheet.create({
	link: {
		color: 'black',
		fontWeight: 'bold',
		lineHeight: 15,
		fontFamily: Platform.OS === 'ios' ? 'Poppins_700Bold' : 'Poppins_700Bold',
		paddingTop:5,
		paddingRight: 5,
		fontSize:12
	},
	loglink: {
		color: 'orange',
		lineHeight: 15,
		fontFamily: Platform.OS === 'ios' ? 'Poppins_700Bold' : 'Poppins_700Bold',
	}
});

export default withNavigation(NavLink);
