// Gallery.js
import React from 'react';
import ArtPiece from '../ArtPiece/ArtPiece.jsx';
import artPieces from '../../artData/artPieces.js';  // Import the centralized data
import transition from '../../transition.jsx';

const Gallery = () => {

  return (
    <section className="gallery">
      <section className='lines'>
        <span></span>
        <span></span>
        <span></span>
      </section>
      <ol>
        {artPieces.map((art) => (
          <ArtPiece 
            key={art.number}
            number={art.number}
            title={art.title}
            imageSrc={art.coverImage}
            type={art.type}
            year={art.year}
          />
        ))}
      </ol>
    </section>
  );
};

export default Gallery;
