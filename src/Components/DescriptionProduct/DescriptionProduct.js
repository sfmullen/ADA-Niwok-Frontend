import React from "react";
import './DescriptionProduct.scss';
{/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fasArrowLeft} from '@fortawesome/free-solid-svg-icons'*/}


const DescriptionProduct = () => {
    return (
        <React.Fragment>
            <section>
                <div className="product-name">
                    <h1>{'productName'}</h1>
                    <h2><i>{'producSpanishtName'}</i></h2>
                </div>
                <div className="product-descrption">
                    <h3 className="product-descrption-title">¿QUÉ ES? ¿PARA QUÉ SE USA?</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s {'prodcutDescription'}</p>
                </div>
                <div className="product-photo-descrption">
                    <h3 className="product-descrption-title">GUÍA DE MEDIDAS Y FORMAS</h3>
                    <div className="product-size">
                        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/micro-cactus-flores-blancas-1535448793.jpg?crop=1xw:1xh;center,top&resize=480:*" />
                        <ul className="detail-size">
                            <li><b>MEDIDAS</b></li>
                            <li>Ancho: {'widthSize'}</li>
                            <li>Largo: {'longSize'}</li>
                            <li>Alto: {'highSize'}</li>
                        </ul>
                    </div> 
                        <p>En lo posible entregar antes de: <b>{'days'}</b> días</p> 
                        {/*hacer una fórmula para restar días*/}  
                </div>
            </section>
 
        </React.Fragment>
    )
};

export default DescriptionProduct;


/*{productName, producSpanishtName, prodcutDescription, urlDescription, longSize, widthSize, highSize, days}*/