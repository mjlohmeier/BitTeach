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
  }
  return state;
};

export default reducer;
