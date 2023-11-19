import React from "react";
import logo from '../images/logo.svg';
import { Link, useLocation } from 'react-router-dom'

function Header({loggedIn, userEmail, onSignOut}) {
    const location = useLocation();

    // const headerOption = () => {
    //     if (location.pathname === '/sign-in') {
    //         return <Link to="/sign-up" className="header__signin">Регистрация</Link>;
    //     } else if (location.pathname === '/sign-up') {
    //         return <Link to="/sign-in" className="header__signin">Войти</Link>;
    //     } 
    //     else if (!loggedIn) {
    //         return (
    //             <>
    //                 <Link to="#" className="header__signin" value={email}>{email}</Link>
    //                 <Link to="/sign-in" className="header__signin" onClick={onSignOut}>Выйти</Link>
    //             </>
    //         )
    //     }
    // }

    return(
        <header className="header">
            <Link to="/" className="header__logo">
                <img src={logo} alt="Место - Россия" className="header__logo-image" />
            </Link>
            {/* <p className="header__signin">{email}</p>
            {loggedIn && <Link to="/sign-in" className="header__signin" onClick={onSignOut}>Выйти</Link>}
            
            {location.pathname.includes('sign-in') && <Link to="/sign-up" className="header__signin">Регистрация</Link>}
            {location.pathname.includes('sign-up') && <Link to="/sign-in" className="header__signin">Войти</Link>} */}
            {loggedIn ? (
                <>
                    <p className="header__signin">{userEmail}</p>
                    <Link to="/sign-in" className="header__signin" onClick={onSignOut}>Выйти</Link>
                </>
            ) : (
                <>
                    {location.pathname.includes('sign-in') && <Link to="/sign-up" className="header__signin">Регистрация</Link>}
                    {location.pathname.includes('sign-up') && <Link to="/sign-in" className="header__signin">Войти</Link>}
                </>
            )}
            
        </header>
    )
}

export default Header;