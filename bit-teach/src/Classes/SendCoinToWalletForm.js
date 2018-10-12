import React, { Component } from "react";
import DisplayCoinPurchaseForm from "../Components/DisplayCoinPurchaseForm";
import { connect } from "react-redux";

class SendCoinToWalletForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bit_coin_address: ""
    };
  }

  render() {
    const { bit_coin_address } = this.state;
    const { dispatch, boughtCurrencies } = this.props;
    let sendToWallet = async state => {
      await fetch(
        `http://localhost:5000/api/users/${
          this.props.currentUser.bit_coin_address
        }/wallet`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            userID:this.props.currentUser.id,
            boughtCurrency: this.props.boughtCurrencies
          })
        }
      )
        .then(result => console.log(result))
        .catch(err => console.log(err));
    };

    let handleChange = (e, updated) => {
      let newState = {};
      newState[updated] = e.target.value;
      this.setState(newState);
    };

    let submitForm = e => {
      e.preventDefault();
      sendToWallet(this.state);
      dispatch({
        type: "ADD_TO_WALLET",
        addToWallet: boughtCurrencies
      });
    };

    return (
      <div className="container" style={{width:'20rem'}}>
        <div className="row justify-content-center registreForm bg-white">
          <DisplayCoinPurchaseForm
            submitForm={submitForm}
            handleChange={handleChange}
            bit_coin_address={bit_coin_address}
          />
        </div>
      </div>
    );
  }
}

const ConnectSendToWalletForm = connect(state => ({
  boughtCurrencies: state.boughtCurrencies,
  currentUser: state.currentUser
}));
export default ConnectSendToWalletForm(SendCoinToWalletForm);
