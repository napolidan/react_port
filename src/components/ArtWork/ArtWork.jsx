// ArtWork.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import blackArrow from '/arrow_black.png';
import whiteArrow from '/arrow_white.png';

const ArtWork = ({ number, title, type, year, imageSrc }) => {

    return (
        <li>
            <span className="info">
                <h2>{number}</h2>
                <h1>{title}</h1>
                <Link to={`/works/${title}`} className='arrow-icon large'>
                    <img className='blackArrow' src={blackArrow} alt="" />
                    <img className='whiteArrow' src={whiteArrow} alt="" />
                </Link>
            </span>
            <span className="image">
                <span>
                    <Link to={`/works/${title}`}>
                        <img src={imageSrc} alt={title} />
                    </Link>
                    <Link to={`/works/${title}`} className='arrow-icon small'>
                        <img className='blackArrow arrow' src={blackArrow} alt="" />
                        <img className='whiteArrow arrow' src={whiteArrow} alt="" />
                    </Link>
                </span>
            </span>
            <span className="type">
                <h2>[ Type ]</h2>
                <h2>{type}</h2>
            </span>
            <span className="year">
                <h2>[ Year ]</h2>
                <h2>{year}</h2>
            </span>
        </li>
    );
};

export default ArtWork;
