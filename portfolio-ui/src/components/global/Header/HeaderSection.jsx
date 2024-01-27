import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderSection.css';

const HeaderSection = () => {
    return (
        <div className="headersection">
            <h1>JERIL JON</h1>
            <nav className="nav-links">
               <Link to="/home">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/articles">Articles</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact Me</Link>
            </nav>
        </div>
    );
}

export default HeaderSection;
