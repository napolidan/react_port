import React from 'react';
import './bottom.css';
import { animateScroll as scroll } from 'react-scroll';

const BottomSection = ({ handleClick, altColor }) => {

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
            <a className='wixFont' href="/works">work</a>
            <a className='wixFont' href="/about">about</a>
            <a className='wixFont' href="/about">contact</a>
          </span>
        </div>
        <div className='column middle'>
          <a href="/about" onClick={handleClick}>
            <h1 className='wixFont'>Say Hi</h1>
          </a>
        </div>
        <div className='column right'>
          <span>
            <span></span>
            <h3 className='wixFont'>© 2024 by Daniel Napoli.</h3>
          </span>
        </div>
      </div>
    </section>
  );
};

export default BottomSection;
