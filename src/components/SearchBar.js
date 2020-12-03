import React from 'react';
import { TextInput, StyleSheet, View, Button } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { 
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins'

const SearchBar = ({ term, onTermChange, onTermSubmit, placeholderText }) => {
	return(
		<View style={styles.backgroundStyle}>
			<Feather name='search' style={styles.iconStyle} color="gray" />
			<TextInput
				autoCapitalize="none"
				autoCorrect={false}
				style={styles.inputStyle}
				placeholder={placeholderText}
				style={{ fontSize: 16, flex: 1, fontFamily: {term} ? 'Poppins_500Medium' : 'Poppins_500Medium' }}
				value={term}
				onChangeText={onTermChange}
				onEndEditing={onTermSubmit}
				
				
			/>
		</View>
		);
};

const styles = StyleSheet.create({
	backgroundStyle:{
		marginTop:10,
		backgroundColor: '#F0EEEF',
		height: 42,
		borderRadius: 10,
		marginHorizontal: 15,
		flexDirection: 'row',
		marginBottom: 10,
	
	},
	inputStyle: {
		fontSize: 16,
		flex: 1,
	},
	iconStyle: {
		fontSize: 17,
		alignSelf: 'center',
		marginHorizontal: 15
	}
});

export default SearchBar;