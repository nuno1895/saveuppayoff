import axios from 'axios';

export function userSignupRequest(userData) {
	return dispact => {
		return axios.post('/api/users', userData);
	}
}