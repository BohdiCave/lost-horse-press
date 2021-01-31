import React from 'react';
import { Link, useLocation } from "react-router-dom";

export default function NavMenu({address}) {
    
    const location = useLocation();

    return(
      <ul className="navbar-nav mr-auto">
        <li className={location.pathname==="/" ? "nav-item dropdown active" : "nav-item dropdown"}>
            <Link to="/" className="nav-link dropdown-toggle" id="homeDrop" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Home {location.pathname==="/" && (<><span className="sr-only">(current)</span></>)}
            </Link>
            <div className="dropdown-menu" aria-labelledby="homeDrop">
                <Link to={location.pathname==="/" ? "#mission" : "./#mission"} className="dropdown-item" >
                    Brand Statement
                </Link>
                <Link to={address==="/" ? "#showcase" : "./#showcase"} className="dropdown-item">
                    Project Showcase
                </Link>
                <Link to={address==="/" ? "#skills" : "./#skills"} className="dropdown-item">
                    My Skills
                </Link>
            </div>
        </li>

        <li className={location.pathname==="/portfolio" ? "nav-item dropdown active" : "nav-item dropdown"}>
            <Link to="/portfolio" className="nav-link dropdown-toggle" id="folioDrop" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Portfolio {location.pathname==="/portfolio" && (<><span className="sr-only"> (current) </span></>)}
            </Link>
            <div className="dropdown-menu" aria-labelledby="folioDrop">
                <Link to={location.pathname==="/portfolio" ? "#backend" : "/portfolio#backend"} className="dropdown-item">
                    Backend/Full-stack Projects
                </Link>
                <Link to={location.pathname==="/portfolio" ? "#frontend" : "/portfolio#frontend"} class="dropdown-item" >
                    Frontend Projects
                </Link>
            </div>
        </li>

        <li className={(location.pathname==="/wisdom" || location.pathname==="/story" || location.pathname==="/interests") ? "nav-item dropdown active" : "nav-item dropdown"}>
            <Link to="/wisdom" className="nav-link dropdown-toggle" id="aboutDrop" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                About Me 
            </Link>
            <div className="dropdown-menu" aria-labelledby="aboutDrop">
                <Link to={location.pathname==="/wisdom" ? "" : "/wisdom"} className="dropdown-item">
                    Cross-Cultural Wisdom {address==="/wisdom" && (<><span className="sr-only"> (current) </span></>)}
                </Link>
                <Link to={location.pathname==="/story" ? "" : "/story"} className="dropdown-item">
                    My Story {location.pathname==="/story" && (<><span className="sr-only"> (current) </span></>)}
                </Link>
                <Link to={location.pathname==="/interests" ? "" : "/interests"} className="dropdown-item">
                    My Interests {location.pathname==="/interests" && (<><span className="sr-only"> (current) </span></>)}
                </Link>
            </div>
        </li>

        <li className={location.pathname==="/contacts" ? "nav-item active" : "nav-item"}>
            <Link to={location.pathname==="/contacts" ? "" : "/contacts"} className="nav-link">
                Contacts {location.pathname==="/contacts" && (<><span className="sr-only"> (current) </span></>)}
            </Link>
        </li>

        <li className="nav-item dropdown">
            <Link to="" className="nav-link dropdown-toggle" id="languageSelector" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Languages
            </Link>
            <div className="dropdown-menu" aria-labelledby="languageSelector">
                <Link className="dropdown-item" to={
                      location.pathname==="/" ? "/index-ua" 
                    : location.pathname==="/portfolio" ? "/portfolio-ua"
                    : location.pathname==="/wisdom" ? "/wisdom-ua" 
                    : location.pathname==="/story" ? "/story-ua"
                    : location.pathname==="/interests" ? "/interests-ua"
                    : location.pathname==="/contacts" ? "/contacts-ua"
                    : ""
                }>
                <img className="flag-icon" src="/assets/Images/UA.png" alt="UA-flag"/>
                    Українська
                </Link>
                <Link className="dropdown-item" to={
                      location.pathname==="/index-ua" ? "/" 
                    : location.pathname==="/portfolio-ua" ? "/portfolio"
                    : location.pathname==="/wisdom-ua" ? "/wisdom" 
                    : location.pathname==="/story-ua" ? "/story"
                    : location.pathname==="/interests-ua" ? "/interests"
                    : location.pathname==="/contacts-ua" ? "/contacts"
                    : ""
                }>
                    <img className="flag-icon" src="/assets/Images/US.png" alt="US-flag"/>
                    English
                </Link>
            </div>
        </li>
      </ul>
    );
}


