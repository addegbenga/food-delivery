import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import basket from "../../images/basket.png";
import sort from "../../images/sort.png";
import camo from "../../images/camo.png";

import { globalContext } from "../context/globalContext";
import "./navStyle.css";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user, logOutUser } = useContext(globalContext);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="navbar-container">
      <h1 className="logo-text">
        {" "}
        <Link className="link" to="/">
          Fruit Hub
        </Link>
      </h1>
      <ul className="link-container">
        <li className="link-item">
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li className="link-item">
          <Link className="link" to="/shopnow">
            Shop
          </Link>
        </li>
        <li className="link-item">
          <Link className="link" to="/">
            About
          </Link>
        </li>
      </ul>
      {/* <img src={basket} alt="logo" className="basket" /> */}
      <div className="nav-auth-container">
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
        <button className="nav-cart">Cart</button>
        {isAuthenticated && user ? (
          <p className="auth-banner" onClick={toggleOpen}>
            {user.name[0].toUpperCase()}
          </p>
        ) : (
          <img
            onClick={toggleOpen}
            className="auth-camo"
            src={camo}
            alt="camo"
          />
        )}
      </div>
    </div>
  );
}
