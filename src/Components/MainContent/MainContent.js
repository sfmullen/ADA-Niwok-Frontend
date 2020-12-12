import React from "react";
import './MainContent.scss';
import Header from "../Header/Header";
import Communities from "../Communities/Communities";
import SearchView from "../SearchView/SearchView";


const MainContent = () => {
    return (
        <React.Fragment>
            <Header />
            <SearchView/>
            <Communities/>
        </React.Fragment>
    )
};

export default MainContent;
