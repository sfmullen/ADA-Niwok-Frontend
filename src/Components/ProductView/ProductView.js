import React from "react";
import './ProductView.scss';
import ProductList from '../ProducList/ProductList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {
	Link
} from 'react-router-dom';


const ProductView = () => {
    return (
        <React.Fragment>
            <section className="productView-container">
                <div className="product-title">
                    <h1>Tu comunidad tiene los siguientes</h1>
                    <h1>PRODUTOS SOLICITADOS:</h1>
                </div>
                <ProductList />
            </section>
            <Link to="/" className="btn-back">
				<button type="button" className="btn-back">
                <FontAwesomeIcon icon={faArrowLeft} className="icon" />
                VOLVER A COMUNIDADES
            </button>
			</Link>
        </React.Fragment>
    )
};

export default ProductView;
