import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import UserAuthRegisterPage from "./Classes/UserAuthRegisterPage";
import UserAuthLoginPage from "./Classes/UserAuthLoginPage";
import NotificationPage from "./Components/NotificationsPage";
import Dashboard from "./Components/Dashboard";

const Router = () => {
  return (
    <HashRouter>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/register" component={UserAuthRegisterPage} />
          <Route exact path="/login" component={UserAuthLoginPage} />
          <Route exact path="/notifications" component={NotificationPage} />
          <Route exact path="/dashboard" component={Dashboard} /> 
        </Switch>
      </div>
    </HashRouter>
  );
};

export default Router;