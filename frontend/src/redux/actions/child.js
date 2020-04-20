import * as types from './actionTypes';

export const childRegister = (form) => (dispatch) => {
  return dispatch({
    type: types.REGISTER_CHILD_SUCCESS,
    payload: form,
  });
};
