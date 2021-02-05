import React, {useCallback} from 'react';
import $ from 'jquery';
import Foundation from 'foundation-sites';

export default function OffCanvasWrapper({name}) {

    const foundationTopNav = useCallback(node => {
        if ( node !== null ) {
            $(node).foundation();  // Initiate Foundation code at here.
        }
    });

    return(
        <div className="card">
            <div className="card-section title">
                {name==="one" ? <h4>Mountain and Flower - Selected Poems of Mykola Vorobiov</h4>
                : name==="two" ? <h4>Carbon: Song of Crafts</h4>
                : name==="three" ? <h4>The River People</h4>
                : name==="four" ? <h4>My Mother's Red Ford - New and Selected Poems, 1986 - 2020</h4>
                : "error"}
            </div>
            <div className="card-section book-cover">
                {name==="one" ? <img src="/assets/images/mountain-flower.jpg" className="cover featured" alt="Book Cover - Selected Poems of Mykola Vorobiov" /> 
                : name==="two" ? <img src="/assets/images/lavochkina_carbon-song-of-crafts.webp" className="cover featured" alt="Book Cover - Carbon, Song of Crafts by Svetlana Lavochkina"/>
                : name==="three" ? <img src="/assets/images/the-river-people.jpg" className="cover featured" alt="Book Cover - The River People by Polly Buckingham"/>
                : name==="four" ? <img src="/assets/images/my-mothers-red-ford.jpg" className="cover featured" alt="Book Cover - My Mother's Red Ford by Roy Bentley"/> : "error"}
            </div>
            <div className="card-section desc">
                {name==="one" ? <p>translated from the Ukrainian by Maria G. Rewakowicz</p> 
                : name==="two" ? <p>by Svetlana Lavochkina</p>
                : name==="three" ? <p>by Polly Buckhingham</p>
                : name==="four" ? <p>by Roy Bentley</p> : "error"}
            </div>
        </div>
    );
}