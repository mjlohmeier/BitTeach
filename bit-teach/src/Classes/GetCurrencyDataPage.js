import React, { Component } from "react";
import { connect } from "react-redux";
import MarketPlace from "../Components/MarketPlace";

class GetCurrencyDataPage extends Component {
  componentDidMount() {
    fetch(`${process.env.REACT_APP_HOST}/api/currency/marketplace`)
      .then(res => res.json())
      .then(data => {
        this.props.dispatch({
          type: "SET_MARKETPLACE",
          marketplaceValues: data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return <MarketPlace />;
  }
}

const ConnectGetCurrencyDataPage = connect(state => ({
  marketPlace: state.marketPlace,
  bitTeach: state.bitTeach
}));
export default ConnectGetCurrencyDataPage(GetCurrencyDataPage);
