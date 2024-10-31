import React from 'react';
import './about.css';  // Ensure this CSS file is created for styling
import profilePic from '/profilepic.webp';

const About = () => {
    return (
        <>
            <section className="about">
                <h1 className='mainTitleAbout soraFont'>ABOUT ME</h1>
            </section>
            <section className="about">
                <h2 className='description soraFont'>DIGITAL ARTIST AND WEB DEVELOPER BASED IN PANAMA</h2>
            </section>
            <section className="about pictureSection">
                <div></div>
                <div>
                    <img className='profilepic' src={profilePic} alt="" />
                    <p className='story arialFont'>
                        graduated in Software Engineering I have a deep passion for digital and web design. I merge technical skill with creative vision to deliver innovative and visually captivating solutions, transforming ideas into compelling digital experiences.
                    </p>
                </div>
                <div></div>
            </section>
            <section className="about">
                <h1 className='hello soraFont'>SAY HELLO</h1>
            </section>
            <section className="about info mail">
                <div>
                    <h5>[ Email ]</h5>
                    <h3>daniel.napolip@gmail.com</h3>
                </div>
            </section>
            <section className="about info instagram">
                <div>
                    <h5>[ Instagram ]</h5>
                    <h3>@napzzzart</h3>
                </div>
            </section>
            <section className="about info phone">
                <div>
                    <h5>[ Phone ]</h5>
                    <h3>+507 61156670</h3>
                </div>
            </section>
        </>
    );
};

export default About;
