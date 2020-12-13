import React from "react";
import './SearchView.scss';
import Search from "../Search/Search";
import SearchResults from "../SearchResults/SearchResults";


const SearchView = () => {
    return (
        <React.Fragment>
            <Search />
            <SearchResults />
        </React.Fragment>
        
    )
};

export default SearchView;
