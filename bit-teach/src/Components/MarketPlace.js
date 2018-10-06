import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import NavBar from "./Navigation";

const MarketPlace = ({ marketPlace, dispatch, history }) => {
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
                      <p>Price: $ {currency.price} </p>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <button
                          className="btn btn-success"
                          onClick={() =>
                            dispatch({ type: "BUY", 
                            currency: currency })
                          }
                        >
                          Buy
                        </button>
                      </div>
                      <div className="col-6">
                        <button
                          className="btn btn-danger"
                          onClick={() =>
                            dispatch({ type: "SELL_CURRENCY", 
                            id: currency })
                          }
                        >
                          Sell
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
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
    </div>
  );
};

const ConnectMarketPlace = connect(state => ({
  marketPlace: state.marketPlace
}));
export default withRouter(ConnectMarketPlace(MarketPlace));
