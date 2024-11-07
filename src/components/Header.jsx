// Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './header.module.css';
import { useHoverColors } from '../javascript/Hover';

const Header = () => {
    const { handleMouseOver } = useHoverColors();
    const [linkColors, setLinkColors] = useState({});
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLinkHover = (linkId) => {
        setLinkColors(prev => ({
            ...prev,
            [linkId]: handleMouseOver()
        }));
    };

    const handleLinkLeave = (linkId) => {
        setLinkColors(prev => ({
            ...prev,
            [linkId]: ''
        }));
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <div className={style.container}>
                <div className={style.headerContent}>
                    <div className={style.logo}>
                        <img
                            src="https://res.cloudinary.com/dj848z4er/image/upload/v1727844898/hbqwz80utegxmrz7wkpi.png"
                            alt="CodeCoop Logo"
                        />
                    </div>
                    
                    <button 
                        className={`${style.menuButton} ${isMenuOpen ? style.open : ''}`}
                        onClick={toggleMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <nav className={`${style.navMenu} ${isMenuOpen ? style.active : ''}`}>
                        <ul>
                            <li>
                                <Link
                                    to="/"
                                    className={style.nav}
                                    style={{ color: linkColors['menu'] || '' }}
                                    onMouseEnter={() => handleLinkHover('menu')}
                                    onMouseLeave={() => handleLinkLeave('menu')}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    MENU
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/nosotros"
                                    className={style.nav}
                                    style={{ color: linkColors['nosotros'] || '' }}
                                    onMouseEnter={() => handleLinkHover('nosotros')}
                                    onMouseLeave={() => handleLinkLeave('nosotros')}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    NOSOTROS
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/planes"
                                    className={style.nav}
                                    style={{ color: linkColors['planes'] || '' }}
                                    onMouseEnter={() => handleLinkHover('planes')}
                                    onMouseLeave={() => handleLinkLeave('planes')}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    PLANES
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contacto"
                                    className={style.nav}
                                    style={{ color: linkColors['contacto'] || '' }}
                                    onMouseEnter={() => handleLinkHover('contacto')}
                                    onMouseLeave={() => handleLinkLeave('contacto')}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    CONTACTO
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/blog"
                                    className={style.nav}
                                    style={{ color: linkColors['blog'] || '' }}
                                    onMouseEnter={() => handleLinkHover('blog')}
                                    onMouseLeave={() => handleLinkLeave('blog')}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    PORTAFOLIO
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;