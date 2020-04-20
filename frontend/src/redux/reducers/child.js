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
    default:
      return state;
  }
};
