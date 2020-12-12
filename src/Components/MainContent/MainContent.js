import React from "react";
import './MainContent.scss';
import Header from "../Header/Header";
import SearchView from '../SearchView/SearchView';
import DescriptionProductView from '../DescriptionProductView/DescriptionProductView';


const MainContent = () => {
    return (
        <React.Fragment>
            <Header />
            {/*<SearchView />*/}
            <DescriptionProductView />
        </React.Fragment>
    )
};

export default MainContent;
