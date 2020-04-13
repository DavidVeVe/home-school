import axios from "axios";

/* import * as types from './actionTypes'; */

export const authUser = (type, payload) => {
  return (dispatch) => {
    let url = null;
    if (type === "Register") {
      console.log("REGISTER DONE");
      url = "http://localhost:3001/register";
      axios
        .post(url, payload)
        .then((response) => console.log(response))
        .catch((error) => console.log({ error }));
    } else if (type === "Login") {
      url = "http://localhost:3001/login";
      axios.post(url, payload).then((response) => console.log(response));
    }
  };
};
