// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import style from './header.module.css';
import { useHoverColors } from '../Hooks/Hover';

const Header = () => {
    useHoverColors();

    return (
        <header>
            <div className={style.container}>
                <div className={style.headerContent}>
                    <div className={style.logo}>
                        <img src="https://res.cloudinary.com/dj848z4er/image/upload/v1727844898/hbqwz80utegxmrz7wkpi.png"
                            alt="CodeCoop Logo" />
                    </div>
                    <nav>
                        <ul>
                            <li><Link to="/" className={style.nav}>MENU</Link></li>
                            <li><Link to="/nosotros" className={style.nav}>NOSOTROS</Link></li>
                            <li><Link to="/planes" className={style.nav}>PLANES</Link></li>
                            <li><Link to="/contacto" className={style.nav}>CONTACTO</Link></li>
                            <li><Link to="/blog" className={style.nav}>PORTAFOLIO</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;