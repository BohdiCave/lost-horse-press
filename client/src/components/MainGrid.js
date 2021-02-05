import React, {useCallback} from 'react';
import {useLocation} from 'react-router-dom';
import $ from 'jquery';
import Foundation from 'foundation-sites';
import Card from './Card';

export default function MainGrid({books}) {
    const location = useLocation();
    const address = location.pathname;

    const foundationTopNav = useCallback(node => {
        if ( node !== null ) {
            $(node).foundation();  // Initiate Foundation code at here.
        }
    });
  
    return(
        <main>
            {address==="/catalog" ? 
            (
            <div className="cat-results">
                <table>
                    <tbody>
                    {books.map(book => {
                        return(
                        <tr>
                            <th>
                                {book.author}
                            </th>
                            <td>
                                {book.bio}
                            </td>
                        </tr>);
                    })}
                    </tbody>
                </table>
            </div>
            )
            : (
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
            </div>)}
        </main>
    );
}