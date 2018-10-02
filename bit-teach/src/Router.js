import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Dashboard from "./Components/Dashboard";

const Router = () => {
  return (
    <HashRouter>
      <div>
        <Switch>
          <Route exact path="/landingpage" component={LandingPage} />
          <Route exact path="/dashboard" component={Dashboard} /> 
        </Switch>
      </div>
    </HashRouter>
  );
};

export default Router;