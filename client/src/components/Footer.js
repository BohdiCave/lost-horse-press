import React from 'react';
import {useLocation} from 'react-router-dom';
import '../styles/footer.css';
import {FaHeart} from "react-icons/fa";

export default function Footer() {
    const address = useLocation().pathname;
    return(
        <footer>
            <div className={address==="/" ? "landing" : "copyright"}>
            All rights reserved. &copy; Made with  <FaHeart id="heart" /> by <a href="https://github.com/BohdiCave"> BohdiCave </a> 
                for LOST HORSE PRESS.
            </div> 
        </footer>
    );
}