import React from "react";
import './MainContent.scss';
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';
import Header from "../Header/Header";
import SearchView from "../SearchView/SearchView";
import DescriptionProductView from '../DescriptionProductView/DescriptionProductView';
import ProductView from '../ProductView/ProductView';
import Communities from "../Communities/Communities";



const MainContent = () => {
    return (
        <React.Fragment>
            <Header />
            <BrowserRouter>
                <section className="Main-container">
                    <Switch>
                        <Route exact path="/">
                            <Communities />
                        </Route>
                        <Route exact path="/searchresults/:value">
                            <SearchView />
                        </Route>
                        <Route exact path="/Comunidad/:value">
                            <ProductView />
                        </Route>
                        <Route exact path="/DescripcionProducto/:value">
                            <DescriptionProductView />
                        </Route>
                    </Switch>
                </section>
            </BrowserRouter>
        </React.Fragment >
    )
};

export default MainContent;
