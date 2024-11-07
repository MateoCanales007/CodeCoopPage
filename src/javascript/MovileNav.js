import { useState, useEffect } from 'react';

export const useMobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkWidth = () => {
            setIsMobile(window.innerWidth <= 768);
            if (window.innerWidth > 768) {
                setIsOpen(false);
            }
        };

        checkWidth();
        window.addEventListener('resize', checkWidth);
        return () => window.removeEventListener('resize', checkWidth);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return { isOpen, isMobile, toggleMenu };
};

export default useMobileNav;