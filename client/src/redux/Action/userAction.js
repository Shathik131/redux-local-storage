import axios from "axios";
import { Login_Response, SignUp_Response } from "../ActionTypes/userActionType";

const setData = (response) => {
  return {
    type: Login_Response,
    payload: response,
  };
};

// sign-up
export const handleSignUpAction = (payload) => {
  // console.log("<><><>", payload);

  return async (dispatch) => {
    await axios
      .post("http://localhost:5000/sign-up", payload)
      .then((res) => {
        console.log("####", res);
        if (res.status === 200) {
          dispatch(setData(res.data));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// login
export const handleLoginAction = (payload) => {
  console.log("oooo", payload);

  return async (dispatch) => {
    await axios
      .post("http://localhost:5000/sign-in", payload)
      .then((res) => {
        console.log("####", res.data);
        if (res.status === 200) {
          dispatch(setData(res.data));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
