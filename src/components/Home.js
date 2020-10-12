import React from "react";
import HomeImg from "../images/home.png";
import isometric from "../images/fuckiso.png";
import "./homeStyle.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="img-container">
        <img src={HomeImg} alt="home" className="home-img" />
      </div>
      <div className="iso-container">
        <img src={isometric} alt="home" className="iso-img" />
      </div>
      <div className="home-header-container">
        <h1 className="home-header">
          Welcome to Fruit Hub home of refreshment we are always here to serve
          your needs
        </h1>
        <button className="btn-home">Order now</button>
      </div>
    </div>
  );
}
