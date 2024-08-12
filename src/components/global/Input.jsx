
import React from 'react';
import '../../styles/Input.css';

const Input = ({ type, placeholder }) => {
    return (
        <input type={type} placeholder={placeholder} className="custom-input" />
    );
}

export default Input;
