import { createStore, compose, applyMiddleware } from "redux";
// import rootReducer from './reducers/index';

import rootReducer from './Redux/Reducers/index'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware())
  );

export default store;