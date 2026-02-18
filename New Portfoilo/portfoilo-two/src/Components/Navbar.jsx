import React from 'react';
import { Link } from 'react-router-dom';
import { FaBriefcase, FaSun, FaMoon } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">Soumyajit.</div>

            <div className="navbar-center">
                <Link to="#home">Home</Link>
                <Link to="#projects">Featured projects</Link>
                <Link to="#about">About me</Link>
                <Link to="#contact">Contact me</Link>
            </div>

            <div className="navbar-right">
                {/* Resume Button */}
                <a href="/resume.pdf" className="btn-resume">
                    View Resume <FaBriefcase size={14} />
                </a>

                {/* Theme Toggle */}
                <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle Theme">
                    {theme === 'light' ? <FaMoon size={18} /> : <FaSun size={18} />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
