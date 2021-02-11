import axios from "axios";
import {GET_POSTS, NEW_POST, DELETE_POST, GET_ERRORS} from "./types";

export const getPosts = () => dispatch =>  {
  axios
    .get("/api/posts")
    .then(res => res.data)
    .then(posts => dispatch({
        type: GET_POSTS,
        payload: posts
    }))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err
      })
    );
}

export const newPost = (postData) => dispatch => {
  axios
    .post("/api/posts", postData)
    .then(res => res.json())
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err
      })
    );
}

export const deletePost = (id) => dispatch => {
    axios
      .delete("/api/posts/" + id)
      .then(res => console.log(res))
      .then(post => dispatch({
          type: DELETE_POST,
          payload: post
      }))
      .catch(err => 
        dispatch({
            type: GET_ERRORS,
            payload: err
        })
      );
}

    // for (let i = 0; i < posts.length; i++) {
    //     if (posts[i].id === delID) {  
    //         delPost = posts.splice(i, 1);
    //     }
    // }

    // setPosts(posts.push(delPost));
