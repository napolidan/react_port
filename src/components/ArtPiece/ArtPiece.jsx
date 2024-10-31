// ArtPiece.js
import React from 'react';
import './artpiece.css';
import { Link } from 'react-router-dom'; // Import Link for navigation
import blackArrow from '../../../public/arrow_black.png';
import whiteArrow from '../../../public/arrow_white.png';
import MyImage from '../Image/MyImage';

const ArtPiece = ({ number, title, imageSrc, type, year }) => {
    return (
        <li className='art'>
            <div className='artName'>
                <div className='stickToTop'>
                    <h4>{number}</h4>
                    <h1>{title}</h1>
                    <Link to={`/works/${title}`} className='arrow-icon large'>
                        <img className='blackArrow' src={blackArrow} alt="" />
                        <img className='whiteArrow' src={whiteArrow} alt="" />
                    </Link>
                </div>
            </div>
            <div className='artImage'>
                <div>
                    <Link to={`/works/${title}`}>
                        <MyImage src={imageSrc} alt={title}/>
                        {/* <img src={`${imageSrc}`} alt={title} /> */}
                    </Link>
                </div>
            </div>
            <div className='artInfo'>
                <div className='stickToTop'>
                    <span>
                        <h3>[ Type ]</h3>
                        <h3>{type}</h3>
                    </span>
                    <span>
                        <h3>[ Year ]</h3>
                        <h3>{year}</h3>
                    </span>
                </div>
            </div>
        </li>
    );
};

export default ArtPiece;
