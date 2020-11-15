import React, { useContext, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Toast from "../toast/Toast";
import love from "../../images/love.png";
import { globalContext } from "../context/globalContext";
import "./shopdetails.css";

export const Shopnowdetails = ({ match, history }) => {
  const {
    product,
    dispatch,
    carted,
    carts,
    counter,
    defaultPrice,
    price,
  } = useContext(globalContext);

  const productId = match.params.id;

  // const handleAddToCart = () => {
  //   history.push(`/cart/${match.params.id}`);
  // };

  useEffect(() => {
    const fetch = async () => {
      try {
        // dispatch({
        //   type: "PRODUCT_REQUEST",
        // });
        const response = await axios.get(
          `http://localhost:5000/products/${productId}`
        );
        const txt = localStorage.setItem(
          "data",
          JSON.stringify(response.data.data)
        );

        dispatch({
          type: "PRODUCT",
          payload: response.data.data,
        });
      } catch (error) {
        console.log(error);
        dispatch({
          type: "PRODUCT_REQUEST_FAIL",
          payload: error.message,
        });
      }
    };

    fetch();
  }, [dispatch, match.params.id, carted, carts, productId]);

  // const findCart = carts.find((item) => item._id === product._id);
  // const findCarted = carted._id === product._id;

  return (
    <>
      {/* {product.inCart === true ? <Toast /> : null} */}
      {product && (
        <div className="shopdetails-container">
          <button className="go-back-btn">
            <Link to="/shopnow" className="go-back-link">
              Go back
            </Link>
          </button>
          <div className="food-img-container">
            {product && (
              <img
                src={product.productImagePath}
                alt="delicios"
                className="food-img"
              />
            )}
          </div>
          <div className="shopdetails-inner-container">
            <div className="abt-test">
              <div className="price-incre-container">
                <ul className="increement-container">
                  <h2 className="shop-detail-name-header">
                    {product.productname}
                  </h2>
                </ul>
                <p className="shop-price">
                  Price : ₦{defaultPrice ? defaultPrice : product.productPrice}
                </p>
              </div>
              <p className="shop-detail-sub-header">One Pack Contains:</p>
              <p className="shop-description-underline">
                Red Quinoe, Lime, Hony, Blueberries, Strawberries, Mango, Fresh
                mint
              </p>{" "}
              <p className="shop-description">
                {" "}
                if you are looking for a new fruit sald to eat today, quinoe is
                the perfect brunch for you mate.. if you are lookig
              </p>
              <div className="shopdetails-footer">
                <span>
                  <i className="far fa-heart"></i>
                </span>

                <button
                  className="btn-shopdetails-add"
                  // disabled={findCarted || findCart ? true : false}
                  onClick={() =>
                    dispatch({
                      type: "CART_ITEM",
                      payload: { product: product, counter: counter },
                    })
                  }
                  // onClick={handleAddToCart}
                >
                  {/* {findCarted || findCart ? "Item added" : "Add to basket"} */}
                  Add to basket
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// const [counter, setCounter] = useState(1);
// const latestValue = useRef(counter);
// const [price, setPrice] = useState(500);
// const [currentPrice, setCurrentPrice] = useState(500);

// const updateState = (newState) => {
//   latestValue.current = newState;
//   setCounter(newState);
// };

// const incrementCounter = () => {
//   setTimeout(() => {
//     updateState(counter + 1);
//     console.log(latestValue);
//     setPrice(() => currentPrice * latestValue.current);
//     setCurrentPrice(currentPrice);
//   }, 200);
// };

// const decrementCounter = () => {
//   if (counter === 1) return;
//   updateState(counter - 1);
//   setPrice(currentPrice * latestValue.current);
//   console.log(counter);
//   setCurrentPrice(currentPrice);
// };
