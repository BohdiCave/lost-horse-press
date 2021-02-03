import axios from "axios";

export default {
  // BOOK-RELATED ROUTES
  //
  // Get all the books in the catalog
  getBooks: () => {
    return axios.get("/api/catalog");
  },
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
    return axios.get("/api/news");
  },
  // Get a post by id
  getPost: (id) => {
    return axios.get("/api/news/" + id);
  }, 
  // Update a post by id
  updatePost: (id) => {
    return axios.put("/api/news/" + id);
  },
  // Delete a post by id
  deletePost: (id) => {
    return axios.delete("/api/news/" + id);
  },
  // Create and save a new post
  savePost: (postData) => {
    return axios.post("/api/news", postData);
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
    return axios.get("/api/about/");
  }
};
