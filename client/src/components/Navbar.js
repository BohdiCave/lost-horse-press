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
              <Link id="lhp-brand" to="/">
                <img src="/assets/images/lhp_logo_250x200.png" alt="Lost Horse Press logo"/>
              </Link>
            </li>
            <li>
              <Link to="/home" id="news">News</Link>
            </li>
            <li>
              <a id="drop-parent" href="#" id="cat">Catalog</a>
              <ul className="menu vertical" id="cat-drop">
                  <li><Link to="/catalog">Catalog listings</Link></li>
                  <li><Link to="/series">Book Series</Link></li>
                  <li><Link to="/order">Place an Order</Link></li>
              </ul>
            </li>
            <li><Link to="/submissions" id="subs">Submissions</Link></li>
            <li><Link to="/about" id="about">About</Link></li>
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