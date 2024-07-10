import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import { thunk } from "redux-thunk";
// import loginReducer from "./reducers/login.reducer";
// import { userReducer } from "./reducers/companyUser.reducer";
import loadReducer from "./reducers/load.reducer";
import themeReducer from "./reducers/theme.reducer";

// root reducer
const root_reducer = combineReducers({
  loadReducer,
  // loginReducer,
  // userReducer,
  themeReducer,
});

//for redux devtool extension on chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// store
export const store = legacy_createStore(
  root_reducer,
  composeEnhancers(applyMiddleware(thunk))
);
