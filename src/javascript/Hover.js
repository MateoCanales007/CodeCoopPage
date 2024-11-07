import { useState } from 'react';

const colors = ['#6c8af1', '#4ad2f6', '#1cff00', '#f645ff'];

const getRandomSpecificColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
};

export const useHoverColors = () => {
    const [hoveredLink, setHoveredLink] = useState(null);

    const handleMouseOver = () => {
        const color = getRandomSpecificColor();
        return color;
    };

    return { handleMouseOver };
};