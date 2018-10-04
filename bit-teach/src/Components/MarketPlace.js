import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import NavBar from "./Navigation";

const MarketPlace = ({ marketPlace, balance, dispatch, history }) => {
  return (
    <div className="container">
      <NavBar />
      <div className="row justify-content-center">
        {balance}
        {marketPlace.map(currency => {
          return (
            <div key={currency.id}>
              {currency.currency_name}
              {currency.price}
              <button
                onClick={() => dispatch({ type: "BUY", currency: currency })}
              >
                Buy
              </button>
            </div>
          );
        })}
        <div className="container mt-5">
          <button
            onClick={() => {
              history.push("/wallet");
            }}
            className="btn btn-success"
          >
            Go To Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

const ConnectMarketPlace = connect(state => ({
  marketPlace: state.marketPlace,
  balance: state.balance
}));
export default withRouter(ConnectMarketPlace(MarketPlace));
