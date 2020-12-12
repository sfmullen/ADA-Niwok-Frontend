import React from "react";
import './DescriptionProductView.scss';
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fasArrowLeft } from '@fortawesome/free-solid-svg-icons' */


const DescriptionProductView = () => {
    return (
        <React.Fragment>
            <HeadProduct />
            <DescriptionProduct />
            <DowloadProduct />
            <button type="button" className="btn-back">
                {/*  <FontAwesomeIcon icon={fasArrowLeft} /> */}
                Volver a Productos
            </button>
        </React.Fragment>
    )
};

export default DescriptionProductView;



