import { Login_Response } from "../ActionTypes/userActionType";

// Function to get the initial state from local storage or use the default state
const getInitialState = () => {
  try {
    const storedState = localStorage.getItem("userState");
    return storedState ? JSON.parse(storedState) : {};
  } catch (err) {
    console.log("Error loading state from local storage: ", err);
    return {};
  }
};

const initialState = getInitialState();

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case Login_Response:
      // Update the state with the new login data
      const newState = {
        ...state,
        loginData: action.payload,
      };

      // Save the updated state to local storage
      localStorage.setItem("userState", JSON.stringify(newState));

      return newState;

    default:
      return state;
  }
};

export default userReducer;
