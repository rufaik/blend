import createDataContext from './createDataContext';
import trackerApi from '../api/tracker'
import { navigate } from '../navigationRef';
import axios from 'axios'


const trackReducer = (state, action) => {
	switch (action.type) {
		case 'add_error':
			return { ...state, errorMessage: action.payload};
		case 'fetch_tracks':
			return action.payload;
		case 'change_id':
			return { ...state, _id: action.payload };
		case 'change_userid':
			return { ...state, userId: action.payload };
		case 'change_cuisine':
			return { ...state, cuisine: action.payload };
		case 'change_diet':
			return { ...state, diet: action.payload };
		case 'change_allergies':
			return { ...state, allergies: action.payload };
		case 'change_avoid':
			return { ...state, avoid: action.payload };
		case 'change_word':
			return { ...state, word: action.payload };
		case 'change_liked':
			return { ...state, liked: action.payload };
		// case 'create_track':
		// 	return console.log("payload")
		// case 'edit_track':
		// 	return state.map((preference) =>{
		// 		return state[0]._id === action.payload.id
		// 		? [action.payload]
		// 		: preference
		// 	});
			
		default:
			return [state];
	}
};

const fetchTracks = dispatch => async () => {
	const response = await trackerApi.get('/choose');
	dispatch ({ type: 'fetch_tracks', payload: response.data })
	// console.log("response", response)
};

const changeName1 = dispatch => (name) => {
	dispatch({ type: 'change_name', payload: name })
}

const createTrack1 = dispatch => (list1) => {
	dispatch({ type: 'change_cuisine', payload: list1 })
}

const createTrack2 = dispatch => (itemList) => {
	dispatch({ type: 'change_diet', payload: itemList })
}

const createTrack3 = dispatch => (itemList4) => {
	dispatch({ type: 'change_allergies', payload: itemList4 })
}

const createTrack4 = dispatch => (itemList1) => {
	dispatch({ type: 'change_avoid', payload: itemList1 })
}

const createTrack5 = dispatch => (word1) => {
	dispatch({ type: 'change_word', payload: word1 })
}

const changeLiked = dispatch  => (recipeIds) => {
	dispatch({ type: 'change_liked', payload: recipeIds })
}


const sendTrack1 = dispatch => async (itemList, list1, itemList1, word1, itemList4) => {
	// console.log("heyyyyy", itemList, list1, itemList1, word1, itemList4)
	try {
	const response = await trackerApi.post('/preferences', {itemList, list1, itemList1, word1, itemList4});
// console.log("response", response)
} catch (err) {
		dispatch({
			type:'add_error',
			payload: 'Something went wrong'

		})
	}
}

const sendTrack = (dispatch)  => async ({ itemList, list1, itemList1, word1, itemList4 }) => {
	// console.log("sending")
	try {
		//make a request
		const response = await trackerApi.post('/chooses', {itemList, list1, itemList1, word1, itemList4});
		// console.log("response", response)
		dispatch({ type: 'change_id', payload: response.data._id })
		dispatch({ type: 'change_userid', payload: response.data.userId })
		//navigate to main flow
		
	} catch (err) {
		dispatch({
			type:'add_error',
			payload: 'Something went wrong'

		})
	}
}

const updatepref = (dispatch)  => async ({ userId, newitemList, newlist1, newitemList1, newword1, newitemList4 }) => {
	try {
		//make a request
		// console.log('try')
		const response = await trackerApi.put('/updatepref', {userId, newitemList, newlist1, newitemList1, newword1, newitemList4});
		// console.log('done')
		//navigate to main flow
		navigate('TrackList')
	} catch (err) {
		dispatch({
			type:'add_error',
			payload: 'I didnt update'

		})
	}
}

const changeLiked1 = (dispatch)  => async ({ recipeIds}) => {
	console.log("changeLiked", recipeIds )
	try {
		//make a request
		// console.log('try')
		const response = await trackerApi.put('/names', {recipeIds});
		dispatch({ type: 'change_liked', payload: recipeIds })
		// console.log('done')
		//navigate to main flow
	} catch (err) {
		dispatch({
			type:'add_error',
			payload: 'I didnt update'

		})
	}
}



const editTrack = dispatch => {

	return (id, itemList, list1, itemList1, word1, itemList4) => {
		dispatch({ 
			type: 'edit_track', 
			payload: { id, itemList, list1, itemList1, word1, itemList4 } 
		});
	};
};

const editTrack1 = dispatch => async (itemList, list1, itemList1, word1, itemList4) => {
	
	await trackerApi.put('/preference', {itemList, list1, itemList1, word1, itemList4});
};

// list1 = cuisine = list1
// itemList = diet = list
// itemList4 = allergies =list4
// itemList1 = avoid = list2





export const { Provider, Context } = createDataContext(
	trackReducer,
	{ fetchTracks, createTrack1, createTrack2, createTrack3, updatepref, changeLiked, createTrack4, createTrack5, sendTrack, editTrack, editTrack1 },
	{ cuisine: [], diet: [], allergies: [], avoid: [], word: [], _id:'', userId:'', liked: ["kemi"] }
	);

