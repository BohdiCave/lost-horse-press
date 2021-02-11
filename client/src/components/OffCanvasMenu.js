import React, {useCallback} from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import Foundation from 'foundation-sites';

export default function OffCanvasMenu() {

    const foundationTopNav = useCallback(node => {
        if ( node !== null ) {
            $(node).foundation();  // Initiate Foundation code at here.
        }
    });
  
    return(
        <div className="off-canvas position-left" id="offCanvasLeft" data-off-canvas>
            <ul>
                <li><a href="#" className="head-title">NEWS</a>
                    <ul className="menu vertical">
                        <li><Link to="/news">Latest News</Link></li>
                        <li><Link to="/featured">New Releases</Link></li>
                    </ul>
                </li>
                <li><a href="#" className="head-title">BOOK CATALOG</a>
                    <ul className="menu vertical">
                        <li><Link to="/api/catalog">Listings</Link></li>
                        <li><Link to="/series">Series</Link></li>
                        <li><Link to="/order">Order</Link></li>
                    </ul>
                </li>
                <li><a href="#" className="head-title">SUBMISSIONS</a>
                    <ul className="menu vertical">
                        <li><Link to="/submissions">Submissions</Link></li>
                        <li><Link to="/awards">Idaho Prize</Link></li>
                    </ul>
                </li>
                <li><a href="#" className="head-title">ABOUT</a>
                    <ul className="menu vertical">
                        <li><Link to="/about">About LHP</Link></li>
                        <li><Link to="/mission">Mission</Link></li>
                        <li><Link to="/contacts">Contacts</Link></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}    