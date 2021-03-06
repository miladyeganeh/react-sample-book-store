import React from 'react';
import './index.scss';

const Button = props => {
    function onClick(e) {
        props.onClick && props.onClick(e)
    }

    return (
        <button type="submit" className="btn btn-primary" onClick={onClick}>{props.children || "Submit"}</button>
    )
}

export default Button;
