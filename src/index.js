import React from "react";
import ReactDOM from "react-dom";
import Router from "./components/Router";

import "./style/main-styles/normalize.css";
import "./style/main-styles/style.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import { Provider } from "react-redux";
import configureStore from "./configureStore";

const store = configureStore();

library.add(fas);
ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);
