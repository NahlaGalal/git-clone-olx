import React from "react";
import ReactDOM from "react-dom";
import Router from "./components/Router";

import "./style/main-styles/normalize.css";
import "./style/main-styles/style.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);

library.add(fas);
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router />
  </Provider>,
  document.getElementById("root")
);
