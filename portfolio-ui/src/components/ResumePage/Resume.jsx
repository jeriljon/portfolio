import React from 'react';
import Header from '../global/Header/HeaderSection';
import BodySection from '../global/Body/BodySection'; 
import Footer from '../global/Footer/FooterSection';
import './Resume.css';

const resumePageContent = {
    title: "Resume",
    body: "Coming soon"
};

const Resume = () => {
    return (
        <div className="resume-page">
            <Header />
            <BodySection content={resumePageContent} />
            <Footer />
        </div>
    );
}

export default Resume;
