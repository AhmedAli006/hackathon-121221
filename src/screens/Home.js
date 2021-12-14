import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import ButtonAppBar from "../components/Appbar";
import Button from "../components/Button";
import { Signout } from "../config/redux/action";
const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let signOut = () => {
    Signout(navigate, dispatch);
  };

  const dataFromRedux = useSelector((a) => a);
  console.log(dataFromRedux);

  let goToLogin = () => {
    navigate("/login");
  };
  let goToSignUp = () => {
    navigate("/signup");
  };

  return (
    <>
      <div className='hbod'>
        <h1 className="heading">Welcome</h1>
        <div className='hin'>
          <div className="home">
            <Button onClick={goToLogin}>Login</Button>
            <Button onClick={goToSignUp}>Sign Up</Button>
            {dataFromRedux.loginreducer.isLogin && (
              <Button onClick={signOut}>Sign Out</Button>
            )}
            {/* <Button onClick={Signout}>Sign Out</Button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
