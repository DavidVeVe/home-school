import axios from 'axios';

import * as types from './actionTypes';

export const authRegisterUser = (action) => {
	return (dispatch) => {
		const authData = {
			email: action.email,
			password: action.password,
			returnSecureToken: true,
		};

		if (action.accType === 'Profesor') {
			axios
				.post(
					'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBDPe2PY7E_oA0n-pIehvXLNTL2wnG4x_g',
					authData
				)
				.then((response) =>
					dispatch({
						type: types.REGISTER_TEACHER_SUCCESS,
						payload: { ...response.data, ...action.accType },
					})
				)
				.catch((error) => dispatch({ type: '' }));
		}
	};
};

export const authLoginUser = (action) => {
	return (dispatch) => {
		const authData = {
			email: action.email,
			password: action.password,
			returnSecureToken: true,
		};
		axios.post(
			'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBDPe2PY7E_oA0n-pIehvXLNTL2wnG4x_g',
			authData
		);
	};
};
