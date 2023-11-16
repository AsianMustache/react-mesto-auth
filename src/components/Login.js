import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDeafault();
        if (email && password) {
            return;
        }
        onLogin(email, password)
            .then(() => {
                navigate.push('/')
            })
            .catch(err => console.log(err));
    }


    return(
        <div className="login">
            <h2 className="login__title">Вход</h2>
            <form onSubmit={handleSubmit}>
                <label className="login__label">
                <input type="text" id="email" name="email" placeholder="Email" className="login__input-email" value={email} onChange={e => setEmail(e.target.value)} minLength="2" maxLength="40" required />
                <div className="login__line"></div>
                </label>
                <label className="login__label">
                    <input type="password" id="password"  name="password" placeholder="Пароль" className="login__input-password" value={password} onChange={e => setPassword(e.target.value)} minLength="2" maxLength="200" required />
                    <div className="login__line"></div>
                </label>
                <button className="login__button-signin"><Link to="/sign-in" className="login__button-text">Войти</Link></button>
            </form>
        </div>
    )
}

export default Login