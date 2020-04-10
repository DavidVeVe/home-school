import axios from "axios";

import * as types from "./actionTypes";

export const authUser = (userData) => {
  return (dispatch) => {
    let url = null;
    if (userData.length === 7) {
      url = "http://localhost:3001/register";
      axios.post(url, userData).then((response) => console.log(response));
    } else if (userData.length === 2) {
      url = "http://localhost:3001/login";
      axios.post(url, userData).then((response) => console.log(response));
    }
  };
};
