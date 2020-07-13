import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
	switch (action.type) {
		case 'add_error':
			return { ...state, errorMessage: action.payload};
		case 'signin':
			return { errorMessage: '', token: action.payload };
		case 'clear_error_message':
			return { ...state, errorMessage:'' }
		case 'signout':
			return { token: null, errorMessage:'' }
		default:
		return state;
	}
};

const tryLocalSignin = dispatch => async () => {
	const token = await AsyncStorage.getItem('token');
	if (token) {
		dispatch({ type: 'signin', payload: token });
		navigate('TrackList');
	} else {
		navigate('Signup')
	}
}

const clearErrorMessage = dispatch => () => {
	dispatch({ type: 'clear_error_message' });
};

const signup = dispatch =>  async ({ email, password }) => {
	// make api request to sign up with that email and password

	//if we sign up, modify our state and say we are authenticated

	// if signing up fail, we need show an error message to the user
	
	try {
		//make a request
		const response = await trackerApi.post('/signup', {email, password});
		//store the token
		await AsyncStorage.setItem('token', response.data.token);
		//update our state
		dispatch({ type: 'signin', payload: response.data.token});
		//navigate to main flow
		navigate('TrackList')
	} catch (err) {
		dispatch({ 
			type: 'add_error', 
			payload: 'Something went wrong with sign up'
		})
	};
	};


const signin = (dispatch) => async ({ email, password }) => {
		// Try to signin
		// Handle success by updating state
		// Handle failure by showing error message

	try {
		//make a request
		const response = await trackerApi.post('/signin', {email, password});
		//store the token
		await AsyncStorage.setItem('token', response.data.token);
		//update our state
		dispatch({ type: 'signin', payload: response.data.token});
		//navigate to main flow
		navigate('TrackList')
	} catch (err) {
		dispatch({
			type:'add_error',
			payload: 'Something went wrong with sign in'

		})
	}
}

const signout = dispatch => async () => {
		await AsyncStorage.removeItem('token');
		dispatch({ type:'signout' })
		navigate('loginFlow')
	}


export const { Provider, Context } = createDataContext(
	authReducer,
	{ signin, signout, signup, clearErrorMessage,tryLocalSignin },
	{ token: null, errorMessage: '' }
);