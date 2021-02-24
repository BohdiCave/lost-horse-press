import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';

import BookCard from './BookCard';

export default function MainGrid(props) {

  const [series, setSeries] = useState("lhp-series");

  const address = useLocation().pathname;
  let books, articles;
  if (address === "/catalog" || address==="/series" || address==="/search" || address==="/home") {
    books = props.books;
  } else if (address === "/about") {
    articles = props.articles;
  }
  
  return(
    <main>
      {(address ==="/catalog" || address==="/series" 
       || address==="/search" || address==="/home") 
      ? (
        <div className="cat-results">
          {address === "/catalog" && <h2 id="cat-list">Catalog Listings</h2>}
          {address === "/search" && <h2 id="cat-list">Search Results</h2>}
          {address === "/home" && <h2 id="featured-list">Featured Books</h2>}
          {address === "/series" && 
            <>
            <h2 id={series}>
              {series==="lhp-series" ? "LOST HORSE PRESS Series"
              :series==="np-series" ? "New Poets Series"
              :series==="ua-series" ? "Ukrainian Contemporary Poetry Series"
              :series==="hr-series" ? "Human Rights Series" 
              :series==="na-series" ? "Native American Series" : "Error"}
            </h2> 
            <section id="tabs">
              <button type="button" onClick={()=> setSeries("lhp-series")} className="series-tab">
                LHP Series Home
              </button>
              <button type="button" onClick={() => setSeries("np-series")} className="series-tab">
                New Poets
              </button>
              <button type="button" onClick={() => setSeries("ua-series")} className="series-tab">
                Ukrainian
              </button>
              <button type="button" onClick={() => setSeries("hr-series")} className="series-tab">
                Human Rights
              </button>
              <button type="button" onClick={() => setSeries("na-series")} className="series-tab">
                Native American
              </button>
            </section>
            {series==="lhp-series" &&
              <section id="series-summary">
                <div id="new-poets">
                  <h5>New Poets Series</h5>
                  <p>Lost Horse Press is delighted to present the poetry series, <em>Lost Horse Press New Poets Series: New Poets | Short Book</em>, and its collaboration with poet Marvin Bell, who served as Series Editor.</p>
                  <p>Between 2007 and 2011, Lost Horse Press published an annual volume of three new poets, each poet represented by twenty to thirty pages of poetry with a personal prose statement about his or her writing. Edited by Marvin Bell, the series features poets who are relatively unknown in literary circles but have strong individual voices and have shown a strong commitment to writing.</p>
                  <p>This series was not intended to become a contest or a market. Neither Lost Horse Press nor the editor wished to receive uninvited inquiries or manuscripts. The goal was to foster the unconventional and unknown. The series introduces poetry that presses the boundaries of language—the sociopolitical, the surreal, the nutty, the extreme, good free verse, and good formalist verse. We preferred lively nonsense to earnest meaninglessness. We did not care for theory-based experiments. Manuscripts are made up of poems someone can hate and someone can love. Middle-of-the-road didn’t interest. Anyone who reads the work, whether they love or hate it, should immediately say to herself, <em>“Well, this is different.”</em></p>
                </div>
                <div id="ukrainian">
                  <h5>Ukrainian Contemporary Poetry Series</h5>
                  <p>In this series, Lost Horse Press introduces readers to a scope of contemporary Ukrainian poets and poetry through English translation. Lost Horse Press publishes single-author volumes representing a diversity of Ukrainian poets, with particular attention to gender and place of origin, in dual-language editions with the Ukrainian original and English translation printed enface. At this time, we are only accepting manuscripts through solicitation.</p>
                </div>
                <div id="human-rights">
                  <h5>Human Rights Series</h5>
                  <p>In this series, Lost Horse Press publishes poetry anthologies focusing on some specific aspect of human rights: the Israeli-Palestinian conflict, women's rights, women in the workplace, or global human rights (torture, migration, wars, imprisonment, violence against women and LGBT, and more...).</p>
                </div>
                <div id="native-american">
                  <h5>Native American Series</h5>
                  <p>This unique series, entitled <em>Regenerations: Indigenous Poetry Series</em>, edited by Hunkpapa Sioux poet Tiffany Midge, and published by Christine Holbert of the Lost Horse Press, presents inspiring and thought-provoking Native American voices in their original indigenous languages, providing an artistic, cultural and linguistic gateway towards language revitalization efforts in the Americas.</p>
                  <p>The series is currently accepting queries from emerging and established Indigenous poets who speak their tribal language or have resources to a tribal language speaker who can provide translation for their work. Please email queries to <em>losthorsepress@mindspring.com</em> or mail to: </p><address><p>Regenerations - Lost Horse Press  •  105 Lost Horse Lane  •  Sandpoint, Idaho 83864</p></address>
                  <p>According to the organization <em>Heart of the Earth</em> — the national leader in Native language renaissance — advocating for realization of the Native American Languages Act, “there are approximately 225 Native American languages still spoken in the United States, 60 in Canada, and 125 in Central America. In South America, the number of Indigenous languages numbers in the range of 300 to 400. The majority of these languages are endangered or threatened. If these languages go silent, all the thousands of years of human knowledge — pharmaceutical plants, ceremonial knowledge, astronomical knowledge, cultural history, interpretation of treaties — this knowledge will be lost. It is like the burning of the Library at Alexandria taking place hundreds of times over.”</p>
                </div>
              </section>
            }
            </>
          }
          <table id="cat"><tbody>
          {
            address === "/series" 
          ? 
            (books.filter(book => book.genre===series).map(book => {
              return <BookCard 
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
                blurb={book.blurb}
                blurb_author={book.blurb_author}
              />
            }))
          : address === "/home" 
          ? (books.filter(book => book.rewrite==="featured").map(book => {
              return <BookCard
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
                blurb={book.blurb}
                blurb_author={book.blurb_author}
              />
            }))
          : 
            (books.map(book => { 
              return <BookCard
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
                blurb={book.blurb}
                blurb_author={book.blurb_author}
              />
            }))
          }
          </tbody></table>
        </div>
      ) : address ==="/about" ? (
      <div id="about-wrapper">
        <h2 id="head-title">About LOST HORSE PRESS</h2>
        <div id="article-container">
          <section id="images">
            <div id="about-mission">
              <h2 className="artTitle">Mission Statement</h2>
              <div id="mission">Established in 1998, Lost Horse Press — a nonprofit independent press — publishes poetry titles of high literary merit, and makes available other fine contemporary literature through cultural, educational and publishing programs and activities. The LOST HORSE PRESS <em>New Poets, Short Books Series</em>, edited by Marvin Bell, is dedicated to works — often ignored by conglomerate publishers — which are so much in danger of vanishing into obscurity in what has become the age of chain stores and mass appeal food, movies, art and books.</div>
            </div>
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
            <div id="about-contacts">
              <h2 className="artTitle">Contacts</h2>
              <div id="contacts">
                <address>
                  Lost Horse Press<br></br>
                  105 Lost Horse Lane<br></br>
                  Sandpoint, Idaho 83864<br></br>
                </address>
                <div>
                  (208) 255-4410<br></br>
                  (208) 255-1560 Fax<br></br>
                  <a href="mailto:losthorsepress@mindspring.com">
                    losthorsepress@mindspring.com
                  </a><br></br>
                </div>
              </div>
            </div>
          </section>
          <section id="articles">
          {articles.map(article => {
            return(
              <article key={article.article_name} id={article.article_name}>
                <h2 className="artTitle">{article.article_title}</h2>
                <div className="excerpt" dangerouslySetInnerHTML={{ __html: article.article_excerpt}}></div>
                <a href="">Read the full article</a>
                {/* link to the modal that loads the full text. */}
              </article>
            );
          })}
          </section>
        </div>
      </div>
      ) : "Error"}
    </main>
  );
}
