import {CART_LOADING, GET_CART, ADD_TO_CART, DELETE_FROM_CART} from "../actions/types";

const initialState = {
    item: {},
    loading: false
};

export default function(state = initialState, action) {
    switch (action.type) {
      case GET_CART:
        return {
          ...state,
          item: action.payload
        };
      case ADD_TO_CART:
        return {
          ...state,
          item: action.payload
        };
      case DELETE_FROM_CART:
        return {
            ...state,
            item: action.payload
          };
      case CART_LOADING:
        return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
  }