import React, {
  createContext,
  useReducer,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import { globalReducer } from "./globalReducer";
import setAuthToken from "./setAuthToken";
import axios from "axios";

export const initialState = {
  token: localStorage.getItem("token"),
  user: null,
  isAuthenticated: false,
  products: [],
  productLiked: null,
  product: {},
  likedProduct: null,
  openCart: false,
  localcart: [],
  carted: false,
  counter:1,
  getlocalcart: JSON.parse(localStorage.getItem("carting")),
  carts: [],
  defaultPrice: null,
  price: null,
};

export const globalContext = createContext(initialState);

export default function GlobalContextProvider(props) {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products/all");
        dispatch({
          type: "GET_PRODUCTS",
          payload: response.data.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [dispatch, state.carted]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.carts));
  }, [state.carts]);

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
        openCart: state.openCart,
        carts: state.carts,
        cartSet: state.cartSet,
        carted: state.carted,
        defaultPrice: state.defaultPrice,
        price: state.price,
        counter:state.counter,

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
