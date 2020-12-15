import userEvent from "@testing-library/user-event";
import React, { useContext } from "react";
import { globalContext } from "../context/globalContext";
import "./sidebarStyle.css";

export default function Sidebar() {
  const { toggleNav } = useContext(globalContext);
  return (
    toggleNav && (
      <div className="side-nav-container">
        <div className="side-nav-inner">
          <ul>
            <li className="side-bar-link"><span><i className="far fa-user"></i></span>My Account</li>
            <li  className="side-bar-link"><span><i className="far fa-bookmark"></i></span>Saved Items</li>
            <li className="side-bar-link"><span><i className="far fa-address-card"></i></span>Contact Preference</li>
            <li  className="side-bar-link"><span><i className="fa fa-shopping-bag"></i></span>My orders</li>
          </ul>
          <div>
              <p>Help </p> 
          </div>
        </div>
      </div>
    )
  );
}

