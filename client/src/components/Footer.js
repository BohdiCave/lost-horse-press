import React from 'react';
import './styles/footer.css';
import {FaHeart} from "react-icons/fa";

export default function Footer() {
  
    return(
        <footer>
            <div className="copyright">
            All rights reserved. &copy; Made with  <FaHeart id="heart" /> by <a href="https://github.com/BohdiCave"> BohdiCave </a> 
                for LOST HORSE PRESS.
            </div> 
        </footer>
    );
}