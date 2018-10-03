import React from "react";
import { withRouter } from "react-router-dom";
import coin from "../Img/coin.jpg";

const SellCoinTutorial = props => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col">
          <div className="card-group">
            <div className="card">
              <img className="card-img-top img" src={coin} alt="" />
              <div className="card-body">
                <div className="card-text">
                  <p>
                    To sell currency, click on the curreny you want to sell and it
                    will be removed from your wallet.
                  </p>
                  <div>
                  <button
                      className="btn btn-primary"
                      onClick={() => {
                        props.history.push("/login");
                      }}
                    >
                      Go To Log In
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SellCoinTutorial);
