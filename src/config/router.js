import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import MainHome from "../screens/MainHome";
import Dashboard from '../screens/Dashboard'

const Approuter = () => {

  return (

    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<MainHome />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </Router>
  )
};
export default Approuter;
