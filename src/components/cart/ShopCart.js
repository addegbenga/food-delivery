import React, { useContext, useEffect } from "react";
import { globalContext } from "../context/globalContext";
import axios from "axios";
import sort from "../../images/sort.png";
import emptycart from "../../images/emptycart.png";
import sortup from "../../images/sortup.png";
import "./cartStyles.css";
import { Link } from "react-router-dom";

export default function ShopCart({ match }) {
  const { openCart, carts, dispatch, counter, defaultPrice } = useContext(
    globalContext
  );

  const cartId = carts && carts.map((cart) => cart._id);
  const productId = match.params.id;

  // useEffect(() => {
  //   const addToCart = async () => {
  //     if(productId){

  //       try {
  //         const data = await axios.get(
  //           `http://localhost:5000/products/${productId}`
  //         );
  //         dispatch({
  //           type: "ADD_TO_CART",
  //           payload: data.data,
  //         });
  //         console.log(data.data)
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }else{
  //       return new Error("ID no defined")
  //     }
  //   };
  //   addToCart();
  // }, []);

  return (
    // openCart && (
      <div className="cart-container">
        <div className="cart-inner-container">
          <h1 className="cart-header">Cart Items</h1>
          {carts.length !== 0 ? (
            carts.map((cart, index) => (
              <div className="cart-items-container" key={index}>
                <div className="cart-items">
                  <img
                    src={cart.productImagePath}
                    alt="txt"
                    className="cart-img"
                  />
                  <div className="cart-image-detail">
                    <h4 className="cart-h4">{cart.productname}</h4>
                    <h4 className="cart-h4">
                      ${cart.price ? cart.price : cart.productPrice}
                    </h4>
                    <button className="cart-btn-remove">remove</button>
                  </div>
                </div>
                <div className="cart-incre-container">
                  <img
                    src={sortup}
                    alt="up"
                    className="sort-img"
                    onClick={() =>
                      dispatch({
                        type: "INCREMENT_COUNTER",
                        payload: cart,
                      })
                    }
                  />
                  <button className="cart-btn-count">
                    {cart.productQuantity}
                  </button>
                  <img
                    src={sort}
                    alt="down"
                    className="sort-img"
                    onClick={() => {
                      dispatch({
                        type: "DECREMENT_COUNTER",
                        payload: cart,
                      });
                    }}
                  />
                </div>
              </div>
            ))
          ) : (
            <div>
              <div className="empty-cart-container">
                <h4>You have no item in cart</h4>
                <div className="empty-cart-img-container">
                  <img src={emptycart} alt="emptycart" className="empty-cart" />
                </div>
                <button
                  class="cart-btn-back"
                  onClick={() =>
                    dispatch({
                      type: "TOGGLE_CART",
                    })
                  }
                >
                  {" "}
                  <Link to="/"> Go back</Link>
                </button>
              </div>
            </div>
          )}
          {carts.length !== 0 && (
            <div>
              <div className="cart-total-container">
                <h1 className="cart-total-h4">Total</h1>
                <h1 className="cart-total-h4">$200</h1>
              </div>
              <div className="btn-clear-container">
                <button className="cart-clear-btn">CLEAR CART</button>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  // );
}
