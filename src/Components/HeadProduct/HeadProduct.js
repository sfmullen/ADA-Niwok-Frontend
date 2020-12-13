import React from "react";
import './HeadProduct.scss';
{/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fasArrowLeft} from '@fortawesome/free-solid-svg-icons'*/}


const HeadProduct = ({ imagen, cantidad }) => {

    return (
        <React.Fragment>
            <figure className="product-view">
                <img className="main-product" src={imagen} />
                <figcaption className="title-product">Cantidad del producto solicitada: {cantidad}</figcaption>
            </figure>
        </React.Fragment>
    )
};

export default HeadProduct;

