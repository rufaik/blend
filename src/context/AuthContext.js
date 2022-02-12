import axios from 'axios'
import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';


const authReducer = (state, action) => {
	console.log("line 9", state)
	switch (action.type) {
		case 'add_error':
			return { ...state, errorMessage: action.payload};
		case 'placeholder':
			return { ...state, email: action.payload};
		case 'signin':
			return { errorMessage: '', token: action.payload};
		case 'signin1':
			return { errorMessage: '', token: action.payload };
		case 'signup':
			return { errorMessage: '', token: action.payload };
		case 'create_track':
			return { cuisine: action.payload };
		case 'googlesign':
			return { token: null, errorMessage:'' }
		case 'reset':
			return { token: null, errorMessage:'' }
		case 'clear_error_message':
			return { ...state, errorMessage:'' }
		case 'signout':
			return { token: null, errorMessage:'' }
		case 'add_name':
			return { ...state, prof: action.payload }
		case 'resultss':
			return {...state}
		default:
		return state;
	}
};

const addname = dispatch => async ({ prof }) => {
	console.log("nammmmmmmmmmmmme", prof)
	try {
	const response1 = await trackerApi.post('/names', {prof});
	console.log("name", prof)
	// dispatch ({ type: 'add_name', payload: prof })

} catch (err) {
		dispatch({
			type:'add_error',
			payload: 'Something went wrong'

		})
	}
}



const tryLocalSignin = dispatch => async () => {
	const token = await AsyncStorage.getItem('token');
	if (token) {
		dispatch({ type: 'signin', payload: token });
		navigate('Home');
	} else {
		navigate('SplashScreen1')
	}
}

const clearErrorMessage = dispatch => () => {
	dispatch({ type: 'clear_error_message' });
};

const signup = dispatch =>  async ({ prof, email, password }) => {
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
		dispatch({ type: 'placeholder', payload: email});
		dispatch ({ type: 'add_name', payload: prof })
		//navigate to main flow
		console.log("signup", response)
		navigate('Home', {fetch:true})
	} catch (err) {
		dispatch({ 
			type: 'add_error', 
			payload: 'Something went wrong with sign up'
		})
	};
	};

const red = "red"

const createtrack = dispatch => async (itemList, list1, itemList1, word1, itemList4, red) => {
	console.log("heyyyyy", itemList, list1, itemList1, word1, itemList4)
	

	try {
		const response2 = await trackerApi.post('/preference', {itemList, list1, itemList1, word1, itemList4});
		dispatch({ type: 'create_track', payload: list1 })

} catch (err) {
		dispatch({
			type:'add_error',
			payload: 'Something went wrong'

		})
	};
};





const googlesign = (dispatch) => async () => {
		// Try to signin
		// Handle success by updating state
		// Handle failure by showing error message

	try {
		//make a request
		// const response = await trackerApi.post('/signin', {email, password});
		//store the token
		await AsyncStorage.setItem('token', response.data.token);
		//update our state
		dispatch({ type: 'signin', payload: response.data.token});
		//navigate to main flow
		// navigate('TrackList')
	} catch (err) {
		dispatch({
			type:'add_error',
			payload: 'Something went wrong with sign in'

		})
	}
}
// const signInWithGoogleAsync = () => async () => {
//   try {
//     const result = await Google.logInAsync({
//       // androidClientId: YOUR_CLIENT_ID_HERE,
//       iosClientId:'685019101843-oep14jg11h5qpnv2qrqrpqq1jlnl0e7f.apps.googleusercontent.com',
//       scopes: ['profile', 'email'],
//     });
//       await AsyncStorage.setItem('token', response.data.token);
//       dispatch({ type: 'signin', payload: response.data.token});
//       console.log(response.data.token)
//     if (result.type === 'success') {
//     	navigation.navigate('Home')
//       console.log(response.data.token)
//       return response.data.token;
//     } else {
//       return { cancelled: true };
//     }
//   } catch (e) {
//     return { error: true };
//   }
// }
const signin = (dispatch) => async ({ email, password }) => {

	console.log("120", email)
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
		navigate('Home')
	} catch (err) {
		dispatch({
			type:'add_error',
			payload: 'Something went wrong with sign in'

		})
	}
}
const signin1 = (dispatch) => async ({ email, password }) => {
	console.log("144", email)
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
		dispatch({ type: 'placeholder', payload: response.data});

		console.log("REPO", response)
		//navigate to main flow
		navigate('mainFlow')

	} catch (err) {
		dispatch({
			type:'add_error',
			payload: 'Something went wrong with sign in'

		})
	}
}


const reset = (dispatch)  => async ({ email, newpassword }) => {
	try {
		//make a request
		const response = await trackerApi.put('/reset', {email, newpassword});
		
		//navigate to main flow
		navigate('Signin')
	} catch (err) {
		dispatch({
			type:'add_error',
			payload: 'Something went wrong'

		})
	}
}

const updatepref1 = (dispatch)  => async ({ userId, newitemList, newlist1, newitemList1, newword1, newitemList4 }) => {
	try {
		//make a request
		console.log('try')
		const response = await trackerApi.put('/updatepref', {userId, newitemList, newlist1, newitemList1, newword1, newitemList4});
		console.log('done')
		//navigate to main flow
		navigate('TrackList')
	} catch (err) {
		dispatch({
			type:'add_error',
			payload: 'I didnt update'

		})
	}
}


// const addname = (dispatch)  => async ({ name, mine, liked, fave, extra,}) => {
// 	try {
// 		//make a request
// 		console.log('try')
// 		const response = await trackerApi.put('/updatepref', {userId, newitemList, newlist1, newitemList1, newword1, newitemList4});
// 		console.log('done')
// 		//navigate to main flow
// 		navigate('TrackList')
// 	} catch (err) {
// 		dispatch({
// 			type:'add_error',
// 			payload: 'I didnt update'

// 		})
	
// 	}

// }
const profile = (dispatch)  => async ({ result }) => {
	// const image = result
	console.log("ass", result)
	const logo = require('../images/splash1.png')

// const image = {result}
// const data = new FormData();
// data.append('image', result);

// var formdata = new FormData();
// formdata.append("result", result[0], "IMG_5868.PNG");

    let formData = new FormData();

    formData.append("image", result.uri, "acorn.png");
    // formData.append("imageType", "Image_URL_1");
    // formData.append("file", "Image_URL_1");

// bob@bob.com

const dats = 


console.log("jjjk", formData)

	
	try {
		//make a request
		console.log('bags')
		const token = await AsyncStorage.getItem('token');
		const response = await axios.post('http://5f71d85fa69f.ngrok.io/image-upload', formData._parts[0], {
                headers: {
                    "content-type": "multipart/form-data",
                    Authorization:`Bearer ${token}`
                    // "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZWUzNjFkMmYzNDQ1Njc5OTE5YjE4ODEiLCJpYXQiOjE1OTE5NjY0NDd9.e-xdaHaeCTEeNHf9s_sQSaWVm2OaowJAF4Rjo7zUhxA"
                },
            })
            .then(function () {
                console.log("SUCCESS!!");
            });
	} catch (err) {
		// dispatch({
		// 	type:'add_error',
		// 	payload: 'I didnt change'

		// })
		console.log(err.message)
	}
}







const signout = dispatch => async () => {
		await AsyncStorage.removeItem('token');
		dispatch({ type:'signout' })
		navigate('loginFlow')
	}


export const { Provider, Context } = createDataContext(
	authReducer,
	{ signin1, signin, addname, signout, googlesign, signup, reset, createtrack, updatepref1, profile, clearErrorMessage,tryLocalSignin },
	{ token: null, errorMessage: '', prof:'', email:'', cuisine: '' }
);