import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import { navbarData } from "../../helper/constants";
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
        <div className="menuIcon">
          <div className="menu">
            {navbarData.map((item) => (
              <Link className="menuItem" to={item.link}>
                {item.name}
              </Link>
            ))}
          </div>
          <div className="icon">
            {navbarData.map((item) => (
              <Link className="iconItem" to={item.links}>
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
