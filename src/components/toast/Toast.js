import React, { useContext } from "react";
import { globalContext } from "../context/globalContext";

import "./toastStyle.css";

export default function Toast() {
  const { inCart } = useContext(globalContext);
  return (
    <div className="toast-container">
      <div className="toast-content">
        <p>Item added to cart </p>
      </div>
    </div>
  );
}
