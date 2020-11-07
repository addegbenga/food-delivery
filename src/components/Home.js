
import React from "react";
import ShopNow from "../components/shopnow/Shopnow"
import "./homeStyle.css";

export default function Home() {
  return (
    <>
     
      <div className="home-container">
        <div className="home-inner-container">
        <div className="home-balls">
        <ul>
          <li className="box"></li>
          <li className="box"></li>
          <li className="box"></li>
          <li className="box"></li>
          <li className="box"></li>
        </ul>
      </div>
          <div className="home-bg-text-container">
            <h1 className="home-bg-h1">Welcome to FruitHub home of refreshment we are always here to serve you needs.</h1>
            <button className="home-btn-explore">Explore</button>
          </div>
          {/* <div>
            <h1>image container</h1>
          </div> */}
          {/* <button className="home-btn-left">Left</button>
          <button className="home-btn-right">Right</button> */}
        </div>
      </div>
      <ShopNow/>
    </>
  );
}
