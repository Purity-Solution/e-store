import React from "react";
import "./Register.scss";
import { Link } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";
const Register = () => {
  return (
    <div className="registerForm">
      <div className="reg">
        <span>Register</span>
      </div>
      <div className="lineWrap">
        <div className="line"></div>
      </div>
      <div className="container">
        <div className="formReg">
          <div className="row">
            <div className="col-sm-6">
              <div className="formFeild">
                <label className="lable" for="email">
                  First Name
                </label>
                <input type="text" className="searchbar-field form-control" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="formFeild">
                <label className="lable" for="email">
                  Last Name
                </label>
                <input type="email" className="searchbar-field form-control" />
              </div>
            </div>
            <div className="col-sm-12">
              <div className="formFeild">
                <label className="lable" for="email">
                  Email
                </label>
                <input type="email" className="searchbar-field form-control" />
              </div>
            </div>
            <div className="col-sm-6">
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
            <div className="col-sm-6">
              <div className="formFeild">
                <label className="lable" for="email">
                  Mobile
                </label>
                <input
                  type="id"
                  required
                  name="mobile"
                  placeholder="+971 (0)"
                  className="searchbar-field form-control"
                  maxLength="9"
                />
              </div>
            </div>
            <div className="col-sm-12">
              <div className="formFeild">
                <label className="lable" for="email">
                  Delivery Address
                </label>
                <input
                  type="text"
                  placeholder="Street name/ Building / Flat"
                  className="searchbar-field form-control"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="leftSide">
                <label className="formLable" for="email">
                  Emirates
                </label>
                <select className="registerSelect">
                  <option value="disable">Abu Dhabi</option>
                  <option value="disable">Dubai</option>
                  <option value="disable">Sharjah</option>
                  <option value="disable">Ajman</option>
                  <option value="disable">Fujairah</option>
                </select>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="leftSide">
                <label className="formLable" for="email">
                  Area
                </label>
                <select className="registerSelect">
                  <option value="disable">select emirates</option>
                  <option value="disable">Other</option>
                </select>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="leftSide">
                <label className="formLable" for="email">
                  How old is your Kid
                </label>
                <select className="registerSelect">
                  <option value="disable">0-3</option>
                  <option value="disable">3-6</option>
                  <option value="disable">6-9</option>
                  <option value="disable">9-12</option>
                  <option value="disable">12-15</option>
                </select>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="leftSide">
                <label className="formLable" for="email">
                  I am Pregnant
                </label>
                <select className="registerSelect">
                  <option value="disable">Select Trimester</option>
                  <option value="disable">First Trimester</option>
                  <option value="disable">Second Trimester</option>
                  <option value="disable">Third Trimester</option>
                </select>
              </div>
            </div>
            <div className="col-sm-12 login-button">
              <div className="terms">
                <label className="registering" for="register">
                  <div className="agreeTerms">
                    <p className="disc">
                      By registering, you agree to Pigeon’s
                      <Link href="undifined">
                        <span>Terms of Use</span>
                      </Link>
                    </p>
                  </div>
                  <p className="detail">
                    Pigeon may send you communications. You can unsubscribe
                    through the link in each communication we send
                  </p>
                </label>
              </div>
            </div>
            <div className="col-sm-12 registerButton">
              <CustomButton name={"Register"} className="register" />
            </div>
            <div className="col-sm-12 disc">
              <p>
                Already have an account ?
                <Link to="/login">
                  <span>Login</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
