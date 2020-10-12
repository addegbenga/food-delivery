import React from "react";
import basket from "../../images/basket.png";
import "./navStyle.css";
export default function Navbar() {
  return (
    <div className="navbar-container">
      <h1 className="logo-text">Fruit Hub</h1>
      <ul className="link-container">
        <li className="link-item">Home</li>
        <li className="link-item">About us</li>
        <li className="link-item">Contact</li>
      </ul>
      {/* <img src={basket} alt="logo" className="basket" /> */}
      <button className="nav-cart">Cart</button>
    </div>
  );
}
