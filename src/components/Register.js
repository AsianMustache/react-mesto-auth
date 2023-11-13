import React from "react";
import { Link } from "react-router-dom";

function Register() {
    return(
        <div className="register">
            <h2 className="register__title">Регистрация</h2>
            <label className="register__label">
            <input type="text" id="email" name="email" placeholder="Email" className="register__input-email" minLength="2" maxLength="40" required />
            <div className="register__line"></div>
            </label>
            <label className="register__label">
                <input type="password" id="password"  name="password" placeholder="Пароль" className="register__input-password" minLength="2" maxLength="200" required />
                <div className="register__line"></div>
            </label>
            <button className="register__button-signup"><Link to="/sign-up" className="register__button-text">Зарегистрироваться</Link></button>
            <p className="register__text">Уже зарегистрированы? <Link to="/sign-in" className="register__login">Войти</Link></p>
            
        </div>
    )
}

export default Register;