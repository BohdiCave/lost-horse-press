import React from "react";
import './styles/modal.css';
import {FaNewspaper, FaListOl, FaShoppingCart, FaAward, FaInfoCircle, FaBullhorn} from "react-icons/fa";
import {MdNewReleases, MdContactPhone} from "react-icons/md/";
import {IoLibrarySharp, IoSendSharp} from "react-icons/io5";

export default function Modal({ handleClose, show }) {

  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="close-btn">
          <a href="/"><img src="./assets/images/lhp_logo_250x200.png" id="side-logo" alt="logo"/></a>
          <button id="modal-close" type="button" onClick={handleClose}>
            Close Map
          </button>
        </div>
        <div className="site-map">
          <span>NEWS</span>
          <ul className="site-map-menu" id="newsMenu">
            <li><a href="/home"><FaNewspaper className="icon1" /> Latest News</a></li>
            <li><a href="/home"><MdNewReleases className="icon2"/>New Releases</a></li>  
          </ul>
        </div>
        <div className="site-map">
          <span>BOOK CATALOG</span>
          <ul id="catMenu" className="site-map-menu">  
            <li><a href="/catalog"><IoLibrarySharp className="icon1" /> Listings</a></li>
            <li><a href="/series"><FaListOl className="icon2" /> Series</a></li>
            <li><a href="/order"><FaShoppingCart className="icon3" /> Order</a></li>
          </ul>
        </div>
        <div className="site-map">
        <span>SUBMISSIONS</span>
          <ul className="site-map-menu" id="subsMenu">
            <li><a href="/submissions"><IoSendSharp className="icon1" /> Submissions</a></li>
            <li><a href="/awards"><FaAward className="icon2" /> Poetry Prize</a></li>
          </ul>
        </div>
        <div className="site-map">
          <span>ABOUT</span>
          <ul id="aboutMenu" className="site-map-menu" >
              <li><a href="/about"><FaInfoCircle className="icon1" /> History</a></li>
              <li><a href="/about#about-mission"><FaBullhorn className="icon2" /> Mission</a></li>
              <li><a href="/about#about-contacts"><MdContactPhone className="icon3" />Contacts</a></li>
          </ul>
        </div>
       
      </section>
    </div>
  );
};
