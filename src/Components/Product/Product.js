import React from "react";
import './Product.scss';

const Product = ({ title, foto, cantidad }) => {
    return (
        <React.Fragment>
            <div className="product-container">
                <div className="product-details">
                    <div className="quantity-product">
                            <p>Cantidad:{cantidad}</p> 
                    </div>
                    <div className="product-figure">
                        <img src={foto} className="img-product" />
                    </div>
                    
                    <div className="decription-product">{title}</div>
                </div>
            </div>
        </React.Fragment>
    )
};

// const Product = ({ title, foto, cantidad }) => {
//     return (
//         <React.Fragment>
//             <div className="product-container">
//                 <div className="product-details">
//                     <div className="product-figure">
//                         <img src={foto} className="img-product" />
//                     </div>
//                     <div className="quantity-product">
//                             <p>Cantidad:{cantidad}</p> 
//                     </div>
//                     <div className="decription-product">{title}</div>
//                 </div>
//             </div>
//         </React.Fragment>
//     )
// };



export default Product;
