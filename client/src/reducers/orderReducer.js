import {ORDERS_LOADING, GET_ORDERS, CHECKOUT} from "../actions/types";

const initialState = {
    items: [],
    loading: false
};

export default function(state = initialState, action) {
    switch (action.type) {
      case GET_ORDERS:
        return {
          ...state,
          items: action.payload
        };
      case CHECKOUT:
        return {
          ...state,
          items: action.payload
        };
      case ORDERS_LOADING:
        return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
  }