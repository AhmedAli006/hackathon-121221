import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../config/firebase";
import Button from "../components/Button";
import Input from "../components/Input";
import { userLogin } from "../config/firebase";
import ButtonAppBar from "../components/Appbar";
import ResponsiveAppBar from "../components/Appbar";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  // const state = useSelector((state) => state);
  // console.log(state);
  const navigate = useNavigate();
  let login = (e) => {
    e.preventDefault();
    let obj = {
      email,
      password,
    };
    dispatch(userLogin(obj));
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      }
    });
  }, []);
  return (
    <>
      <ResponsiveAppBar />
      <div className="head">
        <div className="hbod">
          <h1 className="heading">Login</h1>
          <div className="hin">

            <div>
              <form onSubmit={(e) => login(e)}>
                <div>
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    type="email"
                  />
                </div>
                <div>
                  <Input
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    type="password"
                  />
                </div>
                <div>
                  <Button>Login</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
export default Login;
