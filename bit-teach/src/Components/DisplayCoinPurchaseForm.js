import React from "react";

const DisplayCoinPurchaseForm = ({
  submitForm,
  handleChange,
  bit_coin_address
}) => {
  return (
    <div className="form-group text-center">
      <form onSubmit={submitForm} className="form-group">
        <div className="form-group">
          <label>
            Wallet Address <strong style={Styles.wildcard}>*</strong>
          </label>
          <div>
            <input
              type="text"
              value={bit_coin_address}
              required={true}
              onChange={e => handleChange(e, "bit_coin_address")}
              placeholder="Coin Address"
              className="form-control"
            />
          </div>
        </div>
        <button className="btn btn-primary">Add Send To Wallet</button>
      </form>
    </div>
  );
};

export default DisplayCoinPurchaseForm;

const Styles = {
  wildcard: {
    color: "red"
  }
};
