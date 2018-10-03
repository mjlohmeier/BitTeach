import React from "react";
import { NavLink } from "react-router-dom";

//wallet, market, notifications, and home:
const NavBar = () => (
  <nav className="navbar">
    <NavLink className="navLink" to="/home"> Home</NavLink>
    <NavLink className="navLink" to="/wallet">Wallet</NavLink>
    <NavLink className="navLink" to="/marketplace">Market </NavLink>
    <NavLink className="navLink" to="/notifications">Notifications</NavLink>
  </nav>
);

//a starting point for future work on notification functionality:
//let SmartNavBar = connect(NavBar)

export default NavBar;
