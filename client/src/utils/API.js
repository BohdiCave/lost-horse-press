import axios from "axios";

export default {
  // BOOK-RELATED ROUTES
  //
  // Get all the books in the catalog
  // getBooks: () => {
  //   return axios.get("/api/catalog");
  // },
  // Create and save a new book to the catalog
  saveBook: (bookData) => {
    return axios.post("/api/catalog", bookData);
  },
  // Get a book by id
  getBook: (id) => {
    return axios.get("/api/catalog/" + id);
  },
  // Update a book by id
  updateBook: (id) => {
    return axios.put("/api/catalog/" + id)
  },
  // Delete a book by id
  deleteBook: (id) => {
    return axios.delete("/api/catalog/" + id);
  },
  //
  // POST-RELATED ROUTES
  //
  // Get all posts
  getPosts: () => {
    return axios.get("/api/posts");
  },
  // Create and save a new post
  savePost: (postData) => {
    return axios.post("/api/posts", postData);
  },
  // Get a post by id
  getPost: (id) => {
    return axios.get("/api/posts/" + id);
  }, 
  // Update a post by id
  updatePost: (id) => {
    return axios.put("/api/posts/" + id);
  },
  // Delete a post by id
  deletePost: (id) => {
    return axios.delete("/api/posts/" + id);
  },
  //
  // COVER_RELATED ROUTES
  //
  // Get all covers
  getCovers: () => {
    return axios.get("/api/covers");
  },
  // Add a cover
  addCover: (coverData) => {
    return axios.post("/api/covers" + coverData);
  },
  // Get a cover by id
  getCover: (id) => {
    return axios.get("/api/covers/" + id);
  },
  updateCover: (id) => {
    return axios.update("/api/covers/" + id);
  },
  // Remove a cover
  deleteCover: (id) => {
    return axios.delete("/api/covers/" + id);
  },
  //
  // ARTICLE_RELATED ROUTES
  //
  // Get an article by id
  getArticle: (id) => {
    return axios.get("/api/about/" + id);
  },
  // Get all articles
  getArticles: () => {
    return axios.get("/api/about");
  }
};
