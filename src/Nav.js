import React, { useState } from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState); 
    };

    return (
        <div className="navbar">
            <header>
                <img src='./images/Logo.png' alt="Logo" /> 
                <img src='./images/iconClick.png' alt="Menu Icon" className="menu-icon" onClick={toggleMenu} /> 
                <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                    <NavLink to="/" className="mobile-link" onClick={toggleMenu}>Home</NavLink>
                    <NavLink to="/news" className="mobile-link" onClick={toggleMenu}>News</NavLink>
                    <NavLink to="/podcasts" className="mobile-link" onClick={toggleMenu}>Podcasts</NavLink>
                    <NavLink to="/resources" className="mobile-link" onClick={toggleMenu}>Resources</NavLink>
                    <NavLink to="/contact" className="mobile-link" onClick={toggleMenu}>Contact Us</NavLink>
                </div>
                <div className="navbuttons">
                    <NavLink to="/" className="a">Home</NavLink>
                    <NavLink to="/news" className="a">News</NavLink>
                    <NavLink to="/podcasts" className="a">Podcasts</NavLink>
                    <NavLink to="/resources" className="a">Resources</NavLink>
                </div>
                <a href="#contact" className="contact-us">Contact Us</a>
            </header>
        </div>
    );
}

export default Nav;
