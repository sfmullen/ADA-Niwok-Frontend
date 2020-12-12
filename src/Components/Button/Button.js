import React from "react";
import './Button.scss';

const Button = (/* { title, town, location } */) => {
    return (
        <React.Fragment>
            <div className="btn-container" >
                <button className="btn">
                    <h4 className="btn-title">title</h4>
                    <p className="btn-text">town - location</p>
                </button>
            </div>
        </React.Fragment>
    )
};

export default Button;
