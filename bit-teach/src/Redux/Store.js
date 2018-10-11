import { createStore } from "redux";
import reducer from "./reducers";

let initialState = {
  balance: 0,
  teachCoinBalance:0,
  wallet: {
    bitCoinAddress:'',
    currencies:[]
  },
  marketPlace: [],
  bitTeach:{},
  boughtCurrencies:[],
  currentUser:JSON.parse(localStorage.getItem('user') || '{}'),
  notifications: []
};

let store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
