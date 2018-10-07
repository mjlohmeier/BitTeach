import React from "react";
import { connect } from "react-redux";
import NavBar from "./Navigation";

const WalletPage = ({ wallet, balance }) => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <div>Your current balance is: ${balance}</div>
        {wallet.map(currency => {
          return (
            <div className="card-group" key={currency.id}>
              <div
                className="card forms mb-2"
                style={{ width: "18rem", height: "5rem" }}
              >
                <div className="card-title">
                  <p className="p-2">Currency Name: {currency.currency_name}</p>
                  <p>Market Value: {currency.marketvalue}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ConnectWallet = connect(state => ({
  wallet: state.wallet,
  balance: state.balance
}));
export default ConnectWallet(WalletPage);
