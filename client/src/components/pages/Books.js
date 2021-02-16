import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBooks } from "../../actions/bookActions";
// components
import Navbar from '../Navbar';
import MainGrid from '../MainGrid';
import Footer from '../Footer';
import '../styles/catalog.css';

export default function Books() {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks()); 
  },[]);

  const books = useSelector(state => state.books.items);

  // delBook = (e, id) => {
  //   id = e.target.getAttribute("id");
  //   props.delBook(id);
  // Deletes a book from the database with a given id, then reloads books from the db
  // .then(res => loadBooks())
  // };

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
  
