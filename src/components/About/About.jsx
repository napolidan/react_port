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
                <h2 className='description soraFont'>DIGITAL ARTIST AND WEB DEVELOPER BASED IN THE NETHERLANDS</h2>
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
            <section className="about" id='hello'>
                <h1 className='hello soraFont'>SAY HELLO</h1>
            </section>
            <section className="about info mail">
                <div>
                    <h5>[ Email ]</h5>
                    <h3>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=daniel.napolip@gmail.com&su=Contact%20from%20the%20website&body=Hello%2C%0A%0A%20I%20would%20like%20to%20get%20in%20touch%20to%20explore%20possible%20job%20opportunities.%0A%0AThank%20you%20for%20your%20time%2C%0A%0A%20Best%20regards%2C%0A%20[Your%20name]" target="_blank" rel="noopener noreferrer">
                            daniel.napolip@gmail.com
                        </a>
                    </h3>
                </div>
            </section>
            <section className="about info instagram">
                <div>
                    <h5>[ Instagram ]</h5>
                    <a
                        href="https://www.instagram.com/napzzzart"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h3>@napzzzart</h3>
                    </a>

                </div>
            </section>
            <section className="about info phone">
                <div>
                    <h5>[ Phone ]</h5>
                    <h3>+31 616260667</h3>
                </div>
            </section>
        </>
    );
};

export default About;
