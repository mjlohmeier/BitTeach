import React from "react";
import { connect } from "react-redux";
import NavBar from "./Navigation";

const WalletPage = ({ wallet }) => {
  return (
    <div className="container">
      <NavBar />
      <div className="row justify-content-center">
        {wallet.map(currency => {
          return <div>{currency.price}</div>;
        })}
      </div>
    </div>
  );
};

const ConnectWallet = connect(state => ({
  wallet: state.wallet
}));
export default ConnectWallet(WalletPage);
