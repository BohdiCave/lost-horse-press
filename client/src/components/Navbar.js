import React, {useCallback} from 'react';
import $ from 'jquery';
import Foundation from 'foundation-sites';
import '../pages/home.css';

export default function NavBar() {

  const foundationTopNav = useCallback(node => {
      if ( node !== null ) {
          $(node).foundation();  // Initiate Foundation code at here.
      }
  });

  return (
  <header>
    <div id="wrapper" ref={foundationTopNav}>
      <div className="title-bar" data-responsive-toggle="navigation" data-hide-for="small">
        <button className="menu-icon" type="button" data-toggle="navigation"></button>
        <div className="title-bar-title">Menu</div>
      </div>
      <div className="top-bar" id="navigation">
        <div className="top-bar-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <li className="menu-image">
              <a id="lhp-brand" href="/">
                <img src="/assets/images/lhp_logo_250x200.png" alt="Lost Horse Press logo"/>
              </a>
            </li>
            <li>
              <a href="/news">News</a>
            </li>
            <li>
              <a id="drop-parent" href="">Catalog</a>
              <ul className="menu vertical">
                  <li><a href="/catalog">Catalog listings</a></li>
                  <li><a href="">Contemporary Ukrainian Poetry Series</a></li>
                  <li><a href="">Human Rights Series</a></li>
              </ul>
            </li>
            <li><a href="/submissions">Submissions</a></li>
            <li><a href="/about">About</a></li>
            <li>
              <button type="button" className="button" id="site-map" data-toggle="offCanvasLeft">Site map</button>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li><input type="search" placeholder="Search"/></li>
            <li><button type="button" className="button">Search</button></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  );
}    