import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/navbar/Navbar";
import Error from "./components/Error";
import Items from "./components/items/Items";

function App() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/items" component={Items} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
