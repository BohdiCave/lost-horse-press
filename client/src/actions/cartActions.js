import axios from 'axios';
import {CART_LOADING, GET_CART, ADD_TO_CART, DELETE_FROM_CART, GET_ERRORS} from "./types";

export const getCart = (id) => dispatch => {
    dispatch(setCartLoading());
    axios.get(`/api/cart/${id}`)
         .then(res => dispatch({
             type: GET_CART,
             payload: res.data
         }))
         .catch(err => dispatch({
             type: GET_ERRORS,
             payload: err.response.data
         }));
};

export const addToCart = (id, prodId, prodQty) => dispatch => {
    axios.post(`/api/cart/${id}`, {prodId, prodQty})
         .then(res => dispatch({
             type: ADD_TO_CART,
             payload: res.data
         }))
         .catch(err => dispatch({
             type: GET_ERRORS,
             payload: err.response.data
         }));
};

export const delFromCart = (userId, itemId) => dispatch => {
    axios.delete(`/api/cart/${userId}/${itemId}`)
         .then(res => dispatch({
             type: DELETE_FROM_CART,
             payload: res.data
         }))
         .catch(err => dispatch({
             type: GET_ERRORS,
             payload: err.response.data
         }));
};

export const setCartLoading = () => {
    return { type: CART_LOADING };
}