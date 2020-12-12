import React from "react";
import './Button.scss';

const Button = (props) => {
    return (
        <React.Fragment>
            <div className="btn-container" >
                <button className="btn">
                    <h4 className="btn-title">Comunidad {props.coms.numeroDeComunidad}</h4>
                    <p className="btn-text">{props.coms.localidad} - {props.coms.provincia}</p>
                </button>
            </div>
        </React.Fragment>
    )
};

export default Button;
