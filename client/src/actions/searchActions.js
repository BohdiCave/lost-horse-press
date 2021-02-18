import axios from 'axios';
import {DO_SEARCH, GET_ERRORS} from './types';

export const doSearch = (searchTerm) => dispatch => {
   
    axios.post("/api/search", searchTerm)
         .then(res => dispatch({
             type: DO_SEARCH,
             payload: res.data
         }))    
         .catch(err => dispatch({
             type: GET_ERRORS,
             payload: err
         }));
};