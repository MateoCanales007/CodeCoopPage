import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './header.module.css';
import { useHoverColors } from '../javascript/Hover';
import AuthModal from './AuthModal';
import { useAuth } from '../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Header = () => {
    const { currentUser } = useAuth();
    const { handleMouseOver } = useHoverColors();
    const [linkColors, setLinkColors] = useState({});
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [buttonColorIndex, setButtonColorIndex] = useState(0); // Índice del color actual

    const colors = ['#6c8af1', '#4ad2f6', '#1cff00', '#f645ff'];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setButtonColorIndex(prevIndex => (prevIndex + 1) % colors.length); // Ciclo a través de los colores
        }, 1000);

        return () => clearInterval(intervalId); // Limpia el intervalo al desmontar
    }, [colors]);

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

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setIsMenuOpen(false); // Cierra el menú al hacer logout
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
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
                            {/* Enlaces de navegación */}
                            {['/', '/nosotros', '/planes', '/contacto', '/blog'].map((path, index) => (
                                <li key={index}>
                                    <Link
                                        to={path}
                                        className={style.nav}
                                        style={{ color: linkColors[path] || '' }}
                                        onMouseEnter={() => handleLinkHover(path)}
                                        onMouseLeave={() => handleLinkLeave(path)}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {path === '/' ? 'MENU' : path.slice(1).toUpperCase()}
                                    </Link>
                                </li>
                            ))}
                            {/* Botón de autenticación */}
                            <li>
                                {currentUser ? (
                                    <button
                                        className={`${style.nav} ${style.buttonLogin}`} // Añade la clase buttonLogin
                                        onClick={handleLogout}
                                    >
                                        CERRAR SESIÓN
                                    </button>
                                ) : (
                                    <button
                                        className={`${style.nav} ${style.buttonLogin}`} // Añade la clase buttonLogin
                                        onClick={() => setIsModalOpen(true)}
                                        style={{ backgroundColor: colors[buttonColorIndex] }} // Aplica el color dinámico
                                    >
                                        LOGIN
                                    </button>
                                )}
                            </li>
                        </ul>
                    </nav>

                    {/* Modal de autenticación */}
                    <AuthModal 
                        isOpen={isModalOpen} 
                        onClose={() => setIsModalOpen(false)} 
                    />
                </div>
            </div>
        </header>
    );
}

export default Header;