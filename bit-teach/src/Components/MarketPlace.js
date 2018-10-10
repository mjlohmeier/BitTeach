import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import NavBar from "./Navigation";
import SendCoinToWalletForm from "../Classes/SendCoinToWalletForm";

const MarketPlace = ({ marketPlace, dispatch, history, balance, bitTeach }) => {
  return (
    <div>
      <NavBar />
      <div className="container pt-3">
        <div className="row justify-content-center">
          {marketPlace.map(currency => {
            return (
              <div className="card-group" key={currency.id}>
                <div className="card forms mr-3" style={{ width: "18rem" }}>
                  <div className="card-title p-2">
                    <p>Currency Name: {currency.currency_name}</p>
                  </div>
                  <div className="card-body">
                    <div className="card-text">
                      <p className="card-text"> Balance is $ {balance}</p>
                      <p>Coin Price: $ {currency.price} </p>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <button
                          className="btn btn-success"
                          onClick={() =>
                            dispatch({
                              type: "BUY_COIN",
                              currency: currency
                            })
                          }
                        >
                          Get More Dollars
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="container mt-2">
            <div className="row justify-content-center">
              <div className="col-4">
                <SendCoinToWalletForm />
              </div>
            </div>
          </div>
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
    </div>
  );
};

const ConnectMarketPlace = connect(state => ({
  marketPlace: state.marketPlace,
  balance: state.balance,
  bitTeach: state.bitTeach
}));
export default withRouter(ConnectMarketPlace(MarketPlace));
//buy teachcoin: subtract dollar add to teachcoin balance
