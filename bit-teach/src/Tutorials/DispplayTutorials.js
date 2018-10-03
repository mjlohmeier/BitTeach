import React from "react";
import { withRouter } from "react-router-dom";
import coin from "../Img/coin.jpg";

const DisplayTutorials = props => {
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
                    To buy currency, click on the curreny you want to buy and it
                    will be added to your wallet.
                  </p>
                  <div>
                  <button
                      className="btn btn-primary"
                      onClick={() => {
                        props.history.push("/tutorials/sell");
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
    </div>
  );
};

export default withRouter(DisplayTutorials);
