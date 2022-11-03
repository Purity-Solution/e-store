import React from "react";
import { Button } from "react-bootstrap";
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
                <span>Register</span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
