import React, {Component, useCallback} from "react";
import { Link } from "react-router-dom";
import styled, {keyframes} from "styled-components";
import { slideInLeft, zoomIn } from "react-animations";
import OffCanvasMenu from "../components/OffCanvasMenu";
import $ from 'jquery';
import Foundation from 'foundation-sites';
import "./style.css";

const SlideIn = styled.div`animation: 1.5s ${keyframes`${slideInLeft}`} `;
const ZoomIn = styled.div`animation: .75s ${keyframes`${zoomIn}`}`;

export default function Landing() {

    const foundationTopNav = useCallback(node => {
        if ( node !== null ) {
            $(node).foundation();  // Initiate Foundation code at here.
        }
    });

    return (
    <div className="off-canvas-wrapper">
      <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
        <OffCanvasMenu/>
        <div className="off-canvas-content" data-off-canvas-content>
          {/* Site map and login/register buttons */}
          <div className="off-canvas-btn">    
            <ZoomIn className="site-map-btn">
                <button type="button" className="button" id="site-map" data-toggle="offCanvasLeft">SITE MAP
                </button>
            </ZoomIn>

            <ZoomIn className="login-reg-btn">
              <Link to="/login"> 
                <button type="button" className="button" id="login-btn">LOG IN</button>
              </Link>
              <Link to="/register">
                <button type="button" className="button" id="reg-btn">SIGN UP</button>
              </Link> 
            </ZoomIn>
          </div>
          {/* Main menu of the landing page */}
          <div className="container">
            <div className="landing-menu">
              {/* Left column */}
              <div className="left">
                <SlideIn>
                    <a href="/home"><img src="/assets/images/lhp_logo_600x600.png" id="logo"/></a>
                </SlideIn>    
              </div>
              <div className="right">
                <ZoomIn className="button">
                    <button className="link" id="news"><Link to="/news">NEWS</Link></button>
                </ZoomIn>
              
                <ZoomIn className="button wider">
                    <button className="link" id="cat"><Link to="/catalog">CATALOG</Link></button>
                </ZoomIn>

                <ZoomIn className="button wider">
                    <button className="link" id="sub"><Link to="/submissions">SUBMISSIONS</Link></button>
                </ZoomIn>

                <ZoomIn className="button">
                    <button className="link" id="about"><Link to="/about">ABOUT</Link></button>
                </ZoomIn>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    );
}