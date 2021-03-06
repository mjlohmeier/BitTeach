import React, { Component } from "react";
import { connect } from "react-redux";
import UserLoginForm from "../Components/UserLoginForm";
import { withRouter } from "react-router-dom";

class UserAuthLoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      user_password: ""
    };
  }

  render() {
    const { email, user_password } = this.state;
    const { dispatch } = this.props;

    let loginUser = user => {
      return fetch(`${process.env.REACT_APP_HOST}/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user),
        redirect: "follow",
        referrer: "no-referrer"
      })
        .then(res => res.json())
        .then(body => {
          dispatch({
            type: "LOGIN",
            user: body.data,
            token: body.token
          });
          this.props.dispatch({
            type: "SET_DOLLAR_BALANCE",
            setBalance: body.data.initial_balance,
            dollarBalance: body.data.initial_balance
          });
          this.props.dispatch({
            type: "SET_COIN_ADDRESS",
            setAddress: body.data.bit_coin_address,
            walletAddress: body.data.bit_coin_address
          });
        })
        .catch(err => {
          console.log(err);
        });
    };

    let getTeachCoin = () => {
      fetch(`${process.env.REACT_APP_HOST}/api/currency/marketplace`)
        .then(res => res.json())
        .then(data => {
          let bitTeach = data[0].balance;
          this.props.dispatch({
            type: "SET_BITTEACH",
            setBitTeach: bitTeach,
            teachCoin: bitTeach
          });
        });
    };

    let handleChange = (e, updated) => {
      let newState = {};
      newState[updated] = e.target.value;
      this.setState(newState);
    };

    let submitForm = e => {
      e.preventDefault();
      loginUser(this.state);
      getTeachCoin();
      this.props.history.push("/dashboard");
    };

    return (
      <div className="container p-5">
        <div className="row justify-content-center">
          <UserLoginForm
            email={email}
            user_password={user_password}
            handleChange={handleChange}
            submitForm={submitForm}
          />
        </div>
      </div>
    );
  }
}

const ConnectUserAuthLoginPage = connect(state => ({
  currentUser: state.currentUser
}));
export default withRouter(ConnectUserAuthLoginPage(UserAuthLoginPage));
