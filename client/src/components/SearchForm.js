import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {doSearch} from '../actions/searchActions';

export default function SearchForm() {

    const [search, setSearch] = useState({
        searchTerm: ""
    });
    const dispatch = useDispatch();

    const onChange = (e) => {
        setSearch({[e.target.name]: e.target.value});
    } 

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(search.searchTerm);
        const result = dis();
        if (result) {
            window.location.href="/search";
        }
    }

    async function dis() {
        dispatch(doSearch(search.searchTerm));
    }

    return(
    <form onSubmit={onSubmit}>        
        <input type="search" id="search-field" placeholder="Search" name="searchTerm" value={search.searchTerm} onChange={onChange}/>
        <button type="submit" id="search-btn" className="button">SEARCH</button>
    </form>
    );
}