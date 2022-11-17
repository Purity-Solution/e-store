import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";
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
              <CustomButton name={"Login"} />
            </div>
            <p className="forgotPassword">Forgot Password?</p>
            <div className="col-sm-12 account">
              <p className="accountDiscription">
                Don't have an account?
                <Link to="/register">
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
