import React from "react";
import './MainContent.scss';
import Header from "../Header/Header";

const MainContent = () => {
    return (
        <React.Fragment>
            <Header />
            <SearchView />
        </React.Fragment>
    )
};

export default MainContent;
