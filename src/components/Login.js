import React from "react";
import { Link } from "react-router-dom";

function Login() {
    return(
        <div className="login">
            <h2 className="login__title">Регистрация</h2>
            <label className="login__label">
            <input type="text" id="email" name="email" placeholder="Email" className="login__input-email" minLength="2" maxLength="40" required />
            <div className="login__line"></div>
            </label>
            <label className="login__label">
                <input type="password" id="password"  name="password" placeholder="Пароль" className="login__input-password" minLength="2" maxLength="200" required />
                <div className="login__line"></div>
            </label>
            <button className="login__button-signup"><Link to="/sign-up" className="login__button-text">Зарегистрироваться</Link></button>
            <p>Уже зарегистрированы?</p>
            <Link to="/sign-in">Войти</Link>
        </div>
    )
}

export default Login