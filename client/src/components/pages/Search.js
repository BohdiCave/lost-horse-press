import React from "react";
import { useSelector } from "react-redux";
// components
import Navbar from '../Navbar';
import MainGrid from '../MainGrid';
import Footer from '../Footer';
import '../styles/catalog.css';

export default function Search() {

  const books = useSelector(state => state.search.items);
  
  return (
    <>
      <Navbar />
      <MainGrid books={books} />
      <Footer />
    </>
  );
}
  
