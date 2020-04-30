import * as types from '../actions/actionTypes';

const initialState = {
	childList: [],
	error: false,
};

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case types.REGISTER_CHILD_SUCCESS:
			return {
				...state,
				childList: [...state.childList, payload],
			};

		case types.REGISTER_CHILD_ERROR:
			return {
				...state,
				error: payload,
			};

		case types.GET_CHILD_LIST:
			return {
				...state,
				childList: payload,
			};

		case types.DELETE_CHILD:
			return {
				...state,
				childList: payload,
			};
		default:
			return state;
	}
};
