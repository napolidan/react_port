import React from 'react';
import ArtWork from '../ArtWork/ArtWork.jsx'; // Import the ArtWork component
import artPieces from '../../artData/artPieces.js';  // Use the centralized data
import './works.css';  // Ensure this CSS file is created for styling

const Works = () => {
    return (
        <>
            <section className="works">
                <h1 className='mainTitle soraFont'>INDEX</h1>
                <ol className="worksGallery">
                    {artPieces.map((art) => (
                        <ArtWork
                            key={art.number}
                            number={art.number}
                            title={art.title}
                            type={art.type}
                            year={art.year}
                            imageSrc={art.coverImage}
                            description={art.description}
                        />
                    ))}
                </ol>
            </section>
        </>
    );
};

export default Works;
