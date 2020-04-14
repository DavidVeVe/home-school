import axios from 'axios';

import * as types from './actionTypes';

export const authUser = (type, payload) => {
	return (dispatch) => {
		let url = null;
		if (type === 'Register') {
			url = 'http://localhost:3001/register';
			axios
				.post(url, payload)
				.then((data) => {
					console.log(data);
					return dispatch({
						type: types.REGISTER_USER_SUCCESS,
						payload: JSON.parse(data.config.data),
					});
				})
				.catch((error) =>
					dispatch({ type: types.REGISTER_USER_ERROR, payload: error })
				);
		} else if (type === 'Login') {
			url = 'http://localhost:3001/login';
			axios.post(url, payload).then((response) => console.log(response));
		}
	};
};
