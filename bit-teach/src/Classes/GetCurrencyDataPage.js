import React, { Component } from "react";
import { connect } from "react-redux";
import MarketPlace from "../Components/MarketPlace";

class GetCurrencyDataPage extends Component {
  componentDidMount() {
    fetch("http://localhost:5000/api/currency")
      .then(res => res.json())
      .then(data => {
        this.props.dispatch({
          type: "GET_CURRENCY",
          currencies: data
        });
      });
  }

  render() {
    return <MarketPlace />;
  }
}

const ConnectGetCurrencyDataPage = connect(state => ({
  marketPlace: state.marketPlace
}));
export default ConnectGetCurrencyDataPage(GetCurrencyDataPage);
