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
      return fetch("http://localhost:5000/api/users/login", {
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
            user:body.data,
            token:body.token
          });
        })
        .catch(err => {
          console.log(err);
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
