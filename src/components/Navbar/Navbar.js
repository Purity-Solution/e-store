import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import { navbarData } from "../../helper/constants";
import { MdShoppingCart } from "react-icons/md";
import { Badge, Button } from "react-bootstrap";
import { GoSearch } from "react-icons/go";
import Search from "../search/Search";

const Navbar = () => {
  const searchIconRef = React.useRef(null);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      let isEvent = searchIconRef?.current?.contains(event.target);
      if (searchIconRef && !isEvent) {
        setShowSearch(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="Heading">
        <div className="Logo">
          <Link to="/">
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

            <Link className="iconItem cartIcon" to="/cart">
              <MdShoppingCart />
              <Badge pill={true} bg="p-3 mb-2 bg-danger text-white">
                9
              </Badge>
            </Link>
            <Link className="iconItem" ref={searchIconRef}>
              <GoSearch
                size={24}
                onClick={(e) => {
                  setShowSearch(!showSearch);
                }}
              />
              {showSearch ? <Search /> : null}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
