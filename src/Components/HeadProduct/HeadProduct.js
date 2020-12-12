import React from "react";
import './HeadProduct.scss';
{/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fasArrowLeft} from '@fortawesome/free-solid-svg-icons'*/}


const HeadProduct = () => {
    return (
        <React.Fragment>
            <figure className="product-view">
                <img className="main-product" src="https://www.enter.co/wp-content/uploads/2019/03/iStock-615837708-768x432.jpg"/>
                <figcaption className="title-product">Cantidad del producto solicitada: {'1'}</figcaption>
            </figure>
        </React.Fragment>
    )
};

export default HeadProduct;
{/*{quantity, urlProduc}*/}
/*src={urlProduc}*/
