// src/hooks/Hover.js
import { useEffect } from 'react';

const colors = ['#6c8af1', '#4ad2f6', '#1cff00', '#f645ff'];

function getRandomSpecificColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

export function useHoverColors() {
    useEffect(() => {
        const links = document.querySelectorAll('.nav');

        const handleMouseOver = (event) => {
            event.target.style.color = getRandomSpecificColor();
        };

        const handleMouseOut = (event) => {
            event.target.style.color = '';
        };

        links.forEach(link => {
            link.addEventListener('mouseover', handleMouseOver);
            link.addEventListener('mouseout', handleMouseOut);
        });

        // Cleanup function to remove event listeners
        return () => {
            links.forEach(link => {
                link.removeEventListener('mouseover', handleMouseOver);
                link.removeEventListener('mouseout', handleMouseOut);
            });
        };
    }, []);
}