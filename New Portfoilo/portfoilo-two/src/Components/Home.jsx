import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa';
import Projects from './Projects';
import { SiMedium } from 'react-icons/si';
import './Home.css';

const Home = ({ toggleTheme }) => {
    return (
        <div className="home-wrapper">
            <section className="hero-section" id="home">
                <div className="hero-content">
                    <h1 className="hero-greeting">Hi, I am <span className="highlight-name">Soumyajit</span></h1>
                    <h2 className="hero-subtitle">
                        A seasoned <span className="highlight-role">Frontend Developer</span> transforming ideas into stunning <br />
                        digital experiences. Let’s create something amazing!
                    </h2>

                    <div className="social-icons-row">
                        <a href="https://github.com" className="social-circle"><FaGithub /></a>
                        <a href="https://medium.com" className="social-circle"><SiMedium /></a>
                        <a href="https://linkedin.com" className="social-circle"><FaLinkedinIn /></a>
                        <a href="https://twitter.com" className="social-circle"><FaTwitter /></a>
                    </div>
                </div>

                {/* Background decorative elements could go here */}
                <div className="bg-gradient-orb"></div>
            </section>

            {/* Projects Section */}
            <Projects />

        </div>
    );
};

export default Home;
