import React, { Component } from "react";
import { connect } from "react-redux";
import WalletPage from "../Components/WalletPage";

class GetWalletData extends Component {
  componentDidMount() {
    fetch(`http://localhost:5000/api/users/${this.props.currentUser.id}/wallet`)
      .then(res => res.json())
      .then(data => {
        this.props.dispatch({
          type: "GET_WALLET_VALUES",
          storedValues: data.current_amount,
          storedWalletValues:data.current_amount
        });
      });
  }

  render() {
    return <WalletPage />;
  }
}

const ConnectGetWalletData = connect(state => ({
  wallet: state.wallet,
  currentUser: state.currentUser
}));
export default ConnectGetWalletData(GetWalletData);
