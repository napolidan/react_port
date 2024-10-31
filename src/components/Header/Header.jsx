// src/Header/Header.jsx
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import insta from '/insta.png';
import hamburguer from '/hamburguer.png';
import cross from '/cross.png';
import './header.css';

const Header = () => {
    useEffect(() => {
        let lastScrollTop = 0;
        let timeout = null;
        const navbar = document.getElementById('navbar');
        const scrollThreshold = 200;
        let accumulatedScroll = 0;

        const handleScroll = () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollDifference = Math.abs(scrollTop - lastScrollTop);
            accumulatedScroll += scrollDifference;

            // If the user scrolls near the top (less than 100px from the top), show the navbar
            if (scrollTop < 100) {
                navbar.style.top = "0px";
            } else if (accumulatedScroll > scrollThreshold) {
                // Else, hide/show the navbar based on scroll direction
                if (scrollTop > lastScrollTop) {
                    navbar.style.top = "-80px"; // Hide when scrolling down
                } else {
                    navbar.style.top = "0px"; // Show when scrolling up
                }
                accumulatedScroll = 0;
            }

            lastScrollTop = scrollTop;

            // Reset accumulated scroll after a pause
            if (timeout) clearTimeout(timeout);
            timeout = setTimeout(() => {
                accumulatedScroll = 0;
            }, 200);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (timeout) clearTimeout(timeout);
        };
    }, []);


    const [menuIsShown, setMenu] = useState(false);
    const changeMenuDisplay = () => setMenu(!menuIsShown);

    const navigate = useNavigate(); // Get the navigate function

    const handleClick = (path) => {
        setMenu(!menuIsShown);
        navigate(path); // Use navigate to change routes
    };

    return (
        <>
            <header id='navbar'>
                <span className='name'>
                    <ul>
                        <li className='name'>
                            <Link to="/">daniel napoli</Link>
                        </li>
                    </ul>
                </span>
                <span>
                    <ul className='index_list'>
                        <li><Link to="/works">work</Link></li>
                        <li><Link to="/about">about</Link></li>
                        <li><Link to="/about">contact</Link></li>
                    </ul>
                    <img onClick={changeMenuDisplay} className='hamburguer' src={hamburguer} alt="" />
                </span>
                <span>
                    <ul>
                        <li className='instaContainer'>
                            <a href="https://www.instagram.com/yourprofile">
                                <img className='insta' src={insta} alt="Instagram logo" />
                                Instagram
                            </a>
                        </li>
                    </ul>
                </span>
            </header>
            <span className={`menu ${menuIsShown ? "shown" : "hidden"}`}>
                <span>
                    <span className='cross'>
                        <img onClick={changeMenuDisplay} src={cross} alt="" />
                    </span>
                    <span>
                        <Link className='wixFont' to="/works" onClick={() => handleClick('/works')}>work</Link>
                        <Link className='wixFont' to="/about" onClick={() => handleClick('/about')}>about</Link>
                        <Link className='wixFont' to="/contact" onClick={() => handleClick('/contact')}>contact</Link>
                    </span>
                </span>
            </span>
        </>
    );
};

export default Header;
