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
        user:null
      };
    case "LOG_OUT":
      localStorage.removeItem("token", action.payload);
      return {
        ...state,
        isAuthenticated: false,
        user:null,
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
        product: action.payload,
      };

    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload.data ],
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

    default:
      return state;
  }
};
