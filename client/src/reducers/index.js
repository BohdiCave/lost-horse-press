import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import postReducer from "./postReducer"; 
import itemReducer from "./itemReducer";
import cartReducer from "./cartReducer";
import orderReducer from "./orderReducer";
import booksReducer from "./booksReducer";
import articleReducer from "./articleReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  posts: postReducer,
  items: itemReducer,
  cart: cartReducer,
  orders: orderReducer,
  books: booksReducer,
  articles: articleReducer
});