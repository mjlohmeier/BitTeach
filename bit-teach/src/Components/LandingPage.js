import React from "react";
import { withRouter, Link } from "react-router-dom";

const LandingPage = props => {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <div className="col">
          <div>
            <h2>Welcome to BitTeach</h2>
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
            <Link to="/login">Click Here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(LandingPage);
