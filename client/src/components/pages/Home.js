import React, {useCallback} from 'react';
// components
import Navbar from '../Navbar';
import MainGrid from '../MainGrid';
import Footer from '../Footer';
// styles
import '../styles/home.css';

export default function Home() {
   
    return(
      <>
        <Navbar/>
        <MainGrid/>
        <Footer/>
      </>
    );
}