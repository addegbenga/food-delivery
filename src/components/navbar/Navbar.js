import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import arrowdown from "../../images/arrowdown.png";
import cart from "../../images/shopcart.png";
import camo from "../../images/camo.png";

import { globalContext } from "../context/globalContext";
import "./navStyle.css";
import NavForm from "./NavForm";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user, logOutUser, dispatch, carts } = useContext(
    globalContext
  );

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const cartLength = carts && carts.length;

  return (
    <div className="navbar-container">
      <h1 className="logo-text">
        {" "}
        <Link className="link" to="/">
          Fruit Hub
        </Link>
      </h1>
      {isOpen && (
        <div className="nav-auth-tooltip-container">
          <ul className="nav-auth-tooltip-list">
            <li className="tooltip-list">
              {isAuthenticated && user ? (
                <span>{user.email}</span>
              ) : (
                <Link to="/register">Sign up</Link>
              )}
            </li>
            <li className="tooltip-list">
              {isAuthenticated ? (
                <Link to="/" onClick={logOutUser}>
                  Sign Out
                </Link>
              ) : (
                <Link to="/login">Sign In</Link>
              )}
            </li>
            <li className="tooltip-list">Delete account</li>
          </ul>
        </div>
      )}

      <NavForm />

      {isAuthenticated && user ? (
        <p className="auth-banner" onClick={toggleOpen}>
          {"Hi, " + user.name}{" "}
          <span className="arr-down">
            <img src={arrowdown} alt="arr" />
          </span>
        </p>
      ) : (
        <p className="auth-banner" onClick={toggleOpen}>
          Sign Up
          <span className="arr-down">
            <img src={arrowdown} alt="arr" />
          </span>
        </p>
      )}

      <p className="auth-banner">
        {" "}
        Help{" "}
        <span className="arr-down">
          <img src={arrowdown} alt="arr" />
        </span>
      </p>
      <button
        className="nav-cart"
        onClick={() =>
          dispatch({
            type: "TOGGLE_CART",
          })
        }
      >
        <span className="cart-img-span">
          <img src={cart} alt="cart" className="cart-nav-img" />
          {cartLength === 0 ? "Cart" : "Cart :" + cartLength}
        </span>
      </button>
    </div>
  );
}
