import React, {useCallback} from 'react';
import $ from 'jquery';
import Foundation from 'foundation-sites';
import Card from './Card';

export default function MainGrid() {

    const foundationTopNav = useCallback(node => {
        if ( node !== null ) {
            $(node).foundation();  // Initiate Foundation code at here.
        }
    });
  
    return(
        <main>
            <div className="grid-x small-up-1 medium-up-4" id="responsive">
                <div className="cell">
                    <Card name="one"/>
                </div>
                <div className="cell">
                    <Card name="two"/>
                </div>
                <div className="cell">
                    <Card name="three"/>
                </div>
                <div className="cell">
                    <Card name="four"/>
                </div>
            </div>
        </main>
    );
}