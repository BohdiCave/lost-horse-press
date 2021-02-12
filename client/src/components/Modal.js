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
          <a href="/home"><img src="./assets/images/lhp_logo_250x200.png" id="side-logo" alt="logo"/></a>
          <button id="modal-close" type="button" onClick={handleClose}>
            Close Map
          </button>
        </div>
        <div className="site-map">
          <ul className="site-map-menu" id="newsMenu">
            <li><span>NEWS</span>
                <ul id="newsSubmenu">
                    <li><a href="/news"><FaNewspaper style={{position: "absolute", top: "78px", left: "215px"}}/> Latest News</a></li>
                    <li><a href="/featured"><MdNewReleases style={{position: "absolute", top: "110px", left: "215px"}}/>New Releases</a></li>
                </ul>
            </li>
          </ul>
        </div>
        <div className="site-map">
          <ul id="catMenu" className="site-map-menu" >
            <li><span>BOOK CATALOG</span>
              <ul id="catSubmenu">
                  <li><a href="/catalog"><IoLibrarySharp style={{position: "absolute", top: "78px", left: "430px"}}/> Listings</a></li>
                  <li><a href="/series"><FaListOl style={{position:"absolute",top: "110px", left: "430px"}}/> Series</a></li>
                  <li><a href="/order"><FaShoppingCart style={{position:"absolute", top:"143px", left: "430px"}}/> Order</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="site-map">
          <ul className="site-map-menu" id="subsMenu">
            <li>
              <span>SUBMISSIONS</span>
              <ul id="subsSubmenu">
                  <li><a href="/submissions"><IoSendSharp style={{position: "absolute", top:"78px", left: "650px"}}/> Submissions</a></li>
                  <li><a href="/awards"><FaAward style={{position: "absolute", top: "110px", left: "650px"}}/> Poetry Prize</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="site-map">
          <ul id="aboutMenu" className="site-map-menu" >
            <li><span>ABOUT</span>
                <ul id="aboutSubmenu">
                    <li><a href="/about"><FaInfoCircle style={{position: "absolute", top:"78px", left: "865px"}}/> About LHP</a></li>
                    <li><a href="/mission"><FaBullhorn style={{position: "absolute", top: "110px", left: "865px"}}/> Mission</a></li>
                    <li><a href="/contacts"><MdContactPhone style={{position:"absolute", top: "143px", left: "865px"}} />Contacts</a></li>
                </ul>
            </li>
          </ul>
        </div>
       
      </section>
    </div>
  );
};
