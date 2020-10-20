import React from "react";
import { Link } from "react-router-dom";
import "./shopnowStyle.css";
import honeylime from "../../images/honeylime.png";
import tropical from "../../images/tropical.png";
import glowberry from "../../images/glowberry.png";
import redfruit from "../../images/redfruit.png";
import love from "../../images/love.png";
export default function Shopnow() {
  return (
    <div className="shop-container">
      <div className="shop-wrapper">
        <div className="shop-test">
          <div className="recommend-header-container">
            <p className="paragraph">
              Hello Tony, What fruit salad combo do you want today ?
            </p>
            <input
              type="text"
              placeholder="Search for fruits salad combos"
              className="recommend-input"
            />
          </div>

          <h1 className="recommend-header">Recommended Combo</h1>
          <div className="recommended-container">
            <div className="recommended-item">
              <span className="love-icon">
                <img src={love} alt="love" className="love-image" />
              </span>
              <img src={honeylime} alt="delicios" className="recommend-image" />
              <Link className="link" to="/shopnowdetails">
                <p className="recommend-paragraph">Honey Lime Combo</p>
              </Link>
              <div className="price-container">
                <p>₦2000</p>
                <span className="plus-icon"> + </span>
              </div>
            </div>
            <div className="recommended-item">
              <span className="love-icon">
                <img src={love} alt="love" className="love-image" />
              </span>
              <img src={honeylime} alt="delicios" className="recommend-image" />
              <Link className="link" to="/shopnowdetails">
                <p className="recommend-paragraph">Honey Lime Combo</p>
              </Link>
              <div className="price-container">
                <p>₦2000</p>
                <span className="plus-icon"> + </span>
              </div>
            </div>
            <div className="recommended-item">
              <span className="love-icon">
                <img src={love} alt="love" className="love-image" />
              </span>
              <img src={honeylime} alt="delicios" className="recommend-image" />
              <Link className="link" to="/shopnowdetails">
                <p className="recommend-paragraph">Honey Lime Combo</p>
              </Link>
              <div className="price-container">
                <p>₦2000</p>
                <span className="plus-icon"> + </span>
              </div>
            </div>
            <div className="recommended-item">
              <span className="love-icon">
                <img src={love} alt="love" className="love-image" />
              </span>
              <img src={honeylime} alt="delicios" className="recommend-image" />
              <Link className="link" to="/shopnowdetails">
                <p className="recommend-paragraph">Honey Lime Combo</p>
              </Link>
              <div className="price-container">
                <p>₦2000</p>
                <span className="plus-icon"> + </span>
              </div>
            </div>
          </div>
        </div>

        <div className="feature-container">
          <ul className="feature-item-container">
            <li className="feature-item">
              <button className="feature-item-btn"> Hottest</button>
            </li>
            <li className="feature-item">
              {" "}
              <button className="feature-item-btn"> Popular</button>
            </li>
            <li className="feature-item">
              <button className="feature-item-btn"> New Combo</button>
            </li>
            <li className="feature-item">
              {" "}
              <button className="feature-item-btn"> Top</button>
            </li>
          </ul>
          <div className="feature-wrapper">
            <div className="feature-items">
              <span className="love-icon">
                <img src={love} alt="love" className="love-image" />
              </span>
              <img src={honeylime} alt="delicios" className="recommend-image" />
              <p className="recommend-paragraph">Honey Lime Combo</p>
              <div className="price-container">
                <p>₦2000</p>
                <span className="plus-icon"> + </span>
              </div>
            </div>
            <div className="feature-items">
              <span className="love-icon">
                <img src={love} alt="love" className="love-image" />
              </span>
              <img src={redfruit} alt="delicios" className="recommend-image" />
              <p className="recommend-paragraph">Honey Lime Combo</p>
              <div className="price-container">
                <p>₦2000</p>
                <span className="plus-icon"> + </span>
              </div>
            </div>
            <div className="feature-items">
              <span className="love-icon">
                <img src={love} alt="love" className="love-image" />
              </span>
              <img src={glowberry} alt="delicios" className="recommend-image" />
              <p className="recommend-paragraph">Honey Lime Combo</p>
              <div className="price-container">
                <p>₦2000</p>
                <span className="plus-icon"> + </span>
              </div>
            </div>
            <div className="feature-items">
              <span className="love-icon">
                <img src={love} alt="love" className="love-image" />
              </span>
              <img src={glowberry} alt="delicios" className="recommend-image" />
              <p className="recommend-paragraph">Honey Lime Combo</p>
              <div className="price-container">
                <p>₦2000</p>
                <span className="plus-icon"> + </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
