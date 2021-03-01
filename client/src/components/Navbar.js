import React, {useCallback} from 'react';
import {Link} from 'react-router-dom';
import {FaShoppingCart} from 'react-icons/fa';
import SiteMapBtn from "./SiteMapBtn";
import SearchForm from "./SearchForm";
import $ from 'jquery';
import Foundation from 'foundation-sites';
import '../styles/navigation.css';

export default function NavBar() {

  const foundationTopNav = useCallback(node => {
      if ( node !== null ) {
          $(node).foundation();  // Initiate Foundation code at here.
      }
  });

  return (
  
  <header>
    <div id="wrapper" ref={foundationTopNav}>
      {/* <div className="title-bar" data-responsive-toggle="navigation" data-hide-for="small">
        <button className="menu-icon" type="button" data-toggle="navigation"></button>
        <div className="title-bar-title">Menu</div>
      </div> */}
      <div className="top-bar" id="navigation">
        <div className="top-bar-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <li className="menu-image">
              <a id="lhp-brand" href="/">
                <img src="/assets/images/lhp_logo_250x200.png" alt="Lost Horse Press logo"/>
              </a>
            </li>
            <li>
              <a href="/home" id="news">News</a>
            </li>
            <li>
              <a id="drop-parent" href="#" id="cat">Catalog</a>
              <ul className="menu vertical" id="cat-drop">
                  <li><a href="/catalog">Catalog listings</a></li>
                  <li><a href="/series">Book Series</a></li>
                  <li><a href="/order">Place an Order</a></li>
              </ul>
            </li>
            <li><a href="/submissions" id="subs">Submissions</a></li>
            <li><a href="/about" id="about">About</a></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <Link to="/order"><FaShoppingCart id="shop" /></Link>
          <SiteMapBtn />
          <SearchForm />
        </div>
      </div>
    </div>
  </header>

  );
}    