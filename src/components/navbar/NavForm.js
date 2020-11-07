import React from "react";
import "./navStyle.css";

export default function NavForm() {
  return (
    <div>
      <form className="nav-form">
        <input
          type="text"
          name="name"
          placeholder="search item"
          className="nav-form-input"
        />
        <button className="nav-form-btn" type="submit">SEARCH</button>
      </form>
    </div>
  );
}
