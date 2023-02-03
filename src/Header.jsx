import logo from '../src/img/logo.png';
import React from 'react';

const { useState } = React;
function Nav () {
    const [visible, setVisible] = useState(true);
    const toggleVisibility = () => setVisible(!visible);

    return (
        <nav className= "main__nav nav">
            <div className= "nav__logo logo">
                <img className= "logo__image" src={logo} alt= "logo"/>
            </div>
            <div className="nav__burger burger" onClick={toggleVisibility} role= "presentation">
                <span className="burger__line"></span>
                <span className="burger__line"></span>
                <span className="burger__line"></span>
            </div>
            {!visible && (
            <div className="nav__menu menu">
            <ul className="menu__list">
                <li className="menu__item">
                    <a href="http://" className="menu__link">
                        Главное
                    </a>
                </li>
                <li className="menu__item">
                    <a href="http://" className="menu__link">
                        Мой плейлист
                    </a>
                </li>
                <li className="menu__item">
                    <a href="http://" className="menu__link">
                        Войти
                    </a>
                </li>
            </ul>
        </div>
        )}

        </nav>
    )
};

export default Nav;