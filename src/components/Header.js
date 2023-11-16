import React from "react";
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom'

function Header({loggedIn}) {
    return(
        <header className="header">
        {loggedIn ? (
            <>
                <Link to="/" className="header__logo"><img src={logo} alt="Место - Россия" className="header__logo-image" /></Link>
                <Link to="/sign-in" className="header__signin">Войти</Link>
            </>
            ) : (
            <>
                <Link to="/" className="header__logo"><img src={logo} alt="Место - Россия" className="header__logo-image" /></Link>
                <Link to="/sign-up" className="header__signin">Регистрация</Link>
            </>
            )
        }
        </header>
    )
}

export default Header;