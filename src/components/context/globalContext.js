import React, { createContext, useReducer } from "react";
import { globalReducer } from "./globalReducer";
import setAuthToken from "./setAuthToken";
import axios from "axios";

export const initialState = {
  token: localStorage.getItem("token"),
  user: null,
  isAuthenticated: false,
  products: [],
  productLiked: null,
  product: null,
  likedProduct: null,
};

export const globalContext = createContext(initialState);

export default function GlobalContextProvider(props) {
  const [state, dispatch] = useReducer(globalReducer, initialState);
  //loading user
  const loadUser = async () => {
    setAuthToken(localStorage.token);
    try {
      const response = await axios.get("http://localhost:5000/users");
      dispatch({
        type: "USER_LOADED",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //Register User
  const registerUser = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/users/register",
        formData,
        config
      );
      dispatch({
        type: "REGISTERED_USER",
        payload: response.data,
      });
      loadUser();
    } catch (error) {
      console.log(error);
    }
  };

  //login user
  const loginUser = async (formData) => {
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };
    try {
      const response = await axios.post(
        "http://localhost:5000/users/login",
        formData
        // config
      );
      dispatch({
        type: "LOGGED_IN_USER",
        payload: response.data.token,
      });
      console.log(response.data);
      loadUser();
    } catch (error) {
      console.log(error);
    }
  };

  //log out user
  const logOutUser = async () => {
    setAuthToken("");
    dispatch({
      type: "LOG_OUT",
    });
  };

  return (
    <globalContext.Provider
      value={{
        product: state.product,
        products: state.products,
        productLiked: state.productLiked,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        dispatch,
        registerUser,
        loginUser,
        logOutUser,
        loadUser,
      }}
    >
      {props.children}
    </globalContext.Provider>
  );
}
