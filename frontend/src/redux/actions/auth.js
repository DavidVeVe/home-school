import axios from 'axios';

import * as types from './actionTypes';

export const authUser = (type, payload) => (dispatch) => {
	let url = null;
	if (type === 'Register') {
		url = 'http://localhost:3001/register';
		axios
			.post(url, payload)
			.then((data) => {
				console.log(data);
				localStorage.setItem('userData', data.config.data);
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
		axios
			.post(url, payload)
			.then((data) => {
				console.log(data.data._doc);
				localStorage.setItem('userData', JSON.stringify(data.data._doc));
				return dispatch({
					type: types.LOGIN_USER_SUCCESS,
					payload: data.data._doc,
				});
			})
			.catch((error) =>
				dispatch({ type: types.LOGIN_USER_ERROR, payload: error })
			);
	}
};

export const validateUser = () => {
	return (dispatch) => {
		const userData = JSON.parse(localStorage.getItem('userData'));
		if (userData) {
			return dispatch({ type: types.VALIDATE_USER, payload: userData });
		}
	};
};

export const logoutUser = () => (dispatch) => {
	localStorage.removeItem('userData');
	return dispatch({ type: types.LOGOUT_USER_SUCCESS });
};
