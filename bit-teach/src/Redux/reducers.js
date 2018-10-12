const reducer = (state, action) => {
  if (action.type === "REGISTER") {
    return {
      ...state,
      notifications: [
        ...state.notifications,
        { id: 0, type: "newUser", message: "Thank you for signing up." },
        { id: 1, type: "beginingBalance", message: "Your balance is $1000.00" }
      ],
      currentUser: action.user
    };
  } else if (action.type === "SET_DOLLAR-BALANCE") {
    localStorage.setItem("dollarBalance", action.dollarBalance);
    return {
      ...state,
      balance: action.setBalance
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
    localStorage.removeItem("user");
    localStorage.removeItem("dollarBalance");
    localStorage.removeItem("walletValues");
    return {
      ...state,
      currentUser: {},
      balance: 0,
      wallet: {},
      marketPlace: [],
      bitTeach: {},
      boughtCurrencies: []
    };
  } else if (action.type === "SET_MARKETPLACE") {
    return {
      ...state,
      marketPlace: action.marketplaceValues
    };
  } else if (action.type === "SET_BITTEACH") {
    return {
      ...state,
      teachCoinBalance: action.setBitTeach
    };
  } else if (action.type === "GET_DOLLARS") {
    return {
      ...state,
      balance: state.balance + action.currency.balance,
      notifications: [
        ...state.notifications,
        { id: 2, type: "boughtCoin", message: "You have purchased new coin" }
      ]
    };
  } else if (action.type === "SET_COIN_ADDRESS") {
    return {
      ...state,
      wallet: {
        ...state.wallet,
        bitCoinAddress: action.setAddress
      }
    };
  } else if (action.type === "ADD_TO_WALLET") {
    let filteredCurrencies = state.boughtCurrencies.filter(
      item => item !== action.id
    );
    return {
      ...state,
      boughtCurrencies: filteredCurrencies,
      wallet: {
        ...state.wallet,
        currencies: action.addToWallet
      }
    };
  } else if (action.type === "GET_WALLET_VALUES") {
    localStorage.setItem("walletValues", action.storedWalletValues);
    return {
      ...state,
      wallet: {
        ...state.wallet,
        storedValues: action.storedValues
      }
    };
  } else if (action.type === "BUY_TEACHCOIN") {
    let arrayOfBoughtCurrencies = state.boughtCurrencies.slice();
    arrayOfBoughtCurrencies.push(action.storeTeachCoin);
    return {
      ...state,
      boughtCurrencies: arrayOfBoughtCurrencies,
      balance: state.balance - 100,
      teachCoinBalance: state.teachCoinBalance + 100,
      notifications: [
        ...state.notifications,
        { id: 3, type: "BoughtCoin", message: "You have bought coin" }
      ]
    };
  }
  return state;
};

export default reducer;
