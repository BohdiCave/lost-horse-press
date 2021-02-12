import React from "react";
import Navbar from '../Navbar';
import Footer from '../Footer';

function NoMatch() {
  return (
    <>
    <Navbar />
    <div style={{textAlign:"center", minHeight: "400px", backgroundColor: "rgb(253,251,245)", paddingTop: "50px"}}>
      <h2>404 Page Not Found</h2>
        <span role="img" aria-label="Face With Rolling Eyes Emoji">
          🙄
        </span>
    </div>
    <Footer />
    </>
  );
}

export default NoMatch;
