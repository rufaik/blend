import createDataContext from './createDataContext';
import trackerApi from '../api/tracker'


const nameReducer = (state, action) => {
	switch (action.type) {
		case 'add_name':
			return {...state, name: action.payload }
		case 'add_recipe':
			return {...state, recipes: ...action.payload }
		case 'add_liked':
			return {...state, liked: ...action.payload }
	
			
		default:
			return [state];
	}
};


const addName = dispatch => async ({ name}) => {
	const response = await trackerApi.post('/name', {name});
	dispatch ({ type: 'add_name', payload: {name} })



const fetchTracks = dispatch => async () => {
	const response = await trackerApi.get('/names');
	dispatch ({ type: 'fetch_tracks', payload: response.data })
};
const createTrack = dispatch => async (liked) => {
	await trackerApi.post('/preference', {itemList, list1, itemList1, word1, itemList4});
};

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




export const { Provider, Context } = createDataContext(
	trackReducer,
	{ fetchTracks, createTrack, editTrack, editTrack1 },
	[]
	);

