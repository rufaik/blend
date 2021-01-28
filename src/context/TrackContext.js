import createDataContext from './createDataContext';
import trackerApi from '../api/tracker'


const trackReducer = (state, action) => {
	switch (action.type) {
		case 'fetch_tracks':
			return action.payload;
		case 'edit_track':
			return state.map((preference) =>{
				return state[0]._id === action.payload.id
				? [action.payload]
				: preference
			});
			
		default:
			return [state];
	}
};

const fetchTracks = dispatch => async () => {
	const response = await trackerApi.get('/preference');
	dispatch ({ type: 'fetch_tracks', payload: response.data })
};
const createTrack = dispatch => async (itemList, list1, itemList1, word1, itemList4) => {
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

