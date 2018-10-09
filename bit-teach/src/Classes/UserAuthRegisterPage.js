import React from "react";
import UserRegisterForm from "../Components/UserRegisterForm";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class UserAuthRegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      user_name: "",
      user_password: ""
    };
  }

  render() {
    const { email, user_password, user_name } = this.state;
    const { dispatch } = this.props;

    let registerUser = user => {
      return fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })
        .then(data => data.json())
        .then(data => {
          console.log(data)
          dispatch({
            type: "REGISTER",
            user: data
          });
        })
        .catch(err => console.log(err));
    };

    let handleChange = (e, updated) => {
      let newState = {};
      newState[updated] = e.target.value;
      this.setState(newState);
    };

    let submitForm = e => {
      e.preventDefault();
      registerUser(this.state);
      this.props.history.push("/tutorials");
    };

    return (
      <div className="container p-5" style={{ marginBottom: "23%" }}>
        <div className="row justify-content-center">
          <UserRegisterForm
            email={email}
            user_name={user_name}
            user_password={user_password}
            handleChange={handleChange}
            submitForm={submitForm}
          />
        </div>
      </div>
    );
  }
}

const ConnectRegister = connect(state => state);
export default ConnectRegister(withRouter(UserAuthRegisterPage));
