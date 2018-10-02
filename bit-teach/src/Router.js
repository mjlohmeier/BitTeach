import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";

const Router = () => {
  return (
    <HashRouter>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default Router;
