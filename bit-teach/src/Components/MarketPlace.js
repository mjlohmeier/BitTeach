import React from "react";
import { connect } from "react-redux";

const MarketPlace = ({ marketPlace }) => {
  console.log(marketPlace);
  return (
    <div> 
     
    </div>
  );
};

const ConnectMarketPlace = connect(state => ({
  marketPlace: state.marketPlace,
  balance: state.balance
}));
export default ConnectMarketPlace(MarketPlace);
