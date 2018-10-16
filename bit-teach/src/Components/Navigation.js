import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const NavBar = ({ notifications, dispatch, history }) => {
  return (
    <nav className="navbar navbar-expand navbar-light mb-4">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mobile-nav"
        >
          <i className="fa fa-bars text-muted" />
        </button>

        <div className="collapse navbar-collapse" id="mobile-nav">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
              <Link className="nav-link text-muted" to="/dashboard">
                {" "}
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-muted" to="/wallet">
                {" "}
                Wallet
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-muted" to="/marketplace">
                {" "}
                Market
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-muted" to="/notifications">
                {" "}
                Notifications {notifications.length}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-muted"
                to="/"
                onClick={() => {
                  dispatch({
                    type: "LOGOUT"
                  });
                  history.push("/");
                }}
              >
                {" "}
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const ConnectNotifications = connect(state => ({
  notifications: state.notifications,
  currentUser: state.currentUser
}));
export default withRouter(ConnectNotifications(NavBar));
