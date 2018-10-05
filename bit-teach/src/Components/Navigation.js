import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

//wallet, market, notifications, and home:
const NavBar = ({ notifications }) => {
  return <nav className="navbar bg-dark">
      <NavLink className="navLink text-light" to="/dashboard">
        Dashboard
      </NavLink>
      <NavLink className="navLink text-light" to="/wallet">
        Wallet
      </NavLink>
      <NavLink className="navLink text-light" to="/marketplace">
        Market{" "}
      </NavLink>
      <NavLink className="navLink text-light" to="/notifications">
        Notifications {notifications.length}
      </NavLink>
    </nav>;
};

const ConnectNotifications = connect(state => ({
  notifications: state.notifications
}));
export default ConnectNotifications(NavBar);
