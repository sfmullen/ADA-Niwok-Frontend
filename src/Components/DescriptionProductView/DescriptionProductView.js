import React from "react";
import './DescriptionProductView.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import HeadProduct from '../HeadProduct/HeadProduct';
import DescriptionProduct from '../DescriptionProduct/DescriptionProduct';
import DowloadProduct from '../DowloadProduct/DowloadProduct';    


const DescriptionProductView = () => {
    return (
        <React.Fragment>
            <HeadProduct />
            <section className="container-product">
                <DescriptionProduct />
                <DowloadProduct />
            </section>
            <button type="button" className="btn-back"> 
                <FontAwesomeIcon icon={faSearch} />
                Volver a Productos
            </button>
        </React.Fragment>
    )
};

export default DescriptionProductView;