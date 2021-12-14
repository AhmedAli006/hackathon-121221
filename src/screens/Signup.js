import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import ButtonAppBar from "../components/Appbar";
import Button from "../components/Button";
import Input from "../components/Input";
import { SignUp } from "../config/firebase";

import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import ResponsiveAppBar from "../components/Appbar";



function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [cnic, setCnic] = useState("");


  const dispatch = useDispatch();
  const navigate = useNavigate();

  let signup = (e) => {
    e.preventDefault();
    let obj = {
      fname,
      lname,
      email,
      password,
      cnic,
    };
    dispatch(SignUp(obj, navigate));
  }




  return (
    <>

      <ResponsiveAppBar />
      <div className="head">
        <div className="hbod">
          <h1 className="heading">Sign Up</h1>
          <div className="hin">
            <div>
              <form onSubmit={(e) => signup(e)}>
                <section className="info-form">
                  <div className="name-sec">
                    <Input
                      onChange={(e) => setfName(e.target.value)}
                      placeholder="First Name"
                      type="text"
                    />

                    <Input
                      onChange={(e) => setlName(e.target.value)}
                      placeholder="Last Name"
                      type="text"
                    />
                  </div>
                </section>

                <div className="email-sec">
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    type="email"
                  />

                  <Input
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    type="password"
                  />
                </div>
                <div className="cnic-sec">

                  <Input
                    onChange={(e) => setCnic(e.target.value)}
                    placeholder="C.N.I.C"
                    type="number"
                  />
                </div>
                <div>
                  <Button>Sign Up</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
export default Signup;