import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./Router";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import registerServiceWorker from "./registerServiceWorker";

const App = (
  <Provider store={store}>
    <Router />
  </Provider>
);

ReactDOM.render(App, document.getElementById("root"));
registerServiceWorker();
