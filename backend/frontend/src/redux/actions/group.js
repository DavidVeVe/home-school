import * as types from './actionTypes';
import axios from 'axios';

export const getGroupOfChild = (childId, groupId) => async (dispatch) => {
	let url = 'http://localhost:3001/group';
	const { data } = await axios.post(url, { groupId, childId });
	console.log(data);
};
