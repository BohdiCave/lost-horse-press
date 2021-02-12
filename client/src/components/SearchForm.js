import React from 'react';

export default function SearchForm() {
    return(
    <form>        
        <input type="search" id="search-field" placeholder="Search"/>
        <button type="button" id="search-btn" className="button">SEARCH</button>
    </form>
    );
}
