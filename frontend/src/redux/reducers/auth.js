import * as types from '../actions/actionTypes';

const initialState = {
	userData: null,
	error: false,
};

export default function authReducer(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case types.REGISTER_USER_SUCCESS:
			return {
				...state,
				userData: payload,
			};

		case types.REGISTER_USER_ERROR:
			return {
				...state,
				error: payload,
			};

		case types.LOGIN_USER_SUCCESS:
			return {
				...state,
				userData: payload,
			};

		case types.LOGIN_USER_ERROR:
			return {
				...state,
				error: payload,
			};
		default:
			return state;
	}
}
