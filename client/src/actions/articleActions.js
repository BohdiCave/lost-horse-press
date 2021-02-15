import axios from 'axios';
import {ARTICLES_LOADING, GET_ARTICLES, ADD_ARTICLE, GET_ARTICLE, UPDATE_ARTICLE, DELETE_ARTICLE, GET_ERRORS} from "./types"; 

export const getArticles = () => dispatch =>  {
  dispatch(setArticlesLoading());
  axios
    .get("/api/about")
    .then(res => res.data)
    .then(articles => dispatch({
        type: GET_ARTICLES,
        payload: articles
    }))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err
      }));
};

export const getArticle = (id) => dispatch => {
    axios
      .get(`/api/about/${id}`)
      .then(res => res.data)
      .then(article => dispatch({
          type: GET_ARTICLE,
          payload: article
      }))
      .catch(err => dispatch({
          type: GET_ERRORS,
          payload: err.response.data
      }));
};

export const addArticle = (articleData) => dispatch => {
  axios
    .post("/api/about", articleData)
    .then(res => res.json())
    .then(article => dispatch({
        type: ADD_ARTICLE,
        payload: article
    }))
    .catch(err => dispatch({
        type: GET_ERRORS,
        payload: err.response.data
    }));
};

export const updArticle = (id, article) => dispatch => {
    axios
      .update(`/api/about/${id}`, article)
      .then(res => res.json())
      .then(article => dispatch({
          type: UPDATE_ARTICLE,
          payload: article
      }))
      .catch(err => dispatch({
          type: GET_ERRORS,
          payload: err.response.data
      }));
};

export const delArticle = (id) => dispatch => {
    axios
      .delete(`/api/about/${id}`)
      .then(res => console.log(res))
      .then(article => dispatch({
          type: DELETE_ARTICLE,
          payload: article
      }))
      .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
      }));
};

export const setArticlesLoading = () => {
    return { type: ARTICLES_LOADING };
}