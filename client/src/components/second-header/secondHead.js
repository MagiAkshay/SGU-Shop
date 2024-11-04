import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./secondHeader.css";
import Login from "../login/login";
import Signup from "../signup/signup";

function SecondHeader() {
  const [showLogin, setShowLogin] = useState(true); // To toggle between Login and Signup

  return (
    <div className="secondHeader-div">
      <div className="logo-div">
        <img
          src="https://res.cloudinary.com/dhpkv1tec/image/upload/v1722513876/natural%20places/SGU_SHOP_LOGO_TRANSPARENT_lxgqrq.png"
          className="logo-image"
          alt="Logo"
        />
      </div>
      <div className="white-search-div">
        <div className="search-container">
          <select className="select-border" id="sel1">
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Home & Kitchen</option>
          </select>
          <input
            type="text"
            className="form-border"
            id="usr"
            placeholder="Search for products..."
          />
          <button type="submit" className="btn-search">
            Search
          </button>
        </div>
      </div>

      <div className="icons-div">
        <div className="icons-inner-head">
          <img
            src="https://cdn4.iconfinder.com/data/icons/mayssam/512/user-512.png"
            className="icons-users-head"
            alt="User Icon"
          />
          <button
            type="button"
            className="btn-Login"
            data-toggle="modal"
            data-target="#authModal"
          >
            <span className="text-style">Login</span>
            <br />
            <span className="account-style">Account</span>
          </button>
        </div>

        <div className="icons-inner-head">
          <img
            src="https://www.pinclipart.com/picdir/big/2-24947_heart-clipart-clipart-simple-white-heart-icon-png.png"
            className="icons-users-head"
            alt="Wishlist Icon"
          />
          <button
            type="button"
            className="btn-Login"
            data-target="#authModal"
          >
            <div className="favorite-div">
              <span className="text-style">Favorite</span>
              <br />
              <span className="account-style">My Wishlist</span>
            </div>
          </button>
        </div>

        <div className="icons-inner-head">
          <img
            src="https://images.freeimages.com/fic/images/icons/1700/2d/512/cart.png?ref=findicons"
            className="icons-users-head"
            alt="Cart Icon"
          />
          <Link to="/cart" className="btn-Login">
            <span className="text-style">Your Cart</span>
            <br />
            <span className="account-style">$0.00</span>
          </Link>
        </div>
      </div>

      {/* Modal for Login and Signup */}
      <div className="modal fade" id="authModal" tabIndex="-1" role="dialog" aria-labelledby="authModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <div className="btn-group" role="group" aria-label="Basic example">
                {/* Toggle between Login and Signup */}
                <button type="button" className={`btn ${showLogin ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setShowLogin(true)}>Login</button>
                <button type="button" className={`btn ${!showLogin ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setShowLogin(false)}>Signup</button>
              </div>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {/* Render either Login or Signup based on the toggle */}
              {showLogin ? <Login /> : <Signup />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondHeader;
