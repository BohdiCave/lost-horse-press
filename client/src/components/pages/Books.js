import React, {Component} from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBooks, delBook } from "../../actions/bookActions";
// components
import Navbar from '../Navbar';
import MainGrid from '../MainGrid';
import Footer from '../Footer';
import '../styles/catalog.css';

class Books extends Component {

  componentDidMount() {
    this.props.getBooks();
  };

  delBook = (e, id) => {
    id= e.target.getAttribute("id");
    this.props.delBook(id);
  // Deletes a book from the database with a given id, then reloads books from the db
  // .then(res => loadBooks())
  };

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
  render() {
    return (
      <>
      <Navbar />
      <MainGrid books={this.props.books} />
      <Footer />
      </>
    );
  };

}

Books.propTypes = {
  getBooks: PropTypes.func.isRequired,
  delBook: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired
};
  
const mapStateToProps = state => ({ 
  books: state.books.items,
  errors: state.errors
});
  
export default connect( mapStateToProps, { getBooks, delBook } )(Books);
