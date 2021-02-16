import React from 'react';
import AddItemBtn from "./AddItemBtn";

export default function Card({name}) {

    return(
        <div className="card" id={name}>
            <div className="card-section title">
                {name==="one" ? <h5>Mountain and Flower - Selected Poems of Mykola Vorobiov</h5>
                : name==="two" ? <h5>Carbon: Song of Crafts</h5>
                : name==="three" ? <h5>The River People</h5>
                : name==="four" ? <h5>My Mother's Red Ford - New and Selected Poems, 1986 - 2020</h5>
                : "error"}
            </div>
            <div className="card-section book-cover">
                {name==="one" ? <img src="/assets/images/mountain-flower.jpg" className="cover featured" alt="Book Cover - Selected Poems of Mykola Vorobiov" /> 
                : name==="two" ? <img src="/assets/images/lavochkina_carbon-song-of-crafts.webp" className="cover featured" alt="Book Cover - Carbon, Song of Crafts by Svetlana Lavochkina"/>
                : name==="three" ? <img src="/assets/images/the-river-people.jpg" className="cover featured" alt="Book Cover - The River People by Polly Buckingham"/>
                : name==="four" ? <img src="/assets/images/my-mothers-red-ford.jpg" className="cover featured" alt="Book Cover - My Mother's Red Ford by Roy Bentley"/> : "error"}
            </div>
            <div className="card-section desc">
                {name==="one" ? <p>translated from the Ukrainian <br></br> by Maria G. Rewakowicz</p> 
                : name==="two" ? <p>by Svetlana Lavochkina</p>
                : name==="three" ? <p>by Polly Buckhingham</p>
                : name==="four" ? <p>by Roy Bentley</p> : "error"}
            </div>
            <div className="card-section order">
                <AddItemBtn />
            </div>
        </div>
    );
}