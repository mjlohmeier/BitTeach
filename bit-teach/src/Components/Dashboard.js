import React from "react";
import { connect } from "react-redux";
import NavBar from "./Navigation";
import BitCoinResources from "./BitCoinResources";

let Dashboard = ({ users, balance }) => {
  return (
    <div className="container">
      <NavBar />
      <div className="row justify-content-center">
        <div className="jumbotron">
          {users.map(name => {
            return (
              <p>
                Welcome {name.user_name} your balance is: ${balance}
              </p>
            );
          })}
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
  );
};

//a starting point for future work on dashboard functionality
//let SmartDashboard = connect(Dashboard);

// const ConnectDashboard = connect(state => ({
//   balance: state.balance
// }));
export default Dashboard;
