import axios from 'axios';
import {ORDERS_LOADING, GET_ORDERS, CHECKOUT, GET_ERRORS} from "./types";

export const getOrders = (id) => dispatch => {
    dispatch(setOrdersLoading());
    axios.get(`/api/orders/${id}`)
         .then(res => dispatch({
             type: GET_ORDERS,
             payload: res.data
         }))
         .catch(err => dispatch({
             type: GET_ERRORS,
             payload: err.response.data
         }));
};

export const checkout = (id, source) => dispatch => {
    axios.post(`/api/orders/${id}`, {source})
         .then(res => dispatch({
             type: CHECKOUT,
             payload: res.data
         }))
         .catch(err => dispatch({
             type: GET_ERRORS,
             payload: err.response.data
         }));
};

export const setOrdersLoading = () => {
    return { type: ORDERS_LOADING };
}