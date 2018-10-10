import React, { Component } from "react";
import { connect } from "react-redux";
import MarketPlace from "../Components/MarketPlace";

class GetCurrencyDataPage extends Component {
  componentDidMount() {
    fetch("http://localhost:5000/api/currency/marketplace")
      .then(res => res.json())
      .then(data => {
        this.props.dispatch({
          type: "SET_MARKETPLACE",
          marketplaceValues: data
        });
      })
      .then(() => {
        fetch(`http://localhost:5000/api/currency/bitTeach`)
          .then(res => res.json())
          .then(data => {
            this.props.dispatch({
              type: "SET_BITTEACH",
              setBitTeach: data[0]
            });
          });
      });
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
