import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";

import { auth } from "../firebase";



const Login = () => {
  const history=useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");


  const signInHandler = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      {/* {isLoggedIn && (
        <p>
          You are logged in<button onClick={signOut}>Sign Out</button>
        </p>
      )} */}

      <Link to="/">
        <img
          src="/asset/Amazon-Logo-Black.jpg"
          alt="logo"
          className="login_logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter  Email"
          />
          <h5>Password</h5>
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter Password"
          />

          <button
            type="Submit"
            className="login_signingBtn"
            onClick={signInHandler}
          >
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button className="login_registerBtn" onClick={register}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
