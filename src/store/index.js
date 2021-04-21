import { createStore } from "redux";

import { rootReducer } from "./reducers";

import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const defaultState = {
  todos: [],
};

export default createStore(rootReducer, defaultState, applyMiddleware(thunk));
