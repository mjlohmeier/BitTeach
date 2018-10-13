import React from "react";
import { connect } from "react-redux";
import NavBar from "./Navigation";

const WalletPage = ({ wallet, teachCoinBalance }) => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <div>Your current balance is TEA {teachCoinBalance}</div>
        <div>
          <p> Your coin address: {wallet.bitCoinAddress}</p>
        </div>
        {wallet.currencies.map((currency,i) => {
          return (
            <div className="card-group" key={i}>
              <div
                className="card forms mb-2"
                style={{ width: "18rem", height: "5rem" }}
              >
                <div className="card-title">
                  <p>Bought Coin: {currency}</p>
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
  teachCoinBalance: state.teachCoinBalance
}));
export default ConnectWallet(WalletPage);
