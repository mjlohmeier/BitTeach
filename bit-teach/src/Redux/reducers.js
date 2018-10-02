const reducer = (state, action) => {
  if (action.type === "BUY_COIN") {
    return {
      ...state,
      wallet: [...state.wallet, action.buy]
    };
  }
  return state;
};

export default reducer;
