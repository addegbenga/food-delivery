import React, { useContext, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/navbar/Navbar";
import Error from "./components/Error";
import Items from "./components/items/Items";
import Shopnow from "./components/shopnow/Shopnow";
import Shopnowdetails from "./components/shopdetails/Shopnowdetails";
import Trackorder from "./components/trackorder/Trackorder";
import Admin from "./components/admin/Admin";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { globalContext } from "./components/context/globalContext";

function App() {
  const { loadUser, isAuthenticated } = useContext(globalContext);
 useEffect(()=>{
   loadUser();
 // eslint-disable-next-line react-hooks/exhaustive-deps
 },[isAuthenticated])
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shopnow" component={Shopnow} />
        <Route exact path="/shopnowdetails" component={Shopnowdetails} />
        <Route exact path="/items" component={Items} />
        <Route exact path="/trackorder" component={Trackorder} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
