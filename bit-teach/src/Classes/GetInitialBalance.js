import React, { Component } from "react";
import { connect } from "react-redux";
import Dashboard from "../Components/Dashboard";

class InitialBalance extends Component {
  componentDidMount() {
    let userEmail = this.props.users;
    let email = userEmail.map(user => user.email);
    let email2 = email[0];
    console.log(email2);
    fetch(`http://localhost:5000/api/users/balance/${email2}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(data => {
        this.props.dispatch({
          type: "REGISTER",
          get: data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { users, balance } = this.props;
    return (
      <div className="container">
        <div className="row justify-content-center">
          <Dashboard users={users} balance={balance} />
        </div>
      </div>
    );
  }
}

const GetInitialBalance = connect(state => ({
  balance: state.balance,
  users: state.users
}));
export default GetInitialBalance(InitialBalance);
