import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const NavBar = ({ notifications, dispatch, history }) => {
  return (
    <nav className="navbar bg-dark">
      <NavLink className="navLink text-light" to="/dashboard">
        Dashboard
      </NavLink>
      <NavLink className="navLink text-light" to="/wallet">
        Wallet
      </NavLink>
      <NavLink className="navLink text-light" to="/marketplace">
        Market
      </NavLink>
      <NavLink className="navLink text-light" to="/notifications">
        Notifications {notifications.length}
      </NavLink>
      <NavLink
        className="navLink text-light"
        to="/"
        onClick={() => {
          dispatch({
            type: "LOGOUT"
          });
          history.push("/");
        }}
      >
        Log Out
      </NavLink>
    </nav>
  );
};

const ConnectNotifications = connect(state => ({
  notifications: state.notifications,
  currentUser: state.currentUser
}));
export default withRouter(ConnectNotifications(NavBar));
