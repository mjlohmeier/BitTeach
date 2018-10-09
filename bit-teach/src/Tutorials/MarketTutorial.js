import React from "react";
import { withRouter } from "react-router-dom";
import coin from "../Img/coin.jpg";

const MarketTutorial = props => {
  return (
    <div className="container p-5" style={{marginBottom:'26%'}}>
      <div className="row justify-content-center">
          <div className="card-group">
            <div className="card" style={{width:'18rem'}}>
              <img className="card-img-top img" src={coin} alt="" />
              <div className="card-body">
                <div className="card-text">
                  <p>
                    TeachCoin is a simulated cryptocurrency. To buy it with some dollars, go to the marketplace.
                  </p>
                  <div>
                  <button
                      className="btn btn-primary"
                      onClick={() => {
                        props.history.push("/tutorials/markettutorial");
                      }}
                    >
                      Next
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

export default withRouter(MarketTutorial);
