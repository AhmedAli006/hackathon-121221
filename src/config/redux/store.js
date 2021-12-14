import { createStore, applyMiddleware } from "redux";
import signupreducer from "../redux/signupreducer";
import loginreducer from '../redux/loginreducer';
import thunk from "redux-thunk";
import { combineReducers } from "redux";

const reducer = combineReducers({
  loginreducer,
  signupreducer,
});

const store = createStore(reducer, applyMiddleware(thunk));
export default store;