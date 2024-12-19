import React from 'react';
import './hero.css';

const Hero = () => {

  return (
    <section className='hero'>
      <section className='lines'>
        <span></span>
        <span></span>
        <span></span>
      </section>
      <h1 className='mainTitle soraFont'>daniel napoli</h1>
      <section className='slogan'>
        <span>
          <p className='expertise wixFont'>
            self-taught with expertise at the intersection of product, brand, and technology.
          </p>
        </span>
        <span>
          <h2 className='occupation wixFont'>
            DIGITAL ARTIST<br />
            AND WEB DEVELOPER<br />
            BASED IN THE NETHERLANDS
          </h2>
        </span>
        <span>
          <p className='selected wixFont'>
            © selected works<br />
            08 — 35
          </p>
        </span>
      </section>
    </section>
  );
};

export default Hero;
