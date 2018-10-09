import React from "react";
import { withRouter } from "react-router-dom";
import coin from "../Img/coin.jpg";

const WalletTutorial = props => {
  return (
    <div className="container p-5" style={{marginBottom:'24%'}}>
      <div className="row justify-content-center">
          <div className="card-group">
            <div className="card" style={{width:'18rem'}}>
            <img className="card-img-top img" src={coin} alt="" />
              <div className="card-body">
                <div className="card-text">
                  <p>
                    Private wallets are the best place to store cryptocurrency. To send your coins from your market balance to your wallet, you will need to use your TeachCoin wallet address.
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
  );
};

export default withRouter(WalletTutorial);
