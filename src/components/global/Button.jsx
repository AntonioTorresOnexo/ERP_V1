
import React from 'react';
import '../../styles/Button.css'; 

const Button = ({ text }) => {
    return (
        <button className="custom-button">
            {text}
        </button>
    );
}

export default Button;
