import React from "react";
import './Product.scss';


const Product = ({ productName, urlProduc, quantity }) => {
    return (
        <React.Fragment>
            <figure className="product-container">
                <img src={urlProduc} className="img-product" />
                <div className="quantity-product">
                    <p>Cantidad:{quantity}</p>
                </div>
                <figcaption className="decription-product">{productName}</figcaption>
            </figure>
        </React.Fragment>
    )
};

export default Product;
