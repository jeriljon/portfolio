import React from 'react';
import HeaderSection from '../global/Header/HeaderSection';
import BodySection from '../global/Body/BodySection'; 
import FooterSection from '../global/Footer/FooterSection';
import './Articles.css';

const articlesContent = {
    title: "Articles",
    body: "Coming soon..."
};

const Articles = () => {
    return (
        <div className="articles-page">
            <HeaderSection />
            <BodySection content={articlesContent} />
            <FooterSection />
        </div>
    );
}

export default Articles;
