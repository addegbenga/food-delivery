import React from "react";
import { Link } from "react-router-dom";
import basket from "../../images/basket.png";
import "./navStyle.css";
export default function Navbar() {
  return (
    <div className="navbar-container">
      <h1 className="logo-text">
        {" "}
        <Link className="link" to="/">Fruit Hub</Link>
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
      <button className="nav-cart">Cart</button>
    </div>
  );
}
