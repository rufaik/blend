import axios from 'axios'
import { AsyncStorage } from 'react-native';

const instance = axios.create({
	baseURL: 'http://b0f6-2a02-c7f-f245-ff00-dc3c-63f7-a7b2-2c48.ngrok.io',
 
})

instance.interceptors.request.use(
	async (config) => {
		const token = await AsyncStorage.getItem('token');
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(err) => {
		return Promise.reject(err)
	}
	);

export default instance;