import { createStore, compose } from "redux";
import rootReducer from "./reducer";
import thunk from "redux-thunk";
import { applyMiddleware } from "@reduxjs/toolkit";

const middleware = [thunk];
const composeEnhancers = compose(applyMiddleware(middleware));

const store = createStore(
  rootReducer,
  composeEnhancers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;