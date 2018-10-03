import React from "react";
import { connect } from "react-redux";

const MarketPlace = ({ marketPlace, balance, dispatch }) => {
  console.log(marketPlace);
  return (
    <div>
    {balance} 
    {marketPlace.map(currency => {
      return (
        <div key={currency.id}>
        {currency.currency_name}
        <button onClick={() => dispatch({type: 'BUY', currency: currency})}>Buy</button>
        </div>
      )
    })}
      <div>
      </div>
    </div>
  );
};

const ConnectMarketPlace = connect(state => ({
  marketPlace: state.marketPlace,
  balance: state.balance

}));
export default ConnectMarketPlace(MarketPlace);
