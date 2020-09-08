import React from 'react';
import { TextInput, StyleSheet, View, Button } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit, placeholderText }) => {
	return(
		<View style={styles.backgroundStyle}>
			<Feather name='search' style={styles.iconStyle} color="gray" />
			<TextInput
				autoCapitalize="none"
				autoCorrect={false}
				style={styles.inputStyle}
				placeholder={placeholderText}
				value={term}
				onChangeText={onTermChange}
				onEndEditing={onTermSubmit}
			/>
		</View>
		);
};

const styles = StyleSheet.create({
	backgroundStyle:{
		marginTop:20,
		backgroundColor: '#F0EEEF',
		height: 42,
		borderRadius: 10,
		marginHorizontal: 15,
		flexDirection: 'row',
		marginBottom: 10,
	
	},
	inputStyle: {
		fontSize: 16,
		flex: 1
	},
	iconStyle: {
		fontSize: 17,
		alignSelf: 'center',
		marginHorizontal: 15
	}
});

export default SearchBar;