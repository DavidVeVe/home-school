import * as types from './actionTypes';
import axios from 'axios';

export const childRegister = (child) => (dispatch) => {
	let url = 'http://localhost:3001/child';
	axios.post(url, child).then(({ data }) =>
		dispatch({
			type: types.REGISTER_CHILD_SUCCESS,
			payload: data,
		})
	);
};

export const deleteChild = (data) => (dispatch) => {
	let url = 'http://localhost:3001/child';
	axios.delete(url, { data }).then(({ data }) => {
		console.log(data);
		return dispatch({
			type: types.DELETE_CHILD,
			payload: data,
		});
	});
};

export const getChilds = (id) => (dispatch) => {
	let url = 'http://localhost:3001/childs';
	axios
		.post(url, { id })
		.then(({ data }) => {
			console.log(data);
			dispatch({ type: types.GET_CHILD_LIST, payload: data });
		})
		.catch((error) => console.error(error));
};
