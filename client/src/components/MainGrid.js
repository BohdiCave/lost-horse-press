import React from 'react';
import { useLocation } from 'react-router-dom';
import AddItemBtn from "./AddItemBtn";
import Card from './Card';

export default function MainGrid(props) {

  const address = useLocation().pathname;

  return(
    <main>
      {address ==="/catalog" ? (
        <div className="cat-results">
          <h2 id="cat-list">Catalog Listings</h2>
          <table id="cat"><tbody>
          {props.books.map(book => { 
            return(
            <tr key={book.id} className="cat-item">
              <th className="cover">
                <img className="cover" src={`/assets/images/covers/${book.id}.jpg`}/>
                <AddItemBtn id={book.id}/>
              </th>
              <td className="blurb">
                <h3 id="title" dangerouslySetInnerHTML={{ __html: book.title }}></h3>
                <h5 id="author">{book.author && (`by ${book.author}`)}</h5>
                <h5 id="praise">{book.blurb && "Praise of the book:"}</h5>
                <div id="blurb" dangerouslySetInnerHTML={{ __html: book.blurb}}></div>
                <div id="blurbAuthor" dangerouslySetInnerHTML={{ __html: book.blurb_author}}></div>
              </td>
            </tr>
            );
          })}
          </tbody></table>
        </div>
      ) : address ==="/home" ? (
        <div>
          <h2 id="featured-list">Featured Books</h2>
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
          </div>
        </div>
      ) : address ==="/about" ? (
        <div id="article-container">
          <div id="images">
            <div>
              <figure className="sideImg">
                <img title="christine1" src="./assets/images/christine1.jpg" alt="" />
                <figcaption>Christine Holbert, the founder <br></br> LOST HORSE PRESS</figcaption>
              </figure>
            </div>
            <div>
              <figure className="sideImg">
                <img title="poetrySlam2007" src="./assets/images/poetryslam2007.jpg" alt="" />
                <figcaption>At a poetry slam</figcaption>
              </figure>
            </div>
            <div>
              <figure className="sideImg">
                <img title="poetsOdenHall" src="./assets/images/PoetsOdenHall.jpg" alt="" />
                <figcaption>During a LOST HORSE PRESS Conference</figcaption>
              </figure>
            </div>
          </div>
          <div id="articles">
          {props.articles.map(article => {
            return(
              <article key={article.article_name} id={article.article_name}>
                <h2 className="artTitle">{article.article_title}</h2>
                <div className="excerpt" dangerouslySetInnerHTML={{ __html: article.article_excerpt}}></div>
                <a href="">Read the full article</a>
                {/* link to the modal that loads the full text. */}
              </article>
            );
          })}
          </div>
        </div>
      ) : "Error"}
    </main>
  );
}
