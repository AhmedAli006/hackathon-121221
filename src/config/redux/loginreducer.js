const INITIAL_STAE = {
   isLogin : true
   
};

const reducer = (state = INITIAL_STAE, action) => {
  switch (action.type) {
    case "login":
      return {  isLogin: true };
    case "signout":
        return { isLogin : false}
    default:
        return state
  }
};

export default reducer;
