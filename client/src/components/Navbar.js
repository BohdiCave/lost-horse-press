import React from 'react';
import NavMenu from './NavMenu.js';

export default function Navbar() {

  return(
      <nav className="navbar navbar-expand-lg navbar-custom" id="menu">
        <a className="navbar-brand" href="https://github.com/BohdiCave" target="new">
            Bohdan Pechenyak
        </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">Menu</span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <NavMenu />
        </div>   
      </nav>
    );
}