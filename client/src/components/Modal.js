import React from "react";
import {Link} from "react-router-dom";
import '../styles/modal.css';
import {FaNewspaper, FaListOl, FaShoppingCart, FaAward, FaInfoCircle, FaBullhorn} from "react-icons/fa";
import {MdNewReleases, MdContactPhone} from "react-icons/md/";
import {IoLibrarySharp, IoSendSharp} from "react-icons/io5";

export default function Modal({ handleClose, show }) {

  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="close-btn">
          <Link to="/"><img src="./assets/images/lhp_logo_250x200.png" id="side-logo" alt="logo"/></Link>
          <button id="modal-close" type="button" onClick={handleClose}>
            Close Map
          </button>
        </div>
        <div className="site-map">
          <span>NEWS</span>
          <ul className="site-map-menu" id="newsMenu">
            <li><Link to="/home"><FaNewspaper className="icon1" /> Latest News</Link></li>
            <li><Link to="/home"><MdNewReleases className="icon2"/>New Releases</Link></li>  
          </ul>
        </div>
        <div className="site-map">
          <span>BOOK CATALOG</span>
          <ul id="catMenu" className="site-map-menu">  
            <li><Link to="/catalog"><IoLibrarySharp className="icon1" /> Listings</Link></li>
            <li><Link to="/series"><FaListOl className="icon2" /> Series</Link></li>
            <li><Link to="/order"><FaShoppingCart className="icon3" /> Order</Link></li>
          </ul>
        </div>
        <div className="site-map">
        <span>SUBMISSIONS</span>
          <ul className="site-map-menu" id="subsMenu">
            <li><Link to="/submissions"><IoSendSharp className="icon1" /> Submissions</Link></li>
            <li><Link to="/awards"><FaAward className="icon2" /> Poetry Prize</Link></li>
          </ul>
        </div>
        <div className="site-map">
          <span>ABOUT</span>
          <ul id="aboutMenu" className="site-map-menu" >
              <li><Link to="/about"><FaInfoCircle className="icon1" /> History</Link></li>
              <li><Link to="/about#about-mission"><FaBullhorn className="icon2" /> Mission</Link></li>
              <li><Link to="/about#about-contacts"><MdContactPhone className="icon3" />Contacts</Link></li>
          </ul>
        </div>
       
      </section>
    </div>
  );
};
