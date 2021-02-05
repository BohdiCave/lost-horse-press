import React from 'react';
import API from '../utils/API';
import {useLocation} from 'react-router-dom';
import Navbar from '../components/Navbar';
import OffCanvasWrapper from '../components/OffCanvasWrapper';
import MainGrid from '../components/MainGrid';
import './home.css';

export default function Home() {
    const location = useLocation();
    const address = location.pathname;
    return(
        <>
        {address==="/api/books" || address==="/api/catalog" ? 
        (<><Navbar/><MainGrid/></>)
        : (<>    
        <Navbar/>
        <OffCanvasWrapper /></>)
        }
        
        </>
    );
}