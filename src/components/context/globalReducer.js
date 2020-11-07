export const globalReducer = (state, action) => {
  switch (action.type) {
    case "USER_LOADED":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case "REGISTERED_USER":
    case "LOGGED_IN_USER":
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        user: null,
      };
    case "LOG_OUT":
      localStorage.removeItem("token", action.payload);
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
      };
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };

    case "PRODUCT":
      return {
        ...state,
        product: { ...action.payload },
        // price: action.payload.productPrice,
      };

    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload.data],
      };
    case "DELETE_PRODUCTS":
      return {
        ...state,
        products: state.products.filter(
          (product) => product._id !== action.payload
        ),
      };

    case "GET_LIKES":
      return {
        ...state,
        likes: action.payload,
      };
    case "CART_ITEM":
      let tempItems =
        state.product &&
        state.products.find((product) => product._id === action.payload);
      let tempItem2 =
        state.products &&
        state.products.find((item) => item._id === action.payload);
      return {
        ...state,
        carts: [tempItems, ...state.carts],
        carted: tempItem2,
        localcart: localStorage.setItem(
          "carting",
          JSON.stringify([tempItems, ...state.carts])
        ),
        openCart: true
      };

    case "INCREMENT_COUNTER": {
      let tempProduct = state.product._id === action.payload._id && {
        ...state.product,
        counter: state.product.productQuantity++,
        
      };
      let tempCart = state.carts.map((cart) => {
        if (cart._id === action.payload._id) {
          cart = { ...cart, counter: cart.productQuantity++ };
        }
        return cart;
      })

      return {
        ...state,
        carts: tempCart,
      };
    }
    case "DECREMENT_COUNTER":
      let decrease = state.counter * action.payload.productPrice;
      let tempCart = state.carts.map((cart) => {
        if (cart._id === action.payload._id) {
          cart = {
            ...cart,
            counter:
              cart.productQuantity === 1
                ? (cart.productQuantity = 1)
                : cart.productQuantity--,
          };
        }
        return cart;
      });
      return {
        ...state,
        carts: tempCart,
      };
    case "RESET_COUNTER":
      return {
        ...state,
        counter: 1,
      };

    case "TOGGLE_CART":
      return {
        ...state,
        openCart: !state.openCart,
      };

    default:
      return state;
  }
};
