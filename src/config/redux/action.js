import { auth, signOut } from "../firebase";


export function firstData() {
  return (dispatch) => {
    dispatch({
      type: "loginData",
    });
  };
}
export function secondData() {
  return (dispatch) => {
    dispatch({
      type: "signupData",
    });
  };
}

let Signout = (navigate, dispatch,) => {
  signOut(auth)
    .then(() => {
      dispatch(
        {
          type: "signout",
          isLogin: false
        }
      );
      navigate("/");
      // console.log("succsess");
    })
    .catch((error) => {
      alert("signout error");
    });
};



export { Signout }