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
          <div className="jumbotron">
            <div>
              <h5><br></br>
                Why BitTeach?
              </h5>
              <p>
                BitTeach is a free and unaffiliated web-based simulation to show you how to transfer cryptocurrency from a marketplace to a private wallet. Private wallets are more secure than marketplaces and usually do not charge additional fees for transactions, so it's a good idea to keep your cryptocurrency in them. The site was built by Matheus Duarte and Michael Lohmeier, with special thanks to the DigitalCrafts team.
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
