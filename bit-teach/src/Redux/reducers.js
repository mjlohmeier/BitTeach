const reducer = (state, action) => {
  if (action.type === "REGISTER") {
    return {
      ...state,
      users: [...state.users, action.user]
    };
  }
  else if(action.type === 'LOGIN') {
    localStorage.setItem('token', action.token);
    return {
      ...state,
      users: [...state.users, action.credentials]
    };
  }
  return state;
};

export default reducer;
