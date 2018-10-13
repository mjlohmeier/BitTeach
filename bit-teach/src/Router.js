import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import UserAuthRegisterPage from "./Classes/UserAuthRegisterPage";
import UserAuthLoginPage from "./Classes/UserAuthLoginPage";
import NotificationPage from "./Components/NotificationsPage";
import GetCurrencyDataPage from "./Classes/GetCurrencyDataPage";
import TutorialPage from "./Tutorials/TutorialPage";
import WalletTutorial from "./Tutorials/WalletTutorial";
import GetWalletData from "./Classes/GetWalletData";
import Footer from "./Components/Footer";
import ConnectDashboard from './Components/Dashboard';
import NotFound from "./Components/NotFound";

const Router = () => {
  return (
    <HashRouter>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/register" component={UserAuthRegisterPage} />
          <Route exact path="/login" component={UserAuthLoginPage} />
          <Route exact path="/tutorials" component={TutorialPage} />
          <Route
            exact
            path="/tutorials/markettutorial"
            component={WalletTutorial}
          />
          <Route exact path="/notifications" component={NotificationPage} />
          <Route exact path="/dashboard" component={ConnectDashboard} />
          <Route exact path="/marketplace" component={GetCurrencyDataPage} />
          <Route exact path="/wallet" component={GetWalletData} />
          <Route exact path="*" component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default Router;
