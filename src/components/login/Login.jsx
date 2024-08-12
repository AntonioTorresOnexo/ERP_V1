// src/components/Login.js
import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className="container">
            <div className="left-panel">
                <img src="logo.png" alt="Logo" className="logo" />
                <h1>BIENVENIDO</h1>
                <div className="form-group">
                    <label>Crea tu ID de usuario</label>
                    <input type="text" placeholder="Usuario" />
                </div>
                <div className="form-group">
                    <label>Ingresa tu contraseña</label>
                    <input type="password" placeholder="Contraseña" />
                </div>
                <a href="#" className="forgot-password">¿Olvidó su contraseña?</a>
                <p className="password-hint">
                    La contraseña debe contener:
                    <br />• Al menos una letra mayúscula
                    <br />• Al menos un carácter especial
                    <br />• 8 caracteres.
                </p>
                <button>INICIAR</button>
            </div>
            <div className="right-panel"></div>
        </div>
    );
}

export default Login;
