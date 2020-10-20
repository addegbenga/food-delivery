import React from "react";
import ReactDOM from "react-dom";
import GlobalContextProvider from "./components/context/globalContext";
import App from "./App";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <Router>
        <App />
      </Router>
    </GlobalContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
