import React, { Component } from "react";
import { connect } from "react-redux";
import WalletPage from "../Components/WalletPage";

class GetWalletData extends Component {
  componentDidMount() {
    fetch(`${process.env.REACT_APP_HOST}/api/user/${this.props.currentUser.id}/currentamount/wallet`)
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
