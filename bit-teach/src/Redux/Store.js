import { createStore } from "redux";
import reducer from "./reducers";

let initialState = {
  balance: 1000,
  wallet: [],
  marketPlace: [],
  users: [],
  notifications: {
    newUser:'Thank you for signing up.',
    beginingBalance:'Your balance is $1000.00'
  }
};

let store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
