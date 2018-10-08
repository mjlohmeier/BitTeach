import React, { Component } from "react";
import { connect } from "react-redux";
import Dashboard from "../Components/Dashboard";

class InitialBalance extends Component {
  render() {
    const { balance, currentUser, dispatch } = this.props;

    let setBalance = () => {
      fetch(`http://localhost:5000/api/users/balance`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(currentUser)
      })
        .then(res => res.json())
        .then(data => {
          dispatch({
            type: "UPDATE_BALANCE",
            update: data.initial_balance
          });
        });
    };

    setBalance();

    return <Dashboard currentUser={currentUser} balance={balance} />;
  }
}

const ConnectInitialBalance = connect(state => ({
  balance: state.balance,
  currentUser: state.currentUser
}));
export default ConnectInitialBalance(InitialBalance);
