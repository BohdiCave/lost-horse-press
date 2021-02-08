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
                <h2>Catalog Listings</h2>
                <table>
                    <tbody>
                    {books.map(book => {
                        return(
                        <tr key={book.id}>
                            <th className="cover">
                                <img className="cover" src={`/assets/images/covers/${book.id}.jpg`}/>
                                <p>{book.author && (`by ${book.author}`)}</p>
                            </th>
                            <td className="bio">
                                <h5>{book.bio && "About the author:"}</h5>
                                <div id="preformatted">{book.bio}</div>
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
                    <Card key="one" name="one"/>
                </div>
                <div className="cell">
                    <Card key="two" name="two"/>
                </div>
                <div className="cell">
                    <Card key="three" name="three"/>
                </div>
                <div className="cell">
                    <Card key="four" name="four"/>
                </div>
            </div>)}
        </main>
    );
}