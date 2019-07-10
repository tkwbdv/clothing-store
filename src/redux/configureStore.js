import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import userReducer from "../reducers/userReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({
  currentUser: userReducer
}),
  composeEnhancers(applyMiddleware())
);

export default store;