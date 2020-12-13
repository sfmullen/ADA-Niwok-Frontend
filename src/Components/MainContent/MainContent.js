import React from "react";
import './MainContent.scss';
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';
import Header from "../Header/Header";
import SearchView from "../SearchView/SearchView";
import DescriptionProductView from '../DescriptionProducWiew/DescriptionProductView';
import ProductView from '../ProductView/ProductView';


const MainContent = () => {
    return (
        <React.Fragment>
            <Header />
            <BrowserRouter>
                <section className="Main-container">
                    <Switch>
                        <Route exact path="/">
                            <SearchView />
                        </Route>
                        <Route exact path="/Comunidad">
                            <ProductView />
                        </Route>
                        <Route exact path="/DescripcionProducto">
                            <DescriptionProductView />
                        </Route>
                    </Switch>
                </section>
            </BrowserRouter>
        </React.Fragment >
    )
};

export default MainContent;
