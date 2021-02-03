import React, {useCallback} from 'react';
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
                        <li><a href="/news">Latest News</a></li>
                        <li><a href="/featured">New Releases</a></li>
                    </ul>
                </li>
                <li><a href="#" className="head-title">BOOK CATALOG</a>
                    <ul className="menu vertical">
                        <li><a href="/catalog">Listings</a></li>
                        <li><a href="/series">Series</a></li>
                        <li><a href="/order">Order</a></li>
                    </ul>
                </li>
                <li><a href="#" className="head-title">SUBMISSIONS</a>
                    <ul className="menu vertical">
                        <li><a href="/submissions">Submissions</a></li>
                        <li><a href="/awards">Idaho Prize</a></li>
                    </ul>
                </li>
                <li><a href="#" className="head-title">ABOUT</a>
                    <ul className="menu vertical">
                        <li><a href="/about">About LHP</a></li>
                        <li><a href="/mission">Mission</a></li>
                        <li><a href="/contacts">Contacts</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}    