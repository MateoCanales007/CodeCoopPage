import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './header.module.css';
import { useHoverColors } from '../javascript/Hover';

const Header = () => {
    const { handleMouseOver } = useHoverColors();
    const [linkColors, setLinkColors] = useState({});

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
                    <nav>
                        <ul>
                            <li>
                                <Link
                                    to="/"
                                    className={style.nav}
                                    style={{ color: linkColors['menu'] || '' }}
                                    onMouseEnter={() => handleLinkHover('menu')}
                                    onMouseLeave={() => handleLinkLeave('menu')}
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