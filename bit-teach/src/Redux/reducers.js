const reducer = (state, action) => {
  if (action.type === "REGISTER") {
    return {
      ...state,
      users: [...state.users, action.user],
      notifications: [
        ...state.notifications,
        { id: 0, type: "newUser", message: "Thank you for signing up." },
        { id: 1, type: "beginingBalance", message: "Your balance is $1000.00" }
      ]
    };
  } else if (action.type === "LOGIN") {
    localStorage.setItem("token", action.token);
    return {
      ...state,
      users: [...state.users, action.credentials]
    };
  } else if (action.type === "GET_CURRENCY") {
    return {
      ...state,
      marketPlace: action.currencies
    };
  } else if (action.type === "BUY") {
    return {
      ...state,
      wallet: [...state.wallet, action.currency],
      balance: state.balance - action.currency.price,
      notifications: [
        ...state.notifications,
        { id: 2, type: "boughtCoin", message: "You have purchased new coin" }
      ]
    };
  } else if (action.type === "SELL_CURRENCY") {
    let newWallet = state.wallet.filter(
      item => item !== action.id
    );
    return {
      ...state,
      wallet: newWallet,
      balance: state.balance + action.id.price,
      notifications: [
        ...state.notifications,
        { id: 3, type: "SoldCoin", message: "You have sold coin" }
      ]
    };
  }
  return state;
};

export default reducer;
