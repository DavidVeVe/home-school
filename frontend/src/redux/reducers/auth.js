import * as types from '../actions/actionTypes';

const initialState = {
	userData: null,
};

export default function authReducer(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case types.REGISTER_TEACHER_SUCCESS:
			return {
				...state,
				userData: payload,
			};
		default:
			return state;
	}
}
