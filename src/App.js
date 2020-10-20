import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/navbar/Navbar";
import Error from "./components/Error";
import Items from "./components/items/Items";
import Shopnow from "./components/shopnow/Shopnow";
import Shopnowdetails from "./components/shopdetails/Shopnowdetails";
import Trackorder from "./components/trackorder/Trackorder";

function App() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shopnow" component={Shopnow} />
        <Route exact path="/shopnowdetails" component={Shopnowdetails} />
        <Route exact path="/items" component={Items} />
        <Route exact path="/trackorder" component={Trackorder} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
