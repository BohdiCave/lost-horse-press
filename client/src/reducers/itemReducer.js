import {GET_ITEMS, ADD_ITEM, DELETE_ITEM, UPDATE_ITEM, ITEMS_LOADING} from "../actions/types";

const initialState = {
    items: [],
    item: {},
    loading: false
};

export default function(state = initialState, action) {
    switch (action.type) {
      case GET_ITEMS:
        return {
          ...state,
          items: action.payload
        };
      case ADD_ITEM:
        return {
          ...state,
          item: action.payload
        };
      case DELETE_ITEM:
        return {
            ...state,
            item: action.payload
          };
      case UPDATE_ITEM:
        return {
            ...state,
            item: action.payload
          };
      case ITEMS_LOADING:
        return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
  }