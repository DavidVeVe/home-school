import axios from "axios";

import * as types from "./actionTypes";

<<<<<<< HEAD
export const authRegisterUser = (action) => {
  return (dispatch) => {
    const authData = {
      email: action.email,
      password: action.password,
      returnSecureToken: true,
    };

    if (action.accType === "Profesor") {
      axios
        .post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBDPe2PY7E_oA0n-pIehvXLNTL2wnG4x_g",
          authData
        )
        .then((response) =>
          dispatch({
            type: types.REGISTER_TEACHER_SUCCESS,
            payload: { ...response.data, ...action.accType },
          })
        )
        .catch((error) => dispatch({ type: "" }));
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
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBDPe2PY7E_oA0n-pIehvXLNTL2wnG4x_g",
      authData
    );
  };
};
=======
export const authUser = (userData) => {
	return (dispatch) => {
		let url = null;
		if (userData.length === 7) {
			url = 'http://localhost:3001/register';
			axios.post(url, userData).then((response) => console.log(response));
		} else if (userData.length === 2) {
			url = 'http://localhost:3001/login';
			axios.post(url, userData).then((response) => console.log(response));
		}
	};
};
>>>>>>> 4a733467f82770fab716cde2af5c94753138bbca
