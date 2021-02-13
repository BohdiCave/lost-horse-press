import React, {useState, useEffect} from 'react';
import API from "../../utils/API";
// components
import Navbar from '../Navbar';
import MainGrid from '../MainGrid';
import Footer from '../Footer';
// Foundation and other styles
import '../styles/about.css';

function About() {
    
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        API.getArticles()
           .then(res => {
            console.log(res.data); 
            setArticles(res.data)
            })
           .catch(err => console.log(err));
    }, [])

    return(
        <>
        <Navbar/>
        <MainGrid articles={articles}/>
        <Footer/>
        </>
    );
}

export default About;