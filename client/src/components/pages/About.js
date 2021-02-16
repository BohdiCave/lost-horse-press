import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import { getArticles } from "../../actions/articleActions";
// components
import Navbar from '../Navbar';
import MainGrid from '../MainGrid';
import Footer from '../Footer';
// Foundation and other styles
import '../styles/about.css';

export default function About() {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getArticles());
    },[])

    const articles = useSelector(state => state.articles.items);
    
    return(
      <>
        <Navbar />
        <MainGrid articles={articles} />
        <Footer />
      </>
    );
}