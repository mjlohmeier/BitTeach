import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

//wallet, market, notifications, and home:
const NavBar = ({ notifications }) => (
  <nav className="navbar">
    <NavLink className="navLink" to="/dashboard">
      Dashboard
    </NavLink>
    <NavLink className="navLink" to="/wallet">
      Wallet
    </NavLink>
    <NavLink className="navLink" to="/marketplace">
      Market{" "}
    </NavLink>
    <NavLink className="navLink" to="/notifications">
      Notifications {notifications.length}
    </NavLink>
  </nav>
);

const ConnectNotifications = connect(state => ({
  notifications: state.notifications
}));
export default ConnectNotifications(NavBar);
