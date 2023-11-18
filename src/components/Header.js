import React from "react";
import logo from '../images/logo.svg';
import { Link, useLocation } from 'react-router-dom'

function Header({loggedIn, email, onSignOut}) {
    const location = useLocation();

    const headerOption = () => {
        if (location.pathname === '/sign-in') {
            return <Link to="/sign-up" className="header__signin">Регистрация</Link>;
        } else if (location.pathname === '/sign-up') {
            return <Link to="/sign-in" className="header__signin">Войти</Link>;
        } 
        else if (!loggedIn) {
            return (
                <>
                    <p className="header__signin">{email}</p>
                    <Link to="/sign-in" className="header__signin" onClick={onSignOut}>Выйти</Link>
                </>
            )
        }
    }

    return(
        <header className="header">
        {/* {loggedIn ? (
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
        } */}
        <Link to="/" className="header__logo">
            <img src={logo} alt="Место - Россия" className="header__logo-image" />
        </Link>
        {headerOption()}
        </header>
    )
}

export default Header;