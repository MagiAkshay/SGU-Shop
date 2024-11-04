import React from "react";
import { Link } from "react-router-dom"; // Use Link from react-router-dom for navigation
import "./header.css";

function Header() {
  return (
    <div className="fistHeader-div">
      <nav className="navbar-expand-sm navbar-dark nav-top" style={{ borderRadius: 0 }}>
        <ul className="navbar-nav">
          <li className="nav-item1"><a className="nav-link" href="#">About Us</a></li>
          <li className="nav-item1"><a className="nav-link" href="#">Order Tracking</a></li>
          <li className="nav-item1"><a className="nav-link" href="#">Contact Us</a></li>
          <li className="nav-item1"><a className="nav-link" href="#">FAQs</a></li>

          <div className="nav-items-right">
            <ul className="navbar-nav">
              <li className="nav-item">
                <div className="nav-display-row">
                  <p className="nav-top-signup">Sign up for 10% off your first order:<span className="signup-color">Sign Up</span></p>
                  {/* <a className="nav-link nav-move-top" href="#">Sign Up</a> */}
                </div>
              </li>
            </ul>
          </div>

          <div className="nav-items-right-side">
            <ul className="navbar-nav">
              <li className="nav-item">
                <div className="nav-display-row">
                  <img
                    src="https://demo-morata.myshopify.com/cdn/shop/t/4/assets/flag_en.png?v=14076981825125011091700451475"
                    className="nav-image-size"
                    alt="Flag"
                  />
                  <a
                    className="nav-link dropdown-toggle languages-div"
                    href="#"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    English
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle nav-select-nationality"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                United States (USD $)
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#">Canada (CAD $)</a>
                <a className="dropdown-item" href="#">Japan (JPY ¥)</a>
                <a className="dropdown-item" href="#">United Kingdom (GBP £)</a>
                <a className="dropdown-item" href="#">United States (USD $)</a>
              </div>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
