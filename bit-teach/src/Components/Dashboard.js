import React from "react";
import { connect } from "react-redux";
import NavBar from "./Navigation";

let Dashboard = () => (
  <div className="container">
    <NavBar />
    <div className="row justify-content-center">
      <h2>ACCT INFO</h2>
    </div>
  </div>
);

//a starting point for future work on dashboard functionality
//let SmartDashboard = connect(Dashboard);

export default Dashboard;
