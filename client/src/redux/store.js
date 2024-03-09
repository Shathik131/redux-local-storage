import { createStore, applyMiddleware, combineReducers } from "redux";
import {thunk} from "redux-thunk"; 
import UserReducer from "./Reducer/userReducer";

const rootReducer = combineReducers({ 
  userReducer: UserReducer,
});

const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
