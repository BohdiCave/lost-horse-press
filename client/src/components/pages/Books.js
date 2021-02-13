import React, { useState, useEffect } from "react";
import API from "../../utils/API";
// components
import Navbar from '../Navbar';
import MainGrid from '../MainGrid';
import Footer from '../Footer';
import '../styles/catalog.css';

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])

  // Load all books and store them with setBooks
  useEffect(() => {
    API.getBooks()
      .then(res => {
        console.log(res); 
        setBooks(res.data)
      })
      .catch(err => console.log(err));
  }, [])

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  // function handleInputChange(event) {
  //   const { name, value } = event.target;
  //   setFormObject({...formObject, [name]: value})
  // };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  // function handleFormSubmit(event) {
  //   event.preventDefault();
  //   if (formObject.title && formObject.author) {
  //     API.saveBook({
  //       title: formObject.title,
  //       author: formObject.author,
  //       synopsis: formObject.synopsis
  //     })
  //       .then(res => loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };

    return (
      <>
      <Navbar />
      <MainGrid books={books} />
      <Footer />
      </>
    );
  }


export default Books;
