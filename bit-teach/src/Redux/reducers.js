const reducer = (state, action) => {
  if (action.type === "REGISTER") {
    return {
      ...state,
      notifications: [
        ...state.notifications,
        { id: 0, type: "newUser", message: "Thank you for signing up." },
        { id: 1, type: "beginingBalance", message: "Your balance is $1000.00" }
      ]
    };
  } else if (action.type === "UPDATE_BALANCE") {
    return {
      ...state,
      balance: action.update
    };
  } else if (action.type === "LOGIN") {
    localStorage.setItem("token", action.token);
    localStorage.setItem("user", JSON.stringify(action.user));
    return {
      ...state,
      currentUser: action.user
    };
  } else if (action.type === "LOGOUT") {
    localStorage.removeItem("token");
    return {
      ...state,
      currentUser: {}
    };
  } else if (action.type === "SET_MARKETPLACE") {
    return {
      ...state,
      marketPlace: action.marketplaceValues
    };
  } else if (action.type === "SET_BITTEACH") {
    return {
      ...state,
      bitTeach: action.setBitTeach
    };
  } else if (action.type === "BUY_COIN") {
    return {
      ...state,
      boughtCurrency: [...state.boughtCurrency, action.currency],
      balance: state.balance + action.currency.price,
      // teachCoinBalance:state.teachCoinBalance+ action.currency.price,
      notifications: [
        ...state.notifications,
        { id: 2, type: "boughtCoin", message: "You have purchased new coin" }
      ]
    };
  } else if (action.type === "SET_COIN_ADDRESS") {
    return {
      ...state,
      wallet: [...state.wallet, action.setAddress]
    };
  } else if (action.type === "ADD_TO_WALLET") {
    let addToWallet = state.boughtCurrency.filter(
      currency => currency !== action.id
    );
    return {
      ...state,
      boughtCurrency: addToWallet,
      wallet: [...state.wallet, action.id]
    };
  } else if(action.type === 'ADD_TO_BALACE') {
    return {
      ...state,
      balance:action.addToBalance + 100
    }
  } 
  else if (action.type === "SELL_CURRENCY") {
    let newWallet = state.wallet.filter(item => item !== action.id);
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
