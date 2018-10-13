import React from "react";
import NavBar from "./Navigation";
import BitCoinResources from "./BitCoinResources";
import { connect } from "react-redux";

const Dashboard = ({ currentUser, DollarBalance }) => {
  return (
    <div>
      <NavBar />
      <div className="container p-5">
        <div className="row justify-content-center">
          <div className="jumbotron">
            <div>
              <p>
                Welcome {currentUser.user_name} your balance is: ${DollarBalance}
              </p>
            </div>
          </div>
          <div className="container text-center">
            <div className="row justify-content-center">
              <p>
                Here are some resources to further educate yourself on BitCoin.
              </p>
              <div className="container">
                <div className="row justify-content-center">
                  <BitCoinResources />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ConnectDashboard = connect(state => ({
  DollarBalance: state.DollarBalance,
  currentUser: state.currentUser
}));
export default ConnectDashboard(Dashboard);
