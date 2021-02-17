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

  return (
    <>
      <Navbar />
      <MainGrid books={books} />
      <Footer />
    </>
  );
}
  