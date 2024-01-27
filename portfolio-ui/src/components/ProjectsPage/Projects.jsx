import React from 'react';
import HeaderSection from '../global/Header/HeaderSection';
import BodySection from '../global/Body/BodySection';
import FooterSection from '../global/Footer/FooterSection';

const projectsContent = {
    title: "Projects",
    body: "Coming soon..."
};

const Projects = () => {
    return (
        <div className="projects-page">
            <HeaderSection />
            <BodySection content={projectsContent} />
            <FooterSection />
        </div>
    );
}

export default Projects;
