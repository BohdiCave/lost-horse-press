import React from "react";
import { Link } from "react-router-dom";
//components
import SiteMapBtn from "../SiteMapBtn";
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
    <main>
      <div className="container">
        <div className="side-btn"> 
          <div className="side-btn-left">   
            <ZoomIn className="site-map-btn">
              <SiteMapBtn />
            </ZoomIn>
          </div>
          <div>
            <h1>LOST HORSE PRESS</h1>
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

        </div>
        <div className="main-menu">
                
          <div className="landing-menu">
            <div className="left">
              <SlideIn>
                <a href="/home"><img src="/assets/images/lhp_logo_600x600.png" id="logo"/></a>
              </SlideIn>    
            </div>
                    
            <div className="right">
              <ZoomIn className="menu-btn">
                <button className="link" id="news"><Link to="/news">NEWS</Link></button>
              </ZoomIn>

              <ZoomIn className="menu-btn">
                <button className="link" id="cat"><Link to="/catalog">CATALOG</Link></button>
              </ZoomIn>

              <ZoomIn className="menu-btn">
                <button className="link" id="sub"><Link to="/submissions">SUBMISSIONS</Link></button>
              </ZoomIn>

              <ZoomIn className="menu-btn">
                <button className="link" id="about"><Link to="/about">ABOUT</Link></button>
              </ZoomIn>
            </div>
          </div>

        </div>
      </div>   
    </main>
  );
}