import React from "react";
import { Link } from "react-router-dom";
import breakfast1 from "../../images/breakfast1.png";
import love from "../../images/love.png";
import "./shopdetails.css";

export default function Shopnowdetails() {
  return (
    <div className="shopdetails-container">
      <button className="go-back-btn">
        <Link to="/shopnow" className="go-back-link">Go back</Link>
      </button>
      <div className="food-img-container">
        <img src={breakfast1} alt="breakfast" className="food-img" />
      </div>
      <div className="shopdetails-inner-container">
        <div className="abt-test">
          <h2 className="shop-detail-name-header">Quinnoa fruit salad</h2>
          <div className="price-incre-container">
            <ul className="increement-container">
              <li className="increement"> - </li>
              <li className="increement"> 1 </li>
              <li className="increement"> +</li>
            </ul>
            <p className="shop-price">#2,000</p>
          </div>
          <p className="shop-detail-sub-header">One Pack Contains:</p>
          <p className="shop-description-underline">
            Red Quinoe, Lime, Hony, Blueberries, Strawberries, Mango, Fresh mint
          </p>{" "}
          <p className="shop-description">
            {" "}
            if you are looking for a new fruit sald to eat today, quinoe is the
            perfect brunch for you mate.. if you are lookig
          </p>
          <div className="shopdetails-footer">
            <span>
              <img src={love} alt="love" />
            </span>
            <button className="btn-shopdetails-add">Add to basket</button>
          </div>
        </div>
      </div>
    </div>
  );
}
