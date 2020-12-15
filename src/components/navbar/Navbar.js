import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import arrowdown from "../../images/arrowdown.png";
import cart from "../../images/shopcart.png";
import logofruithub from "../../images/logo-fine4.png";
import camo from "../../images/camo.png";

import { globalContext } from "../context/globalContext";
import "./navStyle.css";
import NavForm from "./NavForm";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    isAuthenticated,
    user,
    logOutUser,
    dispatch,
    carts,
    toggleNav,
  } = useContext(globalContext);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const cartLength = carts && carts.length;

  return (
    <div className="navbar-container">
      <i
        className="fas fa-bars fa-lg "
        onClick={() =>
          dispatch({
            type: "TOGGLE_NAV",
          })
        }
      ></i>
      <Link className="link" to="/">
        <img src={logofruithub} alt="logo" className="logo-fruithub" />
      </Link>
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
        <p className="auth-logo" onClick={toggleOpen}>
         <i className="fa fa-user fa-lg user"></i>
        </p>
      ) : (
        <p className="auth-banner" onClick={toggleOpen}>
          Sign Up
          <span className="arr-down">
            <img src={arrowdown} alt="arr" />
          </span>
        </p>
      )}

      <i className="fa fa-search fa-lg search"></i>
      <i className="fa fa-gratipay fa-lg saved"></i>
      <Link to="/carts">
        <button
          className="nav-cart"
          onClick={() =>
            dispatch({
              type: "TOGGLE_CART",
            })
          }
        >
          <span className="cart-img-span">
            {/* <img src={cart} alt="cart" className="cart-nav-img" /> */}
            {cartLength === 0 ? (
              <i className="fas fa-shopping-cart fa-lg cart-x"></i>
            ) : (
              <i className="fas fa-shopping-cart  fa-lg cart-x">{cartLength}</i>
            )}
            {/* {cartLength === 0 ? "Cart" : "Cart :" + cartLength} */}
          </span>
        </button>
      </Link>
    </div>
  );
}
