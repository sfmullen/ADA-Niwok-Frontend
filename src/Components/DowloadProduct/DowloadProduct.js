import React from "react";
import './DowloadProduct.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'


const DowloadProduct = () => {
    return (
        <React.Fragment>
            <section className="dowload">
                <p><strong>¿Querés tener las imagenes, videos y descripción de este producto?</strong></p>
                <button type="button"><FontAwesomeIcon className="icon-arrow" icon={faDownload} />Descargar en mi celular</button>
            </section>
        </React.Fragment>
    )
};

export default DowloadProduct;
