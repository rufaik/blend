import React from 'react';
import { View, Text,StyleSheet, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';


const Header = ({ navigation, titleHeader, miniHeader }) => {
	return (
		<View style={styles.navHeader}>
      		<Entypo style={styles.leftIcon} name="chevron-left" size={24} color="black" onPress={() => {
					
			navigation.navigate('TrackList')}
			} />
      		<Text style={styles.titleHeader}>{titleHeader} </Text>
      		<TouchableOpacity onPress={() => {
					
			navigation.navigate('All')}
		}>
			<Text style={styles.nextheader}>{miniHeader}</Text>
			</TouchableOpacity>
      </View>
      )
};

const styles = StyleSheet.create({
	leftIcon:{
		position: 'absolute',
		left:20,
		top:37,
	},
	navHeader: {
		flexDirection: 'row',
		justifyContent: 'center',
		paddingTop:35,
	},
	titleHeader:{
	fontSize: 20,
	fontWeight: "500",
	fontFamily: 'Poppins_700Bold',
 },
 nextheader: {
    fontSize: 15,
    fontWeight: "700",
    marginLeft: 10,
    color: '#F68951',
    fontFamily: 'Poppins_600SemiBold',
    position: 'absolute',
	right:-110,
	top:3,
		
  },
});

export default withNavigation(Header);