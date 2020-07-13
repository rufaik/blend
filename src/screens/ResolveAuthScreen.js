import React, { useContext, useEffect } from 'react';
import { Context  as AuthContext } from '../context/AuthContext'

//CREATED BECAUSE OF WIERD DELAY

const ResolveAuthScreen = ({ navigation, text, routeName }) => {
	const { tryLocalSignin } = useContext(AuthContext);

	useEffect(() => {
		tryLocalSignin();
	}, [])

	return null;
};


export default ResolveAuthScreen;