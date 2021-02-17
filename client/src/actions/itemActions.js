import axios from "axios";
import {GET_ITEMS, ADD_ITEM, DELETE_ITEM, UPDATE_ITEM, ITEMS_LOADING, GET_ERRORS} from "./types";

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios.get("/api/items")
         .then(res => dispatch({
            type: GET_ITEMS,
            payload: res.data
         }))
         .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err
         }));
};

export const addItem = (item) => dispatch => {
    axios.post("/api/items", item)
         .then(res => dispatch({
            type: ADD_ITEM,
            payload: res.data
         }))
         .catch(err => dispatch({
             type: GET_ERRORS,
             payload: err
         }));
};

export const delItem = (id) => dispatch => {
    axios.delete(`/api/items/${id}`)
         .then(res => dispatch({
             type: DELETE_ITEM,
             payload: id
         }))
         .catch(err => dispatch({
             type: GET_ERRORS,
             payload: err
         }));
};

export const updItem = (id, item) => dispatch => {
    axios.put(`/api/items/${id}`, item)
         .then(res => dispatch({
             type: UPDATE_ITEM,
             payload: Promise.all([id, res.data])
         }))
         .catch(err => dispatch({
             type: GET_ERRORS,
             payload: err
         }))
};

export const setItemsLoading = () => {
    return { type: ITEMS_LOADING };
};