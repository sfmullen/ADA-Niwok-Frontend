import React from "react";
import './DescrptionProductView.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fasArrowLeft} from '@fortawesome/free-solid-svg-icons'


const DescrptionProductView = () => {
    return (
        <React.Fragment>
            <HeadProduct />
            <DescriptionProduct />
            <DowloadProduct />
            <button type="button" className="btn-back"> 
                <FontAwesomeIcon icon={fasArrowLeft} />
                Volver a Productos
            </button>
        </React.Fragment>
    )
};

export default DescrptionProductView;



