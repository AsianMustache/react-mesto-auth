import React from "react";
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom'

function Header() {
    return(
    <header className="header">
            <a href="/" className="header__logo"><img src={logo} alt="Место - Россия" className="header__logo-image" /></a>
            <Link to="/sign-in" className="header__signin">Войти</Link>
        </header>
        )
}

export default Header;