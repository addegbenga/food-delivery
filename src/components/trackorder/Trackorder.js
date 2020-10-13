import React from "react";
import checkout from "../../images/checkout.png";
import "./trackStyle.css";

export default function Trackorder() {
  return (
    <div className="trackorder-container">
      <div className="trackorder-wrapper">
        <img src={checkout} alt="checkout" className="track-img" />
        <div className="order-text-container">
          <h1>Congratulations!!!</h1>
          <p>Your order have been taken and is being attended to..</p>
        </div>

        <button className="btn-order">Track order</button>
        <button className="btn-continue-shop">Continue shopping</button>
      </div>
    </div>
  );
}
