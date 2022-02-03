import axios from 'axios'
import { AsyncStorage } from 'react-native';

const instance = axios.create({
	baseURL: 'http://038a-2a02-c7f-f245-ff00-fd90-dc26-a5c0-282b.ngrok.io',
 
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