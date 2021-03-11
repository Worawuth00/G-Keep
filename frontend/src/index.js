import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  keepCurrentReducer,
  keepFilterReducer,
  keepsListReducer,
} from "./reducers.js/keepReducer";

import "./index.css";
import App from "./App";

const reducer = combineReducers({
  keepList: keepsListReducer,
  keepfilter: keepFilterReducer,
  keepCurrent: keepCurrentReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
