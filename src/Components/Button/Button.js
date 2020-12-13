import React from "react";
import './Button.scss';
import {
    Link
} from 'react-router-dom';

const Button = (props) => {
    return (
        <React.Fragment>

            <Link to={`/comunidad/${props.coms.numeroDeComunidad}`}>
                <div className="btn-container" >
                    <button className="btn">
                        <h4 className="btn-title">Comunidad {props.coms.numeroDeComunidad}</h4>
                        <p className="btn-text">{props.coms.localidad} - {props.coms.provincia}</p>
                    </button>
                </div>
            </Link>

        </React.Fragment>
    )
};

export default Button;
