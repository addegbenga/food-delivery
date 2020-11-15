import React, { useContext } from "react";
import { globalContext } from "../context/globalContext";
import "./sidebarStyle.css";

export default function Sidebar() {
  const { toggleNav } = useContext(globalContext);
  return (
    toggleNav && (
      <div className="side-nav-container">
        <div>
          <ul>
            <li>side nav one</li>
            <li>side nav one</li>
            <li>side nav one</li>
            <li>side nav one</li>
            <li>side nav one</li>
            <li>side nav one</li>
            <li>side nav one</li>
            <li>side nav one</li>
          </ul>
        </div>
      </div>
    )
  );
}
