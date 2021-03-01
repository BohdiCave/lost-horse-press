import React from "react";
import { useSelector } from "react-redux";
// components
import Navbar from '../components/Navbar';
import MainGrid from '../components/MainGrid';
import Footer from '../components/Footer';
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
  
