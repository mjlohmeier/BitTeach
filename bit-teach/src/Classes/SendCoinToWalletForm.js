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
    const { dispatch } = this.props;

    let sendToWallet = async state => {
      await fetch("http://localhost:5000/api/wallet/coin_address", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(state)
      })
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
        add: this.state
      });
    };

    return (
      <div className="container">
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
  wallet: state.wallet
}));
export default ConnectSendToWalletForm(SendCoinToWalletForm);
