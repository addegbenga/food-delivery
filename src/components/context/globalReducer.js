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
    case "GET_PRODUCTS_REQUEST":
      return { loading: true };
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case "GET_PRODUCTS_REQUEST_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    case "PRODUCT_REQUEST":
      return { loading: true };
    case "PRODUCT":
      return {
        ...state,
        product: action.payload,
        // counter: 1,
        loading: false,
        // price: action.payload.productPrice,
      };
    case "PRODUCT_REQUEST_FAIL":
      return {
        loading: false,
        error: action.payload,
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
        likedProduct: action.payload,
      };
    case "ADD_LIKE":
      return {
        ...state,
        likedProduct: [...state.likedProduct, action.payload],
        liked: !state.liked,
      };
    case "ERRORS":
      return {
        ...state,
        error: action.payload,
      };
    case "CART_ITEM":
      let tempItems =
        state.product._id === action.payload.product._id
          ? {
              ...state.product,
              count: (state.product.productQuantity = action.payload.counter),
            }
          : null;
      let tempItem2 =
        state.products &&
        state.products.find((item) => item._id === action.payload.product._id);
      return {
        ...state,
        carts: [tempItems, ...state.carts],
        carted: tempItem2,

        localcart: localStorage.setItem(
          "carting",
          JSON.stringify([tempItems, ...state.carts])
        ),
        openCart: true,
      };
    case "INCREMENT_COUNTER":
      let tempProduct = state.product._id === action.payload._id && {
        ...state.product,
        counter: state.product.productQuantity++,
      };
      const price = action.payload.productPrice;
      let tempCart = state.carts.map((cart) => {
        const { productQuantity } = cart;

        if (cart._id === action.payload._id) {
          cart = {
            ...cart,
            counter: cart.productQuantity++,
            price: productQuantity * price,
          };
        }
        return cart;
      });

      return {
        ...state,
        carts: tempCart,
      };
    case "DECREMENT_COUNTER":
      const prices = action.payload.productPrice;
      let decrease = state.counter * action.payload.productPrice;
      let tempCarts = state.carts.map((cart) => {
        const { productQuantity } = cart;
        if (cart._id === action.payload._id) {
          cart = {
            ...cart,

            counter: cart.productQuantity === 1 ? 1 : cart.productQuantity--,
            price: productQuantity * prices,
          };
        }
        return cart;
      });
      return {
        ...state,
        carts: tempCarts,
      };
    case "TOGGLE_CART":
      return {
        ...state,
        openCart: !state.openCart,
      };

    case "TOGGLE_NAV":
      return {
        ...state,
        toggleNav: !state.toggleNav,
      };

    default:
      return state;
  }
};
