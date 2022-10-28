import React from "react";
import { MdShoppingCart } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";
import './navbar.scss';
const Navbar = () => {
  return (
    <div>
      <div className="Heading">
        <div className="Logo">
          <Link to="./">
            <img
              src="https://www.pigeonarabia.com/static/media/logo.a08b0a0b.svg"
              alt="pigeon-logo"
              className="image-logo"
            />
          </Link>
        </div>
        <div className="Menues">
          <ul>
            <li>
              
              <Link to="/Products">OUR PRODUCTS</Link>
            </li>
            <li>
              
              <Link to="/Contact">CONTACT</Link>
            </li>
          </ul>
        </div>
        <div className="Icons">
          <div className="Cart">
            <MdShoppingCart />
          </div>
          <div className="Login">
          <Link to='/log'><GoPerson /></Link>
          
          </div>
          <div className="Search">
          <GoSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
