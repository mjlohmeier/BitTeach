import React from "react";
import { withRouter, Link } from "react-router-dom";
import bitCoin from "../Img/coin.jpg";

const LandingPage = props => {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <div className="col">
          <div>
            <h2>Welcome to BitTeach</h2>
          </div>
          <div className="p-5">
            <img className="img-landing" src={bitCoin} alt="bitcoin" />
          </div>
          <button
            className="btn btn-primary"
            onClick={() => {
              props.history.push("/register");
            }}
          >
            Register
          </button>
          <p>If you have an account</p>
          <p>
            <Link className="login-link" to="/login">
              Click Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(LandingPage);
