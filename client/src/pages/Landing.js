import React from "react";
import { Link } from "react-router-dom";
//components
import SiteMapBtn from "../components/SiteMapBtn";
import Footer from "../components/Footer";
// animation
import styled, {keyframes} from "styled-components";
import { slideInLeft, zoomIn } from "react-animations";

const SlideIn = styled.div`animation: 1.5s ${keyframes`${slideInLeft}`} `;
const ZoomIn = styled.div`animation: .75s ${keyframes`${zoomIn}`}`;

// styles
import 'react-pro-sidebar/dist/css/styles.css';
import "../styles/landing.css";

export default function Landing() { 

  return (
    <div id="wrapper">
      <main>
      <div className="container">
        <header className="side-btn"> 
          <div className="side-btn-left">   
            <ZoomIn className="site-map-btn">
              <SiteMapBtn />
            </ZoomIn>
          </div>
          <div id="brand">
            <h1>LOST HORSE PRESS</h1>
            <h2>Sandpoint, Idaho</h2>
          </div>
          <div className="side-btn-right">
            <ZoomIn className="login-reg-btn">
              <Link to="/login"> 
                <button type="button" className="other-btn" id="login-btn">LOG IN</button>
              </Link>
              <Link to="/register">
                <button type="button" className="other-btn" id="reg-btn">SIGN UP</button>
              </Link> 
            </ZoomIn>
          </div> 

        </header>
        <section className="main-menu">
                
          <div className="landing-menu">
            <div className="left">
              <SlideIn>
                <a href="/"><img src="/assets/images/lhp_logo_600x600.png" id="logo"/></a>
              </SlideIn>    
            </div>
                    
            <div className="right">
              <ZoomIn className="menu-btn">
                <Link to="/home">
                  <button className="link" id="news">NEWS</button>
                </Link>
              </ZoomIn>

              <ZoomIn className="menu-btn">
                <Link to="/catalog">
                  <button className="link" id="cat">CATALOG</button>
                </Link>
              </ZoomIn>

              <ZoomIn className="menu-btn">
                <Link to="/submissions">
                  <button className="link" id="sub">SUBMISSIONS</button>
                </Link>
              </ZoomIn>

              <ZoomIn className="menu-btn">
                <Link to="/about">
                  <button className="link" id="about">ABOUT</button>
                </Link>
              </ZoomIn>
            </div>
          </div>

        </section>
      </div>   
    </main>
    <Footer />
    </div>
  );
}