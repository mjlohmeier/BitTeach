import React from "react";
import { withRouter, Link} from "react-router-dom";

const LandingPage = props => {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <div className="col">
          <button
            style={Styles.register}
            onClick={() => {
              props.history.push("/register");
            }}
          >
            Register
          </button>
          <p>If you have an account</p><p><Link to="/login">Click Here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(LandingPage);

const Styles = {
  register: {
    color: "white",
    padding: "0.3rem",
    backgroundColor: "blue"
  }
};
