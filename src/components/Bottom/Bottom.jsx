import React from 'react';
import './bottom.css';
import { animateScroll as scroll } from 'react-scroll';
import { Link, useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import github_black from '/gh_b.png';
import insta_black from '/insta_b.png';
import linkedin_black from '/lin_b.png';
import cv_black from '/cv_b.png';
import github_white from '/gh_w.png';
import insta_white from '/insta_w.png';
import linkedin_white from '/lin_w.png';
import cv_white from '/cv_w.png';


const BottomSection = ({ handleClick, altColor }) => {

  const navigate = useNavigate();

  const smoothScrollToTop = () => {
    const scrollHeight = window.pageYOffset;
    const scrollStep = scrollHeight / 15; // Adjust this value for smoothness and speed

    const scroll = () => {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -scrollStep);
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  };

  return (
    <section className={`bottom ${altColor ? 'works-page' : ''}`}>
      <section className='lines'>
        <span className='disappear'></span>
        <span></span>
        <span></span>
      </section>
      <h1 onClick={() => scroll.scrollToTop({ duration: 1300, smooth: 'easeInOutQuad' })}
        className='bottomTitle soraFont'>daniel napoli</h1>
      <div className='bottomLayout'>
        <div className='column left'>
          <span>
            <Link className='wixFont' to="/works">work</Link>
            <Link className='wixFont' to="/about">about</Link>
            <Link
              className='wixFont'
              to="/about"
              onClick={(e) => {
                e.preventDefault(); // Prevent default navigation
                navigate('/about'); // Navigate to the "about" page
                setTimeout(() => {
                  const phoneSection = document.getElementById('hello'); // Ensure the element exists on the "about" page
                  phoneSection?.scrollIntoView({ behavior: 'smooth' });
                }, 100); // Adjust the delay as needed
              }}
            >
              contact
            </Link>
          </span>

        </div>
        <div className='column middle'>
          <Link
            className='wixFont'
            to="/about"
            onClick={(e) => {
              e.preventDefault(); // Prevent default navigation
              navigate('/about'); // Navigate to the "about" page
              setTimeout(() => {
                const phoneSection = document.getElementById('hello'); // Ensure the element exists on the "about" page
                phoneSection?.scrollIntoView({ behavior: 'smooth' });
              }, 100); // Adjust the delay as needed
            }}
          >
            <h1 className='wixFont'>Say Hi</h1>          </Link>
        </div>
        <div className='column right'>
          <span>
            <div>
              <a href="/CV-DNapoli (NL).pdf" download>
                <img className='cv' src={altColor ? cv_black : cv_white} alt="Cv download logo" />
              </a>
              <a href="https://www.linkedin.com/in/napolidan/" target="_blank" rel="noopener noreferrer">
                <img className='linkedin' src={altColor ? linkedin_black : linkedin_white} alt="Linkedin logo" />
              </a>
              <a href="https://github.com/napolidan" target="_blank" rel="noopener noreferrer">
                <img className='github' src={altColor ? github_black : github_white} alt="Github logo" />
              </a>
              <a href="https://www.instagram.com/napzzzart" target="_blank" rel="noopener noreferrer">
                <img className='insta' src={altColor ? insta_black : insta_white} alt="Instagram logo" />
              </a>
            </div>
            <span></span>
            <h3 className='wixFont'>© 2024 by Daniel Napoli.</h3>
          </span>
        </div>
      </div>
    </section>
  );
};

export default BottomSection;
