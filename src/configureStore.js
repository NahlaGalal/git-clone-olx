import reducers from "./reducers";
import { createStore, applyMiddleware } from "redux";
import createLogger from "redux-logger";
import thunk from "redux-thunk";

const configureStore = () => {
  const middlewares = [thunk];
  if (process.env.NODE_ENV !== "production") {
    middlewares.push(createLogger);
  }
  return createStore(reducers, applyMiddleware(...middlewares));
};

export default configureStore;
