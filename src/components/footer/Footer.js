import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
import facebook1 from "../image/facebook1.png";
import instagram from "../image/instagram.jpg";
import youtube3 from "../image/youtube3.jpg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="upperLevel">
        <div className="upperInner">
          <p>Celebrate babies the way they are</p>
          <div className="socialIcon">
            <Link to="/facebook">
              <img src={facebook1} alt="facebook" className="icon" />
            </Link>
            <Link to="/instragram">
              <img src={instagram} alt="instragram" className="icon" />
            </Link>
            <Link to="/facebook">
              <img src={youtube3} alt="youtube" className="icon" />
            </Link>
          </div>
        </div>
      </div>
      <div className="lowerLevel">
        <div className="lowerInner">
          <div className="footerMenu">
            <ul>
              <li>Sitemap</li>
              <li>Subsidiaries</li>
              <li>Disclosure Policy</li>
              <li>Policy on Privacy Protection</li>
              <li>Social Media Policy</li>
              <li>Terms of Use</li>
              <li>Contact</li>
              <li>Product Faqs</li>
            </ul>
            <p className="logo">
              <img
                src="https://www.pigeonarabia.com/static/media/logo.a08b0a0b.svg"
                alt="pigeon-logo"
                className="image-logo"
              />
            </p>
          </div>
          <div className="copyRight">
            <p>Copyrights © Pigeon Corporation. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
