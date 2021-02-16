import {GET_BOOKS, DELETE_BOOK, UPDATE_BOOK, ADD_BOOK, BOOKS_LOADING} from "../actions/types";

const initialState = {
    items: [],
    item: {},
    loading: false
};

export default function(state = initialState, action) {
    switch (action.type) {
      case GET_BOOKS:
        return {
          ...state,
          items: action.payload
        };
      case ADD_BOOK:
        return {
          ...state,
          item: action.payload
        };
      case DELETE_BOOK:
        return {
          ...state,
          item: action.payload
        };
      case UPDATE_BOOK:
        return {
          ...state,
          item: action.payload
        };
      case BOOKS_LOADING:
        return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
  }