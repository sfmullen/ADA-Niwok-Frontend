import React from "react";
import niwok from './img/logoNiwok.png';
import './Modal.scss';


const Modal = () => {
    setTimeout(() => {
        document.getElementById('loader').className = 'loader hidden';
    }, 3000)

    return (
        <React.Fragment>
            <div className="loader" id={'loader'}>
                <div className="overlay"></div>
                <section className="modal">
                    <header>
                        <p>Bienvenida a</p>
                        <h2>AMAR LA TRAMA</h2>
                        <p>Tejiendo redes</p>
                        <img src={niwok}/>
                    </header>
                </section>
            </div>
        </React.Fragment>
    )
};

export default Modal;
