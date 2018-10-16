import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import NavBar from "./Navigation";
import SendCoinToWalletForm from "../Classes/SendCoinToWalletForm";

const MarketPlace = ({
  marketPlace,
  dispatch,
  history,
  DollarBalance,
  teachCoinBalance
}) => {
  return (
    <div>
      <NavBar />
      <div className="container pt-3">
        <div className="row justify-content-center">
          <div className=" xs-12 md-6">
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
                          Dollar balance is $ {DollarBalance}
                        </p>
                        {teachCoinBalance ? (
                          <p className="card-text p-2">
                            TeachCoin balance is TEA {teachCoinBalance}
                          </p>
                        ) : (
                          <p className="card-text p-2">
                            New TeachCoin Balance is TEA {teachCoinBalance}
                          </p>
                        )}
                      </div>
                      <div className="row justify-content-center">
                        <div className="col-md-6">
                          <button
                            className="btn btn-success"
                            onClick={() =>
                              dispatch({
                                type: "GET_DOLLARS",
                                DollarBalance: DollarBalance
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
                                storeTeachCoin: teachCoinBalance,
                                storeinWallet: teachCoinBalance
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
          <div className="row justify-content-center">
            <div className=" xs-12 md-6">
              <SendCoinToWalletForm />
            </div>
          </div>
        </div>
      </div>
      <div className="container p-2">
        <div className="row justify-content-center">
          <div className="xs-12 md-6 pt-2">
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
  DollarBalance: state.DollarBalance,
  bitTeach: state.bitTeach,
  teachCoinBalance: state.teachCoinBalance
}));
export default withRouter(ConnectMarketPlace(MarketPlace));
