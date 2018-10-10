import React, { Component } from "react";
import { connect } from "react-redux";
import Dashboard from "../Components/Dashboard";

class InitialBalance extends Component {
  componentDidMount() {
    fetch(
      `http://localhost:5000/api/users/${this.props.currentUser.id}/balance`
    )
      .then(res => res.json())
      .then(data => {
        this.props.dispatch({
          type: "SET_BALANCE",
          setBalance: data.initial_balance
        });
      })
      .then(() => {
        fetch(
          `http://localhost:5000/api/user/${
            this.props.currentUser.id
          }/coin_address`
        )
          .then(res => res.json())
          .then(data => {
            this.props.dispatch({
              type: "SET_COIN_ADDRESS",
              setAddress: data
            });
          });
      }).catch(err => console.log(err));
  }

  render() {
    const { balance, currentUser } = this.props;
    return <Dashboard currentUser={currentUser} balance={balance} />;
  }
}

const ConnectInitialBalance = connect(state => ({
  balance: state.balance,
  currentUser: state.currentUser
}));
export default ConnectInitialBalance(InitialBalance);
