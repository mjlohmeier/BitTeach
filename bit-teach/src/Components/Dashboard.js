import React from "react";
import NavBar from "./Navigation";
import BitCoinResources from "./BitCoinResources";

const Dashboard = ({ balance }) => {
  return (
    <div style={{ marginBottom: "26%" }}>
      <NavBar />
      <div className="container p-5">
        <div className="row justify-content-center">
          <div className="jumbotron">
            <div>
              <p>Welcome your balance is: ${balance}</p>
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

export default Dashboard;
