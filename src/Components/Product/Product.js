import React from "react";
import './Product.scss';
import foto from './img/foto.png';


const Product = ({ title, foto, cantidad }) => {
    return (
        <React.Fragment>
            <figure className="product-container">
                <img src={foto} className="img-product" />
                <div className="quantity-product">
                    <p>Cantidad:{cantidad}</p>
                </div>
                <figcaption className="decription-product">{title}</figcaption>
            </figure>
        </React.Fragment>
    )
};

export default Product;
