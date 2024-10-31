// src/CustomLink.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CustomLink = ({ to, children }) => {
    const history = useNavigate();

    const handleClick = () => {
        console.log('Function triggered before redirecting to:', to);
        history.push(to);
    };

    return (
        <span onClick={handleClick} style={{ cursor: 'pointer' }}>
            {children}
        </span>
    );
};

export default CustomLink;
