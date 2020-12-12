import React from "react";
import './SearchView.scss';
import Search from "../Search/Search";
import SearchResults from "../SearchResults/SearchResults";
import { Router, Route } from "react-router-dom";

const SearchView = () => {
    return (
        <React.Fragment>
            <Search />
            {/* <SearchResults /> */}
        </React.Fragment>
        
    )
};

export default SearchView;
