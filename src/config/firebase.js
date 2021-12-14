import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";

import { getDatabase, ref, set } from "firebase/database";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";



const firebaseConfig = {
  apiKey: "AIzaSyCGUjzsb-64NC-AH2ptHmYDzSjoSydrrWs",
  authDomain: "boilerplate-c6b91.firebaseapp.com",
  databaseURL: "https://boilerplate-c6b91-default-rtdb.firebaseio.com",
  projectId: "boilerplate-c6b91",
  storageBucket: "boilerplate-c6b91.appspot.com",
  messagingSenderId: "78578397948",
  appId: "1:78578397948:web:d3e04b82ce5476852c1d79",
  measurementId: "${config.measurementId}"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);




const database = getDatabase(app);
let userLogin = (obj) => {
  return (dispatch, navigate) => {

    signInWithEmailAndPassword(auth, obj.email, obj.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({
          type: "login",
          ...user
        });
        navigate("/home")
        // ...

        // const getData = () => {
        //   let refrence = ref(db, "users/");
        //   let arr = [];
        //   onChildAdded(refrence, (snapshot) => {
        //     if (snapshot.exists()) {
        //       arr.push(snapshot.val());
        //       setUserList([...arr]);
        //     }
        //   });
        // };



      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage, errorCode);
      });

  }

};


let SignUp = (obj, navigate) => {
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        let uid = user.uid;
        dispatch({
          type: "SIGNUPDATA",
          uid,
        });
        navigate("/");


        //  let uid = res.user.uid;
        console.log(uid);
        obj.uid = uid;
        const refrence = ref(database, `/users/${uid}`);
        set(refrence, obj).then(() => {


        });

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  };
};



// const dispatch=useDispatch()

// let Signout = (navigate, dispatch)=>{
// navigate("/")  
//   dispatch(
//     {
//       type : "signout",
//       isLogin : false
//     }
//   )
// signOut(auth).then(() => {

//   console.log("succsess");
// }).catch((error) => {
//   alert("signout error");
// });
// }





export { userLogin, SignUp, auth, signOut, database };










