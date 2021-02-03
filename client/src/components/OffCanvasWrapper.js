import React, {useCallback} from 'react';
import $ from 'jquery';
import Foundation from 'foundation-sites';
import OffCanvasMenu from './OffCanvasMenu';
import MainGrid from './MainGrid';
import Footer from './Footer';

export default function OffCanvasWrapper() {

    const foundationTopNav = useCallback(node => {
        if ( node !== null ) {
            $(node).foundation();  // Initiate Foundation code at here.
        }
    });
  
    return(
        <div className="off-canvas-wrapper">
            <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
                <OffCanvasMenu/>
                <div className="off-canvas-content" data-off-canvas-content>
                    <MainGrid/>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}