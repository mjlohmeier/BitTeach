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
      .then(() => {
        fetch("http://localhost:5000/api/currency/marketplace")
          .then(res => res.json())
          .then(data => {
            let bitTeach = data[0].balance;
            this.props.dispatch({
              type: "SET_BITTEACH",
              setBitTeach: bitTeach
            });
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
