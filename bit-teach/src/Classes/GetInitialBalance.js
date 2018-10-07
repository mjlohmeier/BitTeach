import React, { Component } from "react";
import { connect } from "react-redux";
import Dashboard from "../Components/Dashboard";

class InitialBalance extends Component {
  componentDidMount() {
    fetch(`http://localhost:5000/api/users/balance`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        this.props.dispatch({
          type: "REGISTER",
          get: data.initial_balance
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const {balance} = this.props;
    return <Dashboard balance={balance}  />;
  }
}

const GetInitialBalance = connect(state => ({
  balance: state.balance,
}));
export default GetInitialBalance(InitialBalance);
