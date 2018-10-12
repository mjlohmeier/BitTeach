import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import NavBar from "./Navigation";
import SendCoinToWalletForm from "../Classes/SendCoinToWalletForm";

const MarketPlace = ({
  marketPlace,
  dispatch,
  history,
  balance,
  teachCoinBalance
}) => {
  return (
    <div>
      <NavBar />
      <div className="container pt-3">
        <div className="row justify-content-center">
          <div className="col-md-6">
            {marketPlace.map(currency => {
              return (
                <div className="card-group" key={currency.id}>
                  <div className="card forms mr-3" style={{ width: "18rem" }}>
                    <div className="card-title p-2">
                      <p>Currency Name: {currency.currency_name}</p>
                    </div>
                    <div className="card-body">
                      <div className="card-text">
                        <p className="card-text">
                          Dollar balance is $ {balance}
                        </p>
                        <p className="card-text">
                          TeachCoin balance is TEA {teachCoinBalance}
                        </p>
                        <p>Coin Price: $ {currency.balance} </p>
                      </div>
                      <div className="row justify-content-center">
                        <div className="col-md-6">
                          <button
                            className="btn btn-success"
                            onClick={() =>
                              dispatch({
                                type: "GET_DOLLARS",
                                currency: currency
                              })
                            }
                          >
                            Get More Dollars
                          </button>
                          <button
                            className="btn btn-success mt-2"
                            onClick={() =>
                              dispatch({
                                type: "BUY_TEACHCOIN",
                                storeTeachCoin: teachCoinBalance
                              })
                            }
                          >
                            Spend $$$ on TEA
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-md-6">
            <div className="col">
              <SendCoinToWalletForm />
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
  bitTeach: state.bitTeach,
  teachCoinBalance: state.teachCoinBalance
}));
export default withRouter(ConnectMarketPlace(MarketPlace));
