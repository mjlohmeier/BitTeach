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
      balance:0,
      wallet:{},
      marketPlace:[],
      bitTeach:{},
      boughtCurrencies:[]
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
      boughtCurrencies: [...state.boughtCurrencies, action.currency],
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
      wallet:{
        ...state.wallet,
        bitCoinAddress:action.setAddress
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
        currencies:action.addToWallet
      }
    };
  } else if(action.type === 'ADD_TO_TEACH_COIN_BALACE') {
    return {
      ...state,
      teachCoinBalance:action.addToTeachCoinBalance + 100,
      balance:state.balance - 100 
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
