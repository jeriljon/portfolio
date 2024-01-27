import React from 'react';
import './BodySection.css';

const BodySection = ({ content }) => {
    return (
        <div className="body">
            <h2>{content.title}</h2>
            <p>{content.body}</p>
        </div>
    );
}

export default BodySection;
