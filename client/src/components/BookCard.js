import React from 'react';
import AddItemBtn from "./AddItemBtn";

export default function BookCard({name, id, title, author, blurb, blurb_author }) {
    return(
      <tr className="cat-item">
        <th className="cover">
            <img className="cover" src={`/assets/images/covers/${id}.jpg`}/>
            <AddItemBtn id={id}/>
        </th>
        <td className="blurb">
            <h3 id="title" dangerouslySetInnerHTML={{ __html: title }}></h3>
            <h5 id="author" dangerouslySetInnerHTML={{ __html: `by ${author}`}}></h5>
            <div id="blurb" dangerouslySetInnerHTML={{ __html: blurb}}></div>
            <div id="blurbAuthor" dangerouslySetInnerHTML={{ __html: blurb_author}}></div>
        </td>
      </tr>
    );
}