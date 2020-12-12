import React from "react";
import './ProductList.scss';
import Product from '../Product/Product';

const ProductList = () => {
    return (
        <React.Fragment>
            <section className="ProductList-Container">
                <Product />
                <Product />
                <Product />
            </section>
        </React.Fragment>
    )
};

export default ProductList;
