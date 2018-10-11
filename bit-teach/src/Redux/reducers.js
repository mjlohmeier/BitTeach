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
  } else if (action.type === "SET_BALANCE") {
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
      // teachCoinBalance:state.teachCoinBalance+ action.currency.price,
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
  }// else if (action.type === 'ADD_TO_TEACH_COIN_BALACE') {
  //   let arrayOfBoughtCurrencies = state.boughtCurrencies.slice()
  //   arrayOfBoughtCurrencies.push(action.storeTeachCoin)
  //   return {
  //     ...state,
  //     boughtCurrencies: arrayOfBoughtCurrencies,
  //     teachCoinBalance: action.addToTeachCoinBalance + 100,
  //     balance: state.balance - 100
  //   }
  //}
  else if (action.type === "BUY_TEACHCOIN") {
    let arrayOfBoughtCurrencies = state.boughtCurrencies.slice()
    arrayOfBoughtCurrencies.push(action.storeTeachCoin)
    return {
      ...state,
      //balance should be redefined to specifically refer to dollars
      boughtCurrencies: arrayOfBoughtCurrencies,
      balance: state.balance - 100,
      teachCoinBalance: state.teachCoinBalance + 100,
      notifications: [
        ...state.notifications,
        { id: 3, type: "BoughtCoin", message: "You have bought coin" }
        //probably shouldn't give a notification every time you click
      ]
    };
  }
  return state;
};

export default reducer;
