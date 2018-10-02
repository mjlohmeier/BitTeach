import React from 'react';
import { connect } from 'react-redux';
import NavBar from './Navigation';

let Dashboard = () =>
    <div className='dashboard'>
        <NavBar/>
    </div>

//a starting point for future work on dashboard functionality
//let SmartDashboard = connect(Dashboard);

export default Dashboard;