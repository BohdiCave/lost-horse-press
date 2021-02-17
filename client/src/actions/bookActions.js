import axios from 'axios';
import {GET_BOOKS, GET_BOOK, DELETE_BOOK, UPDATE_BOOK, ADD_BOOK, BOOKS_LOADING, GET_ERRORS} from './types';

export const getBooks = () => dispatch => {
    dispatch(setBooksLoading());
    axios.get("/api/catalog")
         .then(res => dispatch({
            type: GET_BOOKS,
            payload: res.data
         }))
         .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err
         }));
};

export const getBook = (id) => dispatch => {
    axios.get(`/api/catalog/${id}`)
         .then(res => dispatch({
            type: GET_BOOK,
            payload: res.data
         }))
         .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err
         }));
};

export const addBook = (book) => dispatch => {
    axios.post("/api/catalog", book)
         .then(res => dispatch({
             type: ADD_BOOK,
             payload: res.data
         }))
         .catch(err => dispatch({
             type: GET_ERRORS,
             payload: err
         }));
};

export const delBook = (id) => dispatch => {
    axios.delete(`/api/catalog/${id}`)
         .then(res => dispatch({
             type: DELETE_BOOK,
             payload: res.data
         }))
         .catch(err => dispatch({
             type: GET_ERRORS,
             payload: err
         }));
};

export const updBook = (id, book) => dispatch => {
    axios.update(`/api/catalog/${id}`, book)
         .then(res => dispatch({
             type: UPDATE_BOOK,
             payload: res.data
         }))
         .catch(err => dispatch({
             type: GET_ERRORS,
             payload: err
         }));
};

export const setBooksLoading = () => {
    return { type: BOOKS_LOADING };
}
