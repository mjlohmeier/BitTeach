import React from 'react';
import { NavLink } from 'react-router-dom';

//wallet, market, notifications, and home:
const NavBar = () => <div className='navbar'>
    <NavLink to="/WLT"> WLT </NavLink>
    <NavLink to="/MKT"> MKT </NavLink>
    <NavLink to="/NTF"> NTF </NavLink>
    <NavLink to="/HOME"> HOME </NavLink>
</div>

//a starting point for future work on notification functionality:
//let SmartNavBar = connect(NavBar)

export default NavBar;