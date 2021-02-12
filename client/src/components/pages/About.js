import React from 'react';
// components
import Navbar from '../Navbar';
import MainGrid from '../MainGrid';
import Footer from '../Footer';
// Foundation and other styles
import '../styles/home.css';

export default function Home() {
  
    return(
        <>
        <Navbar/>
        <MainGrid />
        <Footer/>
        </>
    );
}