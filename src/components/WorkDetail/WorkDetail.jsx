import React from 'react';
import { useParams, Link } from 'react-router-dom';
import artPieces from '../../artData/artPieces';  // Import the artwork data
import './workdetail.css';  // Ensure this CSS file is created for styling
import blackArrow from '../../../public/arrow_black.png';
import whiteArrow from '../../../public/arrow_white.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const WorkDetail = () => {

  const { title } = useParams(); // Get the artwork title from the URL
  const currentIndex = artPieces.findIndex((piece) => piece.title === title); // Find the index of the current artwork

  if (currentIndex === -1) {
    return <h2>Artwork not found</h2>;
  }

  const art = artPieces[currentIndex]; // Get the current artwork data

  // Calculate previous and next indexes
  const previousIndex = currentIndex - 1;
  const nextIndex = currentIndex + 1;

  const previousArt = artPieces[previousIndex];
  const nextArt = artPieces[nextIndex];

  return (
    <div className="artwork-detail">
      <section className='workDetail'>
        <h1 className='mainTitle wixFont'>{art.title}</h1>
      </section>
      <section className='description'>
        <span>
          <h3 className='wixFont'>[ Type ]</h3>
          <h3 className='wixFont'>{art.type}</h3>
        </span>
        <span className='artImage'>
          <h3 className='wixFont'>
            [ Description ]
          </h3>
          <h3 className='wixFont'>
            {art.description}
          </h3>
          <div>
            <img src={art.coverImage} alt={art.title} />
          </div>
        </span>
        <span>
          <h3 className='wixFont'>[ Year ]</h3>
          <h3 className='wixFont'>Year: {art.year}</h3>
        </span>
      </section>
      <section className='multiGallery'>
        {art.galleryImages.map((imgSrc, index) => (
          <img className='wixFont' key={index} src={imgSrc} alt={`${art.title} gallery image ${index + 1}`} />
        ))}
      </section>
      <section className='projectSkipper'>
        {/* Disable 'Previous Project' if at the beginning */}
        <Link to={previousArt ? `/works/${previousArt.title}` : "#"}
          className={previousIndex < 0 ? 'disabled' : ''}
          onClick={(e) => previousIndex < 0 && e.preventDefault()}>
          <span>
            <img className='arrowWhite' src={whiteArrow} alt="Previous Project" />
            <img className='arrowBlack' src={blackArrow} alt="Previous Project" />
          </span>
          <h3 className='wixFont'>Previous Project</h3>
        </Link>

        {/* Disable 'Next Project' if at the end */}
        <Link to={nextArt ? `/works/${nextArt.title}` : "#"}
          className={nextIndex >= artPieces.length ? 'disabled' : ''}
          onClick={(e) => nextIndex >= artPieces.length && e.preventDefault()}>
          <span>
            <img className='arrowWhite' src={whiteArrow} alt="Next Project" />
            <img className='arrowBlack' src={blackArrow} alt="Next Project" />
          </span>
          <h3 className='wixFont'>Next Project</h3>
        </Link>
      </section>
    </div>
  );
};

export default WorkDetail;
