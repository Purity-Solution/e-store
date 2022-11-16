import React from "react";
<<<<<<< HEAD
=======
import { Nav } from "react-bootstrap";
>>>>>>> 25c3b328e5d3ec47d2c8af5f2fa47bd9a69dea05
import { Link } from "react-router-dom";
import "./Login.scss";
const Login = () => {
  return (
    <div className="formName">
      <div className="log">
        <span>Log In</span>
      </div>
      <div className="lineWrap">
        <div className="line"></div>
      </div>
      <div className="container">
        <form className="formSearch">
          <div className="row">
            <div className="col-sm-12">
              <div className="formFeild">
                <label className="lable" for="email">
                  Email
                </label>
                <input type="email" className="searchbar-field form-control" />
              </div>
            </div>
            <div className="col-sm-12">
              <div className="formFeild">
                <label className="lable" for="email">
                  Password
                </label>
                <input
                  type="password"
                  className="searchbar-field form-control"
                />
              </div>
            </div>
            <div className="col-sm-12 loginButton">
              <button type="button" className="login">
                Login
              </button>
              <p className="forgotPassword">Forgot Password?</p>
            </div>
            <div className="col-sm-12 account">
              <p className="accountDiscription">
                Don't have an account?
<<<<<<< HEAD
                <Link to="/reg">
=======
                <Link to="/register">
>>>>>>> 25c3b328e5d3ec47d2c8af5f2fa47bd9a69dea05
                  <span>Register</span>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
