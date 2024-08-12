import React from 'react';
import '../../styles/Login.css';
import Input from '../global/Input.jsx'; 
import Button from '../global/Button.jsx'; 

const Login = () => {
    return (
        <div className="container">
            <div className="left-panel">
                <img src='/image.png' alt="Aqui va el logo" className="logo"/>
                <h1>BIENVENIDO</h1>
                <div className="form-group">
                    <label>Crea tu ID de usuario</label>
                    <Input
                        type="text" 
                        placeholder="Usuario" />
                </div>
                <div className="form-group">
                    <label>Ingresa tu contraseña</label>
                    <Input 
                        type="password" 
                        placeholder="Contraseña" />
                </div>
                <a href="#" className="forgot-password">¿Olvidó su contraseña?</a>
                <p className="password-hint">
                    <b>La contraseña debe contener:</b>
                    <br />• Al menos una letra mayúscula
                    <br />• Al menos un carácter especial
                    <br />• 8 caracteres.
                </p>
                <Button 
                    text="INICIAR" />
                    <footer>© 2024 ONEXO | Todos los derechos reservados</footer>
            </div>
            
            <div className="right-panel"></div>
        </div>
    );
}

export default Login;
